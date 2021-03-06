import React, {Component} from 'react';
import './StudentSignup.css';
import { GoogleLogin } from 'react-google-login';
// import { Redirect } from 'react-router-dom';




class StudentSignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            instructhead: 'Discover your potential',
            instructpara: "Sign up as a student to partake in a wide range of courses for children",
        

        }
        // this.signUp = this.signUp.bind(this);

    }
    // signUp(res){
    //     const googleresponse ={
    //         Name: res.profileObj.name,
    //         email: res.profileObj.email,
    //         token: res.googleId,
    //         Image: res.profileObj.imageUrl,
    //         providerId: 'Google'
    //     };
    //     console.log(googleresponse)
    //     this.props.history.push('/StudentPage');

    // }
    render(){
        
        const {responseGoogleForStudent} = this.props
        console.log(responseGoogleForStudent)
        return(
            <div>
                <div className="instructSec">
                    <h2 className="instructone">{this.state.instructhead}</h2>
                    <div className="border"></div>
                    <p className="instructtwo">{this.state.instructpara}</p>
                    {/* Local */}
                    {/* 265248569673-14o2h5fqpsn8ap2sq0dmpga4mibcrl29.apps.googleusercontent.com */}
                    {/* Heroku */}
                    {/* 265248569673-kvpkkmmhmisv7o6i0ipchog8db8144c4.apps.googleusercontent.com */}
                    <GoogleLogin
                    clientId="265248569673-kvpkkmmhmisv7o6i0ipchog8db8144c4.apps.googleusercontent.com"
                    buttonText="Student Login"
                    onSuccess={responseGoogleForStudent}
                    onFailure={responseGoogleForStudent}
                    isSignedIn={true}
                    />
                </div>
            </div>
        )
    }
}

export default StudentSignUp