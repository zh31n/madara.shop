import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCatalogItemsThunk} from "../thunkCreators/catalogPage.ts";
import {catalogItemDbI} from "../../types/thunks.ts";


interface state {
    catalogItems: catalogItemDbI[]
    filteredProducts: catalogItemDbI[]
    sortBy: string,     // Текущий критерий сортировки
    sizeFilter: string,          // Текущий фильтр по размеру
    minPriceFilter: string,
    maxPriceFilter: string,
    count: number,
    page: number,
    hasMore: boolean,
    pageSize: number,
}

const initialState: state = {
    catalogItems: [],
    filteredProducts: [], // Продукты после фильтрации
    sortBy: 'Max price',     // Текущий критерий сортировки
    sizeFilter: '',          // Текущий фильтр по размеру
    minPriceFilter: '0',
    maxPriceFilter: '99999',
    count: 0,
    page: 1,
    hasMore: true,
    pageSize: 9
}

const catalogPageSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {
        setCurrentSizeFilter: (state, action: PayloadAction<string>) => {state.sizeFilter = action.payload;},

        setMinPriceFilter: (state, action: PayloadAction<string>) => {state.minPriceFilter = action.payload;},

        setMaxPriceFilter: (state, action: PayloadAction<string>) => {state.maxPriceFilter = action.payload;},

        changeSortFilter: (state, action: PayloadAction<string>) => {state.sortBy = action.payload;},

        incrementPage: (state) => {state.page += 1;},
        applyFilters: (state) => {
            // 1. Фильтрация по размеру и цене
            let filtered = state.catalogItems.filter(product => {
                const sizeMatch = state.sizeFilter === '' || product.size.some(s => s.nameSize === state.sizeFilter);
                const priceMatch = product.price >= +state.minPriceFilter && product.price <= +state.maxPriceFilter;
                return sizeMatch && priceMatch;
            });

            switch (state.sortBy) {

                case 'Min price':
                    console.log("state.sortBy:", state.sortBy)
                    filtered.sort((a, b) => a.price - b.price); // Сортировка по возрастанию (правильно)
                    break;
                case 'Max price':
                    console.log("state.sortBy:", state.sortBy)
                    filtered.sort((a, b) => b.price - a.price); // Сортировка по убыванию (правильно)
                    break;
                case 'Rating':
                    console.log("state.sortBy:", state.sortBy)
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    // No sort
                    break;
            }

            state.filteredProducts = filtered;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCatalogItemsThunk.fulfilled, (state, action) => {
                state.catalogItems = [...state.catalogItems, ...action.payload.items];
                state.count = action.payload.count;
                state.filteredProducts = []; // Очищаем отфильтрованные данные, чтобы применить фильтры к новым данным
            })
    }
})

export const {
    setCurrentSizeFilter,
    changeSortFilter,
    setMinPriceFilter,
    setMaxPriceFilter,
    applyFilters,
    incrementPage
} = catalogPageSlice.actions;

export default catalogPageSlice.reducer;