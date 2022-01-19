import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product() {
  return (
    
        <Card sx={{ maxWidth: 345, height:480 }}>
            <CardMedia
            component="img"
            height="200"
            image="https://picsum.photos/seed/picsum/200/300"
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions className='mt-3'>
                <div className='card_button mx-auto'>
                    <Button size="small" className='border border-success mx-1'>Add To Cart</Button>
                    <Button size="small" className='border border-success mx-1'>Price</Button>
                </div>
            </CardActions>
        </Card>
  );
}
