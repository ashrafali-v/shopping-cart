import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faBell } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetch_users} from '../store/actions/userActions'

function Navbar(props) {
    const { userList,cartList } = props;
    useEffect(() => {
        fetchItemsCount();
    }, []);
    const [usersCount, setUsersCount] = useState();
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
            </ul>
        </nav>
    );
}

export default connect((state)=>({userList:state.userList,cartList:state.cartList}),{
    fetch_users,
  })(Navbar);
