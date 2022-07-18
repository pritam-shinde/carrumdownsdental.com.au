import React, { useState, useEffect } from 'react'
import WPAPI from 'wpapi';
import { Container, Grid, Box } from '@mui/material'
import { CustomCard, SectionalHeading } from '../../../../Components/Components';
import './sass/Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const wp = new WPAPI({
        endpoint: 'https://pritams3.sg-host.com/wp-json/',
    });

    const fetchBlogs = async () => {
        const posts = await wp.posts().embed().perPage(3).page(1).get();
        setBlogs(posts)
    }

    useEffect(() => {
        fetchBlogs()
    });

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <>
            <section id="homeBlog">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box pt={5} pb={3}>
                                <SectionalHeading title="Recent Articles" color1={`var(--light-green)`} align1="center" />
                                <Box my={5}>
                                    <Grid container spacing={3}>
                                        {
                                            blogs.map(blog => {
                                                return <Grid item xs={12} sm={4} key={blog.id}>
                                                    <CustomCard cardCls="shadow border-0" title={blog.title.rendered} para={`${blog.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} featureImage={blog ? blog._embedded ? blog._embedded[`wp:featuredmedia`] ? blog._embedded[`wp:featuredmedia`][0] ? blog._embedded[`wp:featuredmedia`][0].source_url ? blog._embedded[`wp:featuredmedia`][0].source_url : null : null : null : null : null} sec="home/blog" date={`${months[Number(blog.date.split("T")[0].split("-")[1]) - 1]} ${blog.date.split("T")[0].split("-")[2]}, ${blog.date.split("T")[0].split("-")[0]}`} link={`/${blog.slug}/`} anchor={null} />
                                                </Grid>
                                            })
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Blogs