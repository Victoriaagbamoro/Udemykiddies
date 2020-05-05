import React, {Component} from 'react';
import './Section.css'


class Section extends Component{
    constructor(){
        super()
        this.state={
            heading: 'We are here to help',
            secpara: 'Our Instructor Support Team is here for you 24/7 to help you through your course creation needs. Use our Teaching Center, a resource center to help you through the process. Join Studio U and get peer-to-peer support from our engaged instructor community. This community group is always on, always there, and always helpful.'

        }
    }

    render(){
        const secStyle = {
        position: 'relative',
        backgroundImage: "linear-gradient(135deg, #50A68480 30%, #115E6780 90%),url(https://i.ibb.co/BL9sSMV/instruct.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        top:'0' ,
        left: '0',
        height: '75vh',
        width: '100%',
        backgroundAttachment: 'fixed',
        border: 0,
    
        
        }
        return(
            <div className="instructsec">
                <div className="secImage" style={secStyle}>
                    <div className="sechead">
                        <h2 className="secheading">{this.state.heading}</h2>
                        <p className="paraheading">{this.state.secpara}</p>
                    </div>

                </div>
            </div>
        )
    }
}





export default Section