import {createSlice} from "@reduxjs/toolkit";
import {CartItemI} from "../../Pages/Cart/components/CartItem/CartItem.tsx";
import {
    addCartItemThunk,
    changeCountCartItem,
    deleteCartItemUser,
    getCartItemsUserThunk
} from "../thunkCreators/cartPage.ts";
import {clearCartThunk} from "../thunkCreators/ordersThunks.ts";


interface state {
    cartItems: CartItemI[];
    Subtotal: number;
    Delivery: number;
    Total: number;
}

const initialState: state = {
    cartItems: [],
    Subtotal: 0,
    Delivery: 0,
    Total: 0,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementCartItem: (state, action) => {
            state.cartItems = state.cartItems.map(item => {

                if (item.productId === action.payload) {

                    if (item.count > 1) {
                        return {
                            ...item,
                            count: item.count + 1
                        };
                    }
                }

                return item;
            }).filter(item => item !== null && item.count > 0);
        },
        decrementCartItem: (state, action) => {
            state.cartItems = state.cartItems.map(item => {

                if (item.productId === action.payload) {

                    if (item.count > 1) {
                        return {
                            ...item,
                            count: item.count - 1
                        };
                    }
                }

                return item;
            })
        },
        cleanCart: (state) => {
            state.cartItems = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItemsUserThunk.fulfilled, (state, action) => {
                state.cartItems = action.payload.cart;
            })
            .addCase(addCartItemThunk.fulfilled, (state, action) => {
                state.cartItems = action.payload
            })
            .addCase(deleteCartItemUser.fulfilled, (state, action) => {
                state.cartItems = action.payload.cart;
            })
            .addCase(changeCountCartItem.fulfilled, (state, action) => {
                state.cartItems = action.payload.cart;
            })
            .addCase(clearCartThunk.fulfilled, (state) => {
                state.cartItems = []
            })

    }
})

export const {incrementCartItem, decrementCartItem, cleanCart} = cartSlice.actions;

export default cartSlice.reducer;