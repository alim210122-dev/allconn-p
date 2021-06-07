import * as API from './api';

/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_INIT_DATA = 'partnerCompany/SET_INIT_DATA';
const FETCH_COMPANY_LIST = 'partnerCompany/FETCH_COMPANY_LIST';

/* 초기 상태 선언 */
const RawData = {
  data: {
    companyCode: '',
    partnerCompanyCode: '',
    companyName: '',
    tradeType: '',
    businessRegistrationNumber: '',
    ceoName: '',
    ceoPhoneNumber: '',
    companyAddress: '',
    managerName: '',
    managerPhoneNumber: '',
    managerEmail: '',
    companyOpeningDate: '',
    companyClosingDate: '',
    deliveryAddress: '',
    remark: '',
    createdId: '',
    createdAt: '',
    updatedId: '',
    updatedAt: '',
  },
  companyList: [],
};

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const setInitData = () => ({type: SET_INIT_DATA, payload: RawData.data});
export const getCompanyList = () => dispatch => {
  return API.getCompanyList()
  .then(
      (response) => {
        console.log(JSON.stringify(response))
        // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
        dispatch({type: FETCH_COMPANY_LIST, payload: response})
      }
  ).catch(error => {
    // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
    console.log('API 자료 송신 오류');
  })

}

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function counter(state = RawData, action) {
  switch (action.type) {
    case SET_INIT_DATA:
      return action.payload;
    case FETCH_COMPANY_LIST:
      return {
        ...state,
        companyList: action.payload
      };
    default:
      return state;
  }
}
