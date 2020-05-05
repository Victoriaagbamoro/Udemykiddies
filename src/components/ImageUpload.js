import React, {useState,  useEffect} from 'react';
// import {useForm} from 'react-hook-form'
import {CloudinaryContext, Image} from 'cloudinary-react'
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";




function ImageUpload(){
    const [images, setImages] = useState([])

    const beginUpload = tag => {
    const uploadOptions = {
        cloudName: "victoria-agbamoro",
        tags: [tag, 'aImage'],
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

    return(
        <div>
            <CloudinaryContext cloudName="victoria-agbamoro">
                <button className="clicks" onClick={() => beginUpload()}>Upload Image</button>
                {images.map(i => {
                console.log(i)
                return (
                <Image key={i} publicId={i} fetch-format="auto" quality="auto" width="100px"/>
                )})}
            </CloudinaryContext>
        </div>

    )
}

export default ImageUpload