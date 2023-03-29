import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'
const HooksCakeContainer = () => {
    const cakes=useSelector(state=>state.cake.numberOfCakes)
  const dispatch=useDispatch()
    return (
    <div> 
        <h2>Num Of Cakes-{cakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>BuY Cake</button>
    </div>
  )
}

export default HooksCakeContainer