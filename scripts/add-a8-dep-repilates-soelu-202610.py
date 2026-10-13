# 2026-10-13 MediaXAI: DEP・Repilates（A8）を全掲載のスタジオカードに、SOELU（オンライン案件）をオンライン記事に設置。冪等。
# 1to1 のコードは a8mat=45E3Q1（ジム系サイトのメディアID）で、このサイトの 4B650J と違うため未設置。
import pathlib, re
ROOT = pathlib.Path(__file__).resolve().parent.parent
LINKS = {
    'DEP': (re.compile(r'DEP'), 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM'),
    'Repilates': (re.compile(r'[Rr]epilates'), 'https://px.a8.net/svt/ejp?a8mat=4B650J+3TJ72A+5FZU+5YJRM'),
}
files = list((ROOT / 'app/area').rglob('page.tsx')) + [ROOT / 'data/area-studios.ts']
total = {k: 0 for k in LINKS}
for p in files:
    s = p.read_text(); orig = s
    out = []; pos = 0
    for m in re.finditer(r"(?m)^(\s*)name: '([^']+)',\n", s):
        for k, (pat, url) in LINKS.items():
            if not pat.search(m.group(2)):
                continue
            ind = m.group(1)
            nxt = re.search(r"(?m)^\s*name: '", s[m.end():])
            end = m.end() + (nxt.start() if nxt else len(s) - m.end())
            blk = s[m.end():end]
            if url in blk:
                total[k] += 1; break
            if re.search(r"officialUrl: '[^']*'", blk):
                blk2 = re.sub(r"officialUrl: '[^']*'", f"officialUrl: '{url}'", blk, count=1)
            else:
                blk2 = f"{ind}officialUrl: '{url}',\n" + blk
            out.append((m.end(), end, blk2)); total[k] += 1
            break
    for a, b, rep in reversed(out):
        s = s[:a] + rep + s[b:]
    if s != orig:
        p.write_text(s)
print(total)
