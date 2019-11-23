import React from 'react'
import './navBar.scss'

const Navbar = props => (
    <nav id="navigation">
        <header id="title">
            <h1>Future Fancy</h1>
        </header>
        <div id="navigator">
            <div><p><a href="/">Home</a></p></div>
            <div><p><a href="/Product">Product</a></p></div>
            <div><p><a href="/Contact">Contact</a></p></div>
            <div><p><a href="/account">Login</a></p></div>
        </div>
    </nav>
)

export default Navbar