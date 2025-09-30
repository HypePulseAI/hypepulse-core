#!/usr/bin/env python3
import argparse, json, time, random, os
TOKENS = ['XYZ','ABC','DOG','CAT','PEPE','BONK','WIF','MEOW','MOON','HYPE']
def mock(minutes=30, n=20):
    now = int(time.time()*1000); out = []
    for i in range(n):
        out.append({"source":"twitter","text": f"${random.choice(TOKENS)} pump incoming","token": random.choice(TOKENS),"timestamp": now - i*15000})
    return out
if __name__ == "__main__":
    p = argparse.ArgumentParser(); p.add_argument("--minutes", type=int, default=30); p.add_argument("--dump", type=str, default="")
    a = p.parse_args(); data = mock(a.minutes)
    if a.dump:
        os.makedirs(os.path.dirname(a.dump) or ".", exist_ok=True)
        with open(a.dump,"w") as f: json.dump(data, f, indent=2)
        print(f"[HypePulse] dumped {len(data)} rows -> {a.dump}")
    else:
        print(json.dumps(data, indent=2))
