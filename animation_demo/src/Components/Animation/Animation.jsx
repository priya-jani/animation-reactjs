import React from 'react';
import { bounce,bounceIn,fadeIn,flash,headShake,hinge  } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Animation.css';

const Animation = () =>{

    const BounceStyles = styled.div`animation:2s ${keyframes `${bounce}`} infinite`;
    const BounceInStyles = styled.div`animation:2s ${keyframes `${bounceIn}`} infinite`;
    const FadeInStyles = styled.div`animation:1s ${keyframes `${fadeIn}`} infinite`;
    const FlashStyles = styled.div`animation:1s ${keyframes `${flash}`} infinite`;
    const HeadShakeStyles = styled.div`animation:1s ${keyframes `${headShake}`} infinite`;
    const HingeStyles = styled.div`animation:1s ${keyframes `${hinge}`} infinite`;

    return(
        <div className='main-div'>
            <div className='one-line'>
            <BounceStyles> <div className='space common'> bounce <p>animation</p></div> </BounceStyles>
            <BounceInStyles> <div className='space common'> bounceIn <p>animation </p></div> </BounceInStyles>
            <FadeInStyles> <div className='space common'> fadeIn <p>animation</p></div> </FadeInStyles>
            <FlashStyles> <div className='space common'> flash <p>animation</p></div> </FlashStyles>
            <HeadShakeStyles> <div className='space common'> headShake <p>animation</p></div> </HeadShakeStyles> 
            <HingeStyles> <div className='space common'> hinge <p>animation</p></div> </HingeStyles>
            </div> 
        </div>
    )
}

export default Animation;