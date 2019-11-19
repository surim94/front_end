import React from 'react'
import { Item } from 'semantic-ui-react'
import arrowImage from 'public/assets/img/arrow.png'
import arrowImageYellow from 'public/assets/img/arrow_yellow.png'
import arrowImageRed from 'public/assets/img/arrow_red.png'
import arrowImageRed2 from 'public/assets/img/arrow_red2.png'
import arrowImageOrange from 'public/assets/img/arrow_orange.png'
import arrowImageGreen from 'public/assets/img/arrow_green.png'

const BusList = ({list}) => {

    return (
      list.map((object ,i) => (
         <Item key={object.key}>
            <Item.Image size='mini' src={object.url == '10' ? arrowImageRed2 : (object.url == '20' ? arrowImageYellow : arrowImageGreen)} />
            <Item.Content verticalAlign='middle'>
            <Item.Header>{object.text} ({object.key})</Item.Header>
            </Item.Content>
        </Item> 
             
        ))
)
}

export default BusList