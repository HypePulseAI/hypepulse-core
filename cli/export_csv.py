#!/usr/bin/env python3
import csv, json, sys
j=json.load(open(sys.argv[1])); w=csv.writer(sys.stdout); w.writerow(['source','token','text','timestamp']);
[w.writerow([r.get('source'), r.get('token'), r.get('text'), r.get('timestamp')]) for r in j]
