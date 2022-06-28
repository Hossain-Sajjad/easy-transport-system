import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" cardMassage="We are open 24/7 for your service" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardMassage="We are available in almost all over the country." bgClass="bg-neutral" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardMassage="Contact us for most trusted service in country." bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;