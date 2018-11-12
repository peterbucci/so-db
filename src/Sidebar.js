import React from 'react'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      charactersExpanded: false,
      weaponsExpanded: false,
      skillsExpanded: false,
    }
  }

  render () {
    const {
      charactersExpanded
    } = this.state
    const {
      characters,
      updateContent
    } = this.props

    return (
      <div id="sidebar">
        <img src="/logo.png" alt=""/>
        <div 
          className={`category ${charactersExpanded ? 'expanded' : ''}`}
          onClick={() => this.setState({charactersExpanded: !charactersExpanded})}
        >
          Characters
        </div>
        <ul className="dropdown">
          {characters.map(character => 
            <li 
              key={character.id}
              onClick={() => updateContent({id: character.id, contentType: 'character'})}
            >
              {character.name}
            </li>
          )}
        </ul>
        <div className="category">Weapons</div>
      </div>  
    )
  }
}

export default Sidebar