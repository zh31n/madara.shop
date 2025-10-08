import {createSlice} from "@reduxjs/toolkit";
import {
    fetchCurrentUser,
    loginThunk,
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
}

const initialState: state = {
    email: null,
    login: null,
    id: null,
    isRegistered: false,
    confirmCode:'',
    isConfirmed: false,
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
                console.log(action.payload)
            })
    }
})

export const {setEmail,setConfirmCode} = authSlice.actions;

export default authSlice.reducer;