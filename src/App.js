import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Dropdown
} from 'semantic-ui-react'
import whiteImage from 'public/assets/img/white-image.png';
import style from 'style/style'

const stopOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
  },
]

class App extends React.Component {
  render() {
    return (

      <Grid celled='internally' style={{ padding : '20em 0em'}}>
        <Grid.Row>
          <Grid.Column width={5}>
            <Grid.Row style={style.search_grid}> 출발지 <Dropdown placeholder='Select' search selection options={stopOptions} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 도착지 <Dropdown placeholder='Select' search selection options={stopOptions} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 시간대 <Dropdown placeholder='Select' search selection options={stopOptions} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> <Button>검색하기</Button> </Grid.Row>
          </Grid.Column>
          <Grid.Column width={11}>
            <Grid.Row style={style.search_grid}>Bus 1</Grid.Row>
            <Grid.Row style={style.search_grid}>Bus 2</Grid.Row>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default App