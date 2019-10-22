import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

function Header() {
    return (
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><h1>Twitchy</h1></Link>
                </div>
                
                <ul className="navbar-nav">
                    <li className='nav-item active'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/"><GoogleAuth/></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header