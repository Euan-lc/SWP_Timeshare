import PropertyCard from "./PropertyCard";
import property1 from "../images/example2.png";
import property2 from "../images/example1.jpg";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container'

export default function HomePage() {
    return (
        <Container sx={{flexgrow:1}} alignItems="center"
                   justifyContent="center">

            <Typography variant={'h3'} type={'center'}>Top Resorts</Typography>
            <Stack direction='row' spacing={2} sx={{flexgrow: 1}} justifyContent="center">
                <PropertyCard img={property1}
                              imgAlt={'there should be a scantily dressed woman here'}
                              name={'Scantily clad woman'}
                              location={'Da Nang, Viet Nam'}
                              price={500}
                              rating={5}
                />
                <PropertyCard img={property2}
                              imgAlt={'there should be a nice pool here'}
                              name={'Pool Side'}
                              location={'HCMC, Viet Nam'}
                              price={500}
                              rating={5}
                />
            </Stack>
        </Container>
    )
}