import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import './Sass/customcard.css'

const useStyles = makeStyles(theme => ({
    manageHeight: { height: '4.2rem' },
    mobManageHeight: { height: 'auto' },
    blogManageHeight: { height: "6.3rem" }
}))

const CustomCard = ({ src, title, para, link, align, sec, cardCls, paraColor, iconContainer, icon, featureImage, date, manageHeight, anchor }) => {

    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles()
    return (
        <>
            <Card className={`${cardCls}`} style={{ height: (sec === "home/service" && width > 600) ? "26rem" : (sec === "home/blog" && width > 600) ? "25rem" : (sec === "servicePage" && width > 600) ? "22rem" : width < 600 ? 'auto' : null }}>
                {
                    featureImage ? featureImage !== null ? <CardMedia component="img" height={160} image={featureImage} alt={title} loading="lazy" /> : null : null
                }
                {src ? <CardMedia component="img" image={src} alt={title} style={{ width: '70%' }} className="mx-auto" loading="lazy" /> : null}
                {icon ? iconContainer ? <Box className='circleContainer mx-auto'><Box className='d-flex justify-content-center align-items-center circle'><img src={icon} alt="" loading='lazy' /></Box></Box> : { icon } : null}
                <CardContent>
                    {date ? <Typography style={{ color: `var(--light-green)` }} gutterBottom>{date}</Typography> : null}
                    {(title && link !== null) ? <Box ><NavLink to={link}><Typography align={align} variant='h5' dangerouslySetInnerHTML={{ __html: title }} gutterBottom /></NavLink></Box>
                        :
                        (title && anchor !== null) ? <Box ><a href={anchor}><Typography align={align} variant='h5' dangerouslySetInnerHTML={{ __html: title }} gutterBottom /></a></Box>
                            :
                            <Box ><Typography align={align} variant='h5' dangerouslySetInnerHTML={{ __html: title }} gutterBottom /></Box>}

                    {para ? <Typography className='' align={align} variant='body1' style={{ color: paraColor }} dangerouslySetInnerHTML={{ __html: para }} gutterBottom></Typography> : null}
                </CardContent>
            </Card>

        </>
    )
}

export default CustomCard