import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/signup");
    }
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mt-3 mb-5'>Extend your trading  and investment experinces even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src='media/images/smallcaseLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Thematic investing platform <br></br> that helps you invest in diversified <br></br> baskets of stocks on ETFs</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/goldenpiLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Investment research platform<br></br> that offers detailed insights on stocks,<br></br> sectors, supply chains, and more</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/dittoLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Personalized advice on life <br></br> and health insurance. No spam<br></br> and no mis-selling</p>
                </div>
                 <div className='col-4 p-3 mt-4'>
                    <img src='media/images/smallcaseLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Thematic investing platform <br></br> that helps you invest in diversified <br></br> baskets of stocks on ETFs</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Options trading platforms that lets you <br></br>create stratergies, analyse positions, and examine<br></br> data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src='media/images/streakLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted mt-3 fs-6'>Systematic trading platform that allows you to create and backtest strategies without coding</p>
                </div>
                <button className='btn btn-primary p-2 fs-5 mb-5 mt-4' style={{width:"20%", margin:"0 auto"}} onClick={handleSignupClick}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;