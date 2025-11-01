


export const summaryCartPrice = (cartItems) => {
    const sum  = cartItems.reduce((accumulator, currentProduct) => {
        return accumulator + (currentProduct.price * currentProduct.count);
    }, 0);
    let persent = '20%'
    let discardSum =  sum / 100 * parseFloat(persent)
    return sum - (discardSum - 15);
}