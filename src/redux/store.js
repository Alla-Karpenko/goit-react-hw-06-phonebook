import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReduser from './contact/contact-reducer';
import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: contactReduser,    
    },
    middleware,
});

export default store;