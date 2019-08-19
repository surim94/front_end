import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import whiteImage from 'public/assets/img/white-image.png';

class App extends React.Component {
  render() {
    return (
      <div>      
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  React Template Sample
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  이 샘플은 Semantic UI를 이용하여 화면을 그리고 리스트를 조회하는 방법을 소개하고 있습니다. 
                </p>            
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Semanti UI (React)
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Semantic UI는 React 컴포넌트와 CSS를 제공하여 UI를 쉽게 구현할 수 있도록 도와주는 UI Framework 입니다. 
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={whiteImage} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button primary size='huge' href='https://react.semantic-ui.com'>Semantic UI 알아보기</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default App