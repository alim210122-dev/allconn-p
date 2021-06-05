import * as API from './api'; // api/posts 안의 함수 모두 불러오기

import { createPromiseThunk, reducerUtils,handleAsyncActions } from 'redux/asyncUtils';

/*
    [리듀서 생성순서]
    1. 액션 타입 선언
    2. 액션 생성함수 선언
    3. 초기 상태 선언
    4. 리듀서 작성
 */


/* 액션 타입 선언 */
const FILTER_MAIN_CODE = 'productCode/FILTER_MAIN_CODE';
const SET_INITIAL_DATA = 'productCode/SET_INITIAL_DATA';
const SET_CLICKED_PRODUCTCODE = 'productCode/SET_CLICKED_PRODUCTCODE';
const SET_WORD_FOR_FILTER = 'productCode/SET_WORD_FOR_FILTER';


const GET_SALES_CODE = 'productCode/GET_SALES_CODE';    //요청 시작
const GET_SALES_CODE_SUCCESS = 'productCode/GET_SALES_CODE_SUCCESS';    // 요청 성공
const GET_SALES_CODE_ERROR = 'productCode/GET_SALES_CODE_ERROR';    // 요청 실패




/* 액션 생성함수 선언 */
export const filterMainCode = (companyCode) => ({ type: FILTER_MAIN_CODE, companyCode});
export const setInitialData = () => ({ type: SET_INITIAL_DATA});
export const setClickedData = (v) => ({ type: SET_CLICKED_PRODUCTCODE, v });
export const setFilterWordFirst  = (a) => ({type:SET_WORD_FOR_FILTER, a})
export const setSalesCode = createPromiseThunk(GET_SALES_CODE, API.getSalesData);





