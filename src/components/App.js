import React, { Component } from 'react'

import './App.css'

import CardList from './cardList/CardList'
import SearchBox from './searchBox/SearchBox'

// initial state is an empty array
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    this.setState({ monsters: json })
  }
  // going to pass in monsters as a prop from our App, to CardList
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // filter our monsters by creating a new [] in render, thus leaving orginal [] intact, start with destructuring
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={(e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App

// we are going to wait for our component to mount, then fetch all our users, than update our state 'monsters' with the new [] of users.
// taking the response and converting it into the json format that js can understand and use.
/*
<input
					type='search'
					placeholder='search monsters'
					onChange={(e) => {
						this.setState(
							{ searchField: e.target.value },
							//callback, runs after async setState has completed, ie updated state
							() => console.log(this.state)
						)
					}}
				/>

*/
