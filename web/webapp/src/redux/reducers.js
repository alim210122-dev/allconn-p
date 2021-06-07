// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import AppMenu from './appMenu/reducers';
import Company from './company/reducers';
import Counter from './count/counter';
import Todos from './count/todos';
import productCode from './productCode/reducers';
import partnerCode from './partnerCompany/partner';



export default combineReducers({
    Auth,
    AppMenu,
    Layout,
    Company,   //회원가입
    Counter,
    Todos,
    productCode,  // 제품코드 생성
    partnerCode,  // 거래처 등록
    
});
