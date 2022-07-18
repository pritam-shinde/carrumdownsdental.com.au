import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './sass/DropDown.css'

const DropDown = ({ menu, closeMobileMenu }) => {
    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(!click)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'} shadow`}>
                {
                    menu === "about" ?
                        [{ id: "about-menu-1", title: "Patient Referral Program", path: "/referral-program/" }, { id: "about-menu-2", title: "Payment Plans", path: "/payment-plan/" }, { id: "about-menu-3", title: "New Technologies", path: "/new-technologies/" }].map(item => <li key={item.id}>
                            <NavLink to={item.path} onClick={() => {setClick(false); closeMobileMenu()}}>{item.title}</NavLink>
                        </li>)
                        : menu === "services" ?
                            [{ id: "service-menu-1", title: "Wisdom Teeth Removal", path: "/service/wisdom-teeth-removal/" },
                            { id: "service-menu-2", title: "Child Benefit", path: "/service/child-benefit/" },
                            { id: "service-menu-3", title: "Dental Implants", path: "/service/dental-implants/" },
                            { id: "service-menu-4", title: "Denture", path: "/service/dentures/" },
                            { id: "service-menu-5", title: "Teeth Whitening", path: "/service/teeth-whitening/" },
                            { id: "service-menu-6", title: "Crown and Bridges", path: "/service/crowns-and-bridges/" },
                            { id: "service-menu-7", title: "Veneers", path: "/service/veneers/" },
                            { id: "service-menu-8", title: "Invisalign", path: "/service/teeth-aligners/" },
                            { id: "service-menu-9", title: "Root Canal", path: "/service/root-canal/" },
                            { id: "service-menu-10", title: "Teeth Cleaning", path: "/service/teeth-cleaning/" },
                            { id: "service-menu-11", title: "Dental Emergency", path: "/service/dental-emergency/" },
                            { id: "service-menu-12", title: "Tooth Filling", path: "/service/tooth-fillings/" }].map(item => <li key={item.id}>
                                {
                                    item.id !== "service-menu-1" ? <NavLink className="nav-link py-0 mb-1" to={item.path} onClick={() => {setClick(false); closeMobileMenu()}} >{item.title}</NavLink> : <a href="/service/wisdom-teeth-removal/">Wisdom Tooth Removal</a>
                                }
                            </li>)
                            : null
                }
            </ul>
        </>
    )
}

export default DropDown