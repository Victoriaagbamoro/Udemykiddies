import React, {Component} from 'react';
import Logout from './Logout';
import './StudentPage.css'
import ReactPlayer from 'react-player'
import StarRating from './StarRating'

class StudentPage extends Component{
    constructor(props){
        super(props)
        this.state={
            courses: [],
            favorites: []

        }
    }
    async componentDidMount(){
        const url = 'http://localhost:4001/CRk';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({courses: data})
        
    }
    render(){
        const logout=()=>{
            this.props.history.push('/');
        }

        return(
            <div className="studentlog">
                <div className="backgroundstage">
                    <div className="backstage">
                        <h2>
                            Start now to have access to a wide range of courses
                        </h2>
                        <p>Children can learn at their comfort zone and be all that they are set be.</p>
                        <button className="btne">Start now</button>
                    </div>
                </div>
                <div className="player2"> 
                    {this.state.courses.map((post)=>{
                        return <div className="player" key={post.teacher}>
                                <ReactPlayer className="" url={post.videoLink} controls width="100%" height="100%"/>
                                <p>PublicId:{post.publicId}</p>
                                <p>Teacher: {post.Teacher}</p>
                                <p>Course Title: {post.videoTitle}</p>
                                <p>1 hour on demand video</p>
                                <p>Full time access</p>
                                <p>Certification of completion</p>
                                <StarRating/>
                                <button className="btne">Add to favorite</button>

                            </div>
                    })}
                    
                </div>
                <Logout logout={logout} />
            </div>
        )
    }
}

export default StudentPage