import React from 'react'
import Home from './Home/Home'
import Course from './components/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'

import Contactss from './Contacts/Contactss'
import { useAuth } from './Context/AuthProvider'


function App() {
  const [authUser,setAuthUser]=useAuth();
console.log(authUser);
  return (
    <>
   
     {/*<Home/>
      <Course/>*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contactss/>}/>
      </Routes>
    </>
    
     
    
  )
}

export default App