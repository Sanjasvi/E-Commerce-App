import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form action="" className="">
        <label htmlFor="">Username : </label>
        <input type="text" placeholder="Enter username" />
        <br /><br />
        <label htmlFor="">Email : </label>
        <input type="email" placeholder="Enter email" />
        <br /><br />
        <label htmlFor="">Password : </label>
        <input type="password" placeholder="Enter password" />
        <br /><br />
        <label htmlFor="">Mobile Number : </label>
        <input type="number" placeholder="Enter number" />
        <br /><br />
        <label htmlFor="">Address : </label>
        <textarea placeholder="Enter address" ></textarea>
        <br /><br />
        <button>Register</button>
        <span>
          {" "}
          <br/>
          if you register please <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}
