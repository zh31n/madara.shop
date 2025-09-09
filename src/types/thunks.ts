

export interface resNewArrivalsI {
    data: [],

}

export interface newArrivalsI{
    id: string,
    photo:string,
    name: string,
    price: number,
    discard: boolean
    rating: number
}

export interface feedbackItemDbI {
    _id: string
    name: string
    text: string
    rating: number
}