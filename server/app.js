const express = require('express');

let app = new express();

app.get('/', (req, res) => {
   console.log('server listen to 3000...');
});

app.listen(300);