const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(function (req, res) {
    return res.sendStatus(200);
});

const port = process.env.PORT || 8000

app.listen(port, function () {
    console.log('Sample Hosting app listening on port' + port);
});
