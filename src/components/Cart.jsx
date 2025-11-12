import React, { useContext } from 'react'
import { CartContext } from '../ContextAPI/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {

    let{cart, setCart}=useContext(CartContext);


    //delete item from cart
    function removeCart(product){
        // let newCart=cart.filter((item)=> item.id !== product.id);
        // let newCart=cart.splice(cart.indexOf(product),1);
        
        let newCart=[...cart];
        newCart.splice(newCart.indexOf(product),1);
        console.log(newCart);


        setCart(newCart);
    }




  return (
    <div>
        <h1>Cart</h1>

         {
                cart.map((product) => {
                    return (
                        <div key={product.id} className="productList" >
                            <div className="products" style={{height:"510px"}}>
                                <img src={product.thumbnail} alt={product.title} style={{height:"120px", width:"120px"}} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <h4>Price: ${product.price}</h4>
                                <Link to={`/details/${product.id}`}>View Details</Link>
                                <br/>
                                <button onClick={()=>{addCart(product)}}>Add to Cart</button>
                                <button onClick={()=>{removeCart(product)}}>Remove</button>
                            </div>
                        </div>
                    )
                }

                )
            }
    </div>

    
   
  )
}
