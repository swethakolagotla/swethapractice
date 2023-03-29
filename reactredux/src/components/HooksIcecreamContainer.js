import React from 'react'
import { useSelector } from 'react-redux'
import { buyIcecream } from '../redux'
import { useDispatch } from 'react-redux'
const HooksIcecreamContainer = () => {
    const icecream=useSelector(state=>state.icecream.numberOfIceCreams)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>numberoficecream-{icecream}</h2>
        <button onClick={()=>dispatch(buyIcecream())}>BUYICECREAM</button>
         </div>
  )
}

export default HooksIcecreamContainer