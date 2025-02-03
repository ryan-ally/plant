import React from 'react';
import useForm from './useForm';
import './Form.css';
import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';

const FormSignup = () => {
    const { handleChange, values, handleSubmit, errors } = useForm();

    return (
    <div className="form-content-right">
    <form className="form" onSubmit={handleSubmit}>
    <h1>
    Get started with us today fill out info below
    </h1>
    <div className="form-inputs">
    <label htmlFor="username" 
    classname="form-label"><b>Username:</b>
    </label>
    <input 
    id='username'
    type='text' 
    name='username' 
    className='form-input'
    placeholder='Enter your username'
    value={values.username}
    onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
    </div>
    <div className="form-inputs">
    <label htmlFor="email" 
    classname="form-label"><b>Email:</b>
    </label>
    <input 
    id='email'
    type='email' 
    name='email' 
    className='form-input'
    placeholder='Enter your email'
    value={values.email}
    onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
    </div>
    <div className="form-inputs">
    <label htmlFor="password" 
    classname="form-label"><b>Password:</b>
    </label>
    <input 
    id='password'
    type='password' 
    name='password' 
    className='form-input'
    placeholder='Enter your password'
    value={values.password}
    onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
    </div>
    <div className="form-inputs">
    <label htmlFor="password2" 
    classname="form-label"><b>Confirm Password:</b>
    </label>
    <input 
    id='password2'
    type='password' 
    name='password2' 
    className='form-input'
    placeholder='Enter your password'
    value={values.password2}
    onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
    </div>
    <button className="form-input-btn" type="submit">Sign up</button>
    <p className='form-input-login'>
    Already have an account? Login <a 
    href='#'>here</a>
    </p>
    </form>
    </div>
    );
};

export default FormSignup;