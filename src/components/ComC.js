import React,{useContext,getDay} from 'react'
import { BioData,Color } from './ComA'
const ComC = (props) => {
    const {name,getDay} = useContext(BioData);
    const colorName = useContext(Color);
    
    const day = 'Sunday';

    return (
        <>
             <h1>My Name Is: {name}</h1>
             <h1>Color Name Is: {colorName}</h1>
             <button style={{backgroundColor:"green"}} onClick={()=>getDay(day)}>Click Me</button>

        </>
    )
}

export default ComC;
