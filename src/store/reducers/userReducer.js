const users = JSON.parse(localStorage.getItem('userList'));
const userActionReducer = (state={},{type,payload}) =>{
    switch(type){
        case 'GET_USER':
            return JSON.parse(JSON.stringify(payload))
        case 'UPDATE':
            // return state.map((user)=>{
            //     if(user.id != payload.id){
            //         return user
            //     }
            //     return {
            //         ...user,
            //         ...payload
            //       }
            // });
            return state.map((user) => user.id === payload.id ? {...user,...payload}:user)
        case 'INSERT':
            // return{
            //     ...state,
            //     userList:[...state.userList,payload]
            // }
            return [...state, payload];
        case 'DELETE':
            let newArray = state.slice()
            newArray.splice(payload, 1)
            return newArray
            //return state.filter(user=> user.id != payload);
        default:
         return state;
    }

}
export default userActionReducer;