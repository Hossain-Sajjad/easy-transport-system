import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Register.css";
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Shared/Social/Social';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }

    const onSubmit = (data) => {
        const email = data.email;;
        const password = data.password;
        createUserWithEmailAndPassword(email, password)
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input placeholder="name" {...register("name", { required: "Please enter your name" })} />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}

                <label htmlFor="email">Email</label>
                <input placeholder="email" {...register("email", {
                    required: "Please enter your mail before submit",
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address"
                    }
                })} />
                {errors.email && <p className='text-danger'>{errors.email.message}</p>}

                <label htmlFor="password">Password</label>
                <input placeholder="password" type="password" {...register("password", { required: "enter a strong password" })} />
                {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                {errorElement}
                <input className='btn btn-primary register-btn' type="Submit" defaultValue="Register" />
            </form>
            <div className='mt-4'>
                <p className='text-center  text-white'>Already have a account? <Link to='/login' className='text-decoration-none text-primary ml-2'>Log In</Link></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default Register;