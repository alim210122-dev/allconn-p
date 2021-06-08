const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req,res) => {
  res.json({id : 111, content : 'Hello, MasterCode List'});
});


router.get('/getFirstClassCode', (req,res) => {
  db.query("select * from code_m group by code1;", (err, data) => {
    if(!err) res.send({data });
    else res.send(err);
  })
});

router.post('/editFirstClassCode', (req,res) => {
  console.log('API 업데이트 시작')
  const idx = req.body.idx;
  const code = req.body.code1;
  const name = req.body.name1;

  const sql = "UPDATE code_m SET code1 = ?, name1 = ? WHERE idx = ?";

  db.query(sql, [code, name, idx], (err, data,result) => {
    if(err){
      console.log(err);
      res.status(500).send('업데이트 SQL 오류 발생:'+err);
    } else {
      res.send({data })
      console.log('API 업데이트 성공')
      console.log(result)
    }
  });
});

router.post('/deleteFirstClassCode', (req,res) => {
  const idx = req.body.idx;
  const sql = "delete from code_m WHERE idx = ?";

  db.query(sql, [idx], (err, data,result) => {
    if(err){
      console.log(err);
      res.status(500).send('삭제 SQL 오류 발생:'+err);
    } else {
      res.send({result })
    }
  });
});


module.exports = router;