/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
let initialState = {
        companyData : [
            {value : "Z330", label : "삼립식품"},
            {value : "Z331", label : "파리바게트"},
            {value : "Z332", label : "BGF리테일_CU"},
        ],
        mainCode : [
            {companyCode : "Z330", mainCode : "C4000001", mainCodeName : "겨울호빵 39g"},
            {companyCode : "Z330", mainCode : "C4000002", mainCodeName : "겨울호빵 50g"},
            {companyCode : "Z330", mainCode : "C4000003", mainCodeName : "겨울호빵 135g"},
            {companyCode : "Z331", mainCode : "C4000101", mainCodeName : "생일케잌 39g"},
            {companyCode : "Z331", mainCode : "C4000102", mainCodeName : "생일케잌 89g"},
            {companyCode : "Z331", mainCode : "C4000103", mainCodeName : "생일케잌 189g"},
        ],
        subCode : [
            {subCode : "C4000001001", subCodeName : "겨울호빵 39g_일반코팅"},
            {subCode : "C4000001001", subCodeName : "겨울호빵 39g_유광코팅"},
            {subCode : "C4000001001", subCodeName : "겨울호빵 39g_형광코팅"}
        ],
        sampleCode : [{"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10000","productName":"감칠맛미원100g","otherCodeFirst":"103036PX","otherCodeSecond":"z6000015","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"김상민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10001","productName":"감칠맛미원130g","otherCodeFirst":"101536PX","otherCodeSecond":"z6000017","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10002","productName":"감칠맛미원250g(세)","otherCodeFirst":"100029PX","otherCodeSecond":"z6000022","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10003","productName":"감칠맛미원280g","otherCodeFirst":"101579PX","otherCodeSecond":"z6000024","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10004","productName":"감칠맛미원500g","otherCodeFirst":"100033OX","otherCodeSecond":"z6000030","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10005","productName":"감칠맛미원1kg","otherCodeFirst":"100059OX","otherCodeSecond":"z6000019","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10006","productName":"감칠맛미원2kg","otherCodeFirst":"100031PX","otherCodeSecond":"z6000026","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10005","companyName":"대상(주)기흥공장","productCode":"D10007","productName":"사탕수수발효미원50g","otherCodeFirst":"103716","otherCodeSecond":"z6020327","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10008","productName":"사탕수수발효미원100g","otherCodeFirst":"103464","otherCodeSecond":"z6019294","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10009","productName":"사탕수수발효미원200g","otherCodeFirst":"103704","otherCodeSecond":"z6020308","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10010","productName":"사탕수수발효미원250g","otherCodeFirst":"103465","otherCodeSecond":"z6020954","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10011","productName":"사탕수수발효미원500g","otherCodeFirst":"103466","otherCodeSecond":"z6020955","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10012","productName":"사탕수수발효미원1kg","otherCodeFirst":"103970","otherCodeSecond":"z6020956","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10013","productName":"아미노산1.5kg","otherCodeFirst":"100276PX","otherCodeSecond":"z6000368","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10014","productName":"아미노산2kg지대276","otherCodeFirst":"100006PX","otherCodeSecond":"z6000375","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10015","productName":"아미노산2kg박스","otherCodeFirst":"100278PX","otherCodeSecond":"z6008474","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10016","productName":"아미노산2.5kg","otherCodeFirst":"101474PX","otherCodeSecond":"z6011114","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10017","productName":"(구)타원형1kg","otherCodeFirst":"100871OX","otherCodeSecond":"z6000264","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10018","productName":"단미1kg(업소용)","otherCodeFirst":"100079OX","otherCodeSecond":"z6000131","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10019","productName":"중화미원250g(증정)","otherCodeFirst":"103849","otherCodeSecond":"z6011195","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10020","productName":"중화미원2kg","otherCodeFirst":"100406PX","otherCodeSecond":"z6000507","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10021","productName":"복합조미료2.0 1kg(DRY)","otherCodeFirst":"104081","otherCodeSecond":"z6010715","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10022","productName":"코쿠미S 1kg(100%)","otherCodeFirst":"103230","otherCodeSecond":"z6016950","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10023","productName":"코쿠미 1kg 골드(ゴ?ルド)99%","otherCodeFirst":"103224","otherCodeSecond":"z6016952","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10024","productName":"코쿠미 1kg 하이골드(ハイゴ?ルド)92%","otherCodeFirst":"103231","otherCodeSecond":"z6016951","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10025","productName":"군산)내수용I+G 1kg","otherCodeFirst":"100071PX","otherCodeSecond":"z6000816","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10026","productName":"군산)수출용I+G1kg(영문)","otherCodeFirst":"100254PX","otherCodeSecond":"z6000818","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10027","productName":"군산)수출용IMP 1kg(영문)","otherCodeFirst":"100005PX","otherCodeSecond":"z6000827","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10028","productName":"군산)일어혼용I+G 1kg","otherCodeFirst":"100391PX","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10029","productName":"군산)일어혼용IMP 1kg","otherCodeFirst":"100392PX","otherCodeSecond":"z6000829","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10030","productName":"그린스위트100g","otherCodeFirst":"100053PA","otherCodeSecond":"z6000773","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10031","productName":"그린스위트200g","otherCodeFirst":"100054PA","otherCodeSecond":"z6000005","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10032","productName":"클로렐라플래티넘360mg*5정(롤)","otherCodeFirst":"102253PA","otherCodeSecond":"z6015698","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10033","productName":"Dr클로렐라1.86g(310㎖*6정):1폭","otherCodeFirst":"103118","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10034","productName":"클로렐라플래티넘360mg*150정","otherCodeFirst":"102212PA","otherCodeSecond":"z6015444","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10035","productName":"닥터클로렐라310㎎*180정","otherCodeFirst":"103611","otherCodeSecond":"z6019942","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10036","productName":"VMPET무지(300*230)","otherCodeFirst":"100663PV","otherCodeSecond":"z6000003","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10037","productName":"VMPET무지(385*290)","otherCodeFirst":"100664PV","otherCodeSecond":"z6000004","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10038","productName":"클로렐라 무지","otherCodeFirst":"100501PA","otherCodeSecond":"z6005901","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10039","productName":"LD무지(0.1*58*74)","otherCodeFirst":"0","otherCodeSecond":"z6000597","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10040","productName":"LD무지(0.1*70*74)","otherCodeFirst":"0","otherCodeSecond":"z6000598","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10041","productName":"LD무지(0.2*58*74)","otherCodeFirst":"0","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10042","productName":"LD무지(0.04*200*200)","otherCodeFirst":"0","otherCodeSecond":"z6000663","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10043","productName":"LD무지(0.04*200*270)","otherCodeFirst":"0","otherCodeSecond":"z6020663","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10044","productName":"LD무지(0.07*24*38)","otherCodeFirst":"0","otherCodeSecond":"z6000226","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10045","productName":"LD무지(0.07*27*41)","otherCodeFirst":"0","otherCodeSecond":"z6016558","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10046","productName":"LD무지(0.07*35*47)","otherCodeFirst":"0","otherCodeSecond":"z6000229","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10047","productName":"LD 무지(0.07*43*500)","otherCodeFirst":"0","otherCodeSecond":"z6000230","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10048","productName":"LD 무지(0.07*830*1320)","otherCodeFirst":"0","otherCodeSecond":"z6000775","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10049","productName":"LD 무지(0.12*69*85)","otherCodeFirst":"0","otherCodeSecond":"z6000408","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10050","productName":"LD 무지(0.15*48*86)","otherCodeFirst":"0","otherCodeSecond":"z6000413","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10051","productName":"단미3kg","otherCodeFirst":"0","otherCodeSecond":"z6000133","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10002","companyName":"대상(주)군산공장(바이오)","productCode":"D10052","productName":"단미3.5kg","otherCodeFirst":"0","otherCodeSecond":"z6000132","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z11673","companyName":"태평양물산(주)안산공장","productCode":"D10053","productName":"쿠킹스위트350g","otherCodeFirst":"103824","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z11311","companyName":"코스맥스바이오(주)","productCode":"D10054","productName":"클로렐라NEW 30g","otherCodeFirst":"103243","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10055","productName":"구형-숟가락)HM된장500g(4열)","otherCodeFirst":"103650","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10056","productName":"HM된장2kg","otherCodeFirst":"103651","otherCodeSecond":"z6001213","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10057","productName":"HM쌈장 200g(6열/일본수출)","otherCodeFirst":"103447","otherCodeSecond":"z6010914","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10058","productName":"HM쌈장500g(4열)","otherCodeFirst":"103652","otherCodeSecond":"z6002175","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10059","productName":"HM쌈장500g(4열)","otherCodeFirst":"103652","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10060","productName":"HM쌈장2kg","otherCodeFirst":"103654","otherCodeSecond":"z6002153","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10061","productName":"(구)숟가락)HM쌈장 500g(4열)","otherCodeFirst":"103655","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10062","productName":"(구)숟가락)HM쌈장 500g(6열)","otherCodeFirst":"103656","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10063","productName":"HM찰고추장 200g(6열/일본수출)","otherCodeFirst":"103452","otherCodeSecond":"z6010858","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10064","productName":"항아리)HM찰고추장 200g(4열)","otherCodeFirst":"103454","otherCodeSecond":"z6001014","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10065","productName":"항아리)HM찰고추장 200g (6열)","otherCodeFirst":"103455","otherCodeSecond":"z6001014","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10066","productName":"항아리)HM찰고추장500g(4열)","otherCodeFirst":"103429","otherCodeSecond":"z6014267","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10067","productName":"항아리)HM찰고추장500g(6열)","otherCodeFirst":"103456","otherCodeSecond":"z6014267","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10068","productName":"항아리)HM찰고추장2kg","otherCodeFirst":"103457","otherCodeSecond":"z6001002","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10069","productName":"항아리)HM찰고추장5Kg(2열)","otherCodeFirst":"103458","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10070","productName":"HM초고추장170g","otherCodeFirst":"103460","otherCodeSecond":"z6002887","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10071","productName":"HM데이즈)유산균발효장류(공통)","otherCodeFirst":"103966","otherCodeSecond":"z6020939","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10072","productName":"HM프리미엄장류450gPET(EPL)","otherCodeFirst":"103578","otherCodeSecond":"z6019898","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10073","productName":"HM프리미엄장류 900g(PET)","otherCodeFirst":"103579","otherCodeSecond":"z6001012","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10074","productName":"HM장류5Kg(공용리드지)","otherCodeFirst":"103709","otherCodeSecond":"z6016883","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10075","productName":"떡볶이고추장소스140g(수출)","otherCodeFirst":"102032PA","otherCodeSecond":"z6014435","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10076","productName":"PW매운고추장500g","otherCodeFirst":"104198","otherCodeSecond":"z6001424","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10077","productName":"PW매운고추장900g","otherCodeFirst":"104190","otherCodeSecond":"z6001434","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10078","productName":"PW찰고추장200g","otherCodeFirst":"100650NX","otherCodeSecond":"z6002726","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10079","productName":"PW찰고추장500g","otherCodeFirst":"104158","otherCodeSecond":"z6002750","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10080","productName":"PW찰고추장900g","otherCodeFirst":"104159","otherCodeSecond":"z6002767","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10081","productName":"PW쌈장500g","otherCodeFirst":"101355NX","otherCodeSecond":"z6009978","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10082","productName":"PW쌈장900g","otherCodeFirst":"100648NX","otherCodeSecond":"z6002189","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10083","productName":"PW참깨마늘쌈장 450g","otherCodeFirst":"101318NX","otherCodeSecond":"z6009976","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10084","productName":"PW고기전용쌈장450g","otherCodeFirst":"101411NX","otherCodeSecond":"z6009977","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10085","productName":"PW재래식된장500g","otherCodeFirst":"101287NX","otherCodeSecond":"z6009974","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10086","productName":"PW재래식된장900g","otherCodeFirst":"100643NX","otherCodeSecond":"z6012709","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10087","productName":"PW메주콩된장450g","otherCodeFirst":"101288NX","otherCodeSecond":"z6009975","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10088","productName":"PW메주콩된장900g","otherCodeFirst":"100654NX","otherCodeSecond":"z6012731","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10089","productName":"초고추장1kg-띠라벨","otherCodeFirst":"102042OX","otherCodeSecond":"z6004965","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10090","productName":"초고추장2050g-띠라벨","otherCodeFirst":"103223","otherCodeSecond":"z6004967","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10091","productName":"염도낮춘발효다시마간장840ml(일반)","otherCodeFirst":"104392-001","otherCodeSecond":"z6023426","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10092","productName":"염도낮춘발효다시마간장1.7L","otherCodeFirst":"104393-001","otherCodeSecond":"z6023425","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10093","productName":"발효진간장 200ml","otherCodeFirst":"100411OX","otherCodeSecond":"z6003333","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10094","productName":"발효진간장500ml(일반)","otherCodeFirst":"101041OX","otherCodeSecond":"z6003338","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10095","productName":"발효진간장500ml(증정용)","otherCodeFirst":"101227OX","otherCodeSecond":"z6009335","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10096","productName":"발효진간장840ml(일반)","otherCodeFirst":"102011OX","otherCodeSecond":"z6014395","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10097","productName":"발효진간장1.7L","otherCodeFirst":"100407OX","otherCodeSecond":"z6003322","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10098","productName":"발효진간장1.5L+200㎖","otherCodeFirst":"104013","otherCodeSecond":"z6021518","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10099","productName":"수출용) 진간장 840ml오푸드","otherCodeFirst":"105131-001","otherCodeSecond":"z6015285","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10100","productName":"수출용) 진간장1.7L오푸드","otherCodeFirst":"105132-001","otherCodeSecond":"z6009158","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10101","productName":"수출용) 양조간장 840ml오푸드","otherCodeFirst":"105133-001","otherCodeSecond":"z6015284","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10102","productName":"수출용) 양조간장1.7L오푸드","otherCodeFirst":"105134-001","otherCodeSecond":"z6009170","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10103","productName":"명품진간장 500ml(일반)","otherCodeFirst":"103557","otherCodeSecond":"z6019543","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10104","productName":"명품진간장840ml(일반)","otherCodeFirst":"103558","otherCodeSecond":"z6019544","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10105","productName":"명품진간장1.7L","otherCodeFirst":"103559","otherCodeSecond":"z6019545","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10106","productName":"황금진간장 840ml(일반)","otherCodeFirst":"103562","otherCodeSecond":"z6019539","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10107","productName":"황금진간장1.7L","otherCodeFirst":"103563","otherCodeSecond":"z6019540","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10108","productName":"국간장500ml(일반)","otherCodeFirst":"101049OX","otherCodeSecond":"z6002591","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10109","productName":"국간장840ml","otherCodeFirst":"102015OX","otherCodeSecond":"z6014394","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10110","productName":"국간장1.7L","otherCodeFirst":"100404OX","otherCodeSecond":"z6002586","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10111","productName":"한식국간장500ml","otherCodeFirst":"101250OX","otherCodeSecond":"z6009455","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z10003","companyName":"대상(주)순창공장","productCode":"D10112","productName":"한식국간장840ml","otherCodeFirst":"102016OX","otherCodeSecond":"z6014334","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z11401","companyName":"(주)다님길","productCode":"D14311","productName":"참깨＆김1.8g","otherCodeFirst":"204382","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"},
            {"companyCode":"Z11401","companyName":"(주)다님길","productCode":"D14312","productName":"야채고명2g","otherCodeFirst":"204383","otherCodeSecond":"","otherCodeThird":null,"startDate":null,"endDate":null,"manager":"홍승민"}],
        clickedProductCode : [],
        productInfo : [],
        filterCompanyList : null,
        salesCode: reducerUtils.initial(),
};

export default function productCode(state = initialState, action) {
    switch (action.type) {
        case FILTER_MAIN_CODE:
            return {...state, mainCode: state.mainCode.filter(v => v.companyCode ===action.companyCode)};
        case SET_INITIAL_DATA:
            return {...state, mainCode : initialState.mainCode};
        case SET_CLICKED_PRODUCTCODE:
            return {...state, productInfo : state.sampleCode.filter((v)=> v.productCode == action.v)};
        case SET_WORD_FOR_FILTER:
            return {...state, filterCompanyList : action.a};

        case GET_SALES_CODE:
        case GET_SALES_CODE_SUCCESS:
        case GET_SALES_CODE_ERROR:
            const  postsReducer = handleAsyncActions(GET_SALES_CODE, 'salesCode');
            return postsReducer(state, action);
        default:
            return state;
    }
}


// state.filter(mainCode => mainCode.companyCode === action.companyCode );