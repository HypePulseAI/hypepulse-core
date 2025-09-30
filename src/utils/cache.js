const store = new Map(); export const cache = {get:(k)=>store.get(k),set:(k,v)=>store.set(k,v),has:(k)=>store.has(k),clear:()=>store.clear()}
