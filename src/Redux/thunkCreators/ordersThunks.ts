import {createAsyncThunk} from "@reduxjs/toolkit";
import {cartPageApi, CreateOrderApi} from "../../api";
import {orderItemOutI} from "../../types/thunks.ts";


export const createOrderThunk = createAsyncThunk(
    'orders/createOrderThunk',
    async (orderData: orderItemOutI) => {
        return await CreateOrderApi.createOrder(orderData)
    }
)

export const clearCartThunk = createAsyncThunk(
    'orders/clearCartThunk',
    async(userId:string) => {
        return  await cartPageApi.clearCart(+userId)
    }
)
