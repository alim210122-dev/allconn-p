import axios from 'axios';


export async function insertCodeData(v){

  const response = await axios.get('/code/getCode1');
  return response;

}


  // console.log('[INSERT] 서버연결 시작');
  // alert(JSON.stringify(v));
  // await axios.post(`/partner/insertPartner`, {data : v})
  // .then(()=>{
  //     return ('입력 성공');
  // })

