import React, { useState } from 'react'
import Popup from '../../Components/Popup/Popup'
import { FaCartPlus as Cart } from 'react-icons/fa'

const Card = props =>{
    let [ popup, setPopup ] = useState(false)
    const {
        name,
        type,
        image_href,
        price,
    } = props.product
    return(
        <>
            <div className={`prods-block`} onClick={ () => setPopup(true) }>
                <div className="prods-block-imgContainer">
                    <img src={image_href} alt={name} className="prods-block-imgContainer-img"/>
                </div>
                <div className={`prods-block-name`}>
                    {name}
                </div>
                <div className={`prods-block-price`}>
                    {price}
                </div>
                <div>
                    <Cart />
                </div>
            </div>
            <Popup header={name} isOn={ popup } exit={ () => setPopup(false) }>
                <div className="prodPopup">
                    <img src={image_href} alt={name}/>
                    <p>{price}</p>
                    <div className="options">
                        <button className="options-buy">Buy Now</button>
                        <button className="options-add">Add to Card</button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Card