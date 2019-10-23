import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import GoogleAuth from './GoogleAuth'

class Header extends React.Component {

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div className='mr-4'>
                    <Link className='btn btn-primary' to='/streams/new'>Go Live</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className='container-fluid'>
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/"><h1>Twitchy</h1></Link>
                    </div>
                    
                    {/* <ul className="navbar-nav">
                        <li className='nav-item active'><Link to='/'>Home</Link></li>
                        <li className='nav-item'><Link to='/'>Home</Link></li>
                        <li className='nav-item'><Link to='/'>Home</Link></li>
                    </ul> */}

                    <ul className="nav navbar-nav navbar-right">
                        {this.renderCreate()}
                        <li><Link to="/"><GoogleAuth/></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps)(Header)