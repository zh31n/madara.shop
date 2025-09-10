import {createSlice} from "@reduxjs/toolkit";
import {getFeedbackThunk, getNewArrivalsThunk, getTopSallingThunk} from "../thunkCreators/homePage.ts";
import {feedbackItemDbI, newArrivalsI} from "../../types/thunks.ts";


interface initialStateI {
    newArrivals: {
        status: string,
        items: newArrivalsI[] | [],
        error: null | string,
    },
    topSelling: {
        status: string,
        items: newArrivalsI[] | [],
        error: null | string,
    },
    feedback: {
        status: string,
        items: feedbackItemDbI[] | [],
        error: null | string,
    }
}

const initialState:initialStateI = {
    newArrivals: {
        status: 'idle',
        items: [],
        error: null,
    },
    topSelling: {
        status: 'idle',
        items: [],
        error: null,
    },
    feedback: {
        status: 'idle',
        items: [],
        error: null,
    }
}

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewArrivalsThunk.fulfilled, (state, action) => {
                state.newArrivals.items = action.payload
            })

            .addCase(getTopSallingThunk.fulfilled, (state, action) => {
                // @ts-ignore
                state.topSelling.items = action.payload
            })

            .addCase(getFeedbackThunk.fulfilled,(state, action) => {

                // @ts-ignore
                state.feedback.items = action.payload
            })

    }
})


export default mainPageSlice.reducer;