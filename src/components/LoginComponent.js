import React, {useState} from 'react'; 
import logo from '../assets/dotz_logo_v1.png';
import './LoginComponent.css';
 
class LoginComponent extends React.Component { 
 
    changeHandler = (event) => { 
        this.setState({value: event.target.value});
    }; 
 
    handleSubmission = (event) => { 
        alert('swagged');
    }; 
 
    render () {
        return (
            <div id="login-component-wrapper" class="login-component-wrapper">
                <div id="login-component-body" class="login-component-body">
                    <img src={logo} alt="logo" />
                    <form onSubmit={this.handleSubmission}>
                        <label>
                            Email:
                            <input type="text" name="email" />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent; 
