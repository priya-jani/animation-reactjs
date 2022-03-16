import React from 'react';
import './Shape.css';
import Message from '../../Images/Message.png'

const Shape = () =>{
    return(
        <>
        <div>Hello</div>
        <img className='rotate-img' src={Message} width="400px" height="300px"/>
        </>
    )
}

export default Shape;