import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi'
import { useParams } from 'react-router-dom';
import { BlueBtn, SectionalHeading, SimpleHero, CustomCard } from '../../Components/Components'
import { Container, Grid, Box, TextField, Typography, LinearProgress } from '@mui/material';
import { RecentPostNCat } from '../Blogs/Components/Components';
import './sass/SingleBlog.css';
import { Helmet } from 'react-helmet';
import seo from './Data/Data'

const SingleBlog = () => {
  const [blog, setBlog] = useState([])
  const [categoriesBlog, setCategoriesBlog] = useState([]);
  const [breadCrumb, SetBreadCrumb] = useState([]);
  const [category, setCategory] = useState([])
  const { slug } = useParams()

  const wp = new WPAPI({
    endpoint: 'https://pritams3.sg-host.com/wp-json/',
  });

  const fetchBlog = async (slug) => {
    let post = await wp.posts().slug(slug).embed().auth({username: 'dentistadmin', password: 'hOzrbY#mnldy&)n%'}).get();
    setBlog(post)
  }

  const fetchPostByCategory = async () => {
    let posts = await wp.posts().param({ categories: [blog[0].categories[0]] }).embed().get()
    setCategoriesBlog(posts)
  }

  useEffect(() => {
    fetchBlog(slug)
  }, [slug])

  useEffect(() => {
    if (blog && blog[0] && blog[0].categories && blog[0].categories[0]) {
      fetchPostByCategory()
    }
  }, [blog]);

  const fetchCategory = async () => {
    const cat = await wp.categories().id(blog[0].categories[0]).get();
    setCategory(cat)
  }

  useEffect(() => {
    if (blog && blog[0] && blog[0].id && blog[0].categories[0]) {
      fetchCategory()
    }
  }, [blog])

  const [filterSeo] = seo.filter(entries => entries.slug === slug);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(()=>{
    if(blog && blog[0] && category){
      const breadcrumb = [{ id: `breadcrumb-${blog[0].id}.1`, link: "/blog/", text: "BLOG" }, { id: `breadcrumb-${blog[0].id}.2`, link: `/${category.slug}/`, text: category.name }, { id: `breadcrumb-${blog[0].id}.3`, link: null, text: blog[0].title.rendered }];
      SetBreadCrumb(breadcrumb)
    }
  })

  return (
    <>
      <Helmet>
        <title>{filterSeo ? filterSeo.title ? filterSeo.title : null : null}</title>
        <meta name="title" content={filterSeo ? filterSeo.title ? filterSeo.title : null : null} />
        <meta name="description" content={filterSeo ? filterSeo.description ? filterSeo.description : null : null} />
      </Helmet>
      <SimpleHero blog={true} breadCrumb={breadCrumb} />
      {blog ? <main id="singleBlog">
        <section>
          <Container maxWidth="xxl" >
            <Grid container >
              <Grid item xs={11} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={10}>
                    <Grid item xs={12} lg={8}>
                      {blog ? blog[0] ? blog[0].title ? blog[0].title.rendered ? <Box py={3}>
                        <Typography variant="h1" style={{ fontSize: "2.5rem" }} align="center" >{blog[0].title.rendered}</Typography>
                      </Box> : null : null : null : null}
                      {
                        blog ? blog[0] ? <Box>
                          {
                            blog[0]._embedded ? blog[0]._embedded[`wp:featuredmedia`] ? blog[0]._embedded[`wp:featuredmedia`][0] ? blog[0]._embedded[`wp:featuredmedia`][0].source_url ? <img src={blog[0]._embedded[`wp:featuredmedia`][0].source_url} alt={blog[0]._embedded[`wp:featuredmedia`][0].alt_text} className="img-fluid" loading="lazy" /> : null : null : null : null
                          }
                          {
                            blog ? blog[0] ? blog[0].content ? blog[0].content.rendered ? <Box mt={3} dangerouslySetInnerHTML={{ __html: blog[0].content.rendered }} /> : null : null : null : null
                          }
                        </Box> : null : null
                      }
                      <Box id="review">
                        <SectionalHeading type="h5" title="Leave a Reply" color1={`var(--blue)`} />
                        <Box mt={3}>
                          <form>
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <TextField type="text" id="userName" label="Name" variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <TextField type="email" id="userEmail" label="Email" variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField type="url" id="userWebsite" label="Website" variant="outlined" fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField id="userMessage" label="Message" multiline rows={4} fullWidth required />
                              </Grid>
                              <Grid item xs={12}>
                                <BlueBtn title="Post Comment" />
                              </Grid>
                            </Grid>
                          </form>
                        </Box>
                      </Box>
                      <Box mt={5}>
                        <SectionalHeading title="Recent Blogs" type="h2" align1="center" />
                        <Grid container>
                          {
                            categoriesBlog ? categoriesBlog.length > 0 ? categoriesBlog.slice(1, 3).map(blog => <Grid key={blog.id} item xs={12} md={6}>
                              <CustomCard cardCls="shadow border-0 m-3" title={blog.title.rendered} para={`${blog.excerpt.rendered.split(" ").slice(0, 15).join(" ")} [...]`} featureImage={blog ? blog._embedded ? blog._embedded[`wp:featuredmedia`] ? blog._embedded[`wp:featuredmedia`][0] ? blog._embedded[`wp:featuredmedia`][0].source_url ? blog._embedded[`wp:featuredmedia`][0].source_url : null : null : null : null : null} date={`${months[Number(blog.date.split("T")[0].split("-")[1]) - 1]} ${blog.date.split("T")[0].split("-")[2]}, ${blog.date.split("T")[0].split("-")[0]}`} link={`/${blog.slug}/`} anchor={null} />
                            </Grid>) : null : null
                          }
                        </Grid>
                      </Box>
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

export default SingleBlog