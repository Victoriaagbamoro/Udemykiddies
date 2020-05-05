import React, {Component} from 'react';
import './Card.css'



class Card extends Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    render(){
        return(
            <div className="card">
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/ChNLCrg/create.jpg" alt="create"/>
                    <h2 className="paraone">Complete Maths Guide-(Go from Basics to Advanced)</h2>
                    <p className="number">800 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/71SgKCp/physics.jpg" alt="maths"/>
                    <h2 className="paraone">Complete Physical Education Guide</h2>
                    <p className="number">700 students enrolled</p>
                    <p className="content">8 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/yS68w77/english.jpg" alt="maths"/>
                    <h2 className="paraone">Grow Your Diction With Our English Program</h2>
                    <p className="number">1000 students enrolled</p>
                    <p className="content">10 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>
                <div className="cardbody">
                    <img className="maths" src="https://i.ibb.co/DKgC7Rr/music.jpg" alt="maths"/>
                    <h2 className="paraone">Learn The Basic Concepts Of Music</h2>
                    <p className="number">900 students enrolled</p>
                    <p className="content">7 hours of video content</p>
                    <p><button>View Course</button></p>
                </div>

                

            </div>
        )
    }
}

export default Card