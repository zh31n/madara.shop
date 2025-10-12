import {createSlice} from "@reduxjs/toolkit";
import {
    fetchCurrentUser,
    loginThunk, logoutThunk, refreshTokenAuth,
    registerThunk,
    resendEmailThunk,
    verifyEmailThunk
} from "../thunkCreators/authorization.ts";


interface state {
    email: string | null,
    login: string | null,
    id: string | null,
    isRegistered: boolean,
    confirmCode:string
    isConfirmed: boolean,
    isAuth: boolean,
}

const initialState: state = {
    email: null,
    login: null,
    id: null,
    isRegistered: false,
    confirmCode:'',
    isConfirmed: false,
    isAuth:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setConfirmCode: (state, action) => {
            state.confirmCode = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.email = action.payload.userData.email
                state.login = action.payload.userData.login
                state.id = action.payload.userData.id
                state.isAuth = true
                localStorage.setItem('access_token', action.payload.token)
            })
            .addCase(registerThunk.fulfilled,(state) => {
                state.isRegistered = true;
            })
            .addCase(verifyEmailThunk.fulfilled,(state) => {
                state.isRegistered = false
                state.isConfirmed = true
            })
            .addCase(resendEmailThunk.fulfilled,() => {})
            //@ts-ignore
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.id = action.payload.id;
                state.login = action.payload.userName;
                state.isAuth = true
            })
            //@ts-ignore
            .addCase(refreshTokenAuth.fulfilled, (state, action) => {
                localStorage.setItem('access_token',action.payload.token);
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                localStorage.removeItem('access_token');
                state.isAuth = false;
                state.id = null;
                state.email = null;
                state.login = null;
            })
    }
})

export const {setEmail,setConfirmCode} = authSlice.actions;

export default authSlice.reducer;