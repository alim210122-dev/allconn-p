// const express = require('express');
// const app = express();

// const routes = require('./routes');

// app.use('/', routes);

// app.listen(3065, () => {
//     console.log('DB 서버 실행 중');
// })



const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const routes = require('./routes');
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true}));

app.use('/', routes);


app.listen(3065, () => {
    console.log('DB 서버 실행 중');
})

