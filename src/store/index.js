import {createStore, applyMiddleware, compose,combineReducers} from 'redux';
import userActionReducer from './reducers/userReducer';
import filmActionReducer from './reducers/filmAction';
import productActionReducer from './reducers/productReducer';
import cartActionReducer from './reducers/cartReducer';
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    userList:userActionReducer,
    filmList:filmActionReducer,
    productList:productActionReducer,
    cartList:cartActionReducer
});
const initialState = {
    userList:[
        // {
        //     id: 1,
        //     email: "george.bluth@reqres.in",
        //     first_name: "George",
        //     last_name: "Bluth",
        //     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        // },
        // {
        //     id: 2,
        //     email: "janet.weaver@reqres.in",
        //     first_name: "Janet",
        //     last_name: "Weaver",
        //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        // },
        // {
        //     id: 3,
        //     email: "emma.wong@reqres.in",
        //     first_name: "Emma",
        //     last_name: "Wong",
        //     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        // }
    ],
    filmList:[
        {
            id:1,
            name:"Avatar"
        },
        {
            id:1,
            name:"Avatar"
        },
        {
            id:1,
            name:"Avatar"
        }
    ],
    productList:[
        {
            id:1,
            name:"Mi TV",
            stock:15,
            image:'url1'
        },
        {
            id:2,
            name:"one plus nord",
            stock:10,
            image:'url2'
        },
        {
            id:3,
            name:"pixel 4a",
            stock:0,
            image:'url3'
        },
    ],
    cartList:[]
}
const middleware = [thunk];
const store = createStore(allReducers,initialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;