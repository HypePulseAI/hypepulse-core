
export class TrendModel {
  velocity(ts){
    const now = Date.now();
    const dt = Math.max(1, (now - (ts||now))/1000);
    return 3600/dt;
  }
}
