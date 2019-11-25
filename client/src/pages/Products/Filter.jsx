import React, { useState } from 'react'

const Filter = props =>{
    const [ toggle, setToggle ] = useState(false)
    const{
        catagory,
        by,
        way
    } = props.filterFunc

    const { filters } = props
    
    return(
        <>
            <section id="filters">
                <div className="selectors">
                    <div className="selectors-option" onClick={ () => by() }>
                        <p>{filters.filterBy}</p>
                    </div>
                    <div className="selectors-selector" onClick={() => setToggle(!toggle)}>
                        <p>Catagory</p>
                    </div>
                    <div className="selectors-option" onClick={ () => way() }>
                        <p>{filters.direction ? "ascend" : "descend"}</p>
                    </div>
                </div>
                <div className="catagories" style={{display: toggle ? "block" : "none"}} onClick={() => setToggle(!toggle)}>
                    <div className="catagories-option" onClick={() => catagory("default")}>All</div>
                    <div className="catagories-option" onClick={() => catagory("vehicle")}>Vehicles</div>
                    <div className="catagories-option" onClick={() => catagory("compliance")}>Compliances</div>
                    <div className="catagories-option" onClick={() => catagory("wearable")}>Wearables</div>
                </div>
            </section>
        </>
    )
}

export default Filter