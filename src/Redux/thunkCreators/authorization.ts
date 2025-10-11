import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthorizationApi} from "../../api";


interface outPutLoginI {
    password: string
    email: string
}

export interface LoginI {
    token: string
    userData: {
        email: string,
        login: string,
        id: string
    }
}

export interface RegisterI {
    password: string
    email: string
    login: string
}

export interface verifyEmailI {
    code: string
}

export interface resendEmailI {
    email: string
}

export const loginThunk = createAsyncThunk<LoginI, outPutLoginI>(
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

export const registerThunk = createAsyncThunk<any, RegisterI>(
    'login/registerThunk',
    async (payload) => {
        const {email, password, login} = payload;
        try {
            return await AuthorizationApi.register(email, password, login)
        } catch (error) {
            console.error('Ошибка при регистрации', error);
            throw error;
        }
    }
)

export const verifyEmailThunk = createAsyncThunk<any, verifyEmailI>(
    'login/verifyEmailThunk',
    async (payload) => {
        const {code} = payload;
        try {
            return await AuthorizationApi.verifyEmail(code)
        } catch (error) {
            console.error('Ошибка при подтверждении кода почты', error);
            throw error;
        }
    }
)


export const resendEmailThunk = createAsyncThunk<any, resendEmailI>(
    'login/resendEmailThunk',
    async (payload) => {
        const {email} = payload;
        try {
            return await AuthorizationApi.resendEmail(email)
        } catch (error) {
            console.error('Ошибка при подтверждении кода почты', error);
            throw error;
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'login/fetchCurrentUser',
    async () => {
        try {
            return await AuthorizationApi.getCurrentUser()
        } catch (e) {
            console.error('Ошибка при подтверждении кода почты', e);
            throw e;
        }
    }
)

export const refreshTokenAuth = createAsyncThunk(
    'login/refreshTokenAuth',
    async () => {
        try {
            return await AuthorizationApi.refreshTokenAuth()
        } catch (e) {
            console.error('Ошибка при рефреше токена', e);
            throw e;
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'login/logoutThunk',
    async() => {
        try {
            return await AuthorizationApi.logout()
        }catch (e) {
            console.error('ошибка при выходе', e);
            throw e;
        }
    }
)

