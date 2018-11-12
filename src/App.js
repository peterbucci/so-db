import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { characters, weapons, skills } from './temp-db'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characters: [],
      weapons: [],
      skills: [],
      content: null
    }
  }

  componentDidMount () {
    this.setState({
      characters,
      weapons,
      skills
    })
  }

  render() {
    const {
      content,
      characters,
    } = this.state

    return (
      <div id="app">
        <Sidebar 
          characters={characters}
          updateContent={({id, contentType}) => {
            this.setState({
              content: characters.find(char => char.id === id),
              contentType
            })
          }}
        />
        <div id="content">
          {content ?
            <div>{content.name}</div>
            :
            <div>Welcome to SO Wiki</div>
          }
        </div>
      </div>
    )
  }
}

export default App
