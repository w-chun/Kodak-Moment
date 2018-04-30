import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

export default class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <GreetingContainer />
      </div>
    );
  }
}
