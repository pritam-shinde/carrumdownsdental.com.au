import { NavLink } from "react-router-dom"
import { Button } from "@mui/material"
import './sass/greenbtn.css'

const GreenBtn = ({ link, anchor, title }) => {
    return (
        <>
            <Button className="greenbtn">{link ? <NavLink to={link}>{title}</NavLink> : <a href={anchor} target="_blank" >{title}</a>}</Button>
        </>
    )
}

export default GreenBtn