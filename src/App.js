import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Register from './component/register/register';
import Login from './component/login/login';
import Home from './component/Dashboard/home/home.js';
import Cart from './component/Dashboard/cart/cart';
import Singledish from './component/Dashboard/home/categories/singledish';
function App() {
  return (
    <div style={{height:'100%'}}>
      
      <BrowserRouter>
      <Switch>
        <Route  exact path='/'><Register  /></Route>
        <Route path='/login'> <Login /></Route>
        <Route path='/home'> <Home /></Route>
        <Route path='/cart'> <Cart /></Route>
        <Route path='/singledish'> <Singledish /></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
