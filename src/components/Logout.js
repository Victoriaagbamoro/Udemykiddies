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
                clientId="265248569673-kvpkkmmhmisv7o6i0ipchog8db8144c4.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="btne" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                    )}
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
        )
    }
}

export default Logout
