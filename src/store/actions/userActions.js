import Axios from 'axios';
export const GET_USER = 'GET_USER';
export const  USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const  USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
//export const UPDATE_USER = 'UPDATE_USER'

// export const fetch_users = (dispatch) =>{
//     fetch('https://reqres.in/api/users')
//     .then(res=>res.json())
//     .then(res=>{
//         setTimeout(function(){
//             dispatch({type:GET_USER,payload:res.data})
//         },3000);
//     })
export const userSignIn = (email,password) => async(dispatch) =>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
    try{
        /*------------Here we need to call the signin API--------------*/
        // const data = await fetch('https://reqresd.in/api/srrrrtusers123');
        // const items = await data.json();

        if(email === 'asd' && password ==='1234'){
            dispatch({type:USER_SIGNIN_SUCCESS,payload:{email,password}});
            localStorage.userInfo = JSON.stringify({email,password});
        }else{
            dispatch({type:USER_SIGNIN_ERROR,payload:'Username or password is not correct'})
        }
    }catch(error){
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.mesage
        });
    }

}
export const fetch_users = async (dispatch) => {
    const data = await fetch('https://reqres.in/api/users');
    const items = await data.json();
    dispatch({type:GET_USER,payload:items.data})
}

export const insertUser = (data) =>{
    return{
        type:'INSERT',
        payload:data
    }
}
export const updateUser = data =>{
    return{
        type:'UPDATE',
        payload:data
    }
}
export const deleteUser = userId =>{
    return{
        type:'DELETE',
        payload:userId
    }
}
// export const insetUser = data =>{
//     return{
//         type:'INSERT',
//         payload:data
//     }
// }