import { Container, Box, Grid } from "@mui/material";
import { CustomCard, SectionalHeading } from '../../../../Components/Components';
import BottomImg from './images/bottom-01.svg'
import './sass/OurAdv.css';
import data from './data/data'

const OurAdv = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl" id="ourAdvSec" className="p-0">
                    <Box pt={5} pb={3} id="OurSecContainer">
                        <Grid container>
                            <Grid item xs={11} md={10} className="mx-auto">
                                <Box mt={5}>
                                    <SectionalHeading title="Our Advantage" align1="center" color1={`var(--blue)`} />
                                    <Box my={5}>
                                        <Grid container spacing={3}>
                                            {
                                                data.map(item => <Grid item xs={12} sm={6} lg={3} key={item.id}>
                                                    <CustomCard title={item.title} para={item.para} cardCls="bg-transparent shadow-none border-0" paraColor="#fff" iconContainer={true} icon={item.icon} align="center"  />
                                                </Grid>)
                                            }
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <img src={BottomImg} alt="" className="img-fluid img2" loading="lazy" />
                </Container>
            </section>
        </>
    )
}

export default OurAdv