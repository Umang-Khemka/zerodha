import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 mb-5 border-bottom page-content'>
            <div className='text-center py-4'>
                <h1>Zerodha Products</h1>
                <p className='fs-5 text-muted mt-3'>
                    Sleek, modern, and intuitive trading platforms
                </p>
                <p className='mt-3 mb-4'>
                    Check out our{' '}
                    <a href='#' className='text-decoration-none'>
                        investment offerings <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
