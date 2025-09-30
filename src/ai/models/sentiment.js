
import lex from '../../utils/lexicon.js';
export class SentimentModel {
  score(text=''){
    const t = text.toLowerCase();
    let s = 0;
    for(const w of lex.positive) if(t.includes(w)) s += 1;
    for(const w of lex.negative) if(t.includes(w)) s -= 1;
    return Math.tanh(s/3);
  }
}
