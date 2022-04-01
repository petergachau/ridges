import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/ds.jpg'  
import data from '../assets/data'
import {FcCallback} from 'react-icons/fc'

import {FaWhatsappSquare} from 'react-icons/fa'                                                                                                              
export default function Cocktail({product}) {
  return (
    <>
    <div className='mains'>
     <article className='cocktail'><h6 className='card-text'>{product.title}</h6>
       
      <div className='img-container'>
       
      </div>
      <div className='cocktail-footer'>
         <img src={image} alt='' />
        
         <ul className="list">
        
        <li >web applications</li>
        <li>mombile aplications</li>
        <li>custom websites</li>
        <li>eccomerce websites</li>
        <li>domain and deployment</li>
        <li>hosting</li>
      </ul>
        
      </div>
    </article>
  </div>
  {/* <div className="main">
        
      
      
      <article className='cocktai'>
        {data.products.map((product)=>{
          return(
            <div>
  <h1 className="card-text">what we do at Ridge techs</h1>
  <div className='cocktail-footer'>
      {/* <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
        details
      </Link> */}
      {/* <ul className="list">
        <h6 className="text">Ridge techs is the leading software development <br></br>
        <span>we provide:</span></h6>
        <li className="list">web applications</li>
        <li>mombile aplications</li>
        <li>custom websites</li>
        <li>eccomerce websites</li>
        <li>domain and deployment</li>
        <li>hosting</li>
      </ul>
      
    </div>
            </div>

          )
        })} */}
   
    {/* <div className='img-container'>
      <img src={image} alt={name} />
    </div> */}
    
  {/* </article>
  
  </div> */} 

    {/* <main className='main'>
      <article className='cocktail'>
    {data.products.map((product)=>{
          return(
            <div>
              <h6 className='card-text'>{product.title}</h6>
             <div className='cocktail-footer'>
               
               {product.description}
               </div> 
            </div>
          )
        })} */}
    
    
      
   
  
  </>
  )
}
