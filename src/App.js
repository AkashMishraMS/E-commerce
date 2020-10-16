import React from 'react';
import './App.css';
import Homepage from "./page/Homepage/home";
import { Route, Switch } from "react-router-dom";
import HomePage from './page/Homepage/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
