import { CircularProgress } from '@mui/material';
import React from 'react';
import ItemCards from '../Cards/BookCards/ItemBookCards';
import BooksForm from '../Forms/BooksForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const BookDatabase: React.FC = () => {
    const { data, bookLoading } = useSelector((state: RootState) => state.books); 

    return (
        <>
            <BooksForm />
            {bookLoading ? <CircularProgress color="secondary" /> : null}
            {data && !bookLoading ? <ItemCards data={data}/> : null}
        </>
    );
};

export default BookDatabase;