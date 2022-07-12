import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import { Topbar, NavBar } from './Components/Components';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  fixedHeader: { position: "fixed", top: 0, left: 0, right: 0, background: "#fff !important", zIndex: 999, boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important", '@media Only Screen and (max-width: 1024px)': { background: "#fff" } },
  absoluteHeader: { position: "absolute", zIndex: 3, width: '100%', '@media Only Screen and (max-width: 1024px)': { background: "#fff" } },
  staticHeader: { position: "static", '@media Only Screen and (max-width: 1024px)': { background: "#fff" } }
}))

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState()

  window.addEventListener('scroll', () => {
    setScrollHeight(window.scrollY)
  })

  let navLinks = document.querySelectorAll('ul li a');
  Object.keys(navLinks).map(item => {
    navLinks[item].addEventListener('click', () => {
      if (window.innerWidth > 1028) {
        document.querySelector('.navbar-toggler').classList.remove('collapsed');
        document.querySelector('.navbar-collapse.collapse').classList.remove('show');
      }
      window.scrollTo(0, 0);
    })
  })

  const classes = useStyles()
  return (
    <>
      <header className={(scrollHeight > 50) ? `${classes.fixedHeader} animate__animated animate__slideInDown` : `${classes.absoluteHeader} animate__animated animate__slideOutUp`}  >
        <Container maxWidth="xxl" className='p-0'>
          <Topbar />
          <Grid container>
            <Grid item xs={12} lg={10} className="mx-auto">
              <NavBar scrollHeight={scrollHeight} />
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default Header