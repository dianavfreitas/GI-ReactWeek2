//HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "John Doe",
          number: "1234567890",
          dateOfBirth: "January 01, 1990"
        },
        {
          name: "Jane Smith",
          number: "2345678901",
          dateOfBirth: "February 02, 1991"
        }
      ]
    };
  }

  render() {
    const peopleList = this.state.people.map((person, index) =>
      <BasicInfo key={index} person={person} />
    );

    return <div>{peopleList}</div>;
  }
}

function BasicInfo({ person }) {
  return (
    <div style={{ margin: '10px' }}>
      Name: {person.name}<br />
      Number: {person.number}<br />
      Date of Birth: {person.dateOfBirth}
    </div>
  );
}

export default App;
