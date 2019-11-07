import React from 'react'
import {
  Header,
  Segment,
  Icon
} from 'semantic-ui-react'
import style from 'style/style'

const MainHeader = () => (
    <div>
        <Segment inverted color='yellow' style={{textAlign : 'center'}}>
        <Icon name='bus' size="huge" style={{marginTop : '20px'}}/>
        <Header as='h1' content='HAPPY BUS' style={style.h1_mainheader} textAlign='center' />
        <Header as='h2' content='경영인프라O.G 포모어' style={style.h2_mainheader} textAlign='center' />
        </Segment>
    </div>
)

export default MainHeader