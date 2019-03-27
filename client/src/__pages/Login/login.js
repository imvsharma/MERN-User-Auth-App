import React from 'react';
import './login.css';

export default class LoginPage extends React.Component {
    render () {
        return (
            <div className="login-container">
                <div className="login-header">
                    Welcome back
                </div>
                <div className="row social-row">
                    <div className="col social-item">
                        Google
                    </div>
                    <div className="col social-item">
                        Facebook
                    </div>
                </div>
                <form autoComplete="off">
                <input autoComplete="false" name="hidden" type="text" className="hidden" />
                    <div className="input-container">
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="input-container">
                        <input type="password" placeholder="Enter your password" />
                    </div>

                     
                </form>
            </div>
        )
    }
}