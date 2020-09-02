import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFarmComponent from './components/CreateFarmComponent';
import ViewFarmComponent from './components/ViewFarmComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/farms" component = {ListUserComponent}></Route>
                          <Route path = "/add-farm/:id" component = {CreateFarmComponent}></Route>
                          <Route path = "/view-farm/:id" component = {ViewFarmComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;