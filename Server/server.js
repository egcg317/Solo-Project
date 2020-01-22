const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '.././client/index.html')));

app.listen(port, () => console.log('Sod off'));
