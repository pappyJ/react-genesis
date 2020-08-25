import React, { Component } from "react";
// import logo from "./logo.svg";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

import users from "./data/users.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Pappy J The Great Man",

      monsters: [],

      searchField: "",
    };
  }

  componentDidMount() {
    this.setState({ monsters: users });
  }
  render() {
    const { searchField, monsters } = this.state;

    const filtredState = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1>monsters Rolodex</h1>
        <SearchBox
          inputText="search monsters"
          inputAction={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filtredState}></CardList>
      </div>
    );
  }
}

export default App;
