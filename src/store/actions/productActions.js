export const addToCart = data =>{
    return{
        type:'ADDTOCART',
        payload:data
    }
}
export const buyNow = data =>{
    return{
        type:'BYNOW',
        payload:data
    }
}