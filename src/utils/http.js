export async function getJSON(url){ const res = await fetch(url); if(!res.ok) throw new Error('HTTP '+res.status); return await res.json(); }
