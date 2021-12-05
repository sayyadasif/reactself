// what is props in class components 

import React from 'react';
 class ProfileB extends React.Component{
    




    render(){
      return(
           <>

<h1>  Hello Props</h1>
<h1>  {this.props.data}</h1>
<h1>  {this.props.text}</h1>


           </>
              
              )



   

    }
 }
 export default ProfileB;