import React, {useState} from 'react'
const Counter = () => {
    const[count, setCount] = useState(0)
    const Increment =() =>{
        console.log('Incrementing....')
        setCount(count+1)
        console.log(`count=${count}`)
    }
    const Decrement =() =>{
        console.log('Decrementing....')
        setCount(count-1)
        console.log(`count=${count}`)
    }
  return (
    <div className='container mt-3'>
    <h3>Question 3</h3>  
    <h6>Create a counter component with two buttons and one label. One button will increment while
    another button will decrement the counter. The label should show the current value of counter.</h6><br/>
    <button onClick={Decrement} className="btn btn-success" > - </button>
    &nbsp;&nbsp;&nbsp;
            <span>
              {count}
            </span>
    &nbsp;&nbsp;&nbsp;
    <button onClick={Increment} type='submit' className="btn btn-success" > + </button>
    <hr></hr>
    </div>
  )
}
export default Counter