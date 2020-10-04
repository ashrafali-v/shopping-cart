import React from 'react';
import './App.css';
import Products from './components/products/products';
import Users from './components/user/users';
import Navbar from './components/navbar';
import Profile from './components/profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faCoffee)
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={Profile} />
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

export default App;
