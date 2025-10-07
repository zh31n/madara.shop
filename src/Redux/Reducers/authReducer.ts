import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, registerThunk} from "../thunkCreators/authorization.ts";


interface state {
    email: string | null,
    login: string | null,
    id: string | null,
    isRegistered: boolean,
}

const initialState: state = {
    email: null,
    login: null,
    id: null,
    isRegistered: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.email = action.payload.userData.email
                state.login = action.payload.userData.login
                state.id = action.payload.userData.id
                localStorage.setItem('access_token', action.payload.access_token)
            })
            .addCase(registerThunk.fulfilled,(state) => {
                state.isRegistered = true;
            })
    }
})

export const {} = authSlice.actions;

export default authSlice.reducer;