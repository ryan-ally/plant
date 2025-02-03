import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import logo from './er.jpeg';
import './Form.css';
import useForm from './useForm.js';
import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';







const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    ;

    function submitForm() {
        setIsSubmitted(true);
    }
    return ( 
        
        <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
        <img src={logo} className="form-er" alt="er" />
        </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /
        > : <FormSuccess />}
        </div> 
    );
};

export default Form;