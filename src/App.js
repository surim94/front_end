import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Dropdown,
  Item
} from 'semantic-ui-react'
import whiteImage from 'public/assets/img/white-image.png';
import style from 'style/style'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'modules/list'
import { BusList } from 'components'

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

//console.log(ListAction);
//const stopOptions = [{list}]

class App extends React.Component {
   //생성자
   constructor(props) {
    super(props);
    this.state = {

    };
  }

   //렌더링 이후 실행되는 함수
  componentDidMount() {
    this.handleGetList();
  }

  // 저장된 정류장 조회
  handleGetList = () => {
    const { ListAction } = this.props;

    axios({
      url: "/bus",
      method: "get",
      headers: {"Pragma": 'no-cache'}
    })
    .then( (response) => {
      if (response == null){
          console.log('response is null!');
      }else {
          //조회한 데이터 store에 셋팅
          response.data.map((object ,i) => (
            object.key = object.busStaId,
            object.value = object.busStaId,
            object.text = object.busStaNm,
            delete object.busStaId,
            delete object.busStaNm
          ));
          console.log(response.data);
          ListAction.setList(response.data);
          
      }
    }).catch(function(error) {
      console.log(error.response);
    });
  }

  render() {
    const { stoplist } = this.props;
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5}>
            <Grid.Row style={style.search_grid}> 출발지 <Dropdown placeholder='Select' search selection options={stoplist} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 도착지 <Dropdown placeholder='Select' search selection options={stoplist} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 시간대 <Dropdown placeholder='Select' search selection options={stopOptions} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> <Button>검색하기</Button> </Grid.Row>
          </Grid.Column>
          <Grid.Column width={11} style={{overflow: 'auto', maxHeight: 1000 }}>
            <Item.Group divided>
              <BusList list={stoplist}></BusList>
            </Item.Group>
            
            {/* <Grid.Row style={style.search_grid}>Bus 1</Grid.Row>
            <Grid.Row style={style.search_grid}>Bus 2</Grid.Row> */}
          </Grid.Column>
        </Grid.Row>
       
      </Grid>
    )
  }
}

// props의 초깃값을 정의합니다.
App.defaultProps = {
  stoplist: stopOptions
};

export default connect(
  (state) => ({
      stoplist: state.list.get('stoplist'),
  })
  , (dispatch) => ({
      ListAction : bindActionCreators(listActions, dispatch)
  })
)(App);