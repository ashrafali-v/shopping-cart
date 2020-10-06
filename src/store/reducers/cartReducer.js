const cartActionReducer = (state={},{type,payload}) =>{
    let alreadyExist = false;
    switch(type){
        case 'ADD':
            if(state.length > 0 ){
                if(state.length != 0 ){
                    state.forEach((x)=>{
                        if(x.id == payload.id){
                            payload.count = x.count + 1;
                            alreadyExist = true;
                        }
                    })
                }
                if(alreadyExist){
                    return state.map((item) => item.id === payload.id ? {...item,...payload}:item)
                }else{
                    return [...state,payload];
                }
            }else{
                return [...state,payload];
            }
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