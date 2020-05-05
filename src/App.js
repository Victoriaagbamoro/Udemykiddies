import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect
} 
from "react-router-dom";

import Navbar from './components/Navbar'
import Signup from './components/Signup'
import InstructorPage from './components/InstructorPage'
import StudentPage from './components/StudentPage'
import Footer from './components/Footer'




  class App extends Component{
    render(){
      return (
        <div className="App">
          <Router>
            <Navbar/>
            <Switch>
              <Route  path="/" exact component={Signup}></Route>    
              <Route exact
              path="/InstructorPage" component={InstructorPage} ></Route>
              <Route exact
              path="/StudentPage" component={StudentPage} ></Route>     
            </Switch>
            
          
            <Footer/>
          </Router>
        </div>
      );

  }
  
}


export default App;
