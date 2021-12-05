// what is props in functional components 


import React from 'react';

function ProfileA (props)
{
    return(
        <>
        <h1>{props.text}</h1>
        <h1>{props.data}</h1>
        <h1>{props.obj.class}</h1>


        </>
    )

}
export default ProfileA;