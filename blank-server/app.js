const express = require('express');

let app = new express();

app.get('/', (req, res) => {
    res.end("server is running on port 3000...");
});

app.listen(3000);