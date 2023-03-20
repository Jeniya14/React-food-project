import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Register from './component/register/register';
import Login from './component/login/login';
import Home from './component/Dashboard/home/home.js';
import Cart from './component/Dashboard/cart/cart';
import Singledish from './component/Dashboard/home/categories/singledish';
import Alldish from './component/Dashboard/All dish/alldish';
import Profile from './component/Dashboard/profile/profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getTotals } from './component/Dashboard/cart/cartslice';
function App() {
  store.dispatch(getTotals())

  return (
    <div style={{height:'100%'}}>
      
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <Route  exact path='/'><Register  /></Route>
        <Route path='/login'> <Login /></Route>
        <Route path='/home'> <Home /></Route>
        <Route path='/cart'> <Cart /></Route>
        <Route path='/singledish'> <Singledish /></Route>
        <Route path='/alldish'> <Alldish /></Route>
        <Route path='/profile'> <Profile /></Route>
      </Switch>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
