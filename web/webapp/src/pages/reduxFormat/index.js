import React from 'react';
import Count from './count';
import Todos from './TodosContainer';


const IndexForm = () => {

    return(
        <div>
            <row>
                <Count />
            </row>
            <br /><br /><br /><br /><br />
            <row>
                <Todos />
            </row>
        </div>
    )
}

export default IndexForm;



/*
학습참고  : https://react.vlpt.us/redux/07-implement-todos.html
코드예시  : https://codesandbox.io/s/learn-redux-lv1ch?fontsize=14&file=/src/components/Todos.js:0-1203 

 */