import React from 'react'
const Child = (props) => {
    const data ="Asif Sayyad"
    return (
    <>
          <h1>I Am {props.Name}</h1>  
          <button onClick={()=>props.alert(data)}>Clicked Me</button>
        </>
    )
}

export default Child;
