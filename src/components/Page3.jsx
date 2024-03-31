import React from 'react'
import './page.css'
import { images } from "./Page";
import ImageCard from "../common/ImageCard";

export const Page3 = () => {
  return (
    <div className='works' id='work'>
         <h1 className='my '>My Recent Works</h1>
        <p className='p'>We put your ideas and thus your wishes in the form of a unique web project that <br/> inspires you and you customers.</p>
   <button className='but'> <button className='all'>ALL</button> UX/UI BRANDING APPS</button>
   <div className="img">
      {images.map((images, index) => {
        return (
          <ImageCard className={'hello'} key={index} cartoon={images} />
          
          
     
        );
       
      })}
     
  
  
    
    </div>
    </div>
  )
}
