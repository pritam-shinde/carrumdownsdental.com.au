import { Box, Grid } from '@mui/material'
import { CustomCard } from '../Components'
import React, { useState, useEffect } from 'react'
import WPAPI from 'wpapi'

const ServiceBlog = ({ category }) => {
    const [group, setGroup] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const wp = new WPAPI({
        endpoint: 'https://carrumdownsdental.com.au/wp-json/',
    });


    const fetchCategory = async (category) => {
        let cat = await wp.categories().slug(category).get();
        setGroup(cat);
    }

    useEffect(() => {
        fetchCategory(category)
    }, [category]);

    const fetchPostByCategory = async () => {
        let posts = await wp.posts().param({ categories: [group[0].id] }).embed().get()
        setBlogs(posts)
    }

    useEffect(() => {
        if (group) { fetchPostByCategory() }
    }, [group])
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <>
            <Box>
                <Grid container spacing={3}>
                {
                    blogs ? blogs.slice(0,2).map(blog => <Grid item xs={12} md={6}>
                        <CustomCard cardCls="shadow border-0 m-3" title={blog.title.rendered} para={`${blog.excerpt.rendered.split(" ").slice(0, 15).join(" ")} [...]`} featureImage={blog ? blog._embedded ? blog._embedded[`wp:featuredmedia`] ? blog._embedded[`wp:featuredmedia`][0] ? blog._embedded[`wp:featuredmedia`][0].source_url ? blog._embedded[`wp:featuredmedia`][0].source_url : null : null : null : null : null} date={`${months[Number(blog.date.split("T")[0].split("-")[1]) - 1]} ${blog.date.split("T")[0].split("-")[2]}, ${blog.date.split("T")[0].split("-")[0]}`} link={`/${blog.slug}/`} />
                    </Grid>) : null
                }
                </Grid>
            </Box>
        </>
    )
}

export default ServiceBlog