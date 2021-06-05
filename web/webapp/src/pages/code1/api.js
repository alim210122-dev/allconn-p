import axios from 'axios';

export async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

export async function getCode1() {
  const response = await axios.get('/code/getCode1');
  return response.data;
}


export async function deleteHandle(num){
  //alert('삭제번호는 : '+num)
  await axios.post('/code/deleteCode1', {
      idx : num
  })
}


export async function onInsert(a,b){
  console.log('[INSERT] 서버연결 시작');
  await axios.post(`/code/insertCode1`, {
    code: a,
    name: b
  })
  .then(()=>{
      alert('삭제완료!');
  })
}


export async function getCode2(v) {
  const response = await axios.post('http://localhost:3065/code/getCode2',{code:v});
  return response;
}


export async function insertCodeData(a,b,c,d,e,f,g,h){
  console.log('[INSERT] 서버연결 시작');
  await axios.post(`/code/insertCodeData`, {
    code1: a,
    name1: b,
    code2: c,
    name2: d,
    code3: e,
    name3: f,
    code4: g,
    name4: h,
  })
  .then(()=>{
      alert('입력 완료!');
  })
}
