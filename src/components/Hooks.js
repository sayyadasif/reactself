import React, { useState,useEffect } from 'react'

const Hooks = () => {
const[count,setCount]=useState(0)
useEffect(()=>{
    console.log(count)
})

    return (
        <>
           <h1> Welcome To Hooks {count} </h1> 
           <button onClick={()=>{
               setCount(count+1)
           }}>Clicked Me </button>
        </>
    )
}

export default Hooks;
