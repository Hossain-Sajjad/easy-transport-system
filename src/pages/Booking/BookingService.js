import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingService = ({ item }) => {
    const { name, weight, time, price, img } = item;
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/checkout')
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Weight: {weight} Ton</p>
                <p>Total {time} hours</p>
                <p>Rent : {price}$</p>
                <div class="card-actions">
                    <button onClick={handleSubmit} class="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookingService;