import PrivateRoute from '../components/auth/PrivateRoute';
import PublicRoute from '../components/auth/PublicRoute';

import BookDatabase from '../components/Pages/BookDatabase';
import BookDatabaseAdd from '../components/Pages/BookDatabaseAdd';
import MovieDatabase from '../components/Pages/MovieDatabase';
import MovieDatabaseAdd from '../components/Pages/MovieDatabaseAdd';
import Login from '../components/Pages/SignIn/SignIn';
import SignUp from '../components/Pages/SignUp/SignUp';

export const DataRoutes = [
    { typeRoute: PublicRoute, component: Login, exact: true, path: '/login' },
    { typeRoute: PublicRoute, component: SignUp, exact: true, path: '/signup' },

    { typeRoute: PrivateRoute, component: MovieDatabase, exact: true, path: '/' },
    { typeRoute: PrivateRoute, component: MovieDatabase, exact: true, path: '/movies' },
    { typeRoute: PrivateRoute, component: MovieDatabaseAdd, exact: true, path: '/movies-add' },
    { typeRoute: PrivateRoute, component: BookDatabase, exact: true, path: '/books' },
    { typeRoute: PrivateRoute, component: BookDatabaseAdd, exact: true, path: '/books-add' },
];