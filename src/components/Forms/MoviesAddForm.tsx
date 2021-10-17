import { Box, Button, Grid, TextField } from '@mui/material';
import React, {} from 'react';
import { useState } from 'react';

import { addmovie } from '../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

const MoviesAddForm = () => {
    const dispatch = useDispatch();

    const [movieName, setMovieName] = useState('');
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const uuid = '';
    const img = '';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        dispatch(addmovie({uuid, movieName, img, year, desc, country, genre}));
        event.currentTarget.reset();
      };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                name="movieName"
                required
                fullWidth
                id="firstName"
                label="Введите название фильма"
                autoFocus
                onChange={(e) => setMovieName(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="lastName"
                label="Введите год"
                name="year"
                onChange={(e) => setYear(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="lastName"
                label="Введите жанр"
                name="genre"
                onChange={(e) => setGenre(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="email"
                label="Введите страну"
                name="country"
                onChange={(e) => setCountry(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="outlined-multiline-static"
                label="Краткое описание"
                name="desc"
                multiline
                rows={7}
                onChange={(e) => setDesc(e.currentTarget.value)}
                />
            </Grid>
            
            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }
                }
            >
                Отправить
            </Button>
        </Box>
    );
};

export default MoviesAddForm;