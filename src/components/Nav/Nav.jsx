import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h1>_NOLOGY HIGH SCHOOL</h1>
            </Link>
            <img src="/assests/images/logo.png" alt=""></img>
        </div>
    )
}

export default Nav
