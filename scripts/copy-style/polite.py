# -*- coding: utf-8 -*-
"""Plain-form -> です・ます converter for site-authored Japanese prose.
Quoted spans (「」『』) are never edited. Unknown endings are reported, not guessed."""
import re, collections

UNKNOWN = collections.Counter()
UNK_EX = {}
CHANGES = collections.Counter()

U2I = dict(zip('うくぐすつぬぶむる', 'いきぎしちにびみり'))
A2I = dict(zip('かがさたなばまらわ', 'きぎしちにびみりい'))
E_ROW = set('えけげせぜてでねへべぺめれ')
I_ROW = set('いきぎしじちぢにひびぴみり')
HIRA = re.compile(r'[ぁ-ゖ]')
KANJI = re.compile(r'[一-鿿々]')

GODAN_RU_KANA = ['はいる', 'かえる', 'はしる', 'しる', 'かぎる', 'きる', 'へる', 'いる']  # not used directly
# kanji+る that are ichidan
ICHIDAN_KANJI_RU = {'見る', '出る', '寝る', '着る', '似る', '得る', '経る', '居る'}
# kana-ending ru verbs that look ichidan but are godan
GODAN_EXCEPT = {'入る', '帰る', '走る', '知る', '限る', '切る', '減る', '要る', '参る', '滑る', '握る', '散る', '喋る', '茂る',
                '混じる', '交じる', '蹴る', '照る', '焦る', '湿る', '遮る', 'しゃべる', 'ねじる', 'いじる'}

PAST_MAP = {  # godan past -> masu past (longest suffix wins)
    '書いた': '書きました', '聞いた': '聞きました', '届いた': '届きました', '働いた': '働きました', '効いた': '効きました',
    '続いた': '続きました', '着いた': '着きました', '気づいた': '気づきました', '気付いた': '気付きました', '向いた': '向きました',
    '空いた': '空きました', '驚いた': '驚きました', '置いた': '置きました', '開いた': '開きました', '導いた': '導きました', '引いた': '引きました', '描いた': '描きました', '吹いた': '吹きました', '歩いた': '歩きました', '抜いた': '抜きました', '弾いた': '弾きました', '動いた': '動きました', '解いた': '解きました', 'いただいた': 'いただきました', '頂いた': '頂きました', '頂いていた': '頂いていました',
    '泳いだ': '泳ぎました', '急いだ': '急ぎました', '防いだ': '防ぎました',
    'なった': 'なりました', 'あった': 'ありました', '言った': '言いました', 'いった': 'いきました', '行った': '行きました',
    '通った': '通いました', '思った': '思いました', '使った': '使いました', '持った': '持ちました', '終わった': '終わりました',
    '変わった': '変わりました', '減った': '減りました', '取った': '取りました', '払った': '払いました', 'もらった': 'もらいました',
    '買った': '買いました', '違った': '違いました', '合った': '合いました', '入った': '入りました', '戻った': '戻りました',
    '残った': '残りました', '乗った': '乗りました', '知った': '知りました', '始まった': '始まりました', '決まった': '決まりました',
    '待った': '待ちました', '立った': '立ちました', '経った': '経ちました', '習った': '習いました', '伺った': '伺いました',
    '手伝った': '手伝いました', '貰った': '貰いました', '頑張った': '頑張りました', 'がんばった': 'がんばりました', '移った': '移りました',
    '上がった': '上がりました', '下がった': '下がりました', '治った': '治りました', '直った': '直りました', '楽になった': '楽になりました',
    '通えなかった': '通えませんでした', 'わかった': 'わかりました', '分かった': '分かりました', '助かった': '助かりました',
    '見つかった': '見つかりました', '向かった': '向かいました', '伝わった': '伝わりました', '加わった': '加わりました', '関わった': '関わりました', '教わった': '教わりました', '集まった': '集まりました', '止まった': '止まりました', '高まった': '高まりました', '深まった': '深まりました', '縮まった': '縮まりました', '固まった': '固まりました', '詰まった': '詰まりました', '収まった': '収まりました', '埋まった': '埋まりました', '捕まった': '捕まりました', '挟まった': '挟まりました',
    '払いきった': '払いきりました', '断った': '断りました', '張った': '張りました', '送った': '送りました', '祈った': '祈りました', '作った': '作りました', '願った': '願いました', '誘った': '誘いました', '迷った': '迷いました', '笑った': '笑いました', '扱った': '扱いました', '従った': '従いました', '戦った': '戦いました', '拾った': '拾いました', '洗った': '洗いました',
    '選んだ': '選びました', '読んだ': '読みました', '休んだ': '休みました', '頼んだ': '頼みました', '済んだ': '済みました',
    '進んだ': '進みました', '学んだ': '学びました', '悩んだ': '悩みました', '楽しんだ': '楽しみました', '住んだ': '住みました',
    '飲んだ': '飲みました', '組んだ': '組みました', '込んだ': '込みました', '申し込んだ': '申し込みました', '呼んだ': '呼びました', '喜んだ': '喜びました', '並んだ': '並びました', '遊んだ': '遊びました', '運んだ': '運びました', '死んだ': '死にました', '望んだ': '望みました', '痛んだ': '痛みました', '和らいだ': '和らぎました', '揉んだ': '揉みました', '挑んだ': '挑みました', '絡んだ': '絡みました', '刻んだ': '刻みました', '盛り込んだ': '盛り込みました', '取り組んだ': '取り組みました', '落ち込んだ': '落ち込みました', '踏み込んだ': '踏み込みました', '馴染んだ': '馴染みました', 'なじんだ': 'なじみました',
}

