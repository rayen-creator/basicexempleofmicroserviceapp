const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.send("this is backend1 !");
});

app.listen(8081, () => {
    console.log('Server backend 1 running on port 8081');
});