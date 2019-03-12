import React, {Component} from 'react';

class Register extends Component{
    render(){
        return (
        <div>
            <div>
                <label>Username: </label>
                <input type="text" placeholder="Username"></input>
            </div>

            <div>
                <label>Password:  </label>
                <input type="text" placeholder="Password"></input>
            </div>

            <button type="button">Register</button>
        </div>
        )
    }
}

export default Register;