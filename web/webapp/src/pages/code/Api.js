import axios from 'axios';


export async function getCode1(dispatch) {
    dispatch({ type: 'GET_CODE1' });
    try {
      const response = await axios.get(
        'http://localhost:3065/api/code-master'
      );
      dispatch({ type: 'GET_CODE1_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_CODE1_ERROR', error: e });
    }
}
  