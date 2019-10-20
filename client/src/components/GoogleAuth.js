import React, { Component } from 'react'

class GoogleAuth extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isSignedIn: false
        }
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init ({
                clientId: '603966965459-kc7ut88n3refbm8nfldvlgdak6k528rs.apps.googleusercontent.com',
                scope: 'email' 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //this.setState({isSignedIn : this.auth.isSignedIn.get()})
                // First time signin
                this.onAuthChange()
                this.auth.isSignedIn.listen( this.onAuthChange )
            })
        })

    }

    onAuthChange = () => {
        this.setState( {isSignedIn : this.auth.isSignedIn.get()} )
    }

    renderAuthButton() {
        if (this.state.isSignedIn === false) {
            return (
                <div>
                    <button><i className="fa fa-sign-in"></i><span>Login</span></button>
                </div>
            )
        } else {
            return (
                <div>
                    <button><i className="fa fa-sign-in"></i><span>Logout</span></button>
                </div>
            )
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth