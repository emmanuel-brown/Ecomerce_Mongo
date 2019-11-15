import React, { useEffect, useState } from 'react'
import axios from 'axios'

const block = (name, type, price) =>(
    <div className="block">
        <div>
            {name}
        </div>
        <div>
            <ul>
                {type.map(t => <li>{t}</li>)}
            </ul>
        </div>
        <div>
            {price}
        </div>
    </div>
)

const Products = () =>{
    const [ products, setProducts ] = useState([])

    useEffect(() =>{
        axios.get('/products')
            .then(res => setProducts(res.data))
            .catch(() => console.log("Unable to get all products"))
    }, [])

    return(
        <>
            {products.map(p => block(p.name, p.type, p.price))}
        </>
    )
}

export default Products;