// import { Typography, Button, Box, Paper } from "@mui/material"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { AboutSec, Hero, ServicesSec, OurAdv, Blogs, PaymentOpt, ContactSec, Offer } from "./Sections/Sections"

const Home = () => {
  // const [open, setOpen] = useState(false)

  // window.addEventListener('load', () => {
  //   setOpen(true)
  //   sessionStorage.setItem('open', true)
  // })

  // const navigate = useNavigate()

  // const PopupComp = () => {
  //   return (
  //     <>
  //       <Box style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: '-5%', zIndex: 999, backgroundColor: 'rgba(0,0,0,0.9)', display: open ? "block" : "none" }}>
  //         <Box component={Paper} style={{ width: "18rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  //           <Typography>$99 Scale & Clean and Check-up Offer*</Typography>
  //           <Button variant="contained" onClick={() => { setOpen(false); sessionStorage.setItem('open', false); navigate("/about-us/", { replace: true }) }}>&times;</Button>
  //         </Box>
  //       </Box>
  //     </>
  //   )
  // }

  return (
    <>
      <Helmet>
        <meta name="title" content="Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic" />
        <meta name="description" content="Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof." />
        <title>Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic</title>
        <link rel="canonical" href="/" />
        <meta name="robots" content="index" />
      </Helmet>
      <main id="home">
        {/* <PopupComp /> */}
        <Hero />
        <ServicesSec />
        <AboutSec />
        <OurAdv />
        <Blogs />
        <Offer />
        <PaymentOpt />
        <ContactSec />
      </main>
    </>
  )
}

export default Home