DICT_FROM_STEM = {  # masu-stem -> dictionary form (for ましょう/たい rewrites)
    '吐き': '吐く', '摂り': '摂る', '取り': '取る', '守り': '守る', '感じ': '感じる', '保ち': '保つ', '引き': '引く', '戻り': '戻る', '下ろし': '下ろす', '吸い': '吸う', '抜き': '抜く', '回し': '回す', '置き': '置く', '乗せ': '乗せる', '寄せ': '寄せる', '立て': '立てる', '締め': '締める', '緩め': '緩める', '丸め': '丸める', '反らし': '反らす', '広げ': '広げる', '閉じ': '閉じる', '開き': '開く', '曲げ': '曲げる', '上げ': '上げる', '下げ': '下げる', '止め': '止める', '繰り返し': '繰り返す', '和らげ': '和らげる', '慣らし': '慣らす', '楽しみ': '楽しむ', '進め': '進める', '設け': '設ける', '測り': '測る', '見直し': '見直す', '頼り': '頼る', '任せ': '任せる', '飲み': '飲む', '食べ': '食べる', '眠り': '眠る', '寝': '寝る', '起き': '起きる', '浴び': '浴びる', '着': '着る', '履き': '履く', '脱ぎ': '脱ぐ', '落ち着け': '落ち着ける', '意識し': '意識する', '目覚め': '目覚める', '作り': '作る', '送り': '送る', '待ち': '待つ', '持ち': '持つ', '向き合い': '向き合う', '付き合い': '付き合う', '触れ': '触れる', '握り': '握る', '押し': '押す', '踏み': '踏む', '伸び': '伸びる', '縮め': '縮める', 'ほぐし': 'ほぐす', '整え': '整える', '描き': '描く', '近づけ': '近づける', '遠ざけ': '遠ざける', '離し': '離す', 'つけ': 'つける', '付け': '付ける', '続け': '続ける', '行き': '行く', 
    '選び': '選ぶ', '通い': '通う', '狙い': '狙う', '行い': '行う', '持ち': '持つ', '行き': '行く', '休み': '休む', '入れ': '入れる',
    '続け': '続ける', '決め': '決める', '始め': '始める', '見つけ': '見つける', '預け': '預ける', '押さえ': '押さえる', '確かめ': '確かめる',
    '避け': '避ける', '合わせ': '合わせる', '心がけ': '心がける', '考え': '考える', '身につけ': '身につける', '増やし': '増やす',
    '目指し': '目指す', '活かし': '活かす', '試し': '試す', '外し': '外す', '探し': '探す', '残し': '残す', 'もらい': 'もらう',
    '使い': '使う', '伝え': '伝える', '聞き': '聞く', '整え': '整える', '備え': '備える', '控え': '控える', '用い': '用いる', '着け': '着ける', '向け': '向ける',
    '迎え': '迎える', '抑え': '抑える', '与え': '与える', '加え': '加える', '慣れ': '慣れる', '見': '見る', '取り入れ': '取り入れる', '受け': '受ける', '分け': '分ける', '比べ': '比べる', '調べ': '調べる', '乗り越え': '乗り越える', '伸ばし': '伸ばす', '落とし': '落とす', '過ごし': '過ごす', '減らし': '減らす', '動かし': '動かす', '戻し': '戻す', '持参し': '持参する', '持っていき': '持っていく',
}


