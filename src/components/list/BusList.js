import React from 'react'
import { Item } from 'semantic-ui-react'
import arrowImage from 'public/assets/img/arrow.png'
import arrowImageRed from 'public/assets/img/arrow_red.png'
import arrowImageGreen from 'public/assets/img/arrow_green.png'

const BusList = ({list}) => {

    return (
      list.map((object ,i) => (
         <Item key={object.key}>
            <Item.Image size='mini' src={object.key == '13371' ? arrowImageRed : (object.key % 2 ==0 ? arrowImageGreen : arrowImage)} />
    
            <Item.Content verticalAlign='middle'>
            <Item.Header>{object.text} ({object.key})</Item.Header>
            </Item.Content>
        </Item> 
             
        ))
)
}

export default BusList