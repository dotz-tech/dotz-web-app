import React from 'react'; 
import logo from '../assets/dotz_logo_v1.png';
import google_focus from '../assets/btn_google_signin_light_focus_web.png';
import google_normal from '../assets/btn_google_signin_light_normal_web.png';
import google_pressed from '../assets/btn_google_signin_light_pressed_web.png';
import './LoginComponent.css';
const { REACT_APP_WRECKING_BALL_BASE_URL } = process.env;
 
class LoginComponent extends React.Component { 
 
    changeHandler = (event) => { 
        this.setState({value: event.target.value});
    }; 
 
    handleSubmission = (event) => { 
        alert('swagged');
    }; 
 
    render () {
        return (
            <div id="login-component-wrapper" className="login-component-wrapper">
                <div id="login-component-body" className="login-component-body">
                    <div className="login-logo">
                        <img src={logo} alt="dotz_logo" />
                    </div>
                    <div>
                        <a href={`${REACT_APP_WRECKING_BALL_BASE_URL}/oauth2/authroize/google}`}>
                            <img src={google_normal}
                                onMouseOver={e => e.currentTarget.src = google_focus}
                                onMouseDown={e => e.currentTarget.src = google_pressed}
                                alt="google_sign_in" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent; 
