import React from 'react'
import { MainMenu } from 'components'

class MenuContainer extends React.Component {
  state = {
    activeItem: "home"
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <MainMenu activeItem={activeItem} onClick={handleItemClick} /> 
    )
  }
}

export default MenuContainer