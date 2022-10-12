import {configureStore} from "@reduxjs/toolkit";
import Auth from './Auth/slice'
import Events from './Events/slice'

export const store = configureStore({
    reducer: {
        Auth,
        Events
    },
})

export type RootState = ReturnType<typeof store.getState>;