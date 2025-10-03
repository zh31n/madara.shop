import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProductPageApi} from "../../api";


export const getProductDataThunk = createAsyncThunk(
    'product/getDataProduct',
    async (id:string) => {

        try {
            return await ProductPageApi.getProductData(id);

        } catch (error) {

            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }

    }
);