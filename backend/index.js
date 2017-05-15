const express = require('express');

const router = express.Router();

const defaultApi = (req, res) => {
  res.send('Default');
};

const testApi = (req, res) => {
  res.send('Test');
};

router.use('/default', defaultApi);
router.use('/test', testApi);

module.exports = router;
