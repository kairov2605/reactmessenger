import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './Auth.scss'
import { LoginForm, RegisterForm } from '../../modules';



const Auth = () => {
    return (
        <div className='auth'>
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginForm} />
                <Route exact path="/register" component={RegisterForm} />
            </div>
        </div>)
}

export default Auth;
