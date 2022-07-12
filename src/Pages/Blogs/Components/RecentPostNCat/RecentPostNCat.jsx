import React,{useState, useEffect} from 'react';
import WPAPI from 'wpapi'
import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SectionalHeading } from '../../../../Components/Components';
import { Link, NavLink } from 'react-router-dom';
import { CheckCircleOutline } from '@mui/icons-material';
import './sass/RecentPostNCat.css'

const RecentPostNCat = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([])
    const wp = new WPAPI({
      endpoint: 'https://carrumdownsdental.com.au/wp-json/',
    });
  
    const fetchBlogs = async () => {
      const posts = await wp.posts().embed().page(1).get();
      const category = await wp.categories().embed().perPage(100).page(1).get();
      setBlogs(posts);
      setCategories(category)
    }
  
    useEffect(() => {
      fetchBlogs()
    });
    return (
        <>
            <Box className="recentPostNCat" style={{height:"100%"}}>
                <Box mb={5} component={Paper} className="shadow" style={{backgroundColor:"#11527826", borderRadius:"1.2rem"}} >
                    <Box p={2} style={{backgroundColor:"var(--blue)", borderRadius:"1.2rem 1.2rem 0 0"}}>
                        <SectionalHeading title="Recent Posts" type="h5" color1={`#fff`} align1="center" />
                    </Box>
                    <Box p={3}>
                        {
                            blogs.slice(0, 5).map(item => <Box mb={3} key={item.id}>
                                <Grid container spacing={1} >
                                    <Grid item xs={3}>
                                        <Box>
                                            {
                                                item ? item._embedded ? item._embedded[`wp:featuredmedia`] ? item._embedded[`wp:featuredmedia`][0] ? item._embedded[`wp:featuredmedia`][0].source_url ? <img src={item._embedded[`wp:featuredmedia`][0].source_url} alt={item._embedded[`wp:featuredmedia`][0].alt} className="img-fluid" style={{borderRadius: 0}} loading="lazy" /> : null : null : null : null : null
                                            }
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography><NavLink to={`/${item.slug}/`} >{item.title.rendered}</NavLink></Typography>
                                    </Grid>
                                </Grid>
                            </Box>)
                        }
                    </Box>
                </Box>
                <Box component={Paper} className="sticky-top shadow" style={{top:"12%", zIndex:1, backgroundColor:"#11527826", borderRadius:"1.2rem"}}>
                    <Box p={2} style={{ backgroundColor:"var(--blue)", borderRadius:"1.2rem 1.2rem 0 0" }}>
                        <SectionalHeading title="Categories" type="h5" color1={`#fff`} align1="center" />
                    </Box>
                    <Box p={3}>
                        {
                            categories ? <List>
                                {categories.map(item => <ListItem key={item.id}>
                                    <Link to={`/category/${item.slug}/`}>
                                    <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--light-green)"}} />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                    </Link>
                                </ListItem>)}
                            </List> : null
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default RecentPostNCat