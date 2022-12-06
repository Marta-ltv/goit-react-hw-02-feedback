import React from "react";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className='Feedback__list'>
    {options.map((option, index) => (
      <button key={index} type="button" className='Feedback__btn' onClick={() => onLeaveFeedback(option)}>{option}</button>
      ))}
    </div>    
);


FeedbackOptions.propTypes = {
    options: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.number.isRequired,
};