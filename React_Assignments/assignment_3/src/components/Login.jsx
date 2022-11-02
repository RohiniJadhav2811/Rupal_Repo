import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import FormInput from './FormInput';
import Registration from './Registration';
import ListOfHotel from './ListOfHotel';

const Login = () => {
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
          name: "checkbox",
          type: "checkbox",
          required: true
      }
  ]
return (
     <div className="registration">
      <br/>
    <form onSubmit={handleSubmit}>
      <h1><b>Login</b></h1>
      {inputs.map((input)=>(
          <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange} 
          />
      ))}  
          <p>Remember Me</p>
          <NavLink to='/ListOfHotel' element={<ListOfHotel />} >
          <button className="btn btn-success">Login</button></NavLink>
         <div className="account">
          <NavLink>Forgot Password</NavLink>
          <p>New Account 
              <NavLink to="/Registration" element={<Registration />}>Register</NavLink></p>
         </div>
      </form>
  </div>
)
}

export default Login






