import React from 'react'

import Profile from "./components/Profile";
import ProfileA from "./components/ProfileA";
import ProfileB from "./components/ProfileB";
import Hooks from "./components/Hooks";
import Counter from "./components/Counter";
import HOCRed from './components/HOCRed';
import HOCblue from './components/HOCblue';
import Form from "./components/Form";
import Child from "./components/Child";
// import PureCom from "./components/PureCom";
import Usememo from "./components/Usememo";
import UseReduser from "./components/UseReduser";
import ComA from "./components/ComA";
import Navbar from './components/Navbar1';


import "./App.css"

const elem=React.createElement('div',null,'hello asif .....')


function App() {
  
  function User(data) {
    alert(data) 
  }
  
  
  return (
    <div className="App">
      <Navbar/>
      
      {/* <ComA/> */}
   
      {/* <h1>hello asif how are you</h1> */}
      {/* <UseReduser/> */}
      {/* <Usememo/> */}
      {/* <PureCom/> */}
      {/* <Child Name={'Asif'} alert={User}/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <HOCRed cmp={Counter}/> */}
      {/* <HOCblue cmp={Counter}/> */}
      {/* <Profile/> */}
      {/* <Hooks/> */}
      {/* <ProfileA text="Hello Asif"  data="Hello Data" obj={{class:6}}/> */}
      {/* <ProfileB data="Hello Data" text="Hello Asif"  /> */}
    </div>
  );
}






export default App;
