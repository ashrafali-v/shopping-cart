import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import User from './user';
import '../../App.css';
import {connect} from 'react-redux'
import store from '../../store/index'
import {fetch_users,insertUser,updateUser} from '../../store/actions/userActions'
function Users(props) {
  const { userList } = props;
  useEffect(() => {
    fetchItems(props);
  }, []);
  const fetchItems = () =>{
    //store.dispatch(fetch_users);
  }
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState();
  const [addStatus, setAddStatus] = useState(false);
  const updateName = e => {
    setName(e.target.value)
  }
  const updateEmail = e => {
      setEmail(e.target.value)
  }

  function handleShowEdit(item){
    setAddStatus(false);
    setName(item.name);
    setEmail(item.email);
    setId(item.id);
    setShow(true)
  };
  function handleShowAdd(){
    setAddStatus(true);
    setName('');
    setEmail('');
    setShow(true)
  };
  const handleClose = () => setShow(false);
  const saveUser = (event,action) => {
    event.preventDefault();
    setShow(false);
    if(action == 'edit'){
      props.updateUser({id:id,email:email,first_name:name});
      //store.dispatch({type:'UPDATE',payload:{id:id,first_name:name,email:email}});
    }else{
      props.insertUser({id:userList.length + 1,email:email,first_name:name});
      //store.dispatch({type:'INSERT',payload:{id:users.length + 1,first_name:name,email:email}});
    }
  }

  return (
    <div>
      {
        !userList ? (<div>Loading...</div>):(
          <table className="table" style={{width:500+'px'}}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  userList.map((item,index) => (
                    <User name={item.first_name} email={item.email} id={item.id} key={index} index={index} openModal={handleShowEdit}></User>
                  ))
              }
          </tbody>
          </table>
          )}
          <Modal show={show}>
            <Modal.Header closeButton>
              <Modal.Title>User Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={(event) => addStatus?saveUser(event, "add"):saveUser(event, "edit")}>
                <input type="text" name="name" value={name} onChange={updateName}></input>
                <input type="text" name="email" value={email} onChange={updateEmail}></input>
                <button>Submit</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
            </Modal.Footer>
          </Modal>
      <button onClick={handleShowAdd}>Add User</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userList: state.userList
});
export default connect(mapStateToProps,{fetch_users,insertUser,updateUser})(Users);
