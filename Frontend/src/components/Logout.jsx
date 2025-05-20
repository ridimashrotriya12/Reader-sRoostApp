import React from 'react'
import { useAuth } from '../Context/AuthProvider'

function Logout() {
    const[authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users");
            alert("Logout successfully");
              
            setTimeout(()=>{
              
             window.location.reload();
         
            },3000);
            
        }catch(error){
          alert("Error:" + error.message);
          setTimeout(()=>{},2000);
        }
    };
  return (
    <div>
        <button className="py-3 px-2 bg-rose-700 border rounded-md hover:text-lg hover:text-red-200 text-black border-black"
       onClick={handleLogout} >
            Logout</button>
    </div>
  )
}

export default Logout
