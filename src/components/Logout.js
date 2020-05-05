import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export class Logout extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const {logout} = this.props
        
        // 265248569673-14o2h5fqpsn8ap2sq0dmpga4mibcrl29.apps.googleusercontent.com
        return (
            <GoogleLogout
                clientId="265248569673-14o2h5fqpsn8ap2sq0dmpga4mibcrl29.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
        )
    }
}

export default Logout
