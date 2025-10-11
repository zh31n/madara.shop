import {createSlice} from "@reduxjs/toolkit";
import CartItem from "../../Pages/Cart/components/CartItem/CartItem.tsx";
import {getCartItemsUserThunk} from "../thunkCreators/cartPage.ts";




interface state {
    cartItems: typeof CartItem[];
    Subtotal: number;
    Delivery: number;
    Total: number;
}

const initialState: state = {
    cartItems:[],
    Subtotal: 0,
    Delivery:0,
    Total:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCartItemsUserThunk.fulfilled,(state, action) => {
                console.log(action.payload)
                state.cartItems = action.payload;
            })

    }
})

export const {} = cartSlice.actions;

export default cartSlice.reducer;