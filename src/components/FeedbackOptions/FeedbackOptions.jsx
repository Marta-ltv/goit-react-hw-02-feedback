import React from "react";
// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className='Feedback__list'>
    {options.map((option, index) => (
      <button key={index} type="button" className='Feedback__btn' onClick={() => onLeaveFeedback(option)}>{option}</button>
      ))}
    </div>    
);


