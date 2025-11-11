import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import ThemeProvider from './ContextAPI/ThemeContext.jsx'
import { CartProvider } from './components/CartContext.jsx'
import Cart from './components/Cart.jsx'
import UserProvider from './components/UserContext.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path:"home",
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "product",
        element: <ProductList />
      },
      {
        path: "details/:id",
        element: <ProductDetails />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }, {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(

 <UserProvider>
   <CartProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </CartProvider>
 </UserProvider>





)
