
import { randToken, randText } from '../utils/mockgen.js';
export class TelegramFeed {
  async fetch(){
    return Array.from({length: 12}).map((_,i)=> ({
      source:'telegram',
      text: randText(),
      token: randToken(),
      timestamp: Date.now() - 1000*(120+i*7)
    }));
  }
}
