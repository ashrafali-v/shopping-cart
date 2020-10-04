const cartActionReducer = (state={},{type,payload}) =>{
    switch(type){
        case 'ADD':
            return [...state, payload];
        case 'DELETE':
            let newArray = state.slice()
            newArray.splice(payload, 1)
            return newArray
        case 'BYNOW':
            return state.map((user) => user.id === payload.id ? {...user,...payload}:user)
        default:
         return state;
    }

}
export default cartActionReducer;