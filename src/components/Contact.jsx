import React from 'react'
import './contact.css'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
export const Contact = () => {
  
  return (
    <div className='Contact' id='contact'>
      <div className='contact1'>
        <h1 className='writing1'>Let’s work together!</h1>
      <p className='writing2'>I design and code simple things and i love what i do.Just<br/> simple like that!</p>
      <div className='boxs1'>
 <input  className='type1'type="text" id="fname" name="firstname" placeholder="First Name.."/>
 <input className='type2' type="text" id="lname" name="Last Name" placeholder="Larst Name.."/>
 </div>
 <div className='boxs2'>
 <input  className='type1'type="text" id="email" name="email adress" placeholder="Email Adress"/>
 <input  className='type2'type="text" id="phone" name="phone number" placeholder="Phone Number"/>
 </div>
 <div className='boxs3'>
 <select className='select'>
 <option placeholder="choose service">Choose Service</option>
 <option value="web">Web Design</option>
      <option value="UX">UX/UI Design</option>
      <option value="branding">Brdanding Design</option>
 </select>
 <textarea className='subject' id="subject" name="subject" placeholder="Message"></textarea>
 <input  className='send'type="submit" value="Send message"/>
 </div>
      </div>
      <div className='contact2'>
        <div className='type3'>
        <button className='icon1'><MdOutlinePhoneInTalk /></button>
        
        <h1 className='hs'>phone <br/>+01 123 654 8096</h1>
        {/* <p className='ps'>+01 123 654 8096</p> */}
        </div>
        <div className='type4'>
        <button className='icon1'><CiMail /></button>
        <h1 className='hs'>email <br/>gerolddesign@mail.com</h1>
        {/* <p className='ps'>gerolddesign@mail.com</p> */}
        </div>
        <div className='type5'>
        <button className='icon1'><FaLocationDot /></button>
        <h1 className='hs'>address <br/>Warne Park Street Pine,<br/>
FL 33157, New York</h1>
        {/* <p className='ps'>Warne Park Street Pine, */}
{/* FL 33157, New York</p> */}
        </div>

      </div>
    </div>
  )
}

