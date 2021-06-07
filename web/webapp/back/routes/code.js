const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req,res) => {
    res.json({id : 111, content : 'Hello, MasterCode List'});
});


router.get('/getCode1', (req,res) => {
    db.query("SELECT * FROM code_m group by code1", (err, data) => {
        if(!err) res.send({ code_m : data });
        else res.send(err);
    })
});


router.post('/insertCode1', (req,res) => {
    const code1 = req.body.code; 
    const name1 = req.body.name; 
    const sql       = 'INSERT INTO code_m (code1, name1) VALUES (?, ?)';

    db.query(sql, [code1,name1], function(err, rows, fields){// 쿼리문 두번째 인자로 파라미터로 전달함(값들을 치환시켜서 실행함. 보안과도 밀접한 관계가 있음(sql injection attack))
        if(err) console.log(err);
        console.log(rows.insertId);
        console.log(req.body)
    });

});


router.post('/insertCodeData', (req,res) => {
    const code1= req.body.code1; 
    const name1= req.body.name1; 
    const code2= req.body.code2; 
    const name2= req.body.name2;
    const code3= req.body.code3; 
    const name3= req.body.name3;
    const code4= req.body.code4; 
    const name4= req.body.name4;

    const sql       = 'INSERT INTO code_m (code1, name1,code2, name2,code3, name3,code4, name4) VALUES (?,?,?,?,?,?,?,?)';

    db.query(sql, [code1,name1,code2,name2,code3,name3,code4,name4], function(err, rows, fields){// 쿼리문 두번째 인자로 파라미터로 전달함(값들을 치환시켜서 실행함. 보안과도 밀접한 관계가 있음(sql injection attack))
        if(err) console.log(err);
        console.log(rows.insertId);
        console.log(req.body)
    });

});

router.post('/deleteCode1', (req,res) => {
    const idx = req.body.idx; 
    const sql       = 'DELETE FROM code_m where idx = "?" ';

    db.query(sql, [idx], function(err){// 쿼리문 두번째 인자로 파라미터로 전달함(값들을 치환시켜서 실행함. 보안과도 밀접한 관계가 있음(sql injection attack))
        if(!err) res.send('삭제 성공');
        else res.send(err);
    });
});

router.post('/getCode2', (req,res) => {

    const code       = req.body.code; 
    const sql       = 'select * from code_m where code1 = "'+code+'" and code2 is not null group by code2';

    db.query(sql, (err, data) => {
        if(!err) res.send({ code_m : data });
        else res.send(err);
    })
});


module.exports = router;