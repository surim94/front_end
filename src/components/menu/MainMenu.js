import React from 'react'
import {
  Container,
  Menu,
  Icon
} from 'semantic-ui-react'
import style from 'style/style'

class MainMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Container style={style.container_mainmenu}>
      <Menu icon='labeled' stackable widths={2}>
        <Menu.Item 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
          HOME
        </Menu.Item>
  
        <Menu.Item 
          name='list'
          active={activeItem === 'list'}
          onClick={this.handleItemClick}
        >
          <Icon name='list' />
          LIST
        </Menu.Item>
      </Menu>
    </Container> 
    )
  }
}

export default MainMenu