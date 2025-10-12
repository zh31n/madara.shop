import axios from "axios";
import {feedbackItemDbI, newArrivalsI} from "../types/thunks.ts";
import {LoginI} from "../Redux/thunkCreators/authorization.ts";


const instance = axios.create({
    baseURL: "http://localhost:3003",
    withCredentials: true,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})

instance.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 500) {
        try {
            const response = await axios.get(`http://localhost:3003/auth/refresh`,
                {withCredentials: true});
            localStorage.setItem('access_token',response.data.access_token);
            return instance.request(originalRequest);
        } catch (e) {
            console.error('not authenticated');
        }
    }
})


export const HomePageApi = {
    async getNewArrivals() {
        return await instance.get<newArrivalsI[]>('products/random').then(res => {
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
    async getProductData(id: string) {
        return await instance.get(`products/${id}`).then(res => {
            return res.data;
        })
    },
    async getAlsoLike() {
        return await instance.get<newArrivalsI[]>('products/random').then(res => {
            return res.data;
        })
    },
}


export const AuthorizationApi = {
    async login(email: string, password: string) {
        return await instance.post<LoginI>(`auth/login`, {loginorEmail: email, password}).then(res => {
            return res.data;
        })
    },
    async register(email: string, password: string, login: string) {
        return await instance.post(`auth/register`, {email, password, login}).then(res => {
            return res.data;
        })
    },
    async verifyEmail(code: string) {
        return await instance.post(`auth/verify`, {token: code}).then(res => {
            return res.data;
        })
    },
    async resendEmail(email: string) {
        return await instance.post(`auth/resend-email`, {email: email}).then(res => {
            return res.data;
        })
    },
    async getCurrentUser() {
        return await instance.get('/users/profile').then(res => {
            return res.data;
        })
    },
    async refreshTokenAuth() {
        return await instance.post(`auth/refresh`,)
            .then(res => {
                return res.data;
            })
    },
    async logout() {
        return await instance.delete('auth/logout').then(res => {
            return res.data;
        })
    }
}


export const cartPageApi = {
    async getCartItems(id: number) {
        return await instance.get(`cart/${id}`).then(res => {
            return res.data;
        })
    },
    async addCartItem(userId: number, productId: string, count: number, size: string) {
        return await instance.post(`cart/add`, {userId, productId, count, size}).then(res => {
            return res.data;
        })
    },
    async deleteCartItem(id: number, productId: string) {
        return await instance.delete(`cart/delete`,{data: {userId: id, productId}}).then(res => {
            return res.data;
        })
    },
    async changeCountCartItem(userId: number, productId: string, count: number) {
        return await instance.post(`cart/update-count`, {userId, productId, count}).then(res => {
            return res.data;
        })
    }


}