import {createAsyncThunk} from "@reduxjs/toolkit";
import {ResetPasswordApi} from "../../api";


interface outVerify {
    email: string,
    code: string,
}

interface outResetPassword {
    email: string,
    password: string,
    code: string,
}


export const sendResetPasswordCodeThunk = createAsyncThunk(
    'reset-password/sendResetPasswordCodeThunk',
    async (email: string) => {

        try {
            return await ResetPasswordApi.sendResetCode(email)
        } catch (e) {
            console.error('ошибка при получении корзины', e);
            throw e;
        }
    }
);

export const verifyCodeThunk = createAsyncThunk<any, outVerify>(
    'reset-password/verifyCodeThunk',
    async (email, code) => {
        try {
            // @ts-ignore
            return await ResetPasswordApi.verifyCode(email, code)
        } catch (e) {
            console.error('ошибка при проверке кода', e);
            throw e;
        }
    }
)

export const resendResetCodeThunk = createAsyncThunk(
    'reset-password/resend-resetCodeThunk',
    async (email: string) => {
        try {
            return await ResetPasswordApi.resendResetCode(email)
        } catch (e) {
            console.error('ошибка при повторной отправке кода на почту', e);
            throw e;
        }
    }
)

export const resetPasswordThunk = createAsyncThunk<any, outResetPassword>(
    'reset-password/reset-passwordThunk',
    async (payload) => {

        const {email, password, code} = payload;

        try {
            return await ResetPasswordApi.resetPassword(email, code, password)
        } catch (e) {
            console.error('ошибка при ресете пароля', e);
            throw e;
        }
    }
)