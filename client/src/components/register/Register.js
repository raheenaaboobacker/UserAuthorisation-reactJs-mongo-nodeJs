import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"
import axios from 'axios'
import "../../App.css"
function Register() {
  const navigate=useNavigate()
    const [contacts,setContacts]=useState({
        name:'',
        password:''

    });
  
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
       
    }
    const addContacts=(e)=>{
        e.preventDefault()
        
    //  localStorage.setItem("contactslocal",JSON.stringify(contacts));
        axios.post("http://localhost:5000/register",contacts).then((demo)=>{
          console.log(demo)
        }
        )
        navigate("/login")
        console.log(contacts.name)
 
      }
    return (
      <div>
        <div id='div1'>
          <h2>Register</h2>
          <form className='container' onSubmit={addContacts}>
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
</form><br/><Link to='/login'>
<Button variant="success" type="submit" >
    login to your account
  </Button>
  </Link>
  </div>
      </div>
    );
  }
  
  export default Register;