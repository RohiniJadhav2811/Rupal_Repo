import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const validateUser = () => {
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
  }
  const readEmail = (e) => {
    setEmail(e.target.value)
  }
  const readPassword = (p) => {
    setPassword(p.target.value)
  }
  return (
    <div className='container mt-3 '>
    <h2>React Assignment 2</h2>
    <br/>
    <h3>Question 1</h3>  
    <h6>Create a login component to get email address and password from user. The component should
    contian a login button. The login button should print the user credentials on console.</h6>
    <form>
      <div className='form-group'>
        <label htmlFor=''>Email</label>
        <input onChange={readEmail} type='email' className='form-control' placeholder='Enter email' />
      </div><br />

      <div className='form-group'>
        <label htmlFor=''>Password</label>
        <input onChange={readPassword} type='password' className='form-control' placeholder='Password'/>
      </div><br />      
      <div>
      <button type='reset' className='btn btn-success'>Reset</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <button onClick={validateUser} type='submit' className='btn btn-success'>Login</button>
        </div>
      <hr />
      </form>
    </div>
  )
}
export default Login






