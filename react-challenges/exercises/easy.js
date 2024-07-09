//EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  render() {
    return (
      <div>
        Name: {this.state.person.name}<br />
        Number: {this.state.person.number}<br />
        Date of Birth: {this.state.person.dateOfBirth}
      </div>
    );
  }
}

export default App;

