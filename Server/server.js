const express = require('express');
const path = require('path');
const apiRouter = require('./api');

const app = express();
const port = 3000;

app.use('/api', apiRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '.././client/index.html')));

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(port, () => console.log('Sod off'));
