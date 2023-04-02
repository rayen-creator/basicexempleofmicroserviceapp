const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("this is backend 2 !");
});

app.listen(9000, () => {
    console.log('Server backend2 running on port 9000');
});