import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import BookingBanner from './BookingBanner';
import BookingServices from './BookingServices';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <BookingBanner date={date} setDate={setDate}></BookingBanner>
            <BookingServices></BookingServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;