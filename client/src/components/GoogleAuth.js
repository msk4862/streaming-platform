import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         isSignedIn: false
    //     }
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init ({
                clientId: '603966965459-kc7ut88n3refbm8nfldvlgdak6k528rs.apps.googleusercontent.com',
                scope: 'email' 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //this.setState({isSignedIn : this.auth.isSignedIn.get()})
                // First time signin
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen( this.onAuthChange )
            })
        })

    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            //calling action creator
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <button className='btn btn-primary' onClick={this.onSignOutClick}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className='btn btn-primary' onClick={this.onSignInClick}>Login</button>
                </div>
            )
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    //auth === reducer key
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)