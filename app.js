const express = require('express');
const path = require('path');
const backend = require('./backend');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static', 'index.html'));
});

app.use('/assets', express.static('./build'));
app.use('/api', backend);

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
