import { Container, Grid, Box, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { XMasonry, XBlock } from 'react-xmasonry';
import WPAPI from 'wpapi';
import { SimpleHero, CustomCard, BlueBtn } from '../../../Components/Components'
import { RecentPostNCat } from '../Components/Components';

const Category = () => {
  const [group, setGroup] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState([])
  const { category } = useParams();
  const wp = new WPAPI({
    endpoint: 'https://pritams3.sg-host.com/wp-json/',
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

  useEffect(() => {
    if (group && group[0] && group[0].id) {
      const breadcrumb = [{ id: `breadcrumb-${group[0].id}.1`, link: "/blog/", text: "BLOG" }, { id: `breadcrumb-${group[0].id}.2`, link: null, text: group[0].name }];
      setBreadCrumb(breadcrumb)
    }
  }, [group])

  return (
    <>
      <Helmet>
        <meta name="title" content={group ? group[0] ? group[0].name ? group[0].name : 'blog' : 'blog' : 'blog'} />
        <meta name="description" content="" />
        <title>{group ? group[0] ? group[0].name ? group[0].name : 'blog' : 'blog' : 'blog'}</title>
        <link rel="canonical" href={group ? group[0] ? group[0].slug ? `/category/${category}/` : '/blog/' : '/blog/' : '/blog/'} />
        <meta name="robots" content="index" />
      </Helmet>
      <SimpleHero pageTitle={group ? group[0] ? group[0].name ? group[0].name : '/blog/' : 'blog' : 'blog'} breadCrumb={breadCrumb ? breadCrumb : null} />
      {group && blogs ? <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={11} md={10} className="mx-auto" >
                <Box py={5}>
                  <Grid container spacing={10}>
                    <Grid item xs={12} lg={8}>
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
                              {
                                blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <BlueBtn functionality={true} link={`/category/${category}/page/${blogs._paging.links.next.split('page=')[1]}/`} title="Next" cls="mr-3" /> : null : null : null : null
                              }
                            </Box>
                          </Box>
                        </Box> : null
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
        </Container>}
    </>
  )
}

export default Category