import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import MoviesForm from '../Forms/MoviesForm/MoviesForm';
import ItemCards from '../Cards/MovieCards/ItemMovieCards';
import { CircularProgress, Grid } from '@mui/material';

const MovieDatabase: React.FC = () => {
    const { data, movieLoading } = useSelector((state: RootState) => state.movies); 

    return (
        <>
            <MoviesForm />
            {movieLoading ? <CircularProgress color="secondary" /> : null}
            {data && !movieLoading ? <ItemCards data={data}/> : null}
        </>
    );
};

export default MovieDatabase;