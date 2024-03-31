import React from 'react'
import "./page.css"
import { skills } from './Page'
export const Page5 = () => {
  return (
    <div className='Page5'>
        <h1 className='ski'>MY SKILLS</h1>
        <p className='par1'>We put your ideas and thus your wishes in the form of a unique web project that <br/>inspires you and you customers.</p>
        <div className='skill'>
  {skills.map((content, index) => (
    <div key={index} className='skills'>
      <img  className='photos'src={content?.images} alt={`Image ${index} `} />
      <h1 className='number'>{content?.number}</h1>
      </div>
      ))}
      </div>
      <div className='word'>
        <p>figma</p>
        <p>sketch</p>
        <p>xd</p>
        <p>wordpress</p>
        <p>react</p>
        <p>javascript</p>
        
        
        
        </div>
    
  

</div>
    
  )
}