def stem_to_dict(stem):
    """masu stem (e.g. '確認し', '選び', '体験してみ') -> dictionary form, or None."""
    for k in sorted(DICT_FROM_STEM, key=len, reverse=True):
        if stem.endswith(k):
            return stem[: -len(k)] + DICT_FROM_STEM[k]
    if stem.endswith('し'):
        pre = stem[:-1]
        if re.search(r'[一-鿿]{2}$|[ァ-ヶー]{2}$|[a-zA-Z]$|に$|と$|く$|よう$', pre):
            return pre + 'する'
        return None
    if stem.endswith(('てみ', 'でみ')):
        return stem + 'る'
    if stem.endswith(('てお', 'でお')):
        return None
    if stem.endswith(('ておき', 'でおき')):
        return stem[:-1] + 'く'
    if stem.endswith(('ていき', 'でいき')):
        return stem[:-1] + 'く'
    return None


MODE = {'te': False}
TE_I = {'き': 'いて', 'ぎ': 'いで', 'し': 'して', 'ち': 'って', 'り': 'って', 'い': 'って', 'に': 'んで', 'び': 'んで', 'み': 'んで'}


def stem_to_te(stem):
    if stem.endswith(('行き', 'いき')):
        return stem[:-1] + 'って'
    if not stem:
        return None
    c = stem[-1]
    d = stem_to_dict(stem)
    # ichidan: dict form = stem + る
    if d and d == stem + 'る':
        return stem + 'て'
    if c == 'し':
        return stem + 'て'
    if c in TE_I and d:
        return stem[:-1] + TE_I[c]
    if c in E_ROW:
        return stem + 'て'
    return None


def conv_mashou(stem):
    """stem + ましょう -> polite recommendation."""
    if MODE['te'] and not re.search(r'(確認|チェック|検討|活用|予約|相談|参加|持参|用意|選択|選び|利用|注意|準備)(?:しておき|してみ|し)?$', stem):
        te = stem_to_te(stem)
        if te:
            return te + 'ください'

    m = re.search(r'(?:必ず)?(?:事前に)?(?:比較)?(確認|チェック)(?:しておき|してみ|しておいてくださいね|し)$', stem)
    if m:
        pre = stem[: m.start(1)]
        return pre + 'ご確認ください'
    for verb, pol in (('比較検討してみ', '比較のうえご検討ください'), ('比較検討し', '比較のうえご検討ください'),
                      ('検討してみ', 'ご検討ください'), ('検討し', 'ご検討ください'), ('活用し', 'ご活用ください'),
                      ('予約し', 'ご予約ください'), ('相談し', 'ご相談ください'), ('参加し', 'ご参加ください'),
                      ('持参し', 'ご持参ください'), ('用意し', 'ご用意ください'), ('選択し', 'お選びください'),
                      ('選び', 'お選びください'), ('利用し', 'ご利用ください'), ('注意し', 'ご注意ください'),
                      ('準備し', 'ご準備ください'), ('相談してみ', 'ご相談ください')):
        if stem.endswith(verb):
            return stem[: -len(verb)] + pol
    d = stem_to_dict(stem)
    if d:
        return d + 'ことをおすすめします'
    return None


