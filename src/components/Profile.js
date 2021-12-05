// what is state ?
// update state 


import React from 'react';


class Profile extends React.Component {
 constructor(){
     super();
     this.state={
         name:"Asif",
         email:"Admin@text.com",
         count: 0
     }
 }

 updateSet(){
     this.setState({
         name:"Srk",
         email:"srk@text.com",
         count:this.state.count+1
     })
 }

    render() {
        return (
            <>

                <h1>Hello {this.state.name}</h1>
                <h1>Count {this.state.count}</h1>
                <h1>Email: {this.state.email}</h1>

                <button onClick={()=>{
                    this.updateSet()
                }}>Clicked Me</button>


            </>


        )
    }
}
export default Profile;



// this is all about state / contructor / super / setstate() 
// state can be change 
// class components me internal object rheta hai 