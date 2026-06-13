const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('took a picture of your salad and put it on the internet'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
