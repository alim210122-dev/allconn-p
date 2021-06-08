/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const GET_FIRST_CODE_CLASS = 'codeMaster/GET_FIRST_CODE_CLASS';     // 코드 첫 번째 Class 가져오기

/* 액션 생성함수 만들기 */
export const setInitData = () => ({type: GET_FIRST_CODE_CLASS});

/* 초기값 설정하기 */
export const initialData = {
  classFirst : [],
  classSecond : [],
  classThird : [],
}

/* 리듀서 선언 */
export default function counter(state = initialData, action) {
  switch (action.type) {
    case GET_FIRST_CODE_CLASS:
      return {
        ...state,
        classFirst: action.payload
      };
    default:
      return state;
  }
}
