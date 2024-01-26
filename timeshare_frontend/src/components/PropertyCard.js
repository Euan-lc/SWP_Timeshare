import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';

export default function PropertyCard(props) {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={props.imgAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <LocationOnIcon/> {props.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${props.price}/night
                    </Typography>
                    <Rating name="read-only" value={props.rating} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}