
import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust With Confidence</h1>
                    <h2 className='fs-4 mb-3'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377; 3.5+ lakh crores
                        worth of equity investments.
                    </p>
                    <h2 className='fs-4 mb-3' >No Spam or gimmicks</h2>
                    <p className='text-muted'> No gimmicks, spam, "gamification", or annoying push notifications.
                        High quality apps that use at your pace, the way you like
                    </p>
                    <h2 className='fs-4 mb-3'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech
                        startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className='fs-4 mb-3'>Do better with money</h2>
                    <p className='text-muted'>With intiatives like Nudges and Kill switch, we don't just facilitate transactions,
                        but actively help you do better with your money
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"80%"}}></img>
                    <div className='text-center'>
                        <a href='' className='mx-5 text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' className='text-decoration-none'>Try kite demo   </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
