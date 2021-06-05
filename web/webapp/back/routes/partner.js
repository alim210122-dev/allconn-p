const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/insertPartner', (req,res) => {

    const sql       = 'INSERT INTO partner (companyCls,companyName,companyCode,partnerCode,businessNumber,ceoName,contactNum,address,managerName,managerPhone,managerEmail,startDate,endDate,useYN,realAddress ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    db.query(sql, [companyCls,companyName,companyCode,partnerCode,businessNumber,ceoName,contactNum,address,managerName,managerPhone,managerEmail,startDate,endDate,useYN,realAddress], function(err, rows, fields){// 쿼리문 두번째 인자로 파라미터로 전달함(값들을 치환시켜서 실행함. 보안과도 밀접한 관계가 있음(sql injection attack))
        if(err) console.log(err);
        console.log(rows.insertId);
        console.log(req.body)
    });

});


module.exports = router;