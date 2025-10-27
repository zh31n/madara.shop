import {createSlice} from "@reduxjs/toolkit";
import {getUsersSessionsThunk} from "../thunkCreators/UserSessions.ts";


const initialState = {
    sessions:[]
}

const usersSessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersSessionsThunk.fulfilled,(state, action) => {
                state.sessions = action.payload.sessions;
            })

    }
})


export default usersSessionsSlice.reducer;