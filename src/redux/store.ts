import {configureStore} from "@reduxjs/toolkit";
import Auth from './Auth/slice';
import Events from './Events/slice';
import Calendar from './Calendar/slice';

export const store = configureStore({
    reducer: {
        Auth,
        Events,
        Calendar
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>;