import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import './Product.css'


export default function ProductDetails() {
    let [product, setProduct] = useState({});
    let param = useParams();
    console.log(param);

    let navigate=useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`).then((response) => {
            response.json().then((result) => {
                console.log(result);
                setProduct(result);
            }).catch((error) => {
                console.log("error", error);
            })
        }).catch((error) => {
                console.log("error", error);
            })
    }, [])
    return (
        <div style={{margin:"50px"}} id="productDetails">
            <img src={product.thumbnail} alt={product.title} style={{ height: "150px", width: "150px" }} />
            <h3>{product.title}</h3>
            <h3>Brand: {product.brand}</h3>
            <p>{product.description}</p>
            <h4>Price: ${product.price}</h4>
            <h4>Rating: {product.rating}</h4>
            <p>Stock: {product.stock}</p>
            <p>Return Policy: {product.returnPolicy}</p>
            <button onClick={()=>{navigate('/product')}}>Back</button>
        </div>
    )
}
