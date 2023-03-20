import React ,{useState}from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import profile from '../image/profile.png'
import '../profile/profilr.css'
function Profile(){
    let data= JSON.parse (sessionStorage.getItem('user') )
    const[inputValue,setInput]=useState('')
    const [inputErr,setinputErr]=useState(false)
    const [list,listvalue]=useState([])
    function AddEvent(){
        if(inputValue.trim().length===0){
            setinputErr(true)
        }
        else
        {
            setinputErr(false)
            let newList=[...list,inputValue]
            listvalue(newList)
            setInput('')
    }
    }
    function Saveprofile(){
       sessionStorage.setItem('profile',JSON.stringify({'name':data.name ,'address':list}))
    }
    function remove(listname){
       let removeList=list.filter((ele)=>(ele!==listname))
        listvalue(removeList)
    }
    return (
        <div className="progile-bg">
            <Header />
            <div className="profile-main">
                <img src={profile} className='imge'></img> <br />
                <label> UserName </label>
                : <p> {data.name}</p><br />
                
                <label> Phone no </label>
                : <p>9003079869</p>
                <label>Address </label>
                <div style={{marginLeft:'208px',marginTop:'-32PX'}}> 
                 <textarea rows="4" cols="55" value={inputValue} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Your Address...'></textarea>
                 {inputErr && <small style={{display:"block"}}>You must write something</small>}
                     <button className="btne" onClick={AddEvent}>Add Address</button>
                  
                     <ul className="profile-ul">
                         {list.map((ele)=>{
                             return<>
                                <li className="profile-li">{ele} 
                                 <button onClick={()=>remove(ele)}>x</button></li>
                                  </>
                             })}
                    </ul>
                    <button onClick={(e)=>Saveprofile(e.target.value)} className='savebutton'>Save</button>
                 </div>
                    
            </div>
            <Footer />
        </div>
    )
}

export default Profile