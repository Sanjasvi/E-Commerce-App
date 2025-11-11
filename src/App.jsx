import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList.jsx'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from './ContextAPI/ThemeContext.jsx'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
let {theme, setTheme}=useContext(ThemeContext);
  

  let bg ={};

  if(theme == "light"){
    bg={
      backgroundColor:"white",
      color:"black"
    }
  }else{
    bg={
      backgroundColor:"black",
      color:"white"
    }
  }

  return (
    <div style={bg}> 
    <div className="main" >

      <nav>
        <h2>SUGAR</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart"><ShoppingCartIcon/></Link>
          <span>{theme=='light'? <ToggleOffIcon onClick={()=>{setTheme('dark')}}></ToggleOffIcon> : <ToggleOnIcon onClick={()=>{setTheme('light')}}/>}</span>

      
          
        </div>
      </nav>

      <Outlet/>
    </div>
    </div>
  )
}

export default App
