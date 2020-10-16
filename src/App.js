import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from './page/Homepage/home';
import ShopPage from "./page/shop/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path='/shop' component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
