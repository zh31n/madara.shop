import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAlsoLikeThunk, getProductDataThunk} from "../thunkCreators/productPage.ts";
import {newArrivalsI} from "../../types/thunks.ts";

export interface stateSizeI {
    id: string,
    nameSize: string
}

export interface stateReviewsI {
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
    productCount: number,
    currentSize: string,
    alsoLike: newArrivalsI[],
    currentTab: number,
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
    isLoading: false,
    productCount: 1,
    currentSize: '',
    alsoLike: [],
    currentTab: 1
}

const productPageSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {
        incrementProductCount: (state) => {
            state.productCount += 1
        },
        decrementProductCount: (state) => {
            state.productCount -= 1
            if (state.productCount <= 1) {
                state.productCount = 1
            }
        },
        setCurrentSize: (state, action: PayloadAction<string>) => {state.currentSize = action.payload},
        setCurrentTab: (state, action: PayloadAction<number>) => {state.currentTab = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDataThunk.fulfilled, (state, action) => {
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
            .addCase(getAlsoLikeThunk.fulfilled, (state, action) => {
                state.alsoLike = action.payload
            })

    }
})

export const {
    incrementProductCount,
    decrementProductCount,
    setCurrentSize,
    setCurrentTab,
} = productPageSlice.actions;

export default productPageSlice.reducer;