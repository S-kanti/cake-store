import React, { Component } from 'react';
import "./myStyles.css";


function handleSubmit(){
        
}
class FormContact extends Component {  

    render() { 
        return (
            <div className='contactform'>
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea className='textmessage' name="textmessage" placeholder='Message'></textarea>
                    <button className='submitbtn'>Send Message</button>
                </form>
            </div>
        );
    }
}
 
export default FormContact;