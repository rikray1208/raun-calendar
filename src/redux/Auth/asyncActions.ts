import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";
import {IUser} from "../../Models/IUser";
import UserService from "../../api/UserService";

const loginApi = 'https://630b6530f280658a59dabbf3.mockapi.io/users'


export const login = createAsyncThunk<IUser[], IUser>(
    'auth/login',
    async (params) => {
        const response = await UserService.searchUser(params)

        if (!response.data.length) {
             throw new Error('Пользователь не найден!')
        }

        return response.data
    }
)