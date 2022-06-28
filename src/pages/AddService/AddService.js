import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(" https://lit-fortress-65504.herokuapp.com/service", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(d => {
                console.log(d)
            })
    }
    return (
        <div>
            {/* <form>
                <label class="label">
                    <span class="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/12 mx-auto py-12">
                <input placeholder="name" {...register("name", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="weight" {...register("weight", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="time" {...register("time", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="price" {...register("price", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="img" {...register("img", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" />
            </form>
        </div>
    );
};

export default AddService;