import React, { Component } from 'react';
import './myStyles.css';
import myLogo from './assestes/logo.png';
import firstCake from './assestes/firstCake.png';


class NavBar extends Component {
    
    render() { 
        return (
            <div className='main123'>
            <div className='navbarContainer'>
               <img className='logo' src={myLogo} alt='Logo'></img>
               <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        
                        <li>Menu</li>   
                        <li>Blog</li>  
                        <li>Contact</li>
                       

                    </ul>
                </nav>
                <button className='login'>Login</button>
            </div>
            <div className='section1'>
                <div className='heading'>
                <h1>Bite The World of Cheesecake Wonders</h1>
                <p className='statement'>We always make our customer happy by providing
as many choices as possible </p>
                <div className='btns'>
                    <button className='headBtn'>Place Oder</button>
                    <button className='headBtn'>Search Location</button>
                </div>
                </div>
                <div className='mainpic'>
                <img className='firstCake' src={firstCake} alt=''></img>
                </div>
            </div>
            </div>
            
        );
    }
}
 
export default NavBar;