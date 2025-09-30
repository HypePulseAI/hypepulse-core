# ⚡ HypePulse AI

<p align="center">
  <img src="docs/banner.png" alt="HypePulse AI Banner" width="100%"/>
</p>

<p align="center">
  <a href="https://shields.io"><img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen"></a>
  <a href="#"><img alt="solana" src="https://img.shields.io/badge/Powered%20by-Solana-6b5cff"></a>
  <a href="#"><img alt="license" src="https://img.shields.io/badge/license-MIT-blue"></a>
  <a href="#"><img alt="ai" src="https://img.shields.io/badge/AI-NLP%20%26%20Signals-purple"></a>
  <a href="#"><img alt="coverage" src="https://img.shields.io/badge/coverage-82%25-yellow"></a>

<p align="center">
  <a href="#"><img alt="HypeScore" src="https://img.shields.io/badge/HypeScore-92-ff00ff"></a>
  <a href="#"><img alt="Feeds" src="https://img.shields.io/badge/Feeds-Twitter%20%7C%20Telegram%20%7C%20Reddit%20%7C%20TikTok-6b5cff"></a>
  <a href="#"><img alt="Runtime" src="https://img.shields.io/badge/Runtime-Node.js%20%2B%20Python-3776AB"></a>
  <a href="#"><img alt="Token Launch" src="https://img.shields.io/badge/Token%20Launch-Soon-orange"></a>
  <a href="#"><img alt="Solana" src="https://img.shields.io/badge/Solana-Integrated-9945FF"></a>
</p>

</p>

**AI radar for crypto hype.** Finding memes **before they pump** — across Twitter, Telegram, TikTok & Reddit.  
Your **early warning system** for the next meme pump.

---

## ✨ Features
- Real‑time **social scan** (X/Twitter, TG, TikTok, Reddit)
- Lightweight **NLP sentiment** + **HypeScore™**
- On‑chain **Solana** correlation (mints, LP add/remove, top holders)
- REST **API** (`/signals`, `/trending`, `/insights`), **CLI** tools, **scheduler**
- Pluggable **feeds** + YAML configs
- Examples for **Node.js**, **Python**, **curl**

---

## 🧭 Architecture

```
feeds --> core pipeline --> ai models --> aggregator --> API / CLI
  (twitter, tg, tiktok, reddit)       (sentiment, trend)   (scores, ranks)
                     \--> on-chain correlator (solana mints & LP)
```

<p align="center">
  <img src="docs/architecture.png" alt="Architecture" width="90%"/>
</p>

---

## 🚀 Quickstart

### 1) Node API
```bash
npm i
npm run dev
# http://localhost:3000/signals
```

### 2) Python tools
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python cli/hypescan.py --source mock --minutes 30 --dump out/signals.json
```

### 3) Curl
```bash
curl http://localhost:3000/health
curl http://localhost:3000/signals
curl http://localhost:3000/insights/XYZ
```

---

## 🔧 Configuration
All inputs live in `configs/*.yaml` — enable/disable sources, API keys, thresholds.

```yaml
# configs/default.yaml
feeds:
  twitter: true
  telegram: true
  reddit: true
  tiktok: false
ai:
  sentiment_threshold: 0.25
  trend_window_minutes: 45
solana:
  rpc_url: https://example.quiknode.pro/xxx
  check_lp: true
hypescore:
  weights: {sentiment: 0.45, velocity: 0.35, onchain: 0.20}
```

---

## 🧠 Models
- `SentimentModel` — fast keyword & polarity hybrid
- `TrendModel` — velocity & burst detection
- `HypeScorer` — weighted blend → **HypeScore™ (0–100)**
- `Smoothing` — EMA/median smoothing for noisy feeds

---

## 📡 API Endpoints
- `GET /health` — service status
- `GET /signals` — top hype signals (token, HypeScore, reasons)
- `GET /trending` — trending mentions by source
- `GET /insights/:token` — detail breakdown, mini-timeline

```http
GET /signals -> 200
[
  { "token":"XYZ", "score":92, "reasons":["twitter velocity","positive TG"] },
  { "token":"ABC", "score":78, "reasons":["tiktok spike","on-chain mint"] }
]
```

---

## 📦 Examples

**Node.js**
```js
import fetch from "node-fetch";
const res = await fetch("http://localhost:3000/signals");
console.log(await res.json());
```

**Python**
```python
import requests
print(requests.get("http://localhost:3000/signals").json())
```

**curl**
```bash
curl http://localhost:3000/trending
```

---

## 🧪 Tests
`npm test` covers parsers, scoring, and API routes. Python utilities include simple doctests.

---

## 🗺 Roadmap
- v1 ✅: Social scan + HypeScore™
- v2 🔄: Realtime dashboard + sockets
- v3 🚀: Solana trading integration
- v4 📱: iOS/Android app

---

## 🤝 Contributing
Issues & PRs are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License
MIT © 2025 HypePulse AI

**Follow us:** [Twitter](https://x.com/HypePulseAI)
