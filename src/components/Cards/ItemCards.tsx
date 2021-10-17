import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ItemCard from './ItemCard';
import {IItemCards} from '../../types/Components/IItemCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ItemCards: React.FC<IItemCards> = ({data}) => {
    const { loading } = useSelector((state: RootState) => state.auth);
    const amount = data.length;

    

    return (
        <Container>
            {/* {loading ? <CircularProgress color="secondary" /> : null } */}
            <Grid>
                <Typography>
                    Фильмов найдено: {amount}
                </Typography>
            </Grid>

            <Grid container spacing={4}>
                 {data.map((movie) => {
                     return (
                         <ItemCard key={movie.uuid} movie={movie}/>
                     )
                 })}
             </Grid>
        </Container>
    );
};

export default ItemCards;

