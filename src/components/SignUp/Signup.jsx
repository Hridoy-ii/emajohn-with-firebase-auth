import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        setError('');

        if (password.length < 6) {
            setError('Password must be 6 characters or long');
        }
        else if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
                form.reset();
            })
            .catch(error =>{
                console.log(error);
                setError(error.message);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Account!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className='text-pink-500'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value="Sign Up" />
                            </div>
                            <div className='text-right text-fuchsia-400'>
                                <Link to="/Login"><small>Already have an account?</small></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;