import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo/logo.png'

import image from '../assets/pos.webp'
import image1 from '../assets/website.png'
import image2 from  '../assets/mobile.png'
import image3 from '../assets/eccommerce.png'
import image4 from '../assets/hrm.jpeg'
import image5 from '../assets/software.jpg'
import {FcCallback} from 'react-icons/fc'
import Footer from "../components/Footer";
import {FaWhatsappSquare} from 'react-icons/fa'
export default function Home() {
  return (
    <>
      
 <div className="main-container">
 
      
        <img className='logo' src={logo} alt=''/>
      <div className="main-car">
      <h1 className='title-1'>
 What we do at Ridge Techs   </h1>
        <p className='paragraph'>

        Techlion is a leading Software development company here in Kenya.
<br></br>
We Provide:
        
        <ul className='list-1'>
          <li>Point of Sale & Stock Management Software </li>
          <li>Mobile Applications </li>
          <li>Custom Websites </li>
          <li>Ecommerce websites </li>
          <li>HRM & Payroll Management System </li>
          <li>Invoicing, Quotation & Project Management Software </li>
          <li> Custom Software</li>
        </ul>
</p></div>
        
        
        </div>
 
 <div className="container-1">
      <div className="card-1">
       <h1 className='title'>
POINT OF SALE & STOCK MANAGEMENT SOFTWARE  </h1>
       <div className='card-content'>
        <img className='image' src={image} alt=''/>
        <p className='paragraph'>

        We offer Efficient, User-friendly & Highly Affordable Point of Sale Software for Retail, Supermarkets, Hotels & Restaurants/Bars in Kenya
        <h5 className='features '>Features/Modules</h5>
        <ul className='list'>
          <li>Stock Management Module</li>
          <li>Purchase Management Module</li>
          <li>Quotation Module</li>
          <li>Products Transfer Module</li>
          <li>Profit Calculation Module</li>
          <li>User/staff Management Module</li>
        </ul>
</p></div>
        <div className='button-1'>
        <Link to="/email">
        <button className="btn-1"> send your order</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
        </div>
        
      <div className="card-1">
       <h1 className='title'>
POINT OF SALE & STOCK MANAGEMENT SOFTWARE  </h1>
       <div className='card-content'>
        <img className='image' src={image} alt=''/>
        <p className='paragraph'>

        We offer Efficient, User-friendly & Highly Affordable Point of Sale Software for Retail, Supermarkets, Hotels & Restaurants/Bars in Kenya
        <h5 className='features'>Features/Modules</h5>
        <ul className='list'>
          <li>Stock Management Module</li>
          <li>Purchase Management Module</li>
          <li>Quotation Module</li>
          <li>Products Transfer Module</li>
          <li>Profit Calculation Module</li>
          <li>User/staff Management Module</li>
        </ul>
</p></div>
        <div className='button-1'>
        <Link to="/email">
        <button className="btn-1"> send your order</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
        </div>
 
</div>
 <section className="container">
      <div className="card">
       <h1 className='title'>MOBILE APPLICATIONS </h1>
       <div className='card-content'>
        <img className='image' src={image2} alt=''/>
        <p className='paragraph'>

Techlion has the best staff who are qualified to<br></br>
 We develop mobile applications for both android and iOS
</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"> send your order</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
        </div>
      
      <div className="card">
      <h1 className='title'>CUSTOM WEBSITES  </h1>
       <div className='card-content'>
        <img className='image' src={image1} alt=''/>
        <p className='paragraph'>

        Do you need a custom developed software or website for your custom needs?
        Engage Us and we shall give you a solution. 
</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"><FcCallback/>0789312381</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
      </div>
      <div className="card">
      <h1 className='title'>ECOMMERCE WEBSITES  </h1>
       <div className='card-content'>
        <img className='image' src={image3} alt=''/>
        <p className='paragraph'>

        We will develop your Ecommerce websites including all common payment intergrations like M-PESA and Paypal  
</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"><FcCallback/>0789312381</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
      </div>
      <div className="card">
      <h1 className='title'>HRM & PAYROLL MANAGEMENT SYSTEM  </h1>
       <div className='card-content'>
        <img className='image' src={image4} alt=''/>
        <p className='paragraph'>

        We offer Efficient, User-friendly & Highly Affordable HRM and Payroll Management System.  
</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"><FcCallback/>0789312381</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
      </div>
      <div className="card">
      <h1 className='title'>
INVOICING, QUOTATION & PROJECT MANAGEMENT SOFTWARE   </h1>
       <div className='card-content'>
        <img className='image' src={image2} alt=''/>
        <p className='paragraph'>

        Do you need a custom developed software or website for your custom needs?<br></br> 
        Engage Us and we shall give you a solution. 
</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"><FcCallback/>0789312381</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
      </div>
      <div className="card">
      <h1 className='title'>CUSTOM SOFTWARE   </h1>
       <div className='card-content'>
        <img className='image' src={image5} alt=''/>
        <p className='paragraph'>

        Our able team will develop for you any custom software you need in any languange of your choice. Feel free to contact us 

</p></div>
        <div className='button'>
        <Link to="/email">
        <button className="btn1"><FcCallback/>0789312381</button>
     </Link>
        <Link to="/email">
        <button className="btn2"> send your order</button>
     </Link>
     </div>
      </div>
    </section>
    
  </>
  
    
  )
}