def conv_neg(body):
    """body ends with ない (plain negative)."""
    if re.search(r'(では|じゃ|でも|でさえ)ない$', body):
        return re.sub(r'(では|じゃ|でも)ない$', lambda m: ('では' if m.group(1) == 'じゃ' else m.group(1)) + 'ありません', body)
    if re.search(r'(が|は|も|に|と|で|しか|ほど|まで|わけ|必要|心配|問題|意味|余地|こと|もの)ない$', body):
        return body[:-2] + 'ありません'
    if body.endswith('くない'):
        return body[:-2] + 'ありません'
    if body.endswith('しない'):
        return body[:-3] + 'しません'
    if body.endswith(('こない', '来ない')):
        return body[:-3] + body[-3] + 'ません' if body.endswith('来ない') else body[:-3] + 'きません'
    if len(body) >= 3:
        c = body[-3]
        if c in A2I:
            return body[:-3] + A2I[c] + 'ません'
        if c in E_ROW or c in I_ROW:
            return body[:-2] + 'ません'
        if KANJI.match(c) and body[-4:-3] and not HIRA.match(body[-4]) is None:
            pass
        if KANJI.match(c):  # 少ない / 危ない etc = adjective
            return body + 'です'
    return None


def conv_ru(body):
    if body.endswith('する'):
        return body[:-2] + 'します'
    if body.endswith(('てくる', 'でくる')):
        return body[:-2] + 'きます'
    if body.endswith('来る'):
        return body[:-1] + 'ます'
    for g in GODAN_EXCEPT:
        if body.endswith(g):
            return body[:-1] + 'ります'
    c = body[-2] if len(body) >= 2 else ''
    if KANJI.match(c):
        if body[-2:] in ICHIDAN_KANJI_RU:
            return body[:-1] + 'ます'
        return body[:-1] + 'ります'
    if c in E_ROW or c in I_ROW:
        return body[:-1] + 'ます'
    if HIRA.match(c):
        return body[:-1] + 'ります'
    return None


def conv_past(body):
    if body.endswith('だった'):
        return body[:-3] + 'でした'
    if body.endswith('かった') and not re.search(r'(わ|分|見つ|助|向|乗っ|預)かった$', body):
        return body + 'です'
    if body.endswith('なかった'):
        return None
    if body.endswith(('ていた', 'でいた')):
        return body[:-2] + 'いました'
    if body.endswith('した'):
        return body[:-2] + 'しました'
    if body.endswith(('てきた', 'できた')) and body.endswith('てきた'):
        return body[:-2] + 'きました'
    for k in sorted(PAST_MAP, key=len, reverse=True):
        if body.endswith(k):
            return body[: -len(k)] + PAST_MAP[k]
    c = body[-2] if len(body) >= 2 else ''
    if c in E_ROW or (c in I_ROW and c not in 'いし'):
        return body[:-1] + 'ました'
    if body.endswith('できた'):
        return body[:-1] + 'ました'
    return None


POLITE_END = re.compile(r'(です|ます|ました|でした|ません|ませんでした|ください|でしょう|ございます|ますか|ですか|でしょうか|ませんか|ましょうか|願います)$')
NOUNISH = re.compile(r'([一-鿿々ァ-ヶーa-zA-Z0-9０-９%％〜~＋+・／/&＆]|こと|もの|ため|とのこと|だけ|ほど|くらい|ぐらい|ばかり|から|まで|より|うえ|ところ|とおり|通り|よう|そう|ごと|ずつ|など|ほか|方|の上|まま|ぶり|気味|がち)$')


