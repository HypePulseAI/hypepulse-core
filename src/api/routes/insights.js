
import { getInsights } from '../../core/aggregator.js';
import express from 'express';
const router = express.Router();

router.get('/:token', async (req, res) => {
  res.json(await getInsights(req.params.token));
});

export default router;
