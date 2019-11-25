import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.scss'

const Navbar = () => (
    <nav id="navigation">
        <header id="title">
            <h1>Future Fancy</h1>
        </header>
        <div id="navigator">
            <div><p><Link to="/">Home</Link></p></div>
            <div><p><Link to="/Product">Product</Link></p></div>
            <div><p><Link to="/Contact">Contact</Link></p></div>
            <div><p><Link to="/account">Login</Link></p></div>
        </div>
    </nav>
)

export default Navbar