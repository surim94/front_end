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
  { key: '00', text: '00', value: '00'},
  { key: '01', text: '01', value: '01'},
  { key: '02', text: '02', value: '02'},
  { key: '03', text: '03', value: '03'},
  { key: '04', text: '04', value: '04'},
  { key: '05', text: '05', value: '05'},
  { key: '06', text: '06', value: '06'},
  { key: '07', text: '07', value: '07'},
  { key: '08', text: '08', value: '08'},
  { key: '09', text: '09', value: '09'},
  { key: '10', text: '10', value: '10'},
  { key: '11', text: '11', value: '11'},
  { key: '12', text: '12', value: '12'},
  { key: '13', text: '13', value: '13'},
  { key: '14', text: '14', value: '14'},
  { key: '15', text: '15', value: '15'},
  { key: '16', text: '16', value: '16'},
  { key: '17', text: '17', value: '17'},
  { key: '18', text: '18', value: '18'},
  { key: '19', text: '19', value: '19'},
  { key: '20', text: '20', value: '20'},
  { key: '21', text: '21', value: '21'},
  { key: '22', text: '22', value: '22'},
  { key: '23', text: '23', value: '23'}
]

class App extends React.Component {
   //생성자
   constructor(props) {
    super(props);
    this.state = {
      'start' :'',
      'end'  : '',
      'time'  : ''

    };
  }

   //렌더링 이후 실행되는 함수
  componentDidMount() {
    this.handleGetBusList();
    this.handleGetList();
  }

  // 저장된 정류장 조회
  handleGetList = () => {
    const { ListAction } = this.props;
    const { start, end } = this.state;
    console.log('1 :' + start)
    console.log(end)
    axios({
      url: "/bus?start="+start+"&end="+end,
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
            object.value = object.busSeq,
            object.text = object.busStaNm,
            delete object.busSeq,
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
  
    // 저장된 정류장 조회
    handleGetBusList = () => {
    const { ListAction } = this.props;
    const { start, end } = this.state;
      axios({
        url: "/bus?start="+start+"&end="+end,
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
              object.value = object.busSeq,
              object.text = object.busStaNm,
              delete object.busSeq,
              delete object.busStaId,
              delete object.busStaNm
            ));
            console.log(response.data);
            ListAction.setBusList(response.data);
            
        }
      }).catch(function(error) {
        console.log(error.response);
      });
    }

  handleStart = (e, {value}) => {
    const end = this.state.end;
      if(value < end || end === '') {
        this.setState({'start' : value});
      } else {
        alert("출발지가 도착지와 같거나 이후일 수 없습니다.");
      }
  }

  handleEnd = (e, {value}) => {
    const start = this.state.start;
    if(value > start || start === '') {
      this.setState({'end' : value});
    } else {
      alert("도착지가 출발지와 같거나 이전일 수 없습니다.")
    }
    
  }

  handleTime = (e, {value}) => {
    const time = this.state.time;
    this.setState({'time' : value});
    console.log("value : " + value);
    console.log("time : " + this.state.time);
  }

  render() {
    const { stoplist } = this.props;
    const { stopbuslist } = this.props;
    const { handleStart, handleGetList, handleTime } = this;
    const { handleEnd } = this;
    const start = this.state.start;
    const end = this.state.end;
    const time = this.state.time;
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5}>
            <Grid.Row style={style.search_grid}> 출발지 <Dropdown placeholder='Select' search selection options={stopbuslist} onChange = {handleStart} value={start}/> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 도착지 <Dropdown placeholder='Select' search selection options={stopbuslist} onChange = {handleEnd} value={end} /> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> 시간대 <Dropdown placeholder='Select' search selection options={stopOptions} onChange = {handleTime} value={time}/> <br /></Grid.Row>
            <Grid.Row style={style.search_grid}> <Button onClick={handleGetList}>검색하기</Button> </Grid.Row>
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
      stopbuslist: state.list.get('stopbuslist')
  })
  , (dispatch) => ({
      ListAction : bindActionCreators(listActions, dispatch)
  })
)(App);