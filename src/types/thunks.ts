

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

interface sizeCatalogDbI{
    id: string,
    nameSize: string,
}

export interface catalogItemDbI {
    id: string,
    name: string,
    photo: string,
    price: number,
    rating: number
    size:sizeCatalogDbI[]

}