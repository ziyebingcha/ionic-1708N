const express = require('express')

let app = new express();

app.get('/', (req, res) => {
   console.log('server listen to 3000...');
});

// 处理用户的注册请求 POST
app.get('/signUp', (req, res) => {
    console.log(`用户名：${req.query.username}`);
    console.log(`密码：${req.query.password}`);
});


app.listen(3000);