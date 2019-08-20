import React from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'
import style from 'style/style'

const MainHeader = () => (
    <div>
        <Segment inverted color='black'>
        <Header as='h1' content='Hy HAPPY ROAD' style={style.h1_mainheader} textAlign='center' />
        <Header as='h2' content='경영인프라O.G 포모어' style={style.h2_mainheader} textAlign='center' />
        </Segment>
    </div>
)

export default MainHeader