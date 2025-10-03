import {createSlice} from "@reduxjs/toolkit";
import {getProductDataThunk} from "../thunkCreators/productPage.ts";

interface stateSizeI {
    id: string,
    nameSize: string
}

interface stateReviewsI {
    "id": string,
    "name": string,
    "rating": number,
    "text": string
}

interface state {
    _id: string,
    id: string,
    name: string,
    photo: string,
    oldPrice: number,
    price: number,
    discard: boolean,
    rating: number,
    size: stateSizeI[],
    saleCount: number,
    reviews: stateReviewsI[],
    desc: string,
    isLoading: boolean
}

const initialState: state = {
    _id: '',
    id: '',
    name: '',
    photo: '',
    oldPrice: 0,
    price: 0,
    discard: false,
    rating: 0,
    size: [],
    saleCount: 0,
    reviews: [],
    desc: '',
    isLoading: false

}

const productPageSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDataThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.photo = 'http://localhost:3003' + action.payload.photo
            state.oldPrice = action.payload.oldPrice
            state.price = action.payload.price
            state.discard = action.payload.discard
            state.rating = action.payload.rating
            state.size = [...action.payload.size]
            state.saleCount = action.payload.saleCount
            state.reviews = [...action.payload.reviews]
            state.desc = action.payload.desc
        })

    }
})

export const {

} = productPageSlice.actions;

export default productPageSlice.reducer;