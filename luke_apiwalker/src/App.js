import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route 
} from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router";
import Form from './components/Form';
import { useHistory } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import About from './components/About';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Switch>
      <Route exact path={"/"}>
          <Form/>
        </Route>
        <Route exact path={"/find/:name/:number"}>
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
