import { Box, Typography } from "@mui/material";
import './sass/sectionalHeading.css'

const SectinalHeading = ({color1, color2, align1, align2, title, subtitle, type}) => {
    return (
        <>
            <Box className="sectionalHeading" style={{display:"block"}}>
                <Typography variant={type ? type : 'h2'} dangerouslySetInnerHTML={{__html: title}} align={align1} style={{color:color1}} gutterBottom />
            </Box>
        </>
    )
}

export default SectinalHeading