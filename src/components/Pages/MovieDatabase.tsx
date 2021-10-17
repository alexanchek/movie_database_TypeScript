import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import MoviesForm from '../Forms/MoviesForm';
import ItemCards from '../Cards/ItemCards';
import { CircularProgress } from '@mui/material';

const MovieDatabase: React.FC = () => {
    const { data, movieLoading } = useSelector((state: RootState) => state.movies); 

    return (
        <div>
            <MoviesForm />
            {movieLoading ? <CircularProgress color="secondary" /> : null}
            {data && !movieLoading ? <ItemCards data={data}/> : null}
        </div>
    );
};

export default MovieDatabase;