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
  
   

    <a style={{textDecoration:'none'}} href='#service'>Services</a>
    <a style={{textDecoration:'none'}} href='#work'>Works</a>
    <a style={{textDecoration:'none'}} href='#resume'>Resume</a>
    <a style={{textDecoration:'none'}} href='#skill'>Skills</a>
    <a style={{textDecoration:'none'}} href='#testimonal'>Testimonials</a>
    <a style={{textDecoration:'none'}}href='#contact'>Contact</a>

<button className='button'>Hire Me!</button>
  
</div>
</div>
           
   
  )
}
