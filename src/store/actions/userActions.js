export const GET_USER = 'GET_USER'
//export const UPDATE_USER = 'UPDATE_USER'

// export const fetch_users = (dispatch) =>{
//     fetch('https://reqres.in/api/users')
//     .then(res=>res.json())
//     .then(res=>{
//         setTimeout(function(){
//             dispatch({type:GET_USER,payload:res.data})
//         },3000);
//     })

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