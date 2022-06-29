import React from 'react';

const Stat = () => {
    return (
        <div style={{
            background: `url(https://www.heavyhaulers.com/images/banner-services-freight-container.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }} className="mt-24">
            <div className='py-24'>
                <div class="stats stats-vertical lg:stats-horizontal flex flex-col lg:flex-row mx-auto lg:max-w-screen-lg bg-primary text-white">
                    <div class="stat flex items-center justify-center flex-col lg:h-[200px]">
                        <div class="stat-value text-xl font-semibold">Total Customer</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-value font-semibold text-sm">Jan 1st - May 1st</div>
                    </div>

                    <div class="stat flex items-center justify-center flex-col lg:h-[200px]">
                        <div class="stat-value text-xl font-semibold">New Customer</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-value font-semibold text-sm">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat flex items-center justify-center flex-col lg:h-[200px]">
                        <div class="stat-value text-xl font-semibold">Customer Retention</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-value font-semibold text-sm">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stat;