import React from 'react'
import { Link } from 'react-router-dom'
import {FcCallback} from 'react-icons/fc'
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
         <h1 className='head'>Ridge- techs</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/text'><FcCallback/>075719515</Link>
          </li>
          <li>
            <Link to='/whatsapp'><FaWhatsappSquare/>  whatsapp</Link>
          </li>
          <li>
            <Link to='/email'>  <AiOutlineMail/> info@ridgetechs.ac.ke</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
