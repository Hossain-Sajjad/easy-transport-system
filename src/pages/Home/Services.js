import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Truck Rental Service',
            description: 'For any kind of truck service we are here to provide you the best deal.',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEP-INtZjh1caDpemjuh5gUuM1ivNezc6cw&usqp=CAU"
        },
        {
            _id: 2,
            name: 'Shifting Home',
            description: 'We are here to reduce your pain and can help every corner of the counter,',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iLoYkIh1wQ6rxm-WHnJHYLF-C7rpLUBfXA&usqp=CAU"
        },
        {
            _id: 3,
            name: 'Logistic Service',
            description: 'Send your product anywhere in the world by the help of our network.',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VkmT_e2kdaqbZJWHR2qLZEhACltJKUjiw&usqp=CAU"
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;