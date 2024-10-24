import React, { useEffect,useState } from "react";
// import axios from "axios";
import "./Home.css";
// import Button from '@mui/material/Button';

// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import  { Navigate } from 'react-router-dom'
import { Amplify } from 'aws-amplify';
Amplify.configure(config)

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));
function Login({ signOut, user }) {

  useEffect(() => {
  
    console.log(user)
   
    localStorage.setItem("user",JSON.stringify(user))
    
  }, [user]);
  const [value,setValue] = useState({
    username:"",
    password:""
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(
        {...value,
            [e.target.name]:e.target.value})
            console.log(value)
  }
//   const handleSubmit = (e) => {
//       e.preventDefault()
//    axios.post("http://127.0.0.1:8000/api/token/",value).then(
//        res => {
//         localStorage.setItem("token",res.data.access)
//         localStorage.setItem("username",value.username)
//         // props.changeComponent("Home")
//        }
//    )
//   }s
  
//   const classes = useStyles();

  return (
    <>
    {!user ? 
    <div className={`form`}>
     <h2> Login </h2> 
    <form  noValidate autoComplete="off" s>
  
      <TextField name="username" value={value.username} id="outlined-basic" label="User Name" variant="outlined" onChange={(e) => handleChange(e)}/>
      <TextField value={value.password} id="outlined-basic" label="Password" variant="outlined" onChange={(e) => handleChange(e)} name="password" /> 
      <button type="submit"> Login </button>
    </form>
    {/* <button onClick={() => props.changeComponent("Register")}> Register Here</button> */}

    <div>
     {/* <Heading level={1}>Hello {user.username}</Heading> */}
    <Button onClick={signOut}>Sign out</Button> 
    <h2>Amplify Todos</h2>
    ...
  </div>
    </div>
    : 
    <>
    <Navigate to='/home'  />
    </>
}
</>
  )
}



export default withAuthenticator(Login)
