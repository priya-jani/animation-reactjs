import React , {useState,useEffect} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const GenerateCaptcha = () =>{

    const [userCaptch,setUserCaptch] = useState('');
    const MINUTE_MS = 10000;

    useEffect(()=>{
        loadCaptchaEnginge(8,'red','green');
    },[])

    // If we want to change captch in some times then use->
    useEffect(() => {
        const interval = setInterval(() => {
            loadCaptchaEnginge(8,'red','green');
        }, MINUTE_MS);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
     }, [])

    const compareCaptcha = () =>{
        console.log("in button click-- ",userCaptch);

        if(validateCaptcha(userCaptch) == true){ // If you don't want captcha to be reloaded if user enter the wrong value then set second parameter to false means (validateCaptcha(userCaptch,false) === true)
            console.log("***** Matched *****");
            loadCaptchaEnginge(8,'red','green');
        }else{
            console.log("***** Unmatched *****");
        }
    }

    return(
        <>
        <div>Please enter captcha</div>

        <br />

        <LoadCanvasTemplate /> {/* It will generate captcha */}

        <input type="text" value={userCaptch} onChange={(e)=>{setUserCaptch(e.target.value)}} />
        <button onClick={()=> compareCaptcha()}>Submit</button> 
        </>
    )
}

export default GenerateCaptcha;