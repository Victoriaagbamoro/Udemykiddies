import React, {Component} from 'react';
import './Vector.css'

class Vector extends Component{
    constructor(){
        super()
        this.state={
            instructhead: 'Envision your success',
            instructpara: "Children can grow to become more and do more in all ramafications.",
        

        }
    }

    render(){
        return(
            <div className="vectorsec">
                <div className="instructVec">
                    <h2 className="instructVecone">{this.state.instructhead}</h2>
                    <div className="border"></div>
                    <p className="instructVectwo">{this.state.instructpara}</p>
                </div>
                <div className="vector">
                    <div className="one">
                        <img className="doctor" src="https://i.ibb.co/mypsRNv/animate.jpg" alt="doctor"></img>
                        <h3>Child Growth</h3>
                        <p className="paravec">Our major focus is to see that every child grows to become all that they were
                            made for to be and more.
                        </p>
                    </div>

                    <div className="two">
                        <img className="doctor" src="https://i.ibb.co/CHNk2J4/writing.jpg" alt="doctor"></img>
                        <h3>Inspire Students</h3>
                        <p className="paravec">Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.</p>
                    </div>
                    <div className="three">
                        <img className="doctor" src="https://i.ibb.co/k8Q6Rm1/com.jpg" alt="doctor"></img>
                        <h3>Join Our Community</h3>
                        <p className="paravec">Take advantage of our active community of instructors to help you through your course creation process.</p>
                    </div>
                    <div className="three">
                        <img className="doctor" src="https://i.ibb.co/h10gFRy/lights.jpg" alt="doctor"></img>
                        <h3>Light Up</h3>
                        <p className="paravec">Take advantage of our active community of instructors to help you through your course creation process.</p>
                    </div>
                </div>
                <div className="testimony">
                    <p className="testi"><span className="quote">"</span> My daughter (10 years old) loves the missions! And so do I, because in my opinion she won’t easily learn these skills in school.
                    <span className="quote">"</span></p>
                    <p className="name">Samira (lerares groep 5)</p>
                </div>
                <div className="grow">
                    <div className="vectorSection">
                        <h3>Children are the future</h3>
                        <p className="paravec">Children can learn to strive to become all that they want to be in life, if only they have access to the
                        right materials. Which is why we are creating opportunities for children to learn and grow.
                        </p>
                        <p className="paravec">Create quizzes, exercises, and assignments to build interactivity. Write welcome messages for your students and answer their questions. Because Udemy students don’t just watch, they do.</p>
                        <p className="paravec">You start with your passion and knowledge. Then choose a topic and plan your lectures in Google Docs, Microsoft Excel, or your favorite notebook.</p>
                        <p className="paravec">You get to teach the way you want — even create courses in multiple languages and inspire more students.</p>
                        <button className="btn">Learn more</button>
                    </div>
                    <div>
                        <img className="imageDiv" src="https://i.ibb.co/qRMBg8F/form.png"  alt="doctor"></img>
                        
                    </div>
                </div>
                
            </div>
            
        )
    }
}


export default Vector