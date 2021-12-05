import React, { createContext, useState } from 'react'
import ComB from './ComB';

 const BioData = createContext();
 const Color = createContext();
const ComA = (props) => {
    const[day,setDay]=useState("Monday")

    const getDay=(item)=>{
        setDay(item)
    }
    return (
        <>
        {/* {props.children} */}
        <BioData.Provider value={{name:'Asif',getDay:getDay}} >
            <Color.Provider value={'red'}>
          <h2 style={{color:"red"}}>{day}</h2>
          <h1 style={{color:"blue"}}> <ComB /></h1>
          </Color.Provider>
          </BioData.Provider>  
        </>
    )
}

export default ComA;
export {BioData,Color}