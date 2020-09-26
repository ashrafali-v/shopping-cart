import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetch_users} from '../store/actions/userActions'
function Navbar(props) {
    const { userList } = props;
    useEffect(() => {
        fetchItemsCount();
    }, []);
    const [usersCount, setUsersCount] = useState();
    const fetchItemsCount = () =>{

    }
    return (
        <nav>
            <div>{userList.length}</div>
            <ul className="nav-links">
                <img className="navbar-logo" src={logo} alt="logo" />  
                <Link to="/users">
                    <li>Users</li>
                </Link>
                <Link to="/films">
                    <li>Films</li>
                </Link>
                <Link to="/films">
                    <li>123</li>
                </Link>
            </ul>
        </nav>
    );
}

export default connect((state)=>({userList:state.userList}),{
    fetch_users,
  })(Navbar);
