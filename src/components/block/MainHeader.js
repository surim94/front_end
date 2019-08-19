import React from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'
import style from 'style/style'

const MainHeader = () => (
    <div>
        <Segment inverted color='black'>
        <Header as='h1' content='React Template' style={style.h1_mainheader} textAlign='center' />
        <Header as='h2' content='with Semantic UI' style={style.h2_mainheader} textAlign='center' />
        </Segment>
    </div>
)

export default MainHeader