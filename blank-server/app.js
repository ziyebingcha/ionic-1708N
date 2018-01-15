const express = require('express');

let app = new express();

app.get('/', (req, res) => {
    res.end('server is running on port 3000...');
});

// http://127.0.0.1:3000/signUp?username=Tom&password=123
app.get('/signUp', (req, res) => {
    console.log(req.query.username);
    console.log(req.query.password);

    // todo save user into DB: INSERT INTO...

    res.end('sign up...');
});


app.listen(3000);