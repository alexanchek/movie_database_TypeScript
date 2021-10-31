import { Grid, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { DataBook } from '../../../types/Redux/dataBookTypes';
import noImage from './no-image.jpg';

interface IItemCard {
    book: DataBook;
}

const ItemCard: React.FC<IItemCard> = ({book}) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="img"
                sx={{
                }}
                image={book?.img ? book.img : noImage} 
                alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.bookName}
                </Typography>
                <Typography>
                    {book.desc}
                </Typography>
                </CardContent>

                <CardActions>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>
                        {book.author}
                    </Typography>
                    <Typography>
                        {book.genre}
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