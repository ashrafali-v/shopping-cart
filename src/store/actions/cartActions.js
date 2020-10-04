export const addToCart = data =>{
    return{
        type:'ADD',
        payload:data
    }
}
export const removeFromCart = data =>{
    return{
        type:'DELETE',
        payload:data
    }
}
export const buyNow = data =>{
    return{
        type:'BYNOW',
        payload:data
    }
}