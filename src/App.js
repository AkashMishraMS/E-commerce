import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from './page/Homepage/home';
import ShopPage from "./page/shop/shop";
import Header from './Component/Header/header'
import SignSignup from "./page/signIn-signUp/signInSignUp";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' component = {SignSignup}/>
      </Switch>
    </div>
  );
}

export default App;
