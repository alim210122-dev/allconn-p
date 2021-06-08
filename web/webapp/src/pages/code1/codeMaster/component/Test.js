import React, {useContext} from "react";
import CodeContext  from '../context/Code.Context';


const Test = () => {

  const {number,increase,decrease} = useContext(CodeContext);

  return(
      <>
        {number}
        <button onClick={()=> increase()}>증가</button>
        <button onClick={()=> decrease()}>감소</button>
      </>
  )
}

export default Test;