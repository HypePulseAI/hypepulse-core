
import { tick, snapshot } from './scheduler.js';

export async function getSignals(){
  await tick();
  return snapshot().map(x => ({
    token: x.token || x.tag || 'UNKNOWN',
    score: Math.round(x.score),
    reasons: [x.sentiment>0?'positive sentiment':'neutral', (x.velocity_smoothed||0)>1?'velocity spike':'normal'],
    source: x.source
  }));
}
export async function getTrending(){
  await tick();
  const bySource = {};
  for(const row of snapshot()){
    bySource[row.source] = (bySource[row.source]||0) + 1;
  }
  return Object.entries(bySource).map(([source,count])=>({source,count}));
}
export async function getInsights(token){
  await tick();
  return snapshot().filter(x => (x.token||'').toUpperCase()===token.toUpperCase()).slice(0,20);
}
