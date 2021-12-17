import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{userSignIn} from '../../store/actions/userActions';
import{login} from '../../store/actions/login.action';
import {connect} from 'react-redux'
import { useEffect } from 'react';
function SigninScreen(props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    //const userInfo  = props.userSignin;
    const { history,isLogin } = props;
    console.log(props);
    const dispatch = useDispatch();
    const signinSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(email,password);
        //dispatch(userSignIn(email,password));
        dispatch(login(true));
        //history.push('/products');
        //props.login(true);
    }
    useEffect(()=>{
        if(isLogin == true){
            history.push(redirect);
            console.log(isLogin);
        }
    },[history,isLogin])
    return(
        <div>
            <form className="signin-form" onSubmit={signinSubmitHandler}>
                <h1>Sign In</h1>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" placeholder="Enter email" required
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" placeholder="Enter password" required
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label />
                    <button className="primary signin-button" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New user? {' '}
                        <Link to="/register">Create Your Account.</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
// const mapStateToProps = ({login:isLogin}) => ({
//     isLogin,
// });
const mapDispatchToprops = dispatch =>({
    //login:(isLogin) => dispatch(login(isLogin))
})
const mapStateToProps = (state) =>({
    isLogin:state.login.isLogin,
})
export default connect(mapStateToProps,mapDispatchToprops)(SigninScreen)