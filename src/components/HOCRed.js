import React from 'react'

const HOCRed = (props) => {
    return (
        <>
           <h2 style={{backgroundColor:'red', width:100}}><props.cmp/></h2> 
        </>
    )
}

export default HOCRed;
