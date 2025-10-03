import axios from "axios";
import {feedbackItemDbI, newArrivalsI} from "../types/thunks.ts";


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
    }
}