import React from 'react';
import '../style.css'
import { NavLink } from 'react-router-dom';
export default function footer()
{
 return(
        <footer className="footer">
            <div className="foot">
            <div className="footer-content">
        
                <div className="footlinks">
                 <h4>Quick Links</h4>
                 <ul>
                    <li> <NavLink to="/signup" className="navFoot" >Register</NavLink></li>
                    <li> <NavLink to="/about" className="navFoot" >About us</NavLink></li>
                    <li> <NavLink to="/contact" className="navFoot" >Contact us</NavLink></li>
                 </ul>
                </div>
        
                <div className="footlinks">
                <h4>Connect</h4>
                <div className="social">
                    <a href="*" target="_blank"><i className='bx bxl-facebook'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-instagram'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-twitter'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-linkedin'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-youtube'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-wordpress'></i></a>
                    <a href="*" target="_blank"><i className='bx bxl-github'></i></a>
                </div>
                </div>
            </div>
            </div>
        
            <div className="end">
            <p>Copyright © 2023 Just Travel  All Rights Reserved.<br />Website developed by: Ahmad & Edward</p>
            </div>
        </footer>
        );
};
        
    
