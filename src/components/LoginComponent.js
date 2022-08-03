import React from 'react'; 
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
                    <div class="login-logo">
                        <img src={logo} alt="dotz_logo" />
                    </div>
                    <div class="login-logo">
                        <text>
                            Log in With
                        </text>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent; 
