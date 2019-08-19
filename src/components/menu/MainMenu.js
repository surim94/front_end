import React from 'react'
import {
  Container,
  Menu,
  Icon
} from 'semantic-ui-react'
import style from 'style/style'

const MainMenu = ({activeItem, handleItemClick}) => (
  <Container style={style.container_mainmenu}>
    <Menu icon='labeled' stackable widths={2}>
      <Menu.Item 
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        data-url='/'>
        <Icon name='home' />
        HOME
      </Menu.Item>

      <Menu.Item 
        name='list'
        active={activeItem === 'list'}
        onClick={handleItemClick}
        data-url='/list'>
        <Icon name='list' />
        LIST
      </Menu.Item>
    </Menu>
  </Container> 
)

export default MainMenu