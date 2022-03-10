import React,{useState,useEffect} from "react";
import {Form,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../../App.css"

function Login() {
  const navigate=useNavigate()
    // const data1=JSON.stringify(validdata)
    // // const [data,setData]=useState({
    // //     name:'',
    // //     password:''

    // // });
    // // setData([...data,{...data1}])   
    // console.log("first"+data1[0].name);
    // useEffect(()=>{
    //     // const localdata=JSON.parse(window.localStorage.getItem("contactslocal"));
    //     // console.log("bfvhgfv");
    //   //  console.log("dfhghvfg"+JSON.stringify(localdata));
    //   },[])

    const [contacts,setContacts]=useState({
        name:'',
        password:''

    });
    const homeRender=(e)=>{
      e.preventDefault()
      navigate('/register')
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       
    }
    const validation=(e)=>{
        e.preventDefault();
        console.log("login data"+JSON.stringify(contacts)) ;
        axios.post("http://localhost:5000/login",contacts).then(response => {
         console.log("response.data.data"+response.data.data) ;
       if(response.data.data==="user not found")
        {
            alert("user not found");
            navigate('/register')
        }else if(response.data.data==="true"){
          console.log(response.data.data) ;
          localStorage.setItem("localtoken",response.data.token)
          navigate('/home')
        }else if(response.data.data==="password not found")
        {
            alert("password not found");
            navigate('/register')
        }
       })
       
    //  for(let i=0;i<3;i++){
    //      if(data[i].name===contacts.name && data[i].password===contacts.password)
    //      {
    //          console.log("validation successful")
    //      }
    //  } 


    }
    return (
      <div className="App">
        <div id="div1">
       <h2>Login</h2>
          <form className='container' onSubmit={validation}>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Name</Form.Label>
    <input type="text" placeholder="Enter name" name='name' onChange={handleInputChange} value={contacts.name} required/>
   
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Number</Form.Label>
    <input type="number" placeholder="Enter password" name='password' onChange={handleInputChange} value={contacts.password} required />
   
  </Form.Group>
  
  <Button variant="success" type="submit" >
    Submit
  </Button>
</form>
<br/>
<Button variant="success" type="submit" onClick={homeRender} >
    register
  </Button>

      </div>
      </div>
    );
  }
  
  export default Login;