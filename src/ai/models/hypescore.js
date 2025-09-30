
export class HypeScorer {
  weights = { sentiment: 0.45, velocity: 0.35, onchain: 0.20 };
  score(item){
    const s = (item.sentiment||0);
    const v = Math.min(3, (item.velocity_smoothed||item.velocity||0))/3;
    const on = (item.onchain||0);
    return 100 * (this.weights.sentiment*s + this.weights.velocity*v + this.weights.onchain*on);
  }
}
