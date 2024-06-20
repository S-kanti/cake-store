import React, { Component } from 'react';


const Myform = ()=>{
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('message sent')
      };

    return(
        <div className='contactform'>
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea className='textmessage' name="textmessage" placeholder='Message'></textarea>
                    <button className='submitbtn'>Send Message</button>
                </form>
            </div>
    )
}
 
export default Myform;