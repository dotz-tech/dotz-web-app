import React from 'react'; 
import logo from '../assets/dotz_logo_v1.png';
 
class HomeComponent extends React.Component { 
 
    changeHandler = (event) => { 
        this.setState({value: event.target.value});
    };  
 
    handleSubmission = (event) => { 
        alert('swagged');
    };  
 
    render () {
        return (
            you be logged in amigo
            <div id="home-component-wrapper" class="home-component-wrapper">
                <div id="home-component-body" class="home-component-body">
                    <div class="home-logo">
                        <img src={logo} alt="dotz_logo" />
                    </div>
                </div>
            </div>
        )   
    }   
}

export default HomeComponent; 
