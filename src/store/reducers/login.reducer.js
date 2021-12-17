const init = {
    isLogin:false
}

export const loginReducer = (state=init,{type,payload}) => {
    switch (type){
        case 'LOGIN':
            return {...state,isLogin:payload}
        case 'LOGOUT':
            return {...state,isLogin:payload}
        default:
            return state;
    }
}