// HARD
import React, { Component } from 'react';
import './App.css';

class BasicInfo extends React.Component {

  render() {
    const {name, number, dob,} = this.props.person;
    return (
      <div className="App">
        <p>name: {name} </p>
        <p>number: {number} </p>
        <p>dob: {dob}</p>
      </div>
    );
  }
}

export default BasicInfo;