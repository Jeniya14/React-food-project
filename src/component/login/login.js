import React, { useState } from "react";
import '../register/register.css'
import { useHistory } from "react-router-dom";
function Login(){
    const [loginName,setLoginName]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    // const [loginNameErr,setLoginNameErr]=useState(false)
    const [incorrectErr,setincorrectErr]=useState(false)

      const history=useHistory()
    function Loginvalidation() { 
         
//              if((loginName.trim().length!==0)||(loginPassword.trim().length!==0)){
//                 setLoginNameErr(false)
                   
//     }
//     else{ 
//         setLoginNameErr(true)
           
// }  
let register= JSON.parse (sessionStorage.getItem('user') )
if((register.name!==loginName)&&(register.password!==loginPassword)){
    setincorrectErr(true)
 }
 else{
    setincorrectErr(false)
    history.push('/home') 
 }
    
}
  return(
        <div className="login-body">
        <div className="login-main">
            <h1>Login </h1>
            <br />
             <p>Name</p>
            <input type='text' value={loginName} onChange={(e)=>{setLoginName(e.target.value)}}></input>
            {incorrectErr&& <small>please enter correct  username</small>}
            <br />
            <p>Password</p>
            <input type='password' value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}></input>
            {incorrectErr&& <small>please enter correct  password</small>}
            <br />
             {/* {loginNameErr&& <small>please enter the email and password </small>} */}
            <button onClick={Loginvalidation}>Login</button>
        </div>
        </div>
    )
}
export default Login