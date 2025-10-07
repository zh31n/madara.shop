import axios from "axios";
import {feedbackItemDbI, newArrivalsI} from "../types/thunks.ts";
import {LoginI} from "../Redux/thunkCreators/authorization.ts";


const instance = axios.create({
    baseURL: "http://localhost:3003",
})


export const HomePageApi = {
    async getNewArrivals() {
       return await  instance.get<newArrivalsI[]>('products/random').then(res => {
           return res.data;
       })
    },
    async getTopSalling() {
        return await instance.get<newArrivalsI>('products/random').then(res => {
            return res.data;
        })
    },
    async getFeedback() {
        return await instance.get<feedbackItemDbI>('feedback').then(res => {
            return res.data;
        })
    }
}

export const CatalogPageApi = {
    async getCatalogItems(page: number) {
        return await instance.get(`products?page=${page}`).then(res => {
            return res.data;
        })
    }
}

export const ProductPageApi = {
    async getProductData(id:string){
        return await instance.get(`products/${id}`).then(res => {
            return res.data;
        })
    },
    async getAlsoLike() {
        return await  instance.get<newArrivalsI[]>('products/random').then(res => {
            return res.data;
        })
    },
}


export const AuthorizationApi = {
    async login(email:string, password:string) {
        return await instance.post<LoginI>(`login`, {email, password}).then(res => {
            return res.data;
        })
    },
    async register(email:string, password:string,login:string) {
        return await instance.post(`auth/register`, {email, password,login}).then(res => {
            return res.data;
        })
    }
}