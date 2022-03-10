import React from 'react';
import Login from "../src/components/login/Login"
import Home from './components/home/Home';
import './App.css';
import Register from './components/register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  // const getData=(a)=>{
  //   console.log(a)
  //   setContacts([...contacts,{...a}])
  // }
  // useEffect(()=>{
  //   const localdata=JSON.parse(localStorage.getItem("contactslocal"));
  //   setContacts(localdata)
  //   console.log(contacts);
  // },[])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  
  
    </div>
  );
}

export default App;
