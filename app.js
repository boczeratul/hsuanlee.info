const express = require('express');
const path = require('path');
const backend = require('./backend');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static', 'index.html'));
});

app.use('/blog', express.static('./blog/public'));
app.use('/assets', express.static('./build'));
app.use('/api', backend);

app.listen(process.env.PORT || 8081);
