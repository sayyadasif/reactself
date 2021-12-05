import React from 'react'
import ComC from './ComC'



const ComB = (props) => {
    return (
        <>
         <h1><ComC/> </h1>
         <h2>{props.color}</h2>
        </>
    )
}

export default ComB;
