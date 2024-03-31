import React from 'react'
import "./page.css"
import { FaGraduationCap } from "react-icons/fa6";
import { PiMedalLight } from "react-icons/pi";
import { resume } from './Page';
export const Page4 = () => {
  return (
    <div className='Page4'>
<div className='experience'>
    <h1> <PiMedalLight /> MY EXPERIENCE</h1>
    <div>
    <h1 className='education'> <FaGraduationCap /> MY EDUCATION</h1>
    </div>
</div>
<div className='portfolio'>
{resume.map((content, index) => {
    return<div key={index} className='resume'>
    <h1 className='date'>{content?.date}</h1>
    <h1 className='des'>{content?.description}</h1>
    <h1 className='adress'>{content?.adress}</h1>
    </div>
})}
</div>
    </div>
    
  )
}
