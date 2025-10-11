import {createAsyncThunk} from "@reduxjs/toolkit";
import {cartPageApi} from "../../api";


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