const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('express-http-proxy');
const app = express();
const colors = require('colors')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.get('/', (req, res) => {
    res.send("gateway work !");
})
app.use('/backend1', proxy('http://localhost:8081'));
app.use('/backend2', proxy('http://localhost:9000'));



app.listen(3000, () => {
    console.log('Server gateway running on port 3000'.bold.bgCyan);
});