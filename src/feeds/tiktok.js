
import { randToken, randText } from '../utils/mockgen.js';
export class TikTokFeed {
  async fetch(){
    return Array.from({length: 5}).map((_,i)=> ({
      source:'tiktok',
      text: randText(),
      token: randToken(),
      timestamp: Date.now() - 1000*(40+i*5)
    }));
  }
}
