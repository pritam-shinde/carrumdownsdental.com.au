import React, { useState, useEffect } from 'react';
import WPAPI from 'wpapi';
import { useParams } from 'react-router-dom'
import { SimpleHero, CustomCard, BlueBtn } from '../../../Components/Components'
import { Container, Grid, Box } from '@mui/material';
import { XMasonry, XBlock } from 'react-xmasonry';
import { Helmet } from 'react-helmet';
import { RecentPostNCat } from '../Components/Components';

const MultipleBlogPage = () => {
  const { pageNo } = useParams()
  const [blogs, setBlogs] = useState([])
  const wp = new WPAPI({
    endpoint: 'https://carrumdownsdental.com.au/wp-json/',
  });

  const fetchBlogs = async (pageNo) => {
    const posts = await wp.posts().embed().page(pageNo);
    setBlogs(posts)
  }

  useEffect(() => {
    fetchBlogs(pageNo)
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const breadcrumb = [{ id: "breadcrumb-page1.1", link: null, text: "BLOG" }]

  return (
    <>
    <Helmet>
        <meta name="title" content={`Blog | Carrum Downs Dental Group | Dentist Carrum Downs ${pageNo ? pageNo : null}`} />
        <meta name="description" content={`Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems ${pageNo ? pageNo : null}`} />
        <title>{`Blog | Carrum Downs Dental Group | Dentist Carrum Downs ${pageNo ? pageNo : null}`} </title>
      </Helmet>
      <SimpleHero pageTitle="Blog" breadCrumb={breadcrumb} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={11} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={10} >
                    <Grid item xs={12} lg={8} >
                      {
                        blogs ? <Box>
                          <Box>
                            <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                              {
                                blogs.length > 0 ? blogs.map(blog => <XBlock>
                                  <CustomCard cardCls="shadow border-0 m-3" title={blog.title.rendered} para={`${blog.excerpt.rendered.split(" ").slice(0, 15).join(" ")} [...]`} featureImage={blog ? blog._embedded ? blog._embedded[`wp:featuredmedia`] ? blog._embedded[`wp:featuredmedia`][0] ? blog._embedded[`wp:featuredmedia`][0].source_url ? blog._embedded[`wp:featuredmedia`][0].source_url : null : null : null : null : null} date={`${months[Number(blog.date.split("T")[0].split("-")[1]) - 1]} ${blog.date.split("T")[0].split("-")[2]}, ${blog.date.split("T")[0].split("-")[0]}`} link={`/${blog.slug}/`} />
                                </XBlock>) : null
                              }
                            </XMasonry>
                          </Box>
                          <Box py={4} className="d-flex justify-content-center align-items-center">
                            <Box>
                              <BlueBtn link={'/blog/'} title="First" functionality={true} cls={`mx-3`} />
                              {
                                pageNo !== '2' ? blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.prev ? <BlueBtn functionality={true} cls="mx-3" link={`/blog/page/${blogs._paging.links.prev.split('page=')[1]}/`} title="Prev"  /> : null : null : null : null : null
                              }
                              {
                                blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <BlueBtn functionality={true} link={`/blog/page/${blogs._paging.links.next.split('page=')[1]}/`} title="Next"  /> : null : null : null : null
                              }
                            </Box>
                          </Box>
                        </Box> : "Loading"
                      }
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <RecentPostNCat  />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default MultipleBlogPage