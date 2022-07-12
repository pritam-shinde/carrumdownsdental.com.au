import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import SectinalHeading from '../SectinalHeading/SectinalHeading';
import './sass/OtherServices.css'

const OtherServices = ({ slug }) => {

    const services = [
        {
            id: "other-service-1",
            link: "/service/wisdom-teeth-removal/",
            title: "Wisdom Tooth Removal"
        },
        {
            id: "other-service-2",
            link: "/service/child-benefit/",
            title: "Child Benefit"
        },
        {
            id: "other-service-3",
            link: "/service/dental-implants/",
            title: "Dental Implants"
        },
        {
            id: "other-service-4",
            link: "/service/dentures/",
            title: "Denture"
        },
        {
            id: "other-service-5",
            link: "/service/teeth-whitening/",
            title: "Teeth Whitening"
        },
        {
            id: "other-service-6",
            link: "/service/crowns-and-bridge/",
            title: "Crowns And Bridge"
        },
        {
            id: "other-service-7",
            link: "/service/veneers/",
            title: "Veneers"
        },
        {
            id: "other-service-8",
            link: "/service/teeth-aligners/",
            title: "Invisalign"
        },
        {
            id: "other-service-9",
            link: "/service/root-canal/",
            title: "Root Canal"
        },
        {
            id: "other-service-10",
            link: "/service/teeth-cleaning/",
            title: "Teeth Cleaning"
        },
        {
            id: "other-service-11",
            link: "/service/dental-emergency/",
            title: "Dental Emergency"
        },
        {
            id: "other-service-12",
            link: "/service/tooth-fillings/",
            title: "Tooth Fillings"
        },
    ]

    const filter = services.filter(entries => {
        return entries.link !== slug
    })

    const navLinks = document.querySelectorAll('otherService a');

    Object.keys(navLinks).map(item=> navLinks[item].addEventListener('click',()=> window.scrollTo(0,0)))

    return (
        <>
            <Box pb={5} style={{ borderRadius: "1.2rem", backgroundColor: "#11527826" }} className="otherServices" >
                <Box py={1} style={{backgroundColor:"var(--blue)", borderRadius:"1.2rem 1.2rem 0 0"}}>
                    <SectinalHeading title={'Services'} type="h5" align1={'center'} color1={'#fff'} />
                </Box>
                <Box px={2} className="otherService">
                <List>
                    {
                        filter.map(item => <ListItem key={item.id}>
                            <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--light-green)" }} />
                            </ListItemIcon>
                            <Link to={item.link} className="nav-link py-0 px-0"><ListItemText primary={item.title} /></Link>
                        </ListItem>)
                    }
                </List>
                </Box>
            </Box>
        </>
    )
}

export default OtherServices