
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import signals from './routes/signals.js';
import trending from './routes/trending.js';
import insights from './routes/insights.js';
import health from './routes/health.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/health', health);
app.use('/signals', signals);
app.use('/trending', trending);
app.use('/insights', insights);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`[HypePulse] API listening on :${PORT}`));
