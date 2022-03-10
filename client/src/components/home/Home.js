import React from 'react'
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

function Home() {
  const [data,setData]=useState([ ]);
  useEffect(()=>{
const tokenValue=localStorage.getItem("localtoken");
console.log("tokenValue"+tokenValue)
    axios.get("http://localhost:5000/home",{headers: {"Authorization":`Bearer ${tokenValue}`}}
     
    ).then(resp=>{
      setData(resp.data.data)
      console.log(data)
    })
    })
  return (
    <div><h1>Home</h1>
    <h4>Welcome {data}</h4></div>
  )
}

export default Home