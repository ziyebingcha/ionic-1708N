const express = require('express');
const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root'
});

let app = new express();

app.get('/', (req, res) => {
    res.end('server is running on port 3000...');
});

// http://127.0.0.1:3000/signUp?username=Tom&password=123
app.get('/signUp', (req, res) => {

    let username = req.query.username;
    let password = req.query.password;

    let sql = 'INSERT INTO db.user VALUE(NULL, ?, ?)';

    pool.query(sql, [username, password], (err, results, fields) => {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send({"status": "ok"});
        } else {
            res.send({"status": "err"});
        }
    });

});

app.listen(3000);