import React, {useState,  useEffect} from 'react';
// import {useForm} from 'react-hook-form'
import {CloudinaryContext, Video} from 'cloudinary-react'
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";
import ImageUpload from './ImageUpload'
import Modal from 'react-modal'
import {useForm} from 'react-hook-form'
import './InstructorPage.css';
import Logout from './Logout';




function InstructorPage(props){
    const [images, setImages] = useState([])


    const beginUpload = tag => {
    const uploadOptions = {
        cloudName: "victoria-agbamoro",
        tags: [tag, 'anVideo'],
        uploadPreset: "Victoria"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
        if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
            setImages([...images, photos.info.public_id])
        }
        } else {
        console.log(error);
        }
    })
    }
    useEffect (() =>{
        fetchPhotos("images", setImages);
    }, []);

    const {register, handleSubmit} = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('https://udemykids.herokuapp.com/CRk', {
            method: 'POST',
            headers:{
                Accept: 'data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'data.name',
                coursetitle: 'data.coursetitle',
                description: 'data.description',
                videoLink: 'videoLink',
                publicId: 'data.publicId'

            }),
        })
    }
    const [name, setName] = useState("");
    const [coursetitle, settitle] = useState("");
    const [description, setdescript] = useState("");
    
    
    const [modalIsOpen, setModalOpen] = useState(false)
    
        const logout=()=>{
            props.history.push('/');
        }
        
    return(
            <div className="InstructorPage">
                
                <div className="jump">
                    <div >
                    <img className="write" src="https://i.ibb.co/RgJsBJk/loc.png" alt="doctor"></img>
                    </div> 
                    <div>
                        <p className="jumpara">Jump Into Course Creation</p> 
                    </div>
                    <div>
                        <button className="btn">Scroll down to register</button> 
                    </div>
                </div>
                <div className="center">
                    <p className="textCenter">Based on your experience, we think these resources will be helpful.</p>
                </div>

                <div className="display">
                    <div>
                        <img className="imgsecond" src="https://i.ibb.co/FqsM7CS/speaker.jpg" alt="img"></img>
                    </div>
                    <div>
                        <p className="jumpcreate">Create an Engaging Course</p>
                        <p className="paracreate">Whether you've been teaching for years or are teaching for the first time, you can make an engaging course.
                            We've compiled resources and best practices to help you get 
                            to the next level, no matter where you're starting.</p>
                    </div>

                </div>
                <div className="grace">
                <div className="speaker">
                    <div>
                        <img className="imgsecond" src="https://i.ibb.co/k8Q6Rm1/com.jpg" alt="img"></img>
                    </div>
                    <div>
                        <p className="jumpcreate">Create an Quality Video</p>
                        <p className="paracreate">Whether you've been teaching for years or are teaching for the first time, you can make an engaging course.
                            We've compiled resources and best practices to help you get 
                            to the next level, no matter where you're starting.</p>
                    </div>
                </div>
                </div>
                <div className="grace">
                <div className="turn">
                    <div>
                        <img className="imgsecond" src="https://i.ibb.co/WHzS6M9/community.jpg" alt="img"></img>
                    </div>
                    <div>
                        <p className="jumpcreate">Create an Quality Content</p>
                        <p className="paracreate">Whether you've been teaching for years or are teaching for the first time, you can make an engaging course.
                            We've compiled resources and best practices to help you get 
                            to the next level, no matter where you're starting.</p>
                    </div>
                </div>
                </div>
                <div className="center">
                    <p className="textCenter">Have questions? Here are our most popular instructor resources..</p>
                </div>

                <div className="vector">
                    <div className="one">
                        <img className="doctors" src="https://i.ibb.co/FXkjdy8/vec.jpg" alt="doctor"></img>
                        <h3>Child Growth</h3>
                        <p className="paravecvec">Our major focus is to see that every child grows to become all that they were
                            made for to be and more.
                        </p>
                    </div>

                    <div className="two">
                        <img className="doctors" src="https://i.ibb.co/C23RbwP/like.jpg" alt="doctor"></img>
                        <h3>Inspire Students</h3>
                        <p className="paravecvec">Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.</p>
                    </div>
                    <div className="three">
                        <img className="doctors" src="https://i.ibb.co/C23RbwP/like.jpg" alt="doctor"></img>
                        <h3>Join Our Community</h3>
                        <p className="paravecvec">Take advantage of our active community of instructors to help you through your course creation process.</p>
                    </div>
                    <div className="three">
                        <img className="doctors" src="https://i.ibb.co/y5YcFHB/bulb.png" alt="doctor"></img>
                        <h3>Light Up</h3>
                        <p className="paravecvec">Take advantage of our active community of instructors to help you through your course creation process.</p>
                    </div>
                </div>
                
                <div className="registerBotton">
                <div className="center">
                    <p className="textCenter">Are You Ready To Begin</p>
                </div>

                    <button className="btnn" onClick={() => setModalOpen(true)}>Click To Create Your Course</button>
                    <Modal className="modal" isOpen={modalIsOpen} 
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={()=> setModalOpen(false)}
                    >
                        <div>
                            <form className="formhandle">
                                <h1>Sign Up</h1>
                                <input type="text"  ref={register} name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Name"/>
                                <input type="text"  ref={register} name="coursetitle" value={coursetitle} onChange={e => settitle(e.target.value)} placeholder="Course Title"/>
                                <input type="text" ref={register} value={description} name="description" onChange={e => setdescript(e.target.value)} placeholder="Description"/>
                                <button type="submit" className="btn">submit</button>
                            </form>
                        </div>
                        <CloudinaryContext cloudName="victoria-agbamoro">
                            <button className="clicks" onSubmit={handleSubmit(onSubmit)} onClick={e => beginUpload(e.target.value)}>Upload Video</button>
                            <ImageUpload/>
                            {images.map(i => {
                            console.log(i)
                            return (
                            <Video key={i} publicId={i} fetch-format="auto" quality="auto" controls={true} width="300px" />
                                    
                            )})}
                        </CloudinaryContext>
                        <div>

                            <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                    </Modal> 
                
                </div>
                <Logout logout={logout}/>

                
                
            </div>
    )
}

Modal.setAppElement('#root')
export default InstructorPage