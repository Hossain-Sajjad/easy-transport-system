import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Social.css'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading) {
        loadingElement = <Loading></Loading>;
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div class="divider">OR</div>
            {errorElement}
            {loadingElement}
            <div className='w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary flex justify-center google-btn w-50 d-block mx-auto'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Social;