
import { getSignals } from '../../core/aggregator.js';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await getSignals();
  res.json(data);
});

export default router;
