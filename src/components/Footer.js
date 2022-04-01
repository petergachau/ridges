import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
       
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>WebDev</span> all rights reserved
        </h4>
        <div><Link to='/email'>send us a mail</Link></div>
      </div>
    </footer>
  )
}

export default Footer
