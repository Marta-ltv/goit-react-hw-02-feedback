import React, { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification'; 


export class App extends Component {
  //   static defaultProps = {
  //   total: 0,
  //   positivePercentage: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
    <h1>Please leave feedback</h1>
        <FeedbackOptions options={Object.keys(this.state)} />

    <h1>Statistics</h1>
        <Statistics />
        
        <Notification />
      </>
    )
}
};
