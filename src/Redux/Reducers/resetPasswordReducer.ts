import {createSlice} from "@reduxjs/toolkit";
import {
    resendResetCodeThunk,
    resetPasswordThunk,
    sendResetPasswordCodeThunk,
    verifyCodeThunk
} from "../thunkCreators/resetPassword.ts";


interface state {
    isSend: boolean,
    code: string,
    email: string,
    isConfirm: boolean,
    isSuccess: boolean,
}

const initialState: state = {
    isSend: false,
    code: "",
    email: '',
    isConfirm: false,
    isSuccess: false
}

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
        setEmailReset: (state, action) => {
            state.email = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendResetPasswordCodeThunk.fulfilled,(state) => {
                state.isSend = true
            })
            .addCase(verifyCodeThunk.fulfilled, (state) => {
                console.log('success')
                localStorage.setItem('code', state.code)
                state.isConfirm = true
            })
            .addCase(resendResetCodeThunk.fulfilled, () => {})
            .addCase(resetPasswordThunk.fulfilled, (state) => {
                state.isSend = false;
                state.isConfirm = false;
                state.isSuccess = true;
                localStorage.removeItem('code');
            })

    }
})

export const {setCode,setEmailReset} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;