import { Container, Box, Grid, Typography, ListItem, ListItemIcon, ListItemText, List, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from './images/logo.svg';
import './sass/footer.css';
import { SocialLinks } from "../../Components";
import { Copyright, Email, Home, Phone } from "@mui/icons-material";
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <>
      <footer>
        <Container maxWidth="xxl" className="p-0 mt-md-5">
          <Box pt={3} id="footerContainer">
            <Grid container>
              <Grid item xs={11} md={10} className="mx-auto" >
                <Box mb={4}>
                  <Grid container>
                    <Grid item xs={10} sm={4} md={3} className="mx-auto" >
                      <img src={Logo} alt="" className="img-fluid" />
                    </Grid>
                  </Grid>
                </Box>
                <Box style={{ borderTop: "2.5px solid #ffffff1a", borderBottom: "2.5px solid #ffffff1a" }} py={3}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box>
                        <Box>
                          <Typography variant="h5" gutterBottom>About Us</Typography>
                        </Box>
                        <Box>
                          <Typography>
                            At Carrum Downs Dental in Frankston-Dandenong Road we are committed to apply our dental knowledge and skills in a caring and gentle way, you will feel at ease while we work on your smile. You will definitely appreciate the warm and friendly manner in which we treat patients. Learn more about our <a href='/about-us/' style={{ color: "var(--blue)" }}>dentist in Carum Downs</a>.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2}>
                      <Box>
                        <Box>
                          <Typography variant="h5" gutterBottom>Quick Links</Typography>
                        </Box>
                        <Box>
                          <ul>
                            {
                              [{ id: "quick-link1", title: "Home", link: "/" }, { id: "quick-link2", title: "About Us", link: "/about-us/" }, { id: "quick-link3", title: "Services", link: "/service/" }, { id: "quick-link4", title: "Blog", link: "/blog/" }, { id: "quick-link5", title: "Contact Us", link: "/contact-us/" }, { id: "quick-link6", title: "Privacy Policy", link: "/privacy-policy/" }, { id: "quick-link7", title: "Terms & Condition", link: "/terms-and-conditions/" }].map(listItem => <li key={listItem.id}><NavLink to={listItem.link}>{listItem.title}</NavLink></li>)
                            }
                          </ul>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                      <Box>
                        <Box>
                          <Typography variant="h5" gutterBottom>Opening Hours</Typography>
                        </Box>
                        <Box className="d-flex">
                          <ul className="mr-3">
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                          </ul>
                          <ul>
                            <li>9:00am - 6:00pm</li>
                            <li>9:00am - 6:00pm</li>
                            <li>9:00am - 6:00pm</li>
                            <li>9:00am - 6:00pm</li>
                            <li>9:00am - 6:00pm</li>
                            <li>9:00am - 6:00pm</li>
                            <li>Closed</li>
                          </ul>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                      <Box>
                        <Box>
                          <Typography variant="h5" gutterBottom>Contact Us</Typography>
                        </Box>
                        <Box>
                          <List id="address_footer">
                            <ListItem>
                              <ListItemIcon>
                                <Home style={{color:"var(--blue)"}} />
                              </ListItemIcon>
                              <ListItemText primary="1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201" className="text-white" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Phone style={{color:"var(--blue)"}} />
                              </ListItemIcon>
                              <Link href="tel:03-9782 1200">
                                <ListItemText primary="03-9782 1200" className="text-white" />
                              </Link>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Email style={{color:"var(--blue)"}} />
                              </ListItemIcon>
                              <Link href="mailto:carrumdownsdental@gmail.com">
                                <ListItemText primary="carrumdownsdental@gmail.com" className="text-white" />
                              </Link>
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box pt={3} id="socialContainer">
                  <Grid container>
                    <Grid item xs={12} className="d-flex justify-content-center">
                      <Box>
                        <ul className="d-flex flex-wrap justify-content-center">
                        {
                          [{
                            id: "footer-links1",
                            title: "Skye",
                            link: "/get-painless-dental-treatment-at-skye/"
                          },
                          {
                            id: "footer-links2",
                            title: "Sandhurst",
                            link: "/get-the-best-dental-care-at-sandhurst/"
                          },
                          {
                            id: "footer-links3",
                            title: "Patterson Lakes",
                            link: "/affordable-dental-services-at-patterson-lakes/"
                          },
                          {
                            id: "footer-links4",
                            title: "Cranbourne West",
                            link: "/we-are-your-go-to-dentist-in-cranbourne-west/"
                          },
                          {
                            id: "footer-links5",
                            title: "Frankston North",
                            link: "/looking-for-a-dentist-in-frankston-north/"
                          },
                          {
                            id: "footer-links6",
                            title: " Seaford",
                            link: "/find-the-best-dentist-in-seaford/"
                          },
                          {
                            id: "footer-links7",
                            title: "Lyndhurst",
                            link: "/get-all-your-dental-needs-handled-in-lyndhurst/"
                          },
                          {
                            id: "footer-links8",
                            title: "Langwarrin",
                            link: "/affordable-dental-services-at-langwarrin/"
                          }].map(item=><li key={item.id} style={{marginRight:"1rem"}}><NavLink to={item.link} style={{color:"var(--blue)"}} className="font-weight-bold" >{item.title}</NavLink></li>)
                        }
                        </ul>
                      </Box>
                    </Grid>
                    <Grid item xs={12} className="d-flex justify-content-center" style={{ borderBottom: "2.5px solid #ffffff1a" }}>
                      <SocialLinks />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box py={1} style={{ backgroundColor: "#1ebdb6" }}>
            <Typography align="center" className="text-white">Copyright <Copyright /> {new Date().getFullYear()} | <Link className="text-white" to="/">carrumdownsdental.com.au</Link></Typography>
          </Box>
        </Container>
      </footer>
    </>
  )
}

export default Footer