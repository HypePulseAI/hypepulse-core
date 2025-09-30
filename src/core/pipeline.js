
import { TwitterFeed } from '../feeds/twitter.js';
import { TelegramFeed } from '../feeds/telegram.js';
import { RedditFeed } from '../feeds/reddit.js';
import { TikTokFeed } from '../feeds/tiktok.js';
import { SentimentModel } from '../ai/models/sentiment.js';
import { TrendModel } from '../ai/models/trend.js';
import { smoothEMA } from '../ai/smoothing.js';

export async function runPipeline() {
  const feeds = [new TwitterFeed(), new TelegramFeed(), new RedditFeed(), new TikTokFeed()];
  const raw = (await Promise.all(feeds.map(f => f.fetch()))).flat();

  const sentiment = new SentimentModel();
  const trend = new TrendModel();

  const enriched = raw.map(item => {
    const s = sentiment.score(item.text);
    const v = trend.velocity(item.timestamp);
    return { ...item, sentiment: s, velocity: v };
  });

  const velocities = enriched.map(x=>x.velocity);
  const smoothed = smoothEMA(velocities, 0.3);
  return enriched.map((x,i)=>({...x, velocity_smoothed: smoothed[i]}));
}
