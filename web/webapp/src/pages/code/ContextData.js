import { createContext } from "react";


/*  Init Data 값 정의 */

const testBtn = () => {

  console.log("Context 기능을 통해 함수 전달하기 테스트")

}

const initData = {
    classA : [
        {"idx":1,"code":"C001","name":"브랜드"},
        {"idx":2,"code":"C002","name":"재질"},
        {"idx":3,"code":"C003","name":"공정"},
        {"idx":4,"code":"C004","name":"직급"},
        {"idx":5,"code":"C005","name":"부서"},
        {"idx":6,"code":"C006","name":"업체분류"},
        {"idx":7,"code":"C007","name":"불량코드"},
        {"idx":8,"code":"C008","name":"회계코드"},
        {"idx":9,"code":"C009","name":"단위"},
        {"idx":10,"code":"C010","name":"도수코드"},
        {"idx":11,"code":"C011","name":"차량종류"},
        {"idx":12,"code":"C012","name":"원재료분류"}
    ],
    classB : [
        {"idx":1,"value":"C001","label":"브랜드"},
        {"idx":2,"value":"C002","label":"재질"},
        {"idx":3,"value":"C003","label":"공정"},
        {"idx":4,"value":"C004","label":"직급"},
        {"idx":5,"value":"C005","label":"부서"},
        {"idx":6,"value":"C006","label":"업체분류"},
        {"idx":7,"value":"C007","label":"불량코드"},
        {"idx":8,"value":"C008","label":"회계코드"},
        {"idx":9,"value":"C009","label":"단위"},
        {"idx":10,"value":"C010","label":"도수코드"},
        {"idx":11,"value":"C011","label":"차량종류"},
        {"idx":12,"value":"C012","label":"원재료분류"}
    ],
    classC : [
        {"code_main":"C001","name_main":"브랜드","code_sub":1000,"name_sub":"초코파이"},
        {"code_main":"C001","name_main":"브랜드","code_sub":1001,"name_sub":"꼬북칩"},
        {"code_main":"C001","name_main":"브랜드","code_sub":1002,"name_sub":"썬"},
        {"code_main":"C001","name_main":"브랜드","code_sub":1003,"name_sub":"다이제"},
        {"code_main":"C002","name_main":"재질","code_sub":2000,"name_sub":"OPP"},
        {"code_main":"C002","name_main":"재질","code_sub":2001,"name_sub":"CPP"},
        {"code_main":"C002","name_main":"재질","code_sub":2002,"name_sub":"VM-CPP"},
        {"code_main":"C002","name_main":"재질","code_sub":2003,"name_sub":"PET"},
        {"code_main":"C003","name_main":"공정","code_sub":3000,"name_sub":"인쇄"},
        {"code_main":"C003","name_main":"공정","code_sub":3001,"name_sub":"가공"},
        {"code_main":"C003","name_main":"공정","code_sub":3002,"name_sub":"분단"},
        {"code_main":"C003","name_main":"공정","code_sub":3003,"name_sub":"파우치"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"회장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"부회장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"사장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"부사장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"전무"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"상무"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"수석부장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"부장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"차장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"과장"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"대리"},
        {"code_main":"C004","name_main":"직급","code_sub":4000,"name_sub":"사원"}
    ],
    toggleTheme: () => {},
    testBtn,
    filterFirstText : ()=> {alert('123')},

}   



/*  Context 생성 */

export const ContextData = createContext();


export default initData;


  