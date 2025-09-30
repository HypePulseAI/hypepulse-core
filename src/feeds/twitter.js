
import { randToken, randText } from '../utils/mockgen.js';
export class TwitterFeed {
  async fetch(){
    return Array.from({length: 20}).map((_,i)=> ({
      source:'twitter',
      text: randText(),
      token: randToken(),
      tag:'#sol',
      timestamp: Date.now() - 1000*(10+i)
    }));
  }
}
