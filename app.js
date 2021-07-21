const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

url = 'https://ades-test-backend.herokuapp.com/';
app.use(function (req, res) {
    return res.sendStatus(200);
});

app.listen(url, function () {
    console.log('Sample Hosting app listening on port 8000');
});
