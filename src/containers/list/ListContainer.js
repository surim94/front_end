import React from 'react'
import {
  Container,
  Header,
  Item,
} from 'semantic-ui-react'
import style from 'style/style'
import { SampleList } from 'components'
import axios from  'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'modules/list'

class ListContiner extends React.Component {
    /** 생성자 */
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    //렌더링 이후 실행되는 함수
    componentDidMount() {
      this.handleGetList();
    }
  
    /** 저장된 리스트 조회 */
    handleGetList = () => {
      const { ListAction } = this.props;

      axios({
        url:"/sample",
        method:"get",
        headers: { "Pragma": 'no-cache'}  
      })
      .then( (response) => {
        if (response == null){
            console.log('response is null!');
        }else {
            //조회한 데이터 store에 셋팅
            ListAction.setList(response.data);
        }
      }).catch(function(error) {
        console.log(error.response);
      });
    }

    render() {
        const { list } = this.props;
        return (
            <div>
            <Header as='h3' content='Sample Contents' style={style.h3_list} textAlign='center' />
            <Container style={style.container_list}>
                <Item.Group divided>
                    <SampleList list={list}></SampleList>
                </Item.Group>
            </Container>
          
          </div>
        )
    }
}

export default connect(
    (state) => ({
        list: state.list.get('list'),
    })
    , (dispatch) => ({
        ListAction : bindActionCreators(listActions, dispatch)
    })
)(ListContiner);
