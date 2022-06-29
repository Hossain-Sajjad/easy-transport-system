import React from 'react';
import truck from '../../assets/images/truck.png';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

const AppointmentBanner = ({ date, setDate }) => {

    const [selected, setSelected] = useState('');

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={truck} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='mr-20'>
                    <DayPicker
                        styles={{
                            caption: { color: 'goldenrod' },
                        }}
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;