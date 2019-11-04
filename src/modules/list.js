import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/*
 * 액션 타입 정의
 */
const SET_LIST = 'stop/SET_LIST';
const SET_BUS_LIST = 'stop/SET_BUS_LIST';

/*
 * 액션 생성 함수 정의
 */
export const setList = createAction(SET_LIST);
export const setBusList = createAction(SET_BUS_LIST);

 /*
  * 초기상태 정의
  */
 const initialState = Map({
     list: [],
 });

 /*
 * reducer 작성
 */
export default handleActions({
  [SET_LIST] : (state, action) => {
    return state.set('stoplist', action.payload)
  },
  [SET_BUS_LIST] : (state, action) => {
    return state.set('stopbuslist', action.payload)
  }
}, initialState)
