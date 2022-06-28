import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-3/6' src="https://images.hogeschoolrotterdam.nl/Blob/fe19d708e4294dc18c4984a16e4fa086/e67c2cc4d8354aa180283afded94ece7.jpg?width=1200&height=630&mode=crop" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Transport Partner</h1>
                    <p className="py-6">The Ease of Truck Hiring. Take your logestics from one place to other with most secure way.</p>
                    <button class="btn btn-primary text-white">Discover more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;