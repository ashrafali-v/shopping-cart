export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const login = payload => ({
    type:LOGIN,
    payload:payload
});
export const logout = payload => ({
    type:LOGOUT,
    payload:payload
});