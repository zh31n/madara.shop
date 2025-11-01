import {createSlice} from "@reduxjs/toolkit";
import {CartItemI} from "../../Pages/Cart/components/CartItem/CartItem.tsx";
import {createOrderThunk} from "../thunkCreators/ordersThunks.ts";

interface State {
    orderItems: CartItemI[],
    totalPrice: number,
    statusCode: number
}


const initialState: State = {
    orderItems: [],
    totalPrice: 0,
    statusCode: 0,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrderItems(state, action) {
            state.orderItems = action.payload;
        },
        setTotalPrice(state, action) {
            state.totalPrice = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrderThunk.fulfilled, (state, action) => {
                state.statusCode = action.payload;
            })

    }
})

export const {setOrderItems,setTotalPrice} = ordersSlice.actions;

export default ordersSlice.reducer;