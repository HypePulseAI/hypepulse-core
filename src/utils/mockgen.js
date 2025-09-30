const TOKENS=['XYZ','ABC','DOG','CAT','PEPE','BONK','WIF','MEOW','MOON','HYPE'];
const POS=['pump','alpha','moon','gem','launch','blast','spike'];
const NEG=['dump','rug','bear','rekt'];
export function randToken(){ return TOKENS[Math.floor(Math.random()*TOKENS.length)]; }
export function randText(){
  const base = Math.random()>0.3 ? POS[Math.floor(Math.random()*POS.length)] : NEG[Math.floor(Math.random()*NEG.length)];
  return `$${randToken()} ${base} incoming on Solana`;
}
