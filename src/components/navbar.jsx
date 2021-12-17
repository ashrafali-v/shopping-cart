import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { faShoppingBag,faBell } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetch_users} from '../store/actions/userActions'
import{logout} from '../store/actions/login.action';
import { useHistory } from 'react-router'
function Navbar(props) {
    let history = useHistory();
    const { cartList,isLogin } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        fetchItemsCount();
    }, []);
    useEffect(()=>{
        if(isLogin == false){
            history.push('/signin');
            console.log(isLogin);
        }
    },[history,isLogin])
    const signOut = (e) =>{
        e.preventDefault();
        dispatch(logout(false));
    };
    // const userInfo = props.userSignin;
    //console.log(props.isLogin);
    //const { history } = props;
    //const [usersCount, setUsersCount] = useState();
    const fetchItemsCount = () =>{

    }
    return (
        <nav>
            <span><FontAwesomeIcon icon={faShoppingBag} />{cartList.length}</span>
            <ul className="nav-links">
                <img className="navbar-logo" src={logo} alt="logo" />  
                <Link to="/products">
                    <li>Products</li>
                </Link>
                <Link to="/users">
                    <li>Users</li>
                </Link>
                <button onClick={signOut}>Sign Out</button>
            </ul>
        </nav>
    );
}

export default connect((state)=>({userList:state.userList,cartList:state.cartList,login:state.login,isLogin:state.login.isLogin}),{
    fetch_users
  })(Navbar);