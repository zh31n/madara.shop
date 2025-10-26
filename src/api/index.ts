import axios from "axios";
import {feedbackItemDbI, newArrivalsI} from "../types/thunks.ts";
import {fetchCurrentUser, LoginI} from "../Redux/thunkCreators/authorization.ts";
import {useAppDispatch} from "../Redux/store.ts";


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
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 500 || error.response.status === 401) {
        try {
            const response = await axios.post(`http://localhost:3003/auth/refresh`, {withCredentials: true});
            if(response.status === 200) {
                debugger
                localStorage.setItem('access_token', response.data.access_token);
                const dispatch = useAppDispatch()
                dispatch(fetchCurrentUser())
            }
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
        return await instance.delete(`cart/delete`, {data: {userId: id, productId}}).then(res => {
            return res.data;
        })
    },
    async changeCountCartItem(userId: number, productId: string, count: number) {
        return await instance.post(`cart/update-count`, {userId, productId, count}).then(res => {
            return res.data;
        })
    }
}


export const ResetPasswordApi = {
    async sendResetCode(email: string) {
        return await instance.post(`auth/forgot-password`, {email: email}).then(res => {
            return res.data;
        })
    },
    async verifyCode(email: string, code: string) {
        return await instance.post(`auth/verify-forgot-code`, {email, code}).then(res => {
            return res.data;
        })
    },
    async resendResetCode(email: string) {
        return await instance.post(`auth/resend-forgot-code`, {email: email}).then(res => {
            return res.data;
        })
    },
    async resetPassword(email: string, code: string, password: string) {
        return await instance.post(`auth/reset-password`, {email, password, code}).then(res => {
            return res.data;
        })
    }
}


export const ProfilePageApi = {
    async changeLoginUser(id: string, newLogin:string) {
        return await instance.post(`users/change-login`, {id, newLogin}).then(res => {
            return res.data;
        })
    },
    async sendChangeEmailCode(oldEmail: string, email:string) {
        return await instance.post(`users/send-change-email`, {email,oldEmail}).then(res => {
            return res.data;
        })
    },
    async resendChangeEmailCode(oldEmail: string, email:string) {
        return await instance.post(`users/resend-email-code`, {email,oldEmail}).then(res => {
            return res.data;
        })
    },
    async changeEmail(email:string,id:string) {
        return await instance.post(`users/change-email`, {email,id}).then(res => {
            return res.data;
        })
    }
}