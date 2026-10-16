# -*- coding: utf-8 -*-
import re, sys, glob, json
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import polite as P
import mapping as M
P.MODE['te'] = True

MD_FIX = [
    ('効果が出る仕組みとあわせて正直に解説。', '効果が出る仕組みとあわせて解説しています。'),
    ('効果が生まれる仕組みとあわせて正直に整理します。', '効果が生まれる仕組みとあわせて整理します。'),
    ('読み終えるころには、自分が始めるべきかどうか判断できるはずです。', '始めるかどうかを判断する際の参考としてご活用ください。'),
    ('5つの軸で正直に比較', '5つの軸で比較'),
]


def conv(t):
    if '。' not in t and '！' not in t:
        return t
    return P.convert_prose(t, ctx='md', bang=True)


def process(src):
    for a, b in MD_FIX:
        src = src.replace(a, b)
    parts = src.split('\n')
    out = []
    in_fm = False
    fm_done = False
    in_code = False
    for i, line in enumerate(parts):
        if i == 0 and line.strip() == '---':
            in_fm = True
            out.append(line)
            continue
        if in_fm:
            if line.strip() == '---':
                in_fm = False
                fm_done = True
                out.append(line)
                continue
            m = re.match(r'^(\s*(?:description|a):\s*)"(.*)"\s*$', line)
            if m:
                body = m.group(2)
                new = conv(body)
                line = m.group(1) + '"' + new + '"'
            out.append(line)
            continue
        if line.lstrip().startswith('```'):
            in_code = not in_code
            out.append(line)
            continue
        if in_code:
            out.append(line)
            continue
        st = line.lstrip()
        if st.startswith('#'):
            line = re.sub(r'！\s*$', '', line)
            out.append(line)
            continue
        if st.startswith(('|', '<', 'import ', 'export ', '{')):
            out.append(line)
            continue
        out.append(conv(line))
    s = '\n'.join(out)
    s = M.apply_post(s)
    for a, b in [(')も参考に。', ')も参考にしてください。'), (')も参照です。', ')もご参照ください。'), (')を参照です。', ')をご参照ください。'), (')参照です。', ')をご参照ください。'), (')が参考になります。', ')が参考になります。'), (')をどうぞ。', ')をご覧ください。'), (')もどうぞ。', ')もご覧ください。'), (')からどうぞ。', ')からご覧ください。'), ('あわせてどうぞ。', 'あわせてご覧ください。')]:
        s = s.replace(a, b)
    s = re.sub(r'(\]\([^)\s]+\))で。', r'\1でご確認ください。', s)
    return s


if __name__ == '__main__':
    files = sorted(glob.glob('content/articles/*.md*'))
    n = 0
    for f in files:
        src = open(f, encoding='utf-8').read()
        new = process(src)
        if new != src:
            n += 1
            if '--write' in sys.argv:
                open(f, 'w', encoding='utf-8').write(new)
    print('files', len(files), 'changed', n)
    print('UNKNOWN', sum(P.UNKNOWN.values()), len(P.UNKNOWN))
    for k, v in P.UNKNOWN.most_common(int(sys.argv[-1]) if sys.argv[-1].isdigit() else 40):
        print(v, repr(k), '|', P.UNK_EX[k][1][-70:])
