import {IUser} from "../../Models/IUser";

export interface AuthState {
    isAuth: boolean,
    user: IUser,
    error: string,
    isLoading: boolean
}


