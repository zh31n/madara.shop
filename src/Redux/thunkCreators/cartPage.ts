import {createAsyncThunk} from "@reduxjs/toolkit";
import {cartPageApi} from "../../api";


export interface addCartItemI {
    userId: number,
    productId:string,
    count:number,
    size:string
}

export interface outputDataDeleteCartItemI {
    userId: number,
    productId:string,
}

export interface outputDataChangeCounterI {
    userId: number,
    productId:string,
    count:number,
}

export const getCartItemsUserThunk = createAsyncThunk(
    'cart/getCartItemsUser',
    async (id: number) => {
        try {
            return await cartPageApi.getCartItems(id)
        } catch (e) {
            console.error('ошибка при получении корзины', e);
            throw e;
        }
    }
)


export const addCartItemThunk = createAsyncThunk<any,addCartItemI>(
    'cart/addCartItem',
    async (payload) => {
        const {userId,productId,count,size} = payload
        try {
            return await cartPageApi.addCartItem(userId,productId,count,size);
        } catch (e) {
            console.error('ошибка при получении корзины', e);
            throw e;
        }
    }
)

export const deleteCartItemUser = createAsyncThunk<any,outputDataDeleteCartItemI>(
    'cart/deleteCartItemUser',
    async (payload) => {
        const {userId,productId} = payload
        try {
            return await cartPageApi.deleteCartItem(userId,productId);
        } catch (e) {
            console.error('ошибка при получении корзины', e);
            throw e;
        }
    }
)

export const changeCountCartItem = createAsyncThunk<any,outputDataChangeCounterI>(
    'cart/changeCountCartItem',
    async (payload) => {
        const {userId,productId,count} = payload
        try {
            return await cartPageApi.changeCountCartItem(userId,productId,count);
        } catch (e) {
            console.error('ошибка при получении корзины', e);
            throw e;
        }
    }
)