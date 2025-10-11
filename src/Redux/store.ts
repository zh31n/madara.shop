import {configureStore} from '@reduxjs/toolkit'
import mainPageReducer from "./Reducers/MainPageReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import catalogPageReducer from "./Reducers/catalogPageReducer.ts";
import productPageReducer from "./Reducers/productPageReducer.ts";
import authReducer from "./Reducers/authReducer.ts";
import cartReducer from "./Reducers/cartReducer.ts";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        catalogPage: catalogPageReducer,
        productPage: productPageReducer,
        auth: authReducer,
        cart: cartReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;