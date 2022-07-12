import { Container, Grid, Box } from "@mui/material";
import { CustomCard } from "../../../../Components/Components";
import GreenBtn from "../../../../Components/GreenBtn/GreenBtn";
import Data from "./Data/Data";
import './sass/service.css'

const ServicesSec = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl" id="service">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box>
                                <Grid container spacing={3}>
                                    {
                                        Data.map(item => <Grid item key={item.id} xs={12} sm={6} lg={3}>
                                            <CustomCard src={item.image} title={item.title} para={item.para} link={item.link} align="center" sec="home/service" cardCls="shadow border-none pt-3" />
                                        </Grid>)
                                    }
                                </Grid>
                            </Box>
                            <Box mt={4} className="d-flex justify-content-center align-items-center">
                                <GreenBtn title="View All Services" link="/service/" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default ServicesSec