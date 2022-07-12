import { Box } from '@mui/material';
import InterestFree from './images/InterestFree.jpg';

const InterestFreeImage = () => {
    return (
        <>
            <Box>
                <img src={InterestFree} alt="" className='img-fluid' loading='lazy' />
            </Box>
        </>
    )
}

export default InterestFreeImage