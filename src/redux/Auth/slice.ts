import {AuthState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {login} from "./asyncActions";
import {IUser} from "../../Models/IUser";

const initialState: AuthState = {
    isAuth: JSON.parse(localStorage.getItem('auth') ?? "false"),
    user: JSON.parse(localStorage.getItem('user') ?? '{}') as IUser,
    isLoading: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = {} as IUser;
            state.isAuth = false;
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
        }
    },

    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
                state.isLoading = true;
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = '';
            state.user = action.payload[0];

            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', JSON.stringify(action.payload[0]));
        })

        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string
        })

    }
})


export const authActions = authSlice.actions
export default authSlice.reducer