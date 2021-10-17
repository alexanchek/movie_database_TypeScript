import { Grid, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { DataMovie } from '../../types/Redux/dataMovieTypes';
import noImage from './no-image.jpg';

interface IItemCard {
    movie: DataMovie;
}

const ItemCard: React.FC<IItemCard> = ({movie}) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="img"
                sx={{
                }}
                image={movie.img ? movie.img : noImage} 
                alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.movieName}
                </Typography>
                <Typography>
                    {movie.desc}
                </Typography>
                </CardContent>

                <CardActions>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>
                        {movie.country}
                    </Typography>
                    <Typography>
                        {movie.year}
                    </Typography>
                    <Typography>
                        {movie.genre}
                    </Typography>
                </Grid>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ItemCard;