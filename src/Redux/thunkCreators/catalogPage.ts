import {createAsyncThunk} from "@reduxjs/toolkit";
import {CatalogPageApi} from "../../api";


export const getCatalogItemsThunk = createAsyncThunk(
    'catalog/getCatalogItems',
    async (page:number)=>{
        try {
            return await CatalogPageApi.getCatalogItems(page);

        } catch (error) {

            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }
    }
)