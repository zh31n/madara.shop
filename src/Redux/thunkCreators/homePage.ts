import {createAsyncThunk} from "@reduxjs/toolkit";
import {HomePageApi} from "../../api";


export const getNewArrivalsThunk = createAsyncThunk(
    'main/getNewArrivals',
    async () => {

        try {
            return await HomePageApi.getNewArrivals();

        } catch (error) {

            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }

    }
);

export const getTopSallingThunk = createAsyncThunk(
    'main/getTopSalling',
    async () => {
        try {
            return await HomePageApi.getTopSalling();
        } catch (error) {
            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }
    }
);
export const getFeedbackThunk = createAsyncThunk(
    'main/getFeedback',
    async () => {

        try {
            return await HomePageApi.getFeedback();

        } catch (error) {

            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }

    }
)