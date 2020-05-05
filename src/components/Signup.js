import React, {Component} from 'react';
import Header from './Header'
import Mainbody from './Mainbody'
import Card from './Card'
import Card2 from './Card2'
import Section from './Section'
import { GoogleLogin } from 'react-google-login';
import StudentSection from './StudentSection'
import Vector from './Vector'
import './InstructorSignup.css'
import StudentSignUp from './StudentSignUp'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            instructhead: 'Become an instructor today',
            instructpara: "Join the World's Largest online learning marketplace",
            userType: ""

        }
        this.signUp = this.signUp.bind(this);

    }
    signUp(res, userType){
        const googleresponse ={
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            providerId: 'Google'
        };
        console.log(googleresponse)
        if(userType === "instructor"){
            this.props.history.push('/InstructorPage');
        }else if(userType === "student"){
            this.props.history.push('/StudentPage');
        }


    }

    render(){
        // const inStyle = { background: "black"};
        const responseGoogleForInstructor = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.setState({
                userType: "instructor"
            },()=>{
                this.signUp(response, this.state.userType)
            })
        }

        const responseGoogleForStudent = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.setState({
                userType: "student"
            },()=>{
                this.signUp(response, this.state.userType)
            })
        }
        return(
            <div className="InstructorSignup"> 
                    <Header/>
                    <Mainbody/>
                    <Card/>
                    <Card2/>
                    <Section/>
                    <div className="instructSec">
                    <h2 className="instructone">{this.state.instructhead}</h2>
                    <p className="instructtwo">{this.state.instructpara}</p>

                    <GoogleLogin
                    className="your-custom-class"
                    clientId="265248569673-14o2h5fqpsn8ap2sq0dmpga4mibcrl29.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className="btne" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogleForInstructor}
                    onFailure={responseGoogleForInstructor}
                    isSignedIn={true}
                    />
                    
                    
                </div>
                <StudentSection/>
                <Vector/>
                <StudentSignUp  responseGoogleForStudent={responseGoogleForStudent}/>
                

            </div>
        )
    }
}

export default Signup