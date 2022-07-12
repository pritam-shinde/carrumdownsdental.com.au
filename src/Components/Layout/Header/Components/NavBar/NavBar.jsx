import { NavLink, useLocation } from 'react-router-dom';
import { Button, Box, IconButton, Link } from '@mui/material';
import { Menu, Close, ArrowDropDown } from '@mui/icons-material';
import Logo from './images/logo.svg'
import './Sass/navbar.css';
import { useEffect, useState } from 'react';
import { DropDown } from './Component/Component';


const NavBar = ({ scrollHeight }) => {
  const [clicked, setClicked] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);
  const [width, setWidth] = useState();
  const location = useLocation();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  let roleButtons = document.querySelectorAll('a[role="button"]');

  Object.keys(roleButtons).map(item => {
    roleButtons[item].addEventListener('click', (e) => {
      document.querySelectorAll(`${this.parentElement} .dropdown-menu`).toggle()
    })
  });

 

  const closeMobileMenu = () => {
    setClicked(false)
    setServiceDropdown(false)
    setAboutDropdown(false)
  }

  if (clicked) {
    document.body.style.cssText = `
  height: 100vh;
  overflow-y:"hidden";
  `
  }

  return (
    <>{
      width > 1028 ? <nav className='navbar navbar-expand-xl bg-transparent px-0'>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Menu />
        </Button>
        <NavLink to="/" className="navbar-brand mr-md-auto mx-auto">
          <img src={Logo} alt="" className='img-fluid' style={{borderRadius: 0}} loading="lazy"  />
        </NavLink>
        <Box className="collapse navbar-collapse customization" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className={`nav-link ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/about-us/" className={`nav-link dropdown-toggle ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true" >About Us</NavLink>
              <ul className='dropdown-menu border-0 shadow-lg p-3' aria-labelledby='navbardropdown1'>
                <li className="nav-item"><NavLink to="/referral-program/" className="dropdown-item nav-link text-dark">Patient Referral Program</NavLink></li>
                <li className="nav-item"><NavLink to="/payment-plan/" className="dropdown-item nav-link text-dark">Payment Plans</NavLink></li>
                <li className="nav-item">
                  <NavLink to="/new-technologies/" className="nav-link dropdown-item text-dark">New Technologies</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className={`nav-link dropdown-toggle ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} aria-expanded="false" aria-haspopup="true" role="button" to="/service/" aria-pressed="true">Services</NavLink>
              <ul className='dropdown-menu border-0 shadow-lg p-3'>
                <li className="nav-item"><a className="nav-link dropdown-item text-dark" href="/service/wisdom-teeth-removal/">Wisdom Teeth Removal</a></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/child-benefit/">Child Benefit</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/dental-implants/">Dental Implants</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/dentures/">Denture</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/teeth-whitening/">Teeth Whitening</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/crowns-and-bridge/">Crown and Bridges</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/veneers/">Veneers</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/teeth-aligners/">Invisalign</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/root-canal/">Root Canal</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/teeth-cleaning/">Teeth Cleaning</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/dental-emergency/">Dental Emergency</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link dropdown-item text-dark" to="/service/tooth-fillings/">Tooth Filling</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} to="/blog/">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} to="/contact-us/">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${scrollHeight > 50 || location.pathname === "/thank-you/" ? "text-dark" : "text-white"}`} to="/how-we-can-reduce-the-spread-of-corona-virus-together/">Covid 19</NavLink>
            </li>
          </ul>
          {
              location.pathname !== '/book-now/' ? <Button className='callBtn rounded-pill btn-lg px-3 py-2 shadow' ><NavLink to="/book-now/" className="text-white">Book Now</NavLink></Button> : null
            }
        </Box>
      </nav>
        :
        <nav className='navbar navbar-expand-xl bg-transparent px-0'>
          <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
            {clicked ? <Close className='text-white' /> : <Menu />}
          </Button>
          <NavLink to="/" className="navbar-brand mr-md-auto mx-auto">
            <img src={Logo} alt="" className='img-fluid' loading="lazy" />
          </NavLink>
          <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
            <ul className='navbar-nav mob'>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>Home</NavLink>
              </li>
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <NavLink to="/about-us/" className="nav-link" onClick={closeMobileMenu}>About Us</NavLink>
                  <IconButton><ArrowDropDown id="aboutDropdown" onClick={() => { setAboutDropdown(!aboutDropdown); setServiceDropdown(false) }} /></IconButton>
                </Box>
                {aboutDropdown ? <DropDown menu="about" closeMobileMenu={closeMobileMenu} /> : null}
              </li>
              <li className="nav-item dropdownListItem">
                <Box className='d-flex align-items-center'>
                  <NavLink to="/service/" className="nav-link" onClick={closeMobileMenu}>Services</NavLink>
                  <IconButton><ArrowDropDown id="servicesDropdown" onClick={() => { setServiceDropdown(!servicesDropdown); setAboutDropdown(false) }} /></IconButton>
                </Box>
                {servicesDropdown ? <DropDown menu="services" closeMobileMenu={closeMobileMenu} /> : null}
              </li>
              <li className="nav-item">
                <NavLink to="/blog/" className="nav-link" onClick={closeMobileMenu}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us/" className="nav-link" onClick={closeMobileMenu}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/how-we-can-reduce-the-spread-of-corona-virus-together/" className="nav-link" onClick={closeMobileMenu}>Covid 19</NavLink>
              </li>
            </ul>
            {
              location.pathname !== '/book-now/' ? <Button className='callBtn rounded-pill btn-lg px-3 py-2 shadow' ><NavLink to="/book-now/" className="text-white">Book Now</NavLink></Button> : null
            }
          </Box>
        </nav>
    }
    </>
  )
}

export default NavBar