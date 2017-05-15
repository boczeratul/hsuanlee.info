import express from 'express';

const router = express.Router();

const defaultApi = (req, res) => {
  res.send('Default');
};

const testApi = (req, res) => {
  res.send('Test');
};

router.use('/default', defaultApi);
router.use('/test', testApi);

export default router;
