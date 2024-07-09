//MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "John Doe",
        number: "1234567890",
        dateOfBirth: "January 01, 1990"
      }
    };
  }

  render() {
    return <BasicInfo person={this.state.person} />;
  }
}

function BasicInfo({ person }) {
  return (
    <div>
      Name: {person.name}<br />
      Number: {person.number}<br />
      Date of Birth: {person.dateOfBirth}
    </div>
  );
}

export default App;

