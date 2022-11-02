import React, { useState } from 'react'
import FormInput from './FormInput'
import './registration.css'
import Login from './Login';
import Navbar from './navbar';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

const Registration = ({email, password}) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const onChange = (e) =>{
        setValues({ ...values, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

    };
    console.log(values);
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username shoud be 3-16 characters and shouldn't include any special character",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,20}$",
            required: true
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Password don't match",
            label: "ConfirmPassword",
            pattern:  values.password,
            required: true
        },
        {
            id: 5,
            name: "terms",
            type: "checkbox",
            errorMessage: "clik on me",
            required: true
        }
    ];
  return (
    <div className="registration ">
      <form onSubmit={handleSubmit}>
        <h1><b>Register</b></h1>
        {inputs.map((input)=>(
            <FormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={onChange} 
            />
        ))}  
            <div>
            <p>By creating an account you agree to our
                <NavLink>Terms & Conditions</NavLink></p>
                <button className="button">Register</button>
            </div>
            <div className="account">
            Already have an account? <NavLink to="/login">Login</NavLink>
        </div>
        <Routes>
            <Route exact path="/login" element={<Login />} />
        </Routes>
        </form>
    </div>
  )
}

export default Registration
