import React, { useState } from 'react'

const Form = () => {

    const[name,setName]=useState()
    const[fullname,setFullname]=useState()
   const InputEvent=(event)=>{
       console.log(event.target.value);
       setName(event.target.value)
    }
    const onSubmit=()=>{
       setFullname(name)
       clear()
   }

   const clear=()=>{
       setName('')
   }

    return (
        <>
            <h1>Hello {fullname}</h1>
            <input type='text' placeholder='Enter Your Name' onChange={InputEvent} value={name}/>
            <br/>
            <br/>
            <button onClick={onSubmit}>Clicked Me ✍</button>
        </>
    )
}

export default Form;
