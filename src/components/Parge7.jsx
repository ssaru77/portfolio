import React from 'react'
import './page.css'
import { blogs } from './Page'
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
export const Parge7 = () => {
  return (
    <div className='Parge7'>
        
        <h1 className='ski'>Recent Blogs</h1>
        <p className='pars1'>We put your ideas and thus your wishes in the form of a unique web project that <br/>inspires you and you customers.</p>
        <div className='blogs'>
  {blogs.map((content, index) => (
    <div key={index} className='blog'>
      <img  className='photos1'src={content?.images} alt={`Image ${index} `} />
     <button className='button1'>{content?.button}</button>
     <div className='hh7'>
      <div className='pp1'>
      <p className='pp'> <FaRegCalendarDays  />{content?.p}</p>
      <p className='pp'><FaRegComment />{content?.h2}</p>
      </div>
     <h1 className='text'>{content?.h1}</h1>

     </div>
    

      </div>
      ))}
      </div>
    </div>
   )
} 

