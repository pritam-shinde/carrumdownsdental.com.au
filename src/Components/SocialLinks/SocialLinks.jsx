import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { List, ListItem, ListItemIcon, Link } from '@mui/material'

const SocialLinks = () => {
    return (
        <>
            <List className="d-flex p-0">
                {
                    [{ id: "social-1", link: "https://www.facebook.com/CarrumDownsDental", icon: <FaFacebook /> }, { id: "social-2", link: "https://twitter.com/CarrumDownsGrp/", icon: <FaTwitter /> }, { id: "social-3", link: "https://www.instagram.com/cddentalgroup/", icon: <FaInstagram /> }, { id: "social-4", link: "https://in.pinterest.com/CarrumDownsGrp/_created/", icon: <FaPinterest /> }, { id: "social-5", link: "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/", icon: <FaYoutube /> }].map(item => {
                        return <ListItem key={item.id} className="p-0" style={{width: "auto"}} >
                            <Link href={item.link} target="_blank">
                                <ListItemIcon style={{ minWidth: "2rem" }}>
                                    {item.icon}
                                </ListItemIcon>
                            </Link>
                        </ListItem>
                    })
                }
            </List>
        </>
    )
}

export default SocialLinks