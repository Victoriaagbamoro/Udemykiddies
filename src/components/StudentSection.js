import React, {Component} from 'react';
import './StudentSection.css'


class StudentSection extends Component{
    constructor(){
        super()
        this.state={
            // imagebody: require('../images/learningone.jpg' ),  

        }
    }

    render(){
        
        const secStylesec = {
        backgroundImage: "linear-gradient(135deg, #50A68480 100%, #115E6780 90%),url(https://i.ibb.co/hWCZq07/learningone.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        position: "relative",
        top: "0",
        left: "0",
        height: "75vh",
        width: "100%"
        };
        return(
            <div className="section">
                <div className="sectionbody">
                    <div className="imagebody">
                        <img className="learn" src="https://i.ibb.co/hWCZq07/learningone.jpg" alt="maths" style={secStylesec}/>
                    </div>
                    <div className="studentsec">
                        <h2 className="raise">
                            We are raising a learning Generation
                        </h2>
                        <p className="raisepara">Children can grow, learn to become confident in whatever they set their mind to do.
                            We take learning seriously in our community
                        </p>
                        <button className="btn">Get Started</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default StudentSection