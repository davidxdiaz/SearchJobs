import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import Resultados from './Resultados';
import Principal from './Principal';

class App extends Component {
  render() {
    return (
      <div>
      <div className = "header">
      </div>
      <div className = "header2">
      </div>
      <div className = "header">
      </div>
      <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Principal}/>
          <Route path="/resultados/:empleo" component={Resultados}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
