const express = require('express');
const router = express.Router();
const db = require('../../db');


router.get('/', (req,res) => {
    res.json({id : 111, content : '영업코드 관리 API에 접속하셨습니다.'});
});

router.get('/getSalesCode', (req,res) => {
    db.query("select * from salesCode order by code;", (err, data) => {
        if(!err) res.send({ code_m : data });
        else res.send(err);
    })
});

router.post('/getSalesCode2', (req,res) => {

    const code1 = req.body.code;
    const sql       = "select * from salesCode";


    db.query(sql,(err, data) => {
        if(!err) res.send(data);
        else res.send(err);
    })
});

module.exports = router;

//
//
// db.query('select * from salesCode where code = "C1000001"',(err, data) => {
//     if(!err) res.send(data);
//     else res.send(err);
// })