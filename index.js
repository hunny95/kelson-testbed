const express = require('express');
const utils = require('./utils.js');
const app = express();
app.get('/', (req, res) => res.send(utils.greet('world')));
app.listen(3000, () => console.log('up'));
