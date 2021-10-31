import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ItemCard from './ItemMovieCard';
import {IItemMovieCards} from '../../../types/Components/IItemCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const ItemCards: React.FC<IItemMovieCards> = ({data}) => {
    const { length } = useSelector((state: RootState) => state.movies);

    return (
        <Container>
            <Grid>
                <Typography>
                    {length === 0 ? 'Ничего не найдено :( Попробуйте еще раз' : `Фильмов найдено: ${length}`}
                </Typography>
            </Grid>

            <Grid container spacing={4}>
                 {data.map((movie) => {
                     return (
                         <ItemCard key={movie.uuid} movie={movie} />
                     )
                 })} 
             </Grid>
        </Container>
    );
};

export default ItemCards;

