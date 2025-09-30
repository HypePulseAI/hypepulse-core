import fetch from 'node-fetch'; console.log(await (await fetch('http://localhost:3000/signals')).json());
