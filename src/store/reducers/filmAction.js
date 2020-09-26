const filmActionReducer = (state={},{type,payload}) =>{
    switch(type){
        case 'EDIt':
         return 1;
        case 'ADD':
         return 2;
        case 'DELETE':
         return 3;
        default:
         return state;
    }

}
export default filmActionReducer;