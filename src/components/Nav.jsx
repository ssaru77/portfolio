import React from 'react'
import "./nav.css"

export const Nav = () => {
  return (
    
    <div className="navContainer ">
        <div className='main'> <img
              className="image"
              src="https://themejunction.net/html/gerold/demo/assets/img/logo/logo-dark.png"
            />
            <div className=' par'>
            <span>mail@gerolddesign.com</span>
          </div></div>
        {/* <img
              className="image"
              src="https://themejunction.net/html/gerold/demo/assets/img/logo/logo-dark.png"
            />
            <div className='par'>
            <span>mail@gerolddesign.com</span>
          </div> */}
            <div
className="navbarCss"
>
  
   

    <span>Services</span>
    <span>Works</span>
    <span>Resume</span>
    <span>Services</span>
    <span>Skills</span>
    <span>Testimonials</span>
    <span>Contact</span>

<button className='button'>Hire Me!</button>
  
</div>
</div>
           
   
  )
}
