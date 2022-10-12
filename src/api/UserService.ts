import axios, {Axios, AxiosResponse} from "axios";
import {IUser} from "../Models/IUser";

const USERS_API = 'https://630b6530f280658a59dabbf3.mockapi.io/users'

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return  axios.get<IUser[]>(USERS_API)
    }

    static async searchUser(params: IUser): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>(USERS_API, {
            params: params
        })
    }

}