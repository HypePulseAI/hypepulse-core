
import { getTrending } from '../../core/aggregator.js';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await getTrending());
});

export default router;
