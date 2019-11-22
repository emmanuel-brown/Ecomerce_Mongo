import React, { useEffect, useState } from 'react'
import Popup from '../../Components/Popup/Popup'
import axios from 'axios'
import Card from './Card'
import './Products.scss'

const Products = () =>{
    const [ products, setProducts ] = useState([])

    useEffect(() =>{
        axios.get('/products/')
            .then(res => setProducts(res.data))
            .catch(() => console.log("Unable to get all products"))
    }, [])
    
    return(// redo products page compared to the last project
        <main id="Products">
            <div className="prods">
                {products.map(product => <Card key={product._id} product={product} />)}
            </div>
        </main>
    )
}

export default Products