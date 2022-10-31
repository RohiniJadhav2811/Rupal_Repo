import React, {useState} from 'react'
const Rating = () => {
  let [rating, setRating] = useState(0)
  let [str, setStr] = useState('')
  const readRating = (e) => {
    setRating(e.target.value)
  }
  const showRating = () => {
    if(rating <=5 && rating >0){
      let i=0;
      while(i<rating) {
        str += '*'
        i+=1
      }
      setStr(str)
      str=''
      }
    else{
      alert('Invalid input!!!')
    }
  }
    return(
      <div className='container mt-3'>
        <h3>Question 4</h3>
        <h6>Create a component which will show the rating using star images. The component should receive a
        property rating which should control number of stars to be shown.</h6><br/>
      <div>
        <div>
        <b><label htmlFor=''>Enter Rating Number -  </label></b>
        <input onChange={readRating} type='number' /></div>
        <div>
        <br/>
        <button onClick={showRating} className="btn btn-success">Star Rating</button>
        <h1>{str}</h1>
        </div>
        <h2>{str=''}</h2>
      </div>
      <hr />
      </div>
    )
}
export default Rating