import axios from "axios";
import {feedbackItemDbI, newArrivalsI} from "../types/thunks.ts";


const instance = axios.create({
    baseURL: "http://localhost:3003",
    // withCredentials: true

})


export const api = {
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