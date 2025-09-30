import { fetchMintEvents } from './solana.js'; export async function correlate(token){ const ev=await fetchMintEvents(token); return ev.length>0 ? 1 : 0 }
