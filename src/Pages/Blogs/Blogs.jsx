import React, { useEffect, useState } from 'react'
import WPAPI from 'wpapi'
import { Container, Grid, Box, LinearProgress, Typography } from '@mui/material'
import { SimpleHero, CustomCard, BlueBtn } from '../../Components/Components'
import { XMasonry, XBlock } from 'react-xmasonry'
import { RecentPostNCat } from './Components/Components';
import { Helmet } from 'react-helmet'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([])
  const wp = new WPAPI({
    endpoint: 'https://pritams3.sg-host.com/wp-json/',
  });

  const fetchBlogs = async () => {
    const posts = await wp.posts().embed().page(1).auth({ username: 'dentistadmin', password: 'hOzrbY#mnldy&)n%' }).get();
    const category = await wp.categories().embed().perPage(100).page(1).auth({ username: 'dentistadmin', password: 'hOzrbY#mnldy&)n%' }).get();
    setBlogs(posts);
    setCategories(category)
  }

  useEffect(() => {
    fetchBlogs()
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const breadcrumb = [{ id: "breadcrumb-page1.1", link: null, text: "BLOG" }]

  console.log(blogs)

  return (
    <>
      
        <Helmet>
          <meta name="title" content="Blog | Carrum Downs Dental Group | Dentist Carrum Downs" />
          <meta name="description" content="Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems." />
          <title>Blog | Carrum Downs Dental Group | Dentist Carrum Downs</title>
          <link rel="canonical" href="/blog/" />
          <meta name="robots" content="index" />
        </Helmet>
          <SimpleHero pageTitle="Blog" breadCrumb={breadcrumb} />
          {blogs.length > 0 ?<main>
            <section>
              <Container maxWidth="xxl">
                <Grid container>
                  <Grid item xs={11} md={10} className="mx-auto">
                    <Box py={5}>
                      <Grid container spacing={10} >
                        <Grid item xs={12} md={8}>
                          {
                            blogs ? <Box>
                              <Box>
                                <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                                  {
                                    blogs ? blogs.map(blog => <XBlock>
                                      <CustomCard cardCls="shadow border-0 m-3" title={blog.title.rendered} para={`${blog.excerpt.rendered.split(" ").slice(0, 15).join(" ")} [...]`} featureImage={blog ? blog._embedded ? blog._embedded[`wp:featuredmedia`] ? blog._embedded[`wp:featuredmedia`][0] ? blog._embedded[`wp:featuredmedia`][0].source_url ? blog._embedded[`wp:featuredmedia`][0].source_url : null : null : null : null : null} date={`${months[Number(blog.date.split("T")[0].split("-")[1]) - 1]} ${blog.date.split("T")[0].split("-")[2]}, ${blog.date.split("T")[0].split("-")[0]}`} link={`/${blog.slug}/`} anchor={null} />
                                    </XBlock>) : "Loading..."
                                  }
                                </XMasonry>
                              </Box>
                              <Box py={4} className="d-flex justify-content-center align-items-center">
                                <Box>
                                  {
                                    blogs ? blogs._paging ?  <BlueBtn functionality={true} link={`/blog/page/2/`} title="Next" cls="mr-3"  /> : null : null 
                                  }
                                </Box>
                              </Box>
                            </Box> : "Loading"
                          }
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <RecentPostNCat />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </section>
          </main> : <Container style={{ height: "40vh" }} className="d-flex justify-content-center align-items-center">
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
            <Typography variant="h4" align="center">Please Wait...</Typography>
          </Box>
        </Container>
      }
    </>
  )
}

export default Blogs