import React from 'react'
import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react'
import style from 'style/style'


const MainFooter = () => (
    <Segment inverted vertical style={style.segment_mainfooter}>
        <Container>
        <Header as='h4' inverted>
            Footer Header
        </Header>
        <p>
            footer 영역입니다. 여기에 footer contents를 입력하세요.
        </p>
        </Container>
    </Segment>    
)

export default MainFooter