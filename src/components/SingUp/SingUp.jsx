import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';


const SingUp = () => {
     useTitle('SingUp')
     const [error, setError] = useState('')
     const navigate = useNavigate()

     const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

     const { createUser } = useContext(AuthContext)

     const onSubmit = data => {
          console.log(data);
                  // Signed up part start
                  createUser(data.email, data.password)
                  .then((userCredential) => {
                       const currentUser = userCredential.user;
                       if (currentUser) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Login Success !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }
                    reset()
                    navigate('/')
                    upDataUser(currentUser, data.name, data.photo)
                  })
                  .catch((error) => {
                       const errorMessage = error.message;
                       setError(errorMessage)
                  });
             // Signed up part end
     }

     const upDataUser = (user, name, photoUrl) => {
          updateProfile(user, {
               displayName: name,
               photoURL: photoUrl
          })
               .then(() => {
                    // Profile updated!
                    // ...
               }).catch((error) => {
                    setError(error.message)
               });
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
                                        {errors.name && <span className=' text-red-500 mt-1'>email is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="Photo URL" {...register("photo")} name='photo' className="input input-bordered" />
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
                                   <p>{error}</p>
                              </form>
                              <p><Link to='/login'>login</Link></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SingUp;