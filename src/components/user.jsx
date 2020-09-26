import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteUser} from '../store/actions/userActions'
const User = (props) => {
    const deleteUserAction = (userId) => {
      props.deleteUser(userId);
    };
    return(
        <React.Fragment>
                  <tr>
                    <td>
                      <Link to={`/users/${props.id}`}>{props.name}</Link>
                    </td>
                    <td key={props.id}>
                      {props.email}
                    </td>
                    <td>
                      <button variant="primary" onClick={()=>props.openModal(props)}>Edit</button>
                      <button variant="primary" onClick={()=>deleteUserAction(props.index)}>Delete</button>
                    </td>
                  </tr>
        </React.Fragment>
    );
}

export default connect((state)=>({userList:state.userList}),{
  deleteUser
})(User);