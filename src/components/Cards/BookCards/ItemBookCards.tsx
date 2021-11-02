import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ItemCard from './ItemBookCard';
import {IItemBookCards} from '../../../types/Components/IItemCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { DataBook } from '../../../types/Redux/dataBookTypes';

const ItemCards: React.FC<IItemBookCards> = ({data}) => {
    const { loading } = useSelector((state: RootState) => state.auth);
    const amount = data.length;

    return (
        <Container>
            {/* {loading ? <CircularProgress color="secondary" /> : null } */}
            <Grid>
                <Typography>
                    Книг найдено: {amount}
                </Typography>
            </Grid>

            <Grid container spacing={4}>
                 {data.map((book: DataBook) => {
                     return (
                         <ItemCard key={book.uuid} book={book} />
                     )
                 })}
                 
             </Grid>
        </Container>
    );
};

export default ItemCards;

