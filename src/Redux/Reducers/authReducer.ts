import {createSlice} from "@reduxjs/toolkit";
import {
    changeEmailThunk,
    changeLoginUserThunk,
    fetchCurrentUser,
    loginThunk, logoutThunk, refreshTokenAuth,
    registerThunk, resendChangeEmailCodeThunk,
    resendEmailThunk, sendChangeEmailCodeThunk, verifyEmailChangeCode,
    verifyEmailThunk
} from "../thunkCreators/authorization.ts";


interface state {
    email: string | null,
    login: string | null,
    id: string | null,
    isRegistered: boolean,
    confirmCode: string
    isConfirmed: boolean,
    isAuth: boolean,
    isChangeLoginSuccess: boolean
    isChangeEmailSuccess: boolean
}

const initialState: state = {
    email: null,
    login: null,
    id: null,
    isRegistered: false,
    confirmCode: '',
    isConfirmed: false,
    isAuth: false,
    isChangeLoginSuccess: false,
    isChangeEmailSuccess: false,
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
        },
        setNewLoginR: (state, action) => {
            state.login = action.payload;
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
            .addCase(registerThunk.fulfilled, (state) => {
                state.isRegistered = true;
            })
            .addCase(verifyEmailThunk.fulfilled, (state) => {
                state.isRegistered = false
                state.isConfirmed = true
            })
            .addCase(resendEmailThunk.fulfilled, () => {
            })
            //@ts-ignore
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.id = action.payload.id;
                state.login = action.payload.userName;
                state.isAuth = true
            })
            //@ts-ignore
            .addCase(refreshTokenAuth.fulfilled, (state, action) => {
                localStorage.setItem('access_token', action.payload.token);
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                localStorage.removeItem('access_token');
                state.isAuth = false;
                state.id = null;
                state.email = null;
                state.login = null;
            })

            // user change
            .addCase(changeLoginUserThunk.fulfilled, (state, action) => {
                if (action.payload.data.status === 200) {
                    state.isChangeLoginSuccess = true
                }
            })
            .addCase(sendChangeEmailCodeThunk.fulfilled, () => {
            })
            .addCase(resendChangeEmailCodeThunk.fulfilled, () => {})
            .addCase(changeEmailThunk.fulfilled,(state, action) => {
                state.email = action.payload.data.email
            })
            .addCase(verifyEmailChangeCode.fulfilled, (state, action) => {
                if (action.payload.data.status === 200) {
                    state.isChangeLoginSuccess = true
                }
            })
    }
})

export const {setEmail, setConfirmCode,setNewLoginR} = authSlice.actions;

export default authSlice.reducer;