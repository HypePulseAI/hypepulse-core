
import { runPipeline } from './pipeline.js';
import { HypeScorer } from '../ai/models/hypescore.js';

let last = [];
export async function tick() {
  const data = await runPipeline();
  const scorer = new HypeScorer();
  last = data.map(d => ({ ...d, score: scorer.score(d) }))
             .sort((a,b)=>b.score-a.score)
             .slice(0, 100);
  return last;
}
export function snapshot(){ return last; }