SURU_N = '開閉|往復|回転|キープ|維持|追加|配信|解説|把握|厳選|調査|集計|分析|リサーチ|使用|位置|充実|提携|隣接|直結|点在|密集|分布|提供|実現|展開|用意|採用|完備|実施|導入|併設|運営|対応|紹介|掲載|配置|設置|開催|在籍|監修|考案|開講|常駐|営業|受付|開業|移転|オープン|サポート|指導|重視|特化|両立|融合|網羅|集中|追求|実践|提案|徹底|強化|改善|解消|発信|公開|販売|案内|貸出|貸し出し|レンタル|両対応'
ENDRULES = [
    (r'は(無料|0円)体験$', lambda m, b: b[:-2] + '体験を実施しています'),
    (r'(を|で)体験$', lambda m, b: b + 'できます'),
    (r'に強み$', lambda m, b: b + 'があります'),
    (r'強み$', lambda m, b: b + 'です'),
    (r'にぴったり$', lambda m, b: b[:-4] + '適しています'),
    (r'(可|プログラム|パーソナル|プラン|スタジオ|設備)も$', lambda m, b: b + 'あります'),
    (r'で選ぶなら$', lambda m, b: b[:-2] + '方におすすめです'),
    (r'(徹底)?比較$', lambda m, b: b[: -len(m.group(0))] + '比較しています'),
    (r'からスタート$', lambda m, b: b[: -len(m.group(0))] + 'から始めることをおすすめします'),
    (r'(?:なく|無理なく)継続$', lambda m, b: b + 'することをおすすめします'),
    (r'[%％]が[^。]*実感$', lambda m, b: b + 'しています'),
    (r'を[^、。を]{0,25}?実感$', lambda m, b: b + 'できます'),
    (r'を検討$', lambda m, b: b[:-2] + 'ご検討ください'),
    (r'(を|は|に)[^、。]{0,25}?(事前に)?確認$', lambda m, b: b[:-2] + 'ご確認ください'),
    (r'(が|も|は)(充実|位置|対応|完備|在籍|併設|常駐|提携|隣接|直結|点在|集中|密集|営業|展開|採用|導入|特化)$', lambda m, b: b + 'しています'),
    (r'(が|も)期待$', lambda m, b: b + 'できます'),
    (r'たい方$', lambda m, b: b + '向けです'),
    (r'(く|に|で)ボディメイク$', lambda m, b: b + 'を目指せます'),
    (r'(を|まで|に|で|も)[^、。をにで]{0,25}?(?<![なの])(' + SURU_N + r')$', lambda m, b: b + ('します' if MODE['te'] and not b.endswith(('解説', '紹介', '掲載', '配信', '提供')) else 'しています')),
    (r'体質に$', lambda m, b: b + 'つながります' if False else b[:-1] + 'づくりにつながります'),
    (r'(確認|チェック)を$', lambda m, b: b[: -len(m.group(0))] + 'ご確認ください'),
    (r'早めに予約を$', lambda m, b: b[: -len(m.group(0))] + '早めのご予約をおすすめします'),
    (r'早めの(確保|予約)を$', lambda m, b: b[: -len(m.group(0))] + '早めのご予約をおすすめします'),
    (r'予約を$', lambda m, b: b[:-1] + 'をおすすめします'),
    (r'比較検討を$', lambda m, b: b[: -len(m.group(0))] + '比較のうえご検討ください'),
    (r'検討を$', lambda m, b: b[: -len(m.group(0))] + 'ご検討ください'),
    (r'持参を$', lambda m, b: b[: -len(m.group(0))] + 'ご持参ください'),
    (r'継続を$', lambda m, b: b[:-1] + 'することをおすすめします'),
    (r'比較を$', lambda m, b: b[:-1] + 'することをおすすめします'),
    (r'(レッスン|指導|トレーニング|ケア|サポート)を$', lambda m, b: b + '受けられます'),
    (r'忘れずに$', lambda m, b: b + 'ご用意ください'),
    (r'(方|人|女性|男性|初心者|上級者|経験者)に$', lambda m, b: b + 'おすすめです'),
    (r'(気軽|手軽)に$', lambda m, b: b + '始められます'),
    (r'(お得|リーズナブル|効率的|効果的|安心)に$', lambda m, b: b + '通えます'),
    (r'(補給)に$', lambda m, b: b + '必要です'),
    (r'(選択肢)に$', lambda m, b: b + '含めてご検討ください'),
    (r'(コスパ)◎$', lambda m, b: b[: -len(m.group(0))] + '割安です'),
    (r'(アクセス)◎$', lambda m, b: b[:-1] + 'が便利です'),
    (r'(ライン|コンディション|身体|ボディ|体型|姿勢)へ$', lambda m, b: b[:-1] + 'を目指せます'),
    (r'(向け|付き|つき|込み|レベル分け|組み合わせ|使い分け|最寄り|要問合せ|お問い合わせ|特典付き|まち|多さ|良さ|暑さ|寒さ|ライン作り)$', lambda m, b: b + 'です'),
    (r'(ません|ます|です)よ$', lambda m, b: b[:-1]),
]


