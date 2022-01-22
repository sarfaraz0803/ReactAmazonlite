import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product(props) {
  return (
    
        <Card sx={{ maxWidth: 345, height:495 }} style={{border: "1px solid rgb(187, 184, 184)"}}>
            <CardMedia
            component="img"
            height="200"
            width="300"
            image={props.image}
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{width:"100%", textAlign:"center", textTransform:"capitalize"}}>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{height:"150px", padding:"1px", textAlign:"justify"}}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions >
                <div className='card_button mx-auto'>
                    <Button size="small" className='border border-success mx-1' onClick={props.doCart}>Add To Cart</Button>
                    <Button size="small" className='border border-success mx-1'>Price : {props.price}</Button>
                </div>
            </CardActions>
        </Card>
  );
}
