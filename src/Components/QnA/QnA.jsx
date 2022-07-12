import { Box, Typography } from "@mui/material"

const QnA = ({que, ans}) => {
    return (
        <>
            <Box mb={3} >
                <Typography variant='h2' gutterBottom style={{ fontSize: "1.3rem", }}>{que}</Typography>
                <Typography className='customPara'>{ans}</Typography>
            </Box>
        </>
    )
}

export default QnA