def conv_body(body):
    if MODE['te']:
        bb = body.rstrip()
        if len(bb) <= 14 and re.search(r'(\d+|各\d+|\d+〜\d+)(回|秒|分|セット|呼吸)$', bb):
            return bb
        if bb.endswith('まで') and len(bb) > 15:
            return bb + 'を解説しています'
    return _conv_body(body)


def _conv_body(body):
    """Convert a sentence body (without terminator, with trailing parenthetical removed). Return new body or None if unknown."""
    if not body.strip():
        return body
    b = body.rstrip()
    if POLITE_END.search(b) or b in ('はい', 'いいえ') or re.search(r'(^|[、\s])(はい|いいえ)$', b):
        return b
    if b.endswith('ましょう'):
        r = conv_mashou(b[:-4])
        return r
    for a, z in (('ですよね', 'です'), ('ですよ', 'です'), ('ですね', 'です'), ('ますよね', 'ます'), ('ますよ', 'ます'), ('ますね', 'ます'), ('くださいね', 'ください'), ('でしたね', 'でした'), ('ましたね', 'ました'), ('ませんね', 'ません')):
        if b.endswith(a):
            return b[: -len(a)] + z
    if re.search(r'[？?]$', b) or b.endswith('か'):
        return b
    if b.endswith('である'):
        return b[:-3] + 'です'
    if b.endswith('ではなかった'):
        return b[:-6] + 'ではありませんでした'
    if re.search(r'(が|は|も)なかった$', b):
        return b[:-4] + 'ありませんでした'
    if b.endswith('なかった'):
        n = conv_neg(b[:-4] + 'ない')
        if n and n.endswith('ません'):
            return n + 'でした'
        return None
    if b.endswith('た') and not b.endswith(('いた', 'った', 'んだ', 'いだ')) or b.endswith('た'):
        if b.endswith('た'):
            r = conv_past(b)
            if r:
                return r
            return None
    if b.endswith('だ'):
        if b.endswith(('んだ', 'いだ')):
            r = conv_past(b)
            if r:
                return r
            if b.endswith('なんだ'):
                return b[:-3] + 'なのです'
            return None
        return b[:-1] + 'です'
    if b.endswith('ない'):
        return conv_neg(b)
    if b.endswith('たい'):
        d = stem_to_dict(b[:-2])
        return (d + 'ことをおすすめします') if d else b + 'ところです'
    if b.endswith(('ている', 'でいる')):
        return b[:-2] + 'います'
    if b.endswith(('てある', 'である')):
        return b[:-2] + 'あります'
    if b.endswith(('ておく', 'でおく')):
        return b[:-1] + 'きます'
    if b.endswith(('ていく', 'でいく')):
        return b[:-1] + 'きます'
    if b.endswith(('そう', 'すぐ', 'よう')):
        return b + 'です'
    if b.endswith('と記述'):
        return b + 'されています'
    if b.endswith(('複数', '多数')):
        return b + 'あります'
    if b.endswith('に注意'):
        return b[:-2] + 'ご注意ください'
    if b.endswith('る'):
        return conv_ru(b)
    if b[-1] == 'く' and not re.search(r'(行く|いく|続く|書く|効く|届く|働く|抜く|描く|歩く|動く|置く|開く|引く|向く|聞く|導く|築く|磨く|招く|輝く|響く|驚く|づく|つく|付く|着く|就く|巻く|敷く|吹く|焼く|拭く|弾く|解く|履く|空く|湧く|除く|省く|欠く|傾く|頂く|いただく|退く|嘆く|ひく|はく|おく|まく|かく|きく|さく|とく|ふく|むく|わく)$', b):
        return None
    if b[-1] in 'うくぐすつぬぶむ':
        if b.endswith('という'):
            return None
        return b[:-1] + U2I[b[-1]] + 'ます'
    if b.endswith('い'):
        # 2026-10-17: 「多いです」「やすいです」のような形容詞＋です は機械的に付けない（手で書き直す）。UNKNOWN として表示する
        if re.search(r'(高|低|多|少な|強|弱|やす|にく|激し|大き|小さ|早|遅|安|良|よ|欲し|ほし|難し|近|広|長|重|優し|詳し|望まし|いい)い$', b):
            return None
        if b.endswith(('しい', 'たかい', 'かい', 'さい', 'ない', 'よい', 'いい', 'たい', 'らい', 'ぽい', 'すい', 'くい', 'づらい', 'つらい', 'にくい', 'やすい', 'ほしい', 'ない')) or KANJI.match(b[-2:-1] or 'x') or HIRA.match(b[-2:-1] or 'x'):
            return b + 'です'
    if re.search(r'」とも$', b):
        return b + '書かれています'
    if b.endswith('あり') and not b.endswith(('がある', 'もあり')):
        return b[:-2] + ('があります' if not re.search(r'[がはも]あり$', b) else 'あります')
    if b.endswith('もあり'):
        return b[:-2] + 'あります'
    if b.endswith('なし') and len(b) > 2:
        return b[:-2] + ('はありません' if not re.search(r'[がはも]なし$', b) else 'ありません')
    if b.endswith('も'):
        if re.search(r'(方|人|女性|男性|会員|利用者|初心者|スタッフ|インストラクター|トレーナー)も$', b):
            return b + 'います'
        if re.search(r'(声|投稿|記述|意見|指摘|感想|評価|書き込み|話|例|コメント|報告|口コミ|レビュー|人|方|店舗|スタジオ|もの|こと|場合|ケース|プラン|クラス|時間|日|言及|情報|表現|見立て|線引き|描写|要望|点|★\d|声|評|内容|記載|紹介|説明|案内|特徴|利点|魅力|設備|メニュー|オプション|サービス|割引|キャンペーン|店|会員|コース|レッスン|体験談|エピソード|事例|感覚|変化|効果|経験)も$', b):
            return b + 'あります'
        return None
    if re.search(r'(めの?|程度|ほとんど|のみ|だけ)$', b):
        return b + 'です'
    if b.endswith('参考程度に'):
        return b + 'ご覧ください'
    if re.search(r'」とも$', b):
        return b + '書かれています'
    if b.endswith('可'):
        return b + '能です'
    if b.endswith('OK'):
        return b[:-2] + '可能です'
    for rx, fn in ENDRULES:
        m = re.search(rx, b)
        if m:
            return fn(m, b)
    if NOUNISH.search(b):
        return b + 'です'
    return None


