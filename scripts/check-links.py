#!/usr/bin/env python3
"""out/全ページの内部リンク+アンカー整合チェック。壊れあり=exit 1(標準出力に一覧)"""
import re, sys
from pathlib import Path
OUT = Path(__file__).resolve().parent.parent / "out"
pages = list(OUT.rglob("index.html"))
existing = {"/"} | {"/" + str(p.parent.relative_to(OUT)) + "/" for p in pages}
broken_paths, broken_anchors = {}, {}
id_cache = {}
def ids_of(path):
    if path not in id_cache:
        try: id_cache[path] = set(re.findall(r'id="([^"]+)"', path.read_text(encoding="utf-8", errors="ignore")))
        except Exception: id_cache[path] = set()
    return id_cache[path]
for p in pages:
    html = p.read_text(encoding="utf-8", errors="ignore")
    src = "/" + str(p.parent.relative_to(OUT)) + "/"
    for href in re.findall(r'href="(/[^"#]*)(?:#[^"]*)?"', html):
        if href.startswith("/_next") or "." in href.split("/")[-1]: continue
        t = href if href.endswith("/") else href + "/"
        if t not in existing: broken_paths.setdefault(t, set()).add(src)
    for m in re.finditer(r'href="(/[^"#]*|)#([^"]+)"', html):
        tp_raw, anchor = m.group(1), m.group(2)
        tp = p if tp_raw in ("", src.rstrip("/"), src) else OUT / (tp_raw.strip("/") + "/index.html")
        if not tp.exists(): continue
        if anchor not in ids_of(tp): broken_anchors.setdefault((tp_raw or "(self)", anchor), set()).add(src)
# ToCはクライアント側フィルタで非表示になるため、既知の動的フィルタ対象アンカーは除外
DYNAMIC_TOC = {"kodawari","frequency","price-guide","how-to-choose","faq","summary","studios","trial-guide","price-comparison"}
broken_anchors = {k:v for k,v in broken_anchors.items() if not (k[0]=="(self)" and k[1] in DYNAMIC_TOC)}
if broken_paths or broken_anchors:
    for t,srcs in broken_paths.items(): print(f"PATH {t} <- {len(srcs)}p 例:{sorted(srcs)[:2]}")
    for (t,a),srcs in broken_anchors.items(): print(f"ANCHOR {t}#{a} <- {len(srcs)}p 例:{sorted(srcs)[:2]}")
    sys.exit(1)
print("links OK")
