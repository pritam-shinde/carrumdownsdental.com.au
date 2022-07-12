import { Button, } from "@mui/material"
import { NavLink } from "react-router-dom";
import './sass/bluebtn.css'

const BlueBtn = ({ title, link, anchor, cls, functionality }) => {
    return (
        <>
            <Button className={`bluebtn shadow-lg ${cls} mr-3`} onClick={functionality ? () => { window.scrollTo(0, 0) } : null} >{link ? <NavLink to={link}>{title}</NavLink> : <a href={anchor} target="_blank" rel="noreferrer" >{title}</a>}</Button>
        </>
    )
}

export default BlueBtn