TRAIL_PAREN = re.compile(r'(（[^（）]*）|\([^()]*\)|\*\*)$')


def map_unquoted(s, fn):
    out = []; depth = 0; buf = ''
    for ch in s:
        if ch in '「『':
            if depth == 0:
                out.append(fn(buf)); buf = ''
            depth += 1; out.append(ch) if depth > 1 else None
            if depth == 1:
                out.append(ch)
            continue
        if ch in '」』' and depth > 0:
            depth -= 1; out.append(ch); continue
        if depth > 0:
            out.append(ch)
        else:
            buf += ch
    out.append(fn(buf))
    return ''.join(out)


def norm_kana(t):
    return t.replace('無い', 'ない').replace('無く', 'なく').replace('無し', 'なし')


def conv_sentence(sent):
    """sent: text of one sentence without its terminator. Returns (new, ok)."""
    sent = map_unquoted(sent, norm_kana)
    body = sent
    tail = ''
    while True:
        m = TRAIL_PAREN.search(body.rstrip())
        if not m:
            break
        body2 = body.rstrip()
        tail = body2[m.start():] + tail
        body = body2[: m.start()]
    # sentence ending in a closing quote: e.g. 〜という記述「…」 -> leave
    stripped = body.rstrip()
    if not stripped:
        return sent, True
    if stripped[-1] in '」』"”':
        if re.search(r'(スタジオ|ブランド|店舗名は|店名は|名称は|チェーン)「[^「」]+」$', stripped):
            return stripped + 'です' + tail, True
        return sent, False
    nb = conv_body(stripped)
    if nb is None:
        return sent, False
    return nb + tail, True


