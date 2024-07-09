//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         Name: Johnny Depp
//         Number: 1234567890
//         Date of Birth: January 01, 1990
//       </div>
//     );
//   }
// }

// export default App;


//EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <p>Name: Latori Miller</p>
//           <p>Number: 123-456-7890</p>
//           <p>Date of Birth: 06/07/2000</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


//MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: "John Doe",
//         number: "1234567890",
//         dateOfBirth: "January 01, 1990"
//       }
//     };
//   }

//   render() {
//     return <BasicInfo person={this.state.person} />;
//   }
// }

// function BasicInfo({ person }) {
//   return (
//     <div>
//       Name: {person.name}<br />
//       Number: {person.number}<br />
//       Date of Birth: {person.dateOfBirth}
//     </div>
//   );
// }

// export default App;

// MEDIUM

// MEDIUM

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Joy Smith',
//         number: '123-456-7890',
//         dob: '19/03/2002'
//       }
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <Info person={this.state.person} />
//       </div>
//     );
//   }
// }

// export default App;

// HARD
import React, { Component } from 'react';
import BasicInfo from './BasicInfo.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people:[
     
      {name: 'Diana Freitas', number: '555-555-5555', dob: '26/09/2003'},
      {name: 'Lilly Miller', number: '555-555-5555', dob: '29/03/1980'},
      {name: 'Maria Torrealba', number: '555-555-5555', dob: '22/08/2006'},
      {name: 'Jose Perez', number: '555-555-5555', dob: '23/05/2000'},
      {name: 'Justin Smith', number: '555-555-5555', dob: '01/09/2003'}
    ]
  }
 };

      

render() {
  return (
    <div>
      {this.state.people.map((person, index)=>(
        <BasicInfo key={index} person={person}/>
      ))}
    </div>
  );
}
}





export default App;