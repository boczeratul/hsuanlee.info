const express = require('express');
const path = require('path');
const backend = require('./backend');

const app = express();

app.use('/images', express.static('./static/images'));
app.use('/assets', express.static('./build'));
app.use('/api', backend);

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, './static', 'index.html'));
});

app.listen(process.env.PORT || 8081);
