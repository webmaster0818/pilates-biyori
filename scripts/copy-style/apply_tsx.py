# -*- coding: utf-8 -*-
import re, sys, glob, collections, importlib
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import polite as P
import mapping as M

KEYS = r'(?:description|answer|text|a|trialNote|basis|pricingNote|caveat|byPrefNote|summary|note|intro|body|detail|reason|lead)'
STR_RE = re.compile(r"(\b" + KEYS + r"\s*:\s*)(['\"])((?:\\.|(?!\2)[^\\\n])*)\2")
JSX_RE = re.compile(r'>([^<>{}]*[぀-ヿ一-鿿][^<>{}]*)(?=[<{])')
JP = re.compile(r'[぀-ヿ一-鿿]')
FILE_CHANGES = collections.Counter()


def conv(t, ctx):
    if '。' not in t and '！' not in t:
        return t
    return P.convert_prose(t, ctx=ctx, bang=True)


def process(src, ctx=''):
    s = M.apply_map(src)
    def srep(m):
        q = m.group(2); body = m.group(3)
        if not JP.search(body):
            return m.group(0)
        new = conv(body, ctx)
        if q == "'" and "'" in new and "\\'" not in new:
            new = new.replace("'", "\\'")
        return m.group(1) + q + new + q
    s = STR_RE.sub(srep, s)
    def jrep(m):
        t = m.group(1)
        if '=>' in t or '&&' in t or ' ? ' in t:
            return m.group(0)
        return '>' + conv(t, ctx)
    s = JSX_RE.sub(jrep, s)
    s = M.apply_post(s)
    return s


if __name__ == '__main__':
    files = []
    for pat in sys.argv[1:]:
        if pat.startswith('--'):
            continue
        files += sorted(glob.glob(pat, recursive=True))
    write = '--write' in sys.argv
    nchanged = 0
    for f in files:
        src = open(f, encoding='utf-8').read()
        new = process(src, ctx=f)
        if new != src:
            nchanged += 1
            if write:
                open(f, 'w', encoding='utf-8').write(new)
    print('files', len(files), 'changed', nchanged)
    print('UNKNOWN', sum(P.UNKNOWN.values()), 'distinct', len(P.UNKNOWN))
    n = int(__import__('os').environ.get('N', '60'))
    for k, v in P.UNKNOWN.most_common(n):
        print(v, repr(k), '|', P.UNK_EX[k][1][-70:].replace('\n', ' '))
