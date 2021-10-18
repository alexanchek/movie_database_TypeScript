# Movie Database

## Definition

Made from ground zero.

## Used Technologies:

- TypeScript
- React, React-router-dom
- Hooks: UseEffect, UseState
- Redux, Redux-thunk
- Material UI (User Interface)
- Custom components PrivateRoute & Public route for dividing routes into two (public and private ones) ways.
- UseFormik & Yup (validation of forms)
- Firebase (as backend)

## Requirements

Need to create .env at the root folder with following variables: 

- REACT_APP_FIREBASE_API_KEY 
- REACT_APP_FIREBASE_AUTH_DOMAIN
- REACT_APP_FIREBASE_DB_URL
- REACT_APP_FIREBASE_PROJECT_ID
- REACT_APP_FIREBASE_STORAGE_BUCKET
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID
- REACT_APP_FIREBASE_APP_ID
- REACT_APP_FIREBASE_MEASUREMENT_ID

Need to sign in and then log in to see private routes (such as /movies-add, /movies, /books-add, /books.
