import React from 'react';
import { useNavigate } from 'react-router-dom';


function OpenAccount() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/signup");
    }
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p className='mt-2'>Modern platforms and apps, &#8377; 0 investments, and flat &#8377; 20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 fs-5 mb-5 mt-2' style={{width:"20%", margin:"0 auto"}} onClick={handleSignupClick}>Signup Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;