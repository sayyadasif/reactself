import React, { useReducer } from 'react'


const reducer =(state,action)=>{

    // if (action.type==="INC") {
        
    //     return state+1;
    // }
    // if (action.type==="DEC") {
        
    //     return state-1;
    // }
    // return state;

switch (action.type) {
    case 'INC':
        return state+1;
        
    case 'DEC':
        return state-1;
        
       

    default :
    return state;
     
}
    
}
const UseReduser = () => {

    const[state,dispatch]=useReducer(reducer,0)

    return (
        <>
           <h1>{state}</h1> 
           <button onClick={()=>dispatch({type:"INC"})}>Clicked Me</button>
           <button onClick={()=>dispatch({type:"DEC"})}>Clicked Me</button>
        </>
    )
}

export default UseReduser;
