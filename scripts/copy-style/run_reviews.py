import re,sys,json
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import polite as P
from fixups import pre_fix
p='data/studio-reviews.ts'; s=open(p,encoding='utf-8').read()
def rep(m):
    raw=m.group(1)
    txt=json.loads('"'+raw+'"')
    new=P.convert_prose(pre_fix(txt),ctx='review')
    return '"summary": '+json.dumps(new,ensure_ascii=False)
s2=re.sub(r'"summary": "((?:[^"\\]|\\.)*)"',rep,s)
if '--write' in sys.argv: open(p,'w',encoding='utf-8').write(s2)
print('UNKNOWN',sum(P.UNKNOWN.values()))
for k,v in P.UNKNOWN.most_common(80): print(v,repr(k),P.UNK_EX[k][1][-50:])
print('CHANGES top')
for k,v in P.CHANGES.most_common(60): print(v,k)
