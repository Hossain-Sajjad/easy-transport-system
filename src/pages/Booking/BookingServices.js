import React, { useEffect, useState } from 'react';
import BookingService from './BookingService';

const BookingServices = () => {
    const [items, setIteams] = useState('');
    useEffect(() => {
        fetch(" https://lit-fortress-65504.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setIteams(data))
    }, [])
    return (
        <div>
            <h2 className='text-primary text-3xl text-center mt-10 font-semibold'>Our Services:</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {

                    items && items.map(item =>
                        <BookingService
                            key={item._id}
                            item={item}
                        ></BookingService>
                    )

                }
            </div>
        </div>
    );
};

export default BookingServices;