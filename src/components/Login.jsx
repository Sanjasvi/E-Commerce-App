import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

export default function Login() {
  let{name, setname}=useContext(UserContext);
  let uname=useRef();

  function handleSubmit(event){
    event.preventDefault();
    setname(uname.current.value);

  }

  return (
    <div>
      <div className="main-form">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username : </label>
          <input type="text" placeholder="Enter Username" ref={uname}/>
          <br/><br/>
          {/* <label htmlFor="">Email : </label>
          <input type="email" placeholder="Enter Email"/>
          <br/><br/> */}
          <label htmlFor="">Password : </label>
          <input type="password" placeholder="Enter Password"/>
          <br/><br/>

          <button type="submit">Login</button>
          <br/>
          <span>
            
            if not register please <Link to="/register">register</Link>
          </span>
        </form>
      </div>
    </div>
  )
}
