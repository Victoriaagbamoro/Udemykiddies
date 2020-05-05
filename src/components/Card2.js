import React, {Component} from 'react';
import './Card2.css'



class Card2 extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        return(
            <div className="card">
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/bbrXp0s/biology.jpg" alt="maths"/>
                    <h2 className="paraone">Beginner Guide To Biology</h2>
                    <p className="number">600 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/D1M68yp/arts.png" alt="maths"/>
                    <h2 className="paraone">The Beauty Of Arts For Children</h2>
                    <p className="number">1000 students enrolled</p>
                    <p className="content">8 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/TPXQp3x/integrated.jpg" alt="maths"/>
                    <h2 className="paraone">Complete Guide to integrated Science</h2>
                    <p className="number">700 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/vDsrWc0/Robotics.jpg" alt="maths"/>
                    <h2 className="paraone">Introduction to Robotics For Kids</h2>
                    <p className="number">1500 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                

            </div>
        )
    }
}

export default Card2