import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { NavLink } from 'react-router-dom';
import './Sass/customcard.css'

const CustomCard = ({ src, title, para, link, align, sec, cardCls, paraColor, iconContainer, icon, featureImage, date, manageHeight }) => {
    return (
        <>
            <Card className={`${cardCls}`} style={{ height: sec === "home/service" ? "26rem" : sec === "home/blog" ? "28rem" : sec === "servicePage" ? "22rem" : null }}>
                {
                    featureImage ? featureImage !== null ? <CardMedia component="img" image={featureImage} alt={title} className="img-fluid" loading="lazy" /> : null : null
                }
                {src ? <CardMedia component="img" image={src} alt={title} style={{ maxWidth: "66%" }} height="200" className="mx-auto" loading="lazy" /> : null}
                {icon ? iconContainer ? <Box className='circleContainer mx-auto'><Box className='d-flex justify-content-center align-items-center circle'><img src={icon} alt="" loading='lazy' /></Box></Box> : { icon } : null}
                <CardContent>
                    {date ? <Typography style={{ color: `var(--light-green)` }} gutterBottom>{date}</Typography> : null}
                    {title ? link ? <Box className="manageHeight" style={{ height: manageHeight ? "3.7rem" : null }} ><NavLink to={link}><Typography align={align} variant='h5' dangerouslySetInnerHTML={{ __html: title }} gutterBottom /></NavLink></Box> : <Box style={{ height: manageHeight ? "3.7rem" : null }} className="manageHeight" ><Typography align={align} variant='h5' dangerouslySetInnerHTML={{ __html: title }} gutterBottom /></Box> : null}
                    {para ? <Typography className='' align={align} variant='body1' style={{ color: paraColor }} dangerouslySetInnerHTML={{ __html: para }} gutterBottom></Typography> : null}
                </CardContent>
            </Card>

        </>
    )
}

export default CustomCard