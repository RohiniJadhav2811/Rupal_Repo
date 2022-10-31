import React, {useState} from 'react'
const Registration = () => {
const[firstname, setFirstName]=useState('')
const[lastname, setLastName] = useState('')
const[address, setAddress]=useState('')
const[phone, setPhoneNum] = useState('')
const[email, setEmail] = useState('')
const VerifyUser = () => {
console.log(`firstname=${firstname}`)
console.log(`lastname=${lastname}`)
console.log(`address=${address}`)
console.log(`phone=${phone}`)
console.log(`email=${email}`)
}
const ReadFirstName =(e) =>{
setFirstName(e.target.value)
}
const ReadLastName =(e) =>{
setLastName(e.target.value)
}
const ReadAddress =(e) =>{
setAddress(e.target.value)
}
const ReadPhone =(e) =>{
setPhoneNum(e.target.value)
}
const ReadEmail =(e) =>{
setEmail(e.target.value)
}
return (
<div className='container mt-3'>
<h3>Question 2</h3>  
<h6>Create a registration component to get the user details. The component should contian a register
button.</h6>
    <form className='row g-3'>
    <div >
        <label htmlFor="inputEmail4" className='form-lable'>FirstName:</label>
        <input onChange={ReadFirstName} type="text"  className='form-control' placeholder='Rupal' />
    </div>
    <div>
        <label htmlFor="">LastName: </label>
        <input onChange={ReadLastName} type="text" className='form-control' placeholder='Parikh'/>
    </div>
    <div>
        <label htmlFor="">Address : </label>
        <input onChange={ReadAddress} type="text" className='form-control' placeholder='Pune'/>
    </div>
    <div>
        <label htmlFor="">Phone-No : </label>
        <input onChange={ReadPhone} type="phone" className='form-control' placeholder='+918329761679' />
    </div>
    <div>
        <label htmlFor="">Email-Id : </label>
        <input onChange={ReadEmail} type="email" className='form-control' placeholder='abc@gmail.com' />
    </div>
        <div>
            <button type='reset' className='btn btn-success'>Reset</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={VerifyUser} type="button" className="btn btn-success">Register</button>
        </div>
        <hr></hr>
        </form>    
    </div>
     )
    }
    export default Registration