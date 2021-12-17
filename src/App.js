import React from 'react';
import './App.css';
import Products from './components/products/products';
import Users from './components/user/users';
import Navbar from './components/navbar';
import Profile from './components/profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import SigninScreen from './components/registration/register';
import { connect } from 'react-redux';
import { useEffect } from 'react';
library.add(faCheckSquare, faCoffee)
const App = (isLogin) => {
  useEffect(()=>{
    if(isLogin == true){
        //history.push(redirect);
        console.log(isLogin);
    }else{
      console.log(isLogin);
    }
},[isLogin])
  return (
    <Router>
      <div className="wrapper">
      {isLogin ? ( <Navbar />):('')}
        <Switch>
          {!isLogin ? (
            <Route path="/" component={SigninScreen} />
          ):(
            <React.Fragment>
              <Route path="/" exact component={Products} />
              <Route path="/products" component={Products} />
              <Route path="/users" exact component={Users} />
              <Route path="/users/:id" component={Profile} />
              <Route path="/signin" component={SigninScreen} />
            </React.Fragment>
          )
          }
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);
const mapStateToProps = ({login:{isLogin}}) =>({
  isLogin,
})
export default connect(mapStateToProps)(App);
