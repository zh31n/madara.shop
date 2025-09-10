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
    hasMore: boolean
}

const initialState: state = {
    catalogItems: [],
    filteredProducts: [], // Продукты после фильтрации
    sortBy: 'Max price',     // Текущий критерий сортировки
    sizeFilter: '',          // Текущий фильтр по размеру
    minPriceFilter: '10',
    maxPriceFilter: '99999',
    count: 0,
    page: 1,
    hasMore: true,
}

const catalogPageSlice = createSlice({
    name: 'catalogPage',
    initialState,
    reducers: {
        setCurrentSizeFilter: (state, action: PayloadAction<string>) => {
            state.sizeFilter = action.payload;
            state.page = 1;
        },
        setMinPriceFilter: (state, action: PayloadAction<string>) => {
            state.minPriceFilter = action.payload;
            state.page = 1;

        },
        setMaxPriceFilter: (state, action: PayloadAction<string>) => {
            state.maxPriceFilter = action.payload;
            state.page = 1;

        },
        changeSortFilter: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
            state.page = 1;

        },
        incrementPage: (state) => {
            state.page += 1;
        },
        applyFilters: (state) => {
            // 1. Фильтрация по размеру и цене
            let filtered = state.catalogItems.filter(product => {
                const sizeMatch = state.sizeFilter === '' || product.size.some(s => s.nameSize === state.sizeFilter);
                const priceMatch = product.price >= +state.minPriceFilter && product.price <= +state.maxPriceFilter;
                return sizeMatch && priceMatch;
            });

            // 2. Сортировка
            switch (state.sortBy) {
                case 'Min price':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'Max price':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'Rating':
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
                state.catalogItems = state.catalogItems.concat(action.payload.items); // Добавляем продукты к существующим
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