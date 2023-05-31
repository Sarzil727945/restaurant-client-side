import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingUp = () => {
     useTitle('SingUp')
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log(data);
     }
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' {...register("email", { required: true })} className="input input-bordered" />
                                        {errors.password && <span className=' text-red-500 mt-1'>email is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" {...register("password", { required: true,
                                              minLength: 6, 
                                              maxLength: 10,
                                              })} name='password' className="input input-bordered" />
                                        {errors.password && <span className=' text-red-500 mt-1'>Password is required</span>}
                                        {errors.password?.type === 'minLength' && <span className=' text-red-500 mt-1'>Password must be 6 characters</span>}
                                        {errors.password?.type === 'maxLength' && <span className=' text-red-500 mt-1'>Password must be 6 characters</span>}

                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button className="btn btn-primary">Sign Up</button>
                                   </div>
                              </form>
                              <p><Link to='/login'>login</Link></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingUp;