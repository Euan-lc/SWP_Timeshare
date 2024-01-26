import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Timeshare
                    </Typography>
                    <Button color="inherit">Book a trip</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                    <IconButton><AccountCircleIcon color="secondary"/></IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}