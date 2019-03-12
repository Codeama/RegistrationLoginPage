import React, { Component } from 'react';

import './App.css';
import Login from '../Login';
import Register from '../Register';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loginPage: true,
      registrationPage: false

    }
  }

  showRegistration = () => {
    this.setState({
      loginPage: false,
      registrationPage: true
    })
  }

  showLogin = () => {
    this.setState({
      loginPage: true,
      registrationPage: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-loginbox">
          <div onClick={this.showLogin}>Login</div>
          <div onClick={this.showRegistration}>Register</div>
        </div>

       <div>
          {this.state.loginPage ? <Login/>:<Register/>}
          
       </div>
      </div>
    );
  }
}

export default App;
