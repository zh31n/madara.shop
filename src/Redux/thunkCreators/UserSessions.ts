import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersSessionsApi} from "../../api";


export const getUsersSessionsThunk = createAsyncThunk(
    'sessions/getUsersSessionsThunk',
    async (id: string) => {
        return await UsersSessionsApi.getUserSessions(+id)
    }
)