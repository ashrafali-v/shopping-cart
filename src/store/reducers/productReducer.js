const productActionReducer = (state={},{type,payload}) =>{
    switch(type){
        case 'ADDTOCART':
            console.log(state);
            const cart = [...state.cart,payload];
            return [...state, cart];
        case 'BYNOW':
            return state.map((user) => user.id === payload.id ? {...user,...payload}:user)
        default:
         return state;
    }

}
export default productActionReducer;