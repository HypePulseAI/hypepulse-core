
export function smoothEMA(arr=[], alpha=0.2){
  const out=[]; let prev=0;
  for(let i=0;i<arr.length;i++){
    prev = i===0 ? arr[i] : alpha*arr[i] + (1-alpha)*prev;
    out.push(prev);
  }
  return out;
}
