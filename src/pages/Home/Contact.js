import React from "react";
import '../Home/css/Contact.css'


const Contact = () => {
    return (
        <div className='px-10 py-14 contact-section bg-gradient-to-r from-primary to-accent'>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold  text-black'>
                    Contact Us
                </p>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button class="btn btn-outline btn-white text-white hover:text-black">Submit</button>
            </div>
        </div>
    );
};

export default Contact;