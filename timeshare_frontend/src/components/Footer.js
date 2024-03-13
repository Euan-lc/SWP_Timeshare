import * as React from 'react';
import { Box, Grid, Typography, Container, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
    facebook: '#',
    x: '#',
    instagram: '#',
};

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Timeshare
                        </Typography>
                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            ABOUT
                        </Typography>
                        <Link href="/about-us" color="inherit" display="block">About us</Link>
                        <Link href="#" color="inherit" display="block">Features</Link>
                        <Link href="#" color="inherit" display="block">Works</Link>
                        <Link href="#" color="inherit" display="block">Career</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            HELP
                        </Typography>
                        <Link href="#" color="inherit" display="block">Customer support</Link>
                        <Link href="/terms-and-conditions" color="inherit" display="block">Terms and conditions</Link>
                        <Link href="/privacy-policy" color="inherit" display="block">Privacy Policy</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            FAQ
                        </Typography>
                        <Link href="#" color="inherit" display="block">Account</Link>
                        <Link href="#" color="inherit" display="block">Orders</Link>
                        <Link href="#" color="inherit" display="block">Payments</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="X" color="inherit" component="a" href={socialMediaLinks.x}>
                            <XIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
                    © 2024 Company Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;