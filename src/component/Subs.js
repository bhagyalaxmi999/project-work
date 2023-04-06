
import React, { useEffect } from 'react'
import images from '../images' 
import './subs.css'

// react const functional component
const Subs = () => {
    return (
        <div className='row'>
            <div className='col-md-2 col-lg-2'>
               <div className='items'>
                <div className='item active'>
                    <img src ={images ? images.photo1: ''} alt='no imag'/>

                </div>
                <div className='item'>
                    <img src ={images ? images.photo2: ''} alt='no imag'/>

                </div>
                <div className='item'>
                    <img src ={images ? images.photo3: ''} alt='no imag'/>

                </div>
                <div className='item'>
                    <img src ={images ? images.photo4: ''} alt='no imag'/>

                </div>
               </div>
            </div> 

             <div className='col-md-10 col-lg-10 mt-4'>
                <div className='carousel slide' id='demo' data-bs-ride='carousel'>
                    <div className='carousel-inner'>
                        <div className='carousel-item' data-bs-interval='2000'>
                            <img src ={images ? images.photo1: ''} className='d-block w-100' alt='no imag'/>
                        </div>
                        <div className='carousel-item active' data-bs-interval='2000'>
                            <img src ={images ? images.photo2: ''} className='d-block w-100' alt='no imag'/>
                        </div>
                        <div className='carousel-item'>
                            <img src ={images ? images.photo3: ''} className='d-block w-100' alt='no imag'/>
                        </div>
                        <div className='carousel-item'>
                            <img src ={images ? images.photo4: ''} classsName='d-block w-100' alt ='no imag'/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' data-bs-target='#demo' data-bs-slide="prev">
                        <span className='carousel-control-prev-icon'></span>
                    </button>
                    <button className='carousel-control-next' data-bs-target="#demo" data-bs-slide="next">
                        <span className='carousel-control-next-icon'></span>
                    </button>
                    
                </div>
             </div>
        </div>
    )
}

export default Subs

