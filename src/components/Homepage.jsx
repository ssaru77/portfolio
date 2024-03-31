import React from 'react'
import "../components/home.css"
import { BsDownload } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { IoBasketballOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
export const Homepage = () => {
  return (
   
        <div className='homepage'>
          <div style={{display:'flex',alignItems:'center', gap:'10rem'}}>
          <div className='home'>
            <h1 className='heading'>I am Gerold</h1>
            <h1 className='paragraph'>WEB DEVELOPER +<br/>UX DEVELOPER</h1>
            <p className='essay'>I break down complex user experience problems to<br/>create integrity-focused solutions that connect<br/>billions of people</p>
            <div className='icons'>
              <button className='download'>Download CV  <BsDownload /></button>
              <button className='twitter'><CiTwitter /></button>
              <button className='basket'><IoBasketballOutline /></button>
              <button className='in'>in</button>
              <button className='git'><IoLogoGithub /></button>
            </div>
            
          </div>
          
          <img className='photo' src='https://themejunction.net/html/gerold/demo/assets/img/hero/me.png' alt='Gerold' />
         
        </div>
        <div style={{display:'flex',gap:'9rem', color:'#8750F7', marginTop:"2rem" }}>
        <h1 className='h1'>14
<span className='span'> Years of
Experience </span></h1>
         <h1 className='h2'>50 +
<span className='span'> project <br/>completed </span></h1>
<h1 className='h2'>1.5 k
<span className='span'> happy <br/>clients </span></h1>
<h1 className='h1'>14
<span className='span'> Years of
Experience </span></h1>
</div>

         </div>
            
        
         
            
        
      );
    }
    
    // export default HomePage;
    
  

