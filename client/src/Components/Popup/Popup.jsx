import React from 'react'
import './popup.scss'
import { exists } from 'fs';

const Popup = props =>{
    const { 
        header,
        isOn
    } = props
    if(isOn){
        return(
            <div className="Popup">
                <div className="Popup-exit" onClick={ props.exit }>
                    <span className="Popup-exit-bttn">X</span>
                </div>
                <div className="Popup-header">
                    <h1 className="Popup-header-text">{ header }</h1>
                </div>
                {props.children}
            </div>
        )
    } else{
        return null
    }
}

export default Popup