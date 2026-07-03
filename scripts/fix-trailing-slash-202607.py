#!/usr/bin/env python3
"""内部リンクの末尾スラッシュ統一（冪等）。

サイトは trailingSlash: true（正規URL=/path/）だが、内部リンクの多くが
href="/area/xxx" 形式でGSCに「ページにリダイレクトがあります」が141件蓄積。
app/ components/ の tsx と content/ のMDXを対象に、内部パスのhrefへ末尾スラッシュを付与する。

対象外: 外部URL・"/"単体・拡張子付き(.xml等)・mailto/tel・アンカーのみ(#)
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def needs_slash(path: str) -> bool:
    if not path.startswith('/'): return False
    if path == '/': return False
    last = path.rsplit('/', 1)[-1]
    if '.' in last: return False  # 拡張子付き（/sitemap.xml等）
    return not path.endswith('/')

changed_files = 0
total = 0

# 1) tsx: href="..." / href="...#anchor" / href={`...${var}`}
for f in list(ROOT.glob('app/**/*.tsx')) + list(ROOT.glob('components/**/*.tsx')):
    src = f.read_text(encoding='utf-8')
    orig = src
    n = 0

    def repl_str(m):
        global n
        path = m.group(1)
        if needs_slash(path):
            n += 1
            return f'href="{path}/"'
        return m.group(0)
    src, c1 = re.subn(r'href="(/[^"#?]*)"', lambda m: repl_str(m), src)

    def repl_hash(m):
        global n
        path = m.group(1)
        if needs_slash(path):
            n += 1
            return f'href="{path}/#{m.group(2)}"'
        return m.group(0)
    src = re.sub(r'href="(/[^"#?]*)#([^"]*)"', repl_hash, src)

    # href={`/articles/${slug}`} → href={`/articles/${slug}/`}（変数終端のみ）
    def repl_tpl(m):
        global n
        n += 1
        return m.group(1) + '/`}'
    src = re.sub(r'(href=\{`/[a-z0-9-]+(?:/[a-z0-9-]+)*/\$\{[^}`]+\})`\}', repl_tpl, src)

    if src != orig:
        f.write_text(src, encoding='utf-8')
        changed_files += 1
        total += n

# 2) MDX/MD: [text](/path) → [text](/path/)
for f in ROOT.glob('content/**/*.md*'):
    src = f.read_text(encoding='utf-8')
    orig = src
    def repl_md(m):
        path = m.group(1)
        if needs_slash(path):
            return f']({path}/)'
        return m.group(0)
    src = re.sub(r'\]\((/[^)#?\s]*)\)', repl_md, src)
    if src != orig:
        f.write_text(src, encoding='utf-8')
        changed_files += 1

print(f'changed files: {changed_files}, href fixes in tsx: {total}')
