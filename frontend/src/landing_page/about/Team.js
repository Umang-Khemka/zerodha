import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5'>
                <h1 className='text-center' style={{fontSize:"50px"}}>People</h1>
            </div>
            <div className="row p-3 text-muted" style={{lineHeight:"1.8",fontSize:"1.2em"}}>
                <div className="col p-3 text-center">
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"60%"}}></img>
                    <h4 className='mt-4'>Umang Khemka</h4>
                    <h6 className='mt-4 text-secondary'>Founder ,CEO</h6>
                </div>
                <div className="col p-3">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <span>Connect On </span>
                    <a href='' className='text-decoration-none'>Home &nbsp;</a>
                    <a href='' className='text-decoration-none'>Github &nbsp;</a>
                    <a href='' className='text-decoration-none'>Linkedin &nbsp;</a>
                </div>
            </div>
        </div>
     );
}

export default Team;