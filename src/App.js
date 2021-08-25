import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      // monsters: [
      //   {name: "Frankestein",id: "mon1",},
      //   { name: "Dracula", id: "mon2",},
      //   { name: "Zombie", id: "mon3",},
      // ],
      searchField: "",
    };
   // this.handleClick2 = this.handleClick1.bind(this);
  }

  // handleClick1() {
  //   console.log('Button 1 clicked')
  // }

 // handleClick3 = () => console.log('Button 3 clicked')

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //.then(users=> console.log(users));
      .then((users) => this.setState({ monsters: users }));
  }

  

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input type='search' placeholder='search monster' onChange={e=> console.log(e.target.value)} /> */}
        {/* <button onClick= {this.handleClick1()}>button 1</button>
        <button onClick= {this.handleClick1}>button 2</button>
        <button onClick= {this.handleClick2}>button 3</button>
        <button onClick= {this.handleClick3}>button 4</button> */}
        <h1 className="h1"> Monsters Rolodex </h1>
        <SearchBox
          placeholder={"search monster"}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <p>Hi, {this.state.string}</p>
  //         <button onClick={() => this.setState({ string: "Vishal" })}>
  //           Change Text
  //         </button>
  //         Learn React
  //       </header>
  //     </div>
  //   );
  // }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hi, This is Vishal Gupta.</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
