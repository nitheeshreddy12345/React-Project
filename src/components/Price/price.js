import { useState } from 'react';
import './price.css'

function Price(){
    const [product,updateProduct]=useState({
        productName:'redmi',
        price:10000
    })

    const handleToPrice = () => {
        console.log(product)
    let mprice= document.getElementById('input').value;
    console.log(mprice)
            updateProduct({
                ...product,
                price:mprice
            })
    }
    return (
      <div className="mobile">
        <h1>{product.productName}</h1>
        <p>{product.price}</p>
        <input type="number" id="input" placeholder="Enter a mobile price" />
        <button id="update" onClick={handleToPrice}>Update</button>
      </div>
    );
  
}

export default Price;
