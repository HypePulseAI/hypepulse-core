
import { randToken, randText } from '../utils/mockgen.js';
export class RedditFeed {
  async fetch(){
    return Array.from({length: 8}).map((_,i)=> ({
      source:'reddit',
      text: randText(),
      token: randToken(),
      timestamp: Date.now() - 1000*(200+i*17)
    }));
  }
}
