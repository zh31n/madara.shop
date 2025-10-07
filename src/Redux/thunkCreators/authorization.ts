import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthorizationApi} from "../../api";


interface outPutLoginI{
    password:string
    email:string
}

export interface LoginI{
    access_token:string
    userData:{
        email:string,
        login:string,
        id:string
    }
}

export interface RegisterI{
    password:string
    email:string
    login:string
}

export const loginThunk = createAsyncThunk<LoginI,outPutLoginI>(
    'login/loginThunk',
    async (payload) => {
        const {email, password} = payload
        try {
            return await AuthorizationApi.login(email, password);

        } catch (error) {

            console.error('Ошибка при логине', error);
            throw error;
        }
    }
)

export const registerThunk = createAsyncThunk<any,RegisterI>(
    'login/registerThunk',
    async (payload) => {
        const {email,password,login } = payload;
        try {
            return await AuthorizationApi.register(email,password,login)
        } catch (error){
            console.error('Ошибка при регистрации', error);
            throw error;
        }
    }
)