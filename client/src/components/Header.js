import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

function Header() {
    return (
        <header className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Twitchy</Link>
                </div>

                <ul className="nav navbar-nav">
                    <li className='active'><Link to='/'>Home</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/"><GoogleAuth/></Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header