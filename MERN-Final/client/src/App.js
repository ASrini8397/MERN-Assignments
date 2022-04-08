import React, {useEffect, useState} from 'react';
import './App.css';
import {Link, Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Display from './components/Display';
import Form from './components/Form';
import Update from './components/Update';
import One from './components/One'

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
      
      

      <Switch>
      
      <Route exact path="/pets">
          <Display/>
        </Route>


        <Route exact path="/">
          <Redirect to= "/pets" />
        </Route>

        <Route exact path={"/pet/new"}>
          <Form/>
        </Route>
        <Route exact path={"/pet/update/:id"}>
          <Update/>
        </Route>

        <Route exact path={"/pet/show/:id"}>
              <One/>
          </Route>

      </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
