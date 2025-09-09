import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";


export const getNewArrivalsThunk = createAsyncThunk(
    'main/getNewArrivals',
    async () => {

        try {
            return await api.getNewArrivals();

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
            return await api.getTopSalling();

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
            return await api.getFeedback();

        } catch (error) {

            console.error('Ошибка при запросе товаров:', error);
            throw error;
        }

    }
)