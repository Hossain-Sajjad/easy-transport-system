import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Stat from './Stat';
import Testimonials from './Testimonials';

const home = () => {
    return (
        <div>
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Stat></Stat>
                <Services></Services>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default home;