// Redering content conditionally

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: event.target.value, age: 29 },
  //       { name: 'Stephanie', age: 26 }
  //     ]
  //   })
  // }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
      console.log(persons)
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button id="btn" onClick={this.togglePersonHandler}>Switch Name</button>
        { persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
