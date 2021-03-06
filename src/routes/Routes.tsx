import { HashRouter as Router, Switch } from 'react-router-dom'
import { Container, Box } from '@mui/material';
import React from 'react';
import MovieAppBar from '../components/MovieAppBar/MovieAppBar';
import { DataRoutes } from './DataRoutes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <MovieAppBar/>
                    <Container>
                        <Box
                        sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center' }}>
                                {DataRoutes.map((route, index) => {
                                    return(
                                        <route.typeRoute key={index} component={route.component} exact={route.exact} path={route.path} />
                                    )
                                })}
                        </Box>
                    </Container>
                </React.Fragment>
            </Switch>
        </Router>
    );
};

export default Routes;