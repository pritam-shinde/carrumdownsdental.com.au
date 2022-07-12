import { Container, Grid, Typography, Box, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './sass/SimpleHero.css';
import { useEffect, useState } from "react";
import Banner from './images/banner.jpg'
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  pageHeading: { color: "#fff", fontSize: "3rem !important", fontFamily: `var(--heading-font) !important` },
  pageHeadingMob: { color: "#fff", fontSize: "2.8rem !important", fontFamily: `var(--heading-font) !important` },
  hero: {
    height: "80vh", width: "100%", backgroundImage: `url(${Banner})`, backgroundPosition: "center", backgrounAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", clipPath: "ellipse(100% 55% at 48% 44%)",
  }
}))

const SimpleHero = ({ pageTitle, ppc, ppcText, blog, breadCrumb }) => {
  const [width, setWidth] = useState()
  const classes = useStyles();
  const location = useLocation()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  console.log(breadCrumb)

  return (
    <>
      <Container maxWidth="xxl" className={`banner ${classes.hero}`}>
        <Box style={{ height: "80vh" }}>
          <Grid container >
            <Grid item xs={11} md={10} className="mx-auto" style={{ height: "80vh" }} >
              <Box py={10} style={{ position: "relative", zIndex: 3, height: "80vh" }} >
                <Grid container style={{ height: "80vh" }} >
                  <Grid item xs={12} lg={8} className="d-flex align-items-center" alignItems="center" style={{ height: "80vh" }} >
                    <Box>
                      {
                        !blog ? <Typography variant="h1" className={width > 600 ? classes.pageHeading : classes.pageHeadingMob} gutterBottom >{pageTitle}</Typography> : null
                      }

                      {
                        !ppc ? <Box className="heroPara">
                          <nav aria-label="breadcrumb">
                            <ul className="breadcrumb bg-transparent">
                              {
                               breadCrumb ?  breadCrumb.map(breadcrumbItem => <li style={{textTransform:"uppercase"}} className="breadcrumb-item text-white">{breadcrumbItem.link ? <NavLink style={{textTransform:"uppercase"}} className="text-white" to={breadcrumbItem.link}>{breadcrumbItem.text}</NavLink> :  breadcrumbItem.text }</li>) : null
                              }
                            </ul>
                          </nav>
                        </Box> : ppcText ? <Box className="heroPara">
                          <Typography variant="h4" gutterBottom >{ppc ? ppcText ? ppcText : null : null}</Typography>
                        </Box> : null
                      }
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default SimpleHero