def convert_prose(s, ctx='', bang=False):
    """Convert all sentences outside quotes. Sentences are delimited by 。 at quote depth 0.
    The final unterminated fragment is left untouched."""
    out = []
    depth = 0
    buf = ''
    pdepth = 0
    for ch in s:
        if ch in '「『':
            depth += 1
        elif ch in '」』' and depth > 0:
            depth -= 1
        elif ch in '（(':
            pdepth += 1
        elif ch in '）)' and pdepth > 0:
            pdepth -= 1
        if (ch == '。' or (bang and ch == '！')) and depth == 0 and pdepth == 0:
            ch = '。'
            new, ok = conv_sentence(buf)
            if not ok:
                key = buf[-12:]
                UNKNOWN[buf[-6:]] += 1
                UNK_EX.setdefault(buf[-6:], (ctx, buf[-60:]))
            elif new != buf:
                CHANGES[(buf[-6:], new[-8:])] += 1
            out.append(new + ch)
            buf = ''
        else:
            buf += ch
    out.append(buf)
    return ''.join(out)


if __name__ == '__main__':
    tests = ['総合型スタジオ', 'ヨガとピラティスの両方を楽しめるので、気分や目的に合わせてレッスンを選べる', '全国のzen placeスタジオを相互利用できるのも大きな魅力',
             '「劇的に痩せたということはない」という投稿がある', '病気のリハビリを兼ねて選んだという記述も', '慣れるまでの期間を正直に書いている',
             '月4回9,625円〜とリーズナブル', '全国140スタジオ相互利用可', 'まずは気軽に体験してみましょう', '事前に確認しておきましょう', '目的に合わせて選びましょう',
             '解約できなかった', '3か月請求が続いた', '予約が取りにくいという声は無い', '男性も通える', '料金は高くない', '口コミは少ない', '女性専用（男性不可）',
             '入会金は不要だ', 'キャンセルは2時間前まで可能', 'スタッフが丁寧だったと書いている', '効果を実感した人が多い']
    for t in tests:
        print(t, '->', conv_sentence(t))
