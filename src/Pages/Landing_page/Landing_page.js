import React from 'react'
import Navbar from './Navbar'
import Register from './Register'
import LoadUser from './LoadUser'
import Login from './Login'


export default function Landing_page() {
  return (
    <div>
        <Navbar/>
        <Register/>
        <LoadUser/>
        <Login/>
    </div>
  )
}
