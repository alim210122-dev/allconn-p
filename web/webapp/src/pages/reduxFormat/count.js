import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {increase,decrease,setDiff} from "../../redux/count/counter";


const Count = () => {


    // const showState = useSelector(state => state.Counter);
    // const showDispatch = useDispatch();

    const { number, diff } = useSelector(
        state => ({
            number: state.Counter.number,
            diff: state.Counter.diff
        }),
        shallowEqual
    );

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수들을 만드세요
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));


    return(
        <div>
            <div>
                <h1>{number}</h1>
                <h2>{diff}</h2>
                <button onClick={onIncrease} >증가</button>
                <button onClick={onDecrease} >감소</button>
                <button onClick={()=>onSetDiff(number)} >차이값</button>
            </div>
        </div>
    );
}

export default Count;

