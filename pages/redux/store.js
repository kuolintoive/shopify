import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './reducers/NavBar';

export default configureStore({
    reducer: {
        navBar: navBarSlice
    }
})