import React, { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification'; 


export class App extends Component {
    static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const result = this.countTotalFeedback();
    const positiveFeedback = (good * 100 ) / result;
    return Math.round(positiveFeedback);
  };

  onHandleFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.onHandleFeedback} />

        <h1>Statistics</h1>
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositivePercentage()} />
        ) : (<Notification message="There is no feedback" />)}
      
      </div>
    );
}
}
