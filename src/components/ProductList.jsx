import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { UserContext } from './UserContext';

export default function ProductList() {
    let [product, setProduct] = useState([]);
    let [url, setUrl] = useState("https://dummyjson.com/products");



    useEffect(() => {
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log(result);
                setProduct(result.products);
            })
        })
    }, [url]);


    let {cart, setCart} = useContext(CartContext);
    let {name}= useContext(UserContext);

    function addCart(product){
        console.log(name);
        
       if(name==null){
        alert("Please Login first")
       }else{
         let newCart = [...cart, product];
        setCart(newCart)
       }
    }
    console.log(cart);


    return (
        <>
            <h1 >E-Commerce Website</h1>
            <div className='buttons'>
                <button onClick={() => { setUrl("https://dummyjson.com/products") }}>All</button>
                <button onClick={() => { setUrl("https://dummyjson.com/products/category/beauty") }}>Beauty</button>
                <button onClick={() => { setUrl("https://dummyjson.com/products/category/fragrances") }}>Fragrance</button>
                <button onClick={() => { setUrl("https://dummyjson.com/products/category/laptops") }}>Laptops</button>
                <button onClick={() => { setUrl("https://dummyjson.com/products/category/furniture") }}>Furniture</button>
                <button onClick={() => { setUrl("https://dummyjson.com/products/category/groceries") }}>Groceries</button>
            </div>
            <br />
            {
                product.map((product) => {
                    return (
                        <div key={product.id} className="productList">
                            <div className="products">
                                <img src={product.thumbnail} alt={product.title} style={{height:"120px", width:"120px"}} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <h4>Price: ${product.price}</h4>
                                <Link to={`/details/${product.id}`}>View Details</Link>
                                <br/>
                                <button onClick={()=>{addCart(product)}}>Add to Cart</button>
                            </div>
                        </div>
                    )
                }

                )
            }

        
        </>
    )
}
