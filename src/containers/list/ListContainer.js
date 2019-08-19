import React from 'react'
import {
  Container,
  Header,
  Item,
} from 'semantic-ui-react'
import style from 'style/style'
import { SampleList } from 'components'
import axios from  'axios';

/** 리덕스 연결을 위해 필요한 모듈  **/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/** modules에서 선언한 액션함수 및 reducer를 가져온다 **/
import * as listActions from 'modules/list';

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

// 컴포넌트에 리덕스 연결시 아래 형태 connect - state - dispatch 사용
export default connect(
    //component에서 사용하기 위해 store에서 저장된 값을 꺼내서 할당하는 부분
    //this.props.list
    //this.props.userId 이런식으로 접근
    (state) => ({
        /* ↓ 현재 component에서 사용될 props 명 */
        list: state.list.get('list'), /* faqList라는 props 내부 변수에 store에 저장되어 있는 list를 get해서 저장 */
                  /* ↑ store의 state에서 꺼내는 부분 */             
    })
    //현재 component에서 사용하기 위해 reducer에서 가져온 함수를 할당하는 부분
    //this.props.FaqAction
    , (dispatch) => ({
        /* ↓ 현재 component에서 사용될 props 명 */
        ListAction : bindActionCreators(listActions, dispatch), /*상단에서 선언한 faqActions(modules)에 만들어놓은를 가져와서 FaqAction에 넣는다 */
                                        /* ↑ modules 폴더에서 선언한 내용 */
    })
)(ListContiner);
