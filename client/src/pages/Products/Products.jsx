import React, { useEffect, useState } from 'react'
// import Popup from '../../Components/Popup/Popup'
import axios from 'axios'
import Card from './Card'
import Filter from './Filter'
import './Products.scss'

const Products = () =>{
    const [ products, setProducts ] = useState([])
    //filters
    const [ type, setType ] = useState("default")//default return all products
    const [ filterBy, setFilterBy ] = useState("alpha")
    const [ direction, setDirection ] = useState(true)

    useEffect(() =>{
        axios.get(`/products/${type}/${filterBy}/${direction ? "acsend" : "decsend"}`)
            .then(res => setProducts(res.data))
            .catch(() => console.log("Unable to get all products"))
    }, [type, filterBy, direction])

    const filterFunc = {
        catagory: cata => setType(cata),
        by: () => filters.filterBy === "alpha" ? setFilterBy("price") : setFilterBy("alpha"),
        way: () => setDirection(!direction)
    }
    
    const filters={ type, filterBy, direction }
    
    return(// redo products page compared to the last project
        <main id="Products">
            <Filter filterFunc={filterFunc} filters={filters}/>
            <div className="prods">
                {products.map(product => <Card key={product._id} product={product} />)}
            </div>
        </main>
    )
}

export default Products