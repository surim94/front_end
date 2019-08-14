import React from 'react'
import {
  Grid,
  Header,
  Segment,
  Image
} from 'semantic-ui-react'

import { ResponsiveContainer, ConfirmContainer } from 'containers';
import Footer from 'components/footer/Footer'
import img from 'public/assets/img/white-image.png';

const App = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Semantic UI
            </Header>
            <p style={{ fontSize: '1.33em' }}> 
              Semantic UI는 사용자 친화적인 HTML을 사용하여 아름다운 반응형 레이아웃을 만드는 데 도움이되는 개발 프레임워크입니다. 
            </p>
            <a href="https://semantic-ui.com/introduction/getting-started.html" > 
              공식사이트 바로가기
            </a>
            <Header as='h3' style={{ fontSize: '2em' }}>
              React Template
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              React 기반으로 화면을 쉽고 빠르게 개발하기 위해 작성된 Frontend 템플릿 입니다.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Image bordered rounded size='large' src={img} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <ConfirmContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
)
export default App