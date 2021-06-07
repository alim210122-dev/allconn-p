var mysql = require('mysql');

var db = mysql.createConnection({
  host: "nodejs-008.cafe24.com",
  port: "3306",
  user: "tywowie",
  password: "alim123@",
  database: "tywowie",
});

/* DB 접속 상태 안내하기
db.connect(function(err) {
  if (err) throw err;
  db.query("show databases;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

*/

module.exports = db;


/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "alim02.cafe24.com",
  port: "3306",
  user: "alim02",
  password: "alim123@",
  database: "alim02",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from user_id", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

*/


/* # 접속 성공유무

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

*/
