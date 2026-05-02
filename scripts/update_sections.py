#!/usr/bin/env python3
"""
136エリアページの3セクション（料金相場/注意点/持ち物ガイド）を
各エリア完全固有のユニークコンテンツに書き直すスクリプト
"""

import os
import re
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AREA_DIR = os.path.join(BASE_DIR, 'app', 'area')

SKIP_AREAS = {
    'shibuya', 'shinjuku', 'ikebukuro', 'ginza', 'roppongi',
    'yokohama', 'umeda', 'nagoya', 'fukuoka', 'sapporo'
}

# ============================================================
# 近隣エリアマッピング
# ============================================================
NEIGHBOR_MAP = {
    # 東京23区 - 北部
    'akabane': [('ikebukuro', '池袋'), ('oji', '王子'), ('nishi-nippori', '西日暮里')],
    'oji': [('akabane', '赤羽'), ('nippori', '日暮里'), ('ikebukuro', '池袋')],
    'sugamo': [('ikebukuro', '池袋'), ('otsuka', '大塚'), ('korakuen', '後楽園')],
    'otsuka': [('ikebukuro', '池袋'), ('sugamo', '巣鴨'), ('korakuen', '後楽園')],
    'nippori': [('ueno', '上野'), ('oji', '王子'), ('nishi-nippori', '西日暮里')],
    'nishi-nippori': [('nippori', '日暮里'), ('ueno', '上野'), ('akabane', '赤羽')],
    'kita-senju': [('ueno', '上野'), ('nippori', '日暮里'), ('oshiage', '押上')],
    'nerima': [('ikebukuro', '池袋'), ('ogikubo', '荻窪'), ('koenji', '高円寺')],

    # 東京23区 - 中央・千代田
    'tokyo': [('tokyo-station', '東京駅'), ('marunouchi', '丸の内'), ('otemachi', '大手町')],
    'tokyo-station': [('marunouchi', '丸の内'), ('nihonbashi', '日本橋'), ('otemachi', '大手町')],
    'marunouchi': [('tokyo-station', '東京駅'), ('otemachi', '大手町'), ('yurakucho', '有楽町')],
    'otemachi': [('marunouchi', '丸の内'), ('tokyo-station', '東京駅'), ('nihonbashi', '日本橋')],
    'nihonbashi': [('tokyo-station', '東京駅'), ('tsukiji', '築地'), ('kameido', '亀戸')],
    'yurakucho': [('marunouchi', '丸の内'), ('shimbashi', '新橋'), ('tokyo-station', '東京駅')],
    'iidabashi': [('kagurazaka', '神楽坂'), ('korakuen', '後楽園'), ('suidobashi', '水道橋')],
    'kagurazaka': [('iidabashi', '飯田橋'), ('korakuen', '後楽園'), ('suidobashi', '水道橋')],
    'korakuen': [('iidabashi', '飯田橋'), ('suidobashi', '水道橋'), ('ochanomizu', '御茶ノ水')],
    'suidobashi': [('korakuen', '後楽園'), ('ochanomizu', '御茶ノ水'), ('iidabashi', '飯田橋')],
    'ochanomizu': [('suidobashi', '水道橋'), ('akihabara', '秋葉原'), ('korakuen', '後楽園')],
    'akihabara': [('ueno', '上野'), ('ochanomizu', '御茶ノ水'), ('nihonbashi', '日本橋')],
    'nagatacho': [('toranomon', '虎ノ門'), ('akasaka', '赤坂'), ('yotsuya', '四ツ谷')],
    'toranomon': [('shimbashi', '新橋'), ('nagatacho', '永田町'), ('akasaka', '赤坂')],
    'yotsuya': [('shinjuku', '新宿'), ('nagatacho', '永田町'), ('iidabashi', '飯田橋')],

    # 東京23区 - 港区・渋谷周辺
    'akasaka': [('nagatacho', '永田町'), ('toranomon', '虎ノ門'), ('roppongi', '六本木')],
    'azabujuban': [('roppongi', '六本木'), ('hiroo', '広尾'), ('shirokanatakanawa', '白金高輪')],
    'hiroo': [('azabujuban', '麻布十番'), ('ebisu', '恵比寿'), ('roppongi', '六本木')],
    'shirokanatakanawa': [('azabujuban', '麻布十番'), ('shirokanedai', '白金台'), ('mita', '三田')],
    'shirokanedai': [('shirokanatakanawa', '白金高輪'), ('meguro', '目黒'), ('mita', '三田')],
    'mita': [('tamachi', '田町'), ('shirokanatakanawa', '白金高輪'), ('shinagawa', '品川')],
    'tamachi': [('mita', '三田'), ('shinagawa', '品川'), ('hamamatsucho', '浜松町')],
    'hamamatsucho': [('shimbashi', '新橋'), ('tamachi', '田町'), ('tokyo-station', '東京駅')],
    'shimbashi': [('yurakucho', '有楽町'), ('hamamatsucho', '浜松町'), ('toranomon', '虎ノ門')],
    'shinagawa': [('tamachi', '田町'), ('gotanda', '五反田'), ('oimachi', '大井町')],
    'gotanda': [('shinagawa', '品川'), ('meguro', '目黒'), ('oimachi', '大井町')],
    'oimachi': [('shinagawa', '品川'), ('gotanda', '五反田'), ('kamata', '蒲田')],
    'ebisu': [('daikanyama', '代官山'), ('nakameguro', '中目黒'), ('hiroo', '広尾')],
    'daikanyama': [('ebisu', '恵比寿'), ('nakameguro', '中目黒'), ('shibuya', '渋谷')],
    'nakameguro': [('ebisu', '恵比寿'), ('daikanyama', '代官山'), ('meguro', '目黒')],
    'meguro': [('nakameguro', '中目黒'), ('gotanda', '五反田'), ('shirokanedai', '白金台')],
    'harajuku': [('omotesando', '表参道'), ('shibuya', '渋谷'), ('yoyogi', '代々木')],
    'omotesando': [('harajuku', '原宿'), ('aoyama-itchome', '青山一丁目'), ('shibuya', '渋谷')],
    'aoyama-itchome': [('omotesando', '表参道'), ('akasaka', '赤坂'), ('shibuya', '渋谷')],
    'yoyogi': [('shinjuku', '新宿'), ('yoyogi-uehara', '代々木上原'), ('harajuku', '原宿')],
    'yoyogi-uehara': [('yoyogi', '代々木'), ('shimokitazawa', '下北沢'), ('sasazuka', '笹塚')],
    'sasazuka': [('yoyogi-uehara', '代々木上原'), ('shinjuku', '新宿'), ('shimokitazawa', '下北沢')],
    'shin-okubo': [('shinjuku', '新宿'), ('takadanobaba', '高田馬場'), ('yotsuya', '四ツ谷')],
    'takadanobaba': [('shin-okubo', '新大久保'), ('shinjuku', '新宿'), ('ikebukuro', '池袋')],

    # 東京23区 - 世田谷・目黒
    'sangenjaya': [('shimokitazawa', '下北沢'), ('shibuya', '渋谷'), ('futakotamagawa', '二子玉川')],
    'shimokitazawa': [('sangenjaya', '三軒茶屋'), ('yoyogi-uehara', '代々木上原'), ('sasazuka', '笹塚')],
    'futakotamagawa': [('sangenjaya', '三軒茶屋'), ('yoga-komazawa', '用賀・駒沢'), ('musashikosugi', '武蔵小杉')],
    'yoga-komazawa': [('futakotamagawa', '二子玉川'), ('sangenjaya', '三軒茶屋'), ('shibuya', '渋谷')],
    'seijo-gakuenmae': [('shimokitazawa', '下北沢'), ('chofu', '調布'), ('futakotamagawa', '二子玉川')],
    'jiyugaoka': [('nakameguro', '中目黒'), ('futakotamagawa', '二子玉川'), ('musashikoyama', '武蔵小山')],
    'musashikoyama': [('jiyugaoka', '自由が丘'), ('meguro', '目黒'), ('gotanda', '五反田')],
    'gakugei-daigaku': [('nakameguro', '中目黒'), ('jiyugaoka', '自由が丘'), ('meguro', '目黒')],
    'toritsu-daigaku': [('jiyugaoka', '自由が丘'), ('gakugei-daigaku', '学芸大学'), ('futakotamagawa', '二子玉川')],
    'toritsudaigaku': [('jiyugaoka', '自由が丘'), ('gakugei-daigaku', '学芸大学'), ('futakotamagawa', '二子玉川')],
    'yutenji': [('nakameguro', '中目黒'), ('gakugei-daigaku', '学芸大学'), ('ebisu', '恵比寿')],

    # 東京23区 - 中央線沿線
    'nakano': [('koenji', '高円寺'), ('nakano-sakaue', '中野坂上'), ('shinjuku', '新宿')],
    'nakano-sakaue': [('nakano', '中野'), ('shinjuku', '新宿'), ('shin-okubo', '新大久保')],
    'koenji': [('nakano', '中野'), ('asagaya', '阿佐ヶ谷'), ('ogikubo', '荻窪')],
    'asagaya': [('koenji', '高円寺'), ('ogikubo', '荻窪'), ('nishi-ogikubo', '西荻窪')],
    'ogikubo': [('asagaya', '阿佐ヶ谷'), ('nishi-ogikubo', '西荻窪'), ('koenji', '高円寺')],
    'nishi-ogikubo': [('ogikubo', '荻窪'), ('kichijoji', '吉祥寺'), ('asagaya', '阿佐ヶ谷')],

    # 東京23区 - 東部
    'ueno': [('akihabara', '秋葉原'), ('nippori', '日暮里'), ('asakusa', '浅草')],
    'asakusa': [('ueno', '上野'), ('oshiage', '押上'), ('kuramae', '蔵前')],
    'oshiage': [('asakusa', '浅草'), ('kinshicho', '錦糸町'), ('kameido', '亀戸')],
    'kuramae': [('asakusa', '浅草'), ('monzen-nakacho', '門前仲町'), ('nihonbashi', '日本橋')],
    'kinshicho': [('oshiage', '押上'), ('kameido', '亀戸'), ('monzen-nakacho', '門前仲町')],
    'kameido': [('kinshicho', '錦糸町'), ('oshiage', '押上'), ('nihonbashi', '日本橋')],
    'monzen-nakacho': [('kuramae', '蔵前'), ('toyosu', '豊洲'), ('tsukiji', '築地')],
    'toyosu': [('monzen-nakacho', '門前仲町'), ('tsukiji', '築地'), ('shinagawa', '品川')],
    'tsukiji': [('monzen-nakacho', '門前仲町'), ('shimbashi', '新橋'), ('nihonbashi', '日本橋')],
    'kamata': [('oimachi', '大井町'), ('shinagawa', '品川'), ('kawasaki', '川崎')],

    # 東京 - 多摩地区
    'kichijoji': [('mitaka', '三鷹'), ('nishi-ogikubo', '西荻窪'), ('ogikubo', '荻窪')],
    'mitaka': [('kichijoji', '吉祥寺'), ('chofu', '調布'), ('nishi-ogikubo', '西荻窪')],
    'chofu': [('mitaka', '三鷹'), ('seijo-gakuenmae', '成城学園前'), ('fuchu', '府中')],
    'fuchu': [('chofu', '調布'), ('tachikawa', '立川'), ('kichijoji', '吉祥寺')],
    'tachikawa': [('fuchu', '府中'), ('hachioji', '八王子'), ('kichijoji', '吉祥寺')],
    'hachioji': [('tachikawa', '立川'), ('machida', '町田'), ('fuchu', '府中')],
    'machida': [('hachioji', '八王子'), ('sagami-ono', '相模大野'), ('tachikawa', '立川')],

    # 神奈川
    'kawasaki': [('musashikosugi', '武蔵小杉'), ('kamata', '蒲田'), ('yokohama', '横浜')],
    'musashikosugi': [('kawasaki', '川崎'), ('futakotamagawa', '二子玉川'), ('yokohama', '横浜')],
    'kannai': [('yokohama', '横浜'), ('kamakura', '鎌倉'), ('kawasaki', '川崎')],
    'fujisawa': [('shonan', '湘南'), ('kamakura', '鎌倉'), ('yokohama', '横浜')],
    'shonan': [('fujisawa', '藤沢'), ('kamakura', '鎌倉'), ('yokohama', '横浜')],
    'kamakura': [('fujisawa', '藤沢'), ('shonan', '湘南'), ('yokohama', '横浜')],
    'sagami-ono': [('machida', '町田'), ('honatsugi', '本厚木'), ('yokohama', '横浜')],
    'honatsugi': [('sagami-ono', '相模大野'), ('machida', '町田'), ('fujisawa', '藤沢')],

    # 埼玉
    'omiya': [('urawa', '浦和'), ('kawagoe', '川越'), ('ikebukuro', '池袋')],
    'urawa': [('omiya', '大宮'), ('ikebukuro', '池袋'), ('akabane', '赤羽')],
    'kawagoe': [('omiya', '大宮'), ('ikebukuro', '池袋'), ('tokorozawa', '所沢')],
    'tokorozawa': [('kawagoe', '川越'), ('ikebukuro', '池袋'), ('nerima', '練馬')],
    'koshigaya': [('omiya', '大宮'), ('kita-senju', '北千住'), ('urawa', '浦和')],

    # 千葉
    'chiba': [('funabashi', '船橋'), ('kashiwa', '柏'), ('tokyo-station', '東京駅')],
    'funabashi': [('chiba', '千葉'), ('kashiwa', '柏'), ('kinshicho', '錦糸町')],
    'kashiwa': [('funabashi', '船橋'), ('chiba', '千葉'), ('kita-senju', '北千住')],

    # 大阪
    'shinsaibashi': [('namba', 'なんば'), ('honmachi', '本町'), ('umeda', '梅田')],
    'namba': [('shinsaibashi', '心斎橋'), ('tennoji', '天王寺'), ('honmachi', '本町')],
    'honmachi': [('shinsaibashi', '心斎橋'), ('namba', 'なんば'), ('umeda', '梅田')],
    'tennoji': [('namba', 'なんば'), ('abeno', '阿倍野'), ('shinsaibashi', '心斎橋')],
    'abeno': [('tennoji', '天王寺'), ('namba', 'なんば'), ('shinsaibashi', '心斎橋')],
    'esaka': [('umeda', '梅田'), ('shin-osaka', '新大阪'), ('honmachi', '本町')],
    'shin-osaka': [('umeda', '梅田'), ('esaka', '江坂'), ('honmachi', '本町')],
    'kitahama': [('honmachi', '本町'), ('umeda', '梅田'), ('shinsaibashi', '心斎橋')],
    'osaka': [('umeda', '梅田'), ('shinsaibashi', '心斎橋'), ('namba', 'なんば')],

    # 京都
    'kyoto': [('kyoto-station', '京都駅'), ('karasuma-oike', '烏丸御池'), ('shijo-kawaramachi', '四条河原町')],
    'kyoto-station': [('karasuma-oike', '烏丸御池'), ('kyoto-shiyakusho-mae', '京都市役所前'), ('shijo-kawaramachi', '四条河原町')],
    'karasuma-oike': [('kyoto-station', '京都駅'), ('shijo-kawaramachi', '四条河原町'), ('kyoto-shiyakusho-mae', '京都市役所前')],
    'shijo-kawaramachi': [('karasuma-oike', '烏丸御池'), ('gion-shijo', '祇園四条'), ('kyoto-station', '京都駅')],
    'gion-shijo': [('shijo-kawaramachi', '四条河原町'), ('karasuma-oike', '烏丸御池'), ('kyoto-station', '京都駅')],
    'kyoto-shiyakusho-mae': [('karasuma-oike', '烏丸御池'), ('shijo-kawaramachi', '四条河原町'), ('kyoto-station', '京都駅')],
    'kitaoji': [('karasuma-oike', '烏丸御池'), ('kyoto-station', '京都駅'), ('kyoto-shiyakusho-mae', '京都市役所前')],
    'nishijin': [('karasuma-oike', '烏丸御池'), ('kitaoji', '北大路'), ('kyoto-station', '京都駅')],

    # 兵庫
    'sannomiya': [('kobe', '神戸'), ('nishinomiya', '西宮'), ('umeda', '梅田')],
    'kobe': [('sannomiya', '三宮'), ('nishinomiya', '西宮'), ('umeda', '梅田')],
    'nishinomiya': [('sannomiya', '三宮'), ('kobe', '神戸'), ('umeda', '梅田')],

    # 名古屋
    'sakae': [('nagoya-station', '名古屋駅'), ('nagoya', '名古屋'), ('kanazawa', '金沢')],
    'nagoya-station': [('sakae', '栄'), ('nagoya', '名古屋'), ('kanazawa', '金沢')],

    # 九州
    'tenjin': [('hakata', '博多'), ('yakuin', '薬院'), ('fukuoka', '福岡')],
    'hakata': [('tenjin', '天神'), ('yakuin', '薬院'), ('fukuoka', '福岡')],
    'yakuin': [('tenjin', '天神'), ('hakata', '博多'), ('fukuoka', '福岡')],
    'kokura': [('hakata', '博多'), ('tenjin', '天神'), ('fukuoka', '福岡')],
    'kumamoto': [('fukuoka', '福岡'), ('hakata', '博多'), ('kagoshima', '鹿児島')],
    'kagoshima': [('kumamoto', '熊本'), ('fukuoka', '福岡'), ('naha', '那覇')],
    'naha': [('okinawa', '沖縄'), ('kagoshima', '鹿児島'), ('fukuoka', '福岡')],
    'okinawa': [('naha', '那覇'), ('kagoshima', '鹿児島'), ('fukuoka', '福岡')],

    # 北海道・東北
    'sendai': [('omiya', '大宮'), ('sapporo', '札幌'), ('niigata', '新潟')],
    'niigata': [('sendai', '仙台'), ('omiya', '大宮'), ('nagoya', '名古屋')],

    # その他
    'hamamatsu': [('nagoya', '名古屋'), ('shizuoka', '静岡'), ('yokohama', '横浜')],
    'shizuoka': [('hamamatsu', '浜松'), ('nagoya', '名古屋'), ('yokohama', '横浜')],
    'kanazawa': [('nagoya', '名古屋'), ('kyoto', '京都'), ('niigata', '新潟')],
    'okayama': [('hiroshima', '広島'), ('kobe', '神戸'), ('osaka', '大阪')],
    'hiroshima': [('okayama', '岡山'), ('kobe', '神戸'), ('fukuoka', '福岡')],
    'takamatsu': [('okayama', '岡山'), ('kobe', '神戸'), ('hiroshima', '広島')],
    'tsukuba': [('kashiwa', '柏'), ('chiba', '千葉'), ('tokyo-station', '東京駅')],
}

# ============================================================
# エリア特性分類
# ============================================================

AREA_TYPE_MAP = {
    # 繁華街
    'akasaka': 'busy', 'akihabara': 'busy', 'aoyama-itchome': 'busy',
    'asakusa': 'busy', 'daikanyama': 'busy', 'ebisu': 'busy',
    'hakata': 'busy', 'harajuku': 'busy', 'iidabashi': 'busy',
    'kagurazaka': 'busy', 'kuramae': 'busy',
    'monzen-nakacho': 'busy', 'namba': 'busy', 'nihonbashi': 'busy',
    'nippori': 'busy', 'nishi-nippori': 'busy', 'omotesando': 'busy',
    'osaka': 'busy', 'otemachi': 'busy', 'otsuka': 'busy',
    'sakae': 'busy', 'shimbashi': 'busy',
    'shin-okubo': 'busy', 'shinsaibashi': 'busy', 'sugamo': 'busy',
    'suidobashi': 'busy', 'tenjin': 'busy', 'tokyo': 'busy',
    'tokyo-station': 'busy', 'takadanobaba': 'busy',
    'toranomon': 'busy', 'tsukiji': 'busy', 'yakuin': 'busy',
    'yotsuya': 'busy', 'yoyogi': 'busy', 'yoyogi-uehara': 'busy',
    'yurakucho': 'busy', 'sasazuka': 'busy',

    # オフィス街
    'gotanda': 'office', 'hamamatsucho': 'office', 'honmachi': 'office',
    'kitahama': 'office', 'korakuen': 'office', 'marunouchi': 'office',
    'meguro': 'office', 'mita': 'office',
    'nagatacho': 'office', 'nagoya-station': 'office',
    'oimachi': 'office', 'shinagawa': 'office',
    'shirokanedai': 'office', 'tamachi': 'office', 'tennoji': 'office',
    'toyosu': 'office', 'shin-osaka': 'office',

    # 高級住宅地
    'azabujuban': 'upscale', 'futakotamagawa': 'upscale',
    'hiroo': 'upscale', 'jiyugaoka': 'upscale', 'nakameguro': 'upscale',
    'seijo-gakuenmae': 'upscale', 'shirokanatakanawa': 'upscale',
    'toritsu-daigaku': 'upscale',

    # 下町
    'akabane': 'shitamachi', 'kamata': 'shitamachi', 'kameido': 'shitamachi',
    'kinshicho': 'shitamachi', 'kita-senju': 'shitamachi',
    'oji': 'shitamachi', 'oshiage': 'shitamachi', 'ueno': 'shitamachi',

    # 住宅地
    'asagaya': 'residential', 'gakugei-daigaku': 'residential',
    'kichijoji': 'residential', 'koenji': 'residential',
    'mitaka': 'residential', 'musashikosugi': 'residential',
    'musashikoyama': 'residential', 'nakano': 'residential',
    'nakano-sakaue': 'residential', 'nerima': 'residential',
    'nishi-ogikubo': 'residential', 'ogikubo': 'residential',
    'sangenjaya': 'residential', 'shimokitazawa': 'residential',
    'toritsudaigaku': 'residential', 'yoga-komazawa': 'residential',
    'yutenji': 'residential',

    # 郊外
    'abeno': 'suburban', 'chiba': 'suburban', 'chofu': 'suburban',
    'esaka': 'suburban', 'fuchu': 'suburban', 'funabashi': 'suburban',
    'hachioji': 'suburban', 'honatsugi': 'suburban', 'kannai': 'suburban',
    'kashiwa': 'suburban', 'kawagoe': 'suburban', 'kawasaki': 'suburban',
    'koshigaya': 'suburban', 'machida': 'suburban', 'omiya': 'suburban',
    'sagami-ono': 'suburban', 'tachikawa': 'suburban', 'tokorozawa': 'suburban',
    'tsukuba': 'suburban', 'urawa': 'suburban',

    # 海沿い・観光地
    'fujisawa': 'coastal', 'kamakura': 'coastal', 'naha': 'coastal',
    'okinawa': 'coastal', 'shonan': 'coastal',

    # 寒冷地
    'kanazawa': 'cold', 'niigata': 'cold', 'sendai': 'cold',

    # 京都
    'gion-shijo': 'kyoto', 'karasuma-oike': 'kyoto', 'kitaoji': 'kyoto',
    'kyoto': 'kyoto', 'kyoto-shiyakusho-mae': 'kyoto',
    'kyoto-station': 'kyoto', 'nishijin': 'kyoto',
    'shijo-kawaramachi': 'kyoto',

    # 地方都市
    'hamamatsu': 'regional', 'hiroshima': 'regional', 'kagoshima': 'regional',
    'kobe': 'regional', 'kokura': 'regional', 'kumamoto': 'regional',
    'nishinomiya': 'regional', 'okayama': 'regional', 'sannomiya': 'regional',
    'shizuoka': 'regional', 'takamatsu': 'regional',
}

def classify_area(slug, area_name, address, access_list):
    """エリアの特性を分類 - slugベースの明示的マッピングを使用"""
    if slug in AREA_TYPE_MAP:
        return AREA_TYPE_MAP[slug]
    return 'general'


def extract_area_info(slug):
    """page.tsxからエリア情報を抽出"""
    path = os.path.join(AREA_DIR, slug, 'page.tsx')
    if not os.path.exists(path):
        return None

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # タイトルからエリア名抽出
    # パターン1: ピラティス赤羽おすすめ → 赤羽
    # パターン2: 神戸のピラティススタジオおすすめ → 神戸
    m = re.search(r'ピラティス(.+?)おすすめ', content)
    area_name = m.group(1) if m else slug
    # "スタジオ" が含まれる場合はパターン2を試す
    if 'スタジオ' in area_name or area_name == slug:
        m2 = re.search(r'】(.+?)のピラティス', content)
        if m2:
            area_name = m2.group(1)
        else:
            # フォールバック: h2タグからエリア名を取得
            m3 = re.search(r'id="price-market".*?<h2[^>]*>\s*(.+?)のピラティス', content, re.DOTALL)
            if m3:
                area_name = m3.group(1).strip()

    # access フィールド
    accesses = re.findall(r"access:\s*['\"](.+?)['\"]\s*,", content)

    # address フィールド
    addresses = re.findall(r"address:\s*['\"](.+?)['\"]\s*,", content)

    # スタジオ数
    studio_count = len(re.findall(r"name:\s*'", content))

    # 最初のaccessから駅名・路線名を抽出
    station_name = ''
    line_name = ''
    if accesses:
        first_access = accesses[0]
        # 駅名: 「xxx駅」パターン
        st = re.search(r'「(.+?)駅」', first_access)
        if st:
            station_name = st.group(1) + '駅'
        else:
            st = re.search(r'(\S+駅)', first_access)
            if st:
                station_name = st.group(1)

        # 路線名: first accessの「」の前の部分をそのまま使う（最も正確）
        line_name = ''
        if first_access:
            # パターン: "JR京浜東北線・埼京線「赤羽駅」" → "JR京浜東北線・埼京線"
            lm = re.match(r'^(.+?)「', first_access)
            if lm:
                raw_line = lm.group(1).strip()
                # " / " で区切られている場合は最初のものだけ
                raw_line = raw_line.split(' / ')[0].strip()
                line_name = raw_line
            else:
                # 「」がない場合、"JR xxx線" 等を抽出
                lm2 = re.search(r'((?:JR|地下鉄|東急|京王|小田急|西武|東武|京急|京成|都営|阪急|阪神|近鉄|南海|Osaka Metro|西鉄).+?線)', first_access)
                if lm2:
                    line_name = lm2.group(1)

    # 地域（東京都○○区、大阪府○○市等）
    region = ''
    if addresses:
        for addr in addresses:
            rm = re.search(r'(東京都\S+区|東京都\S+市|神奈川県\S+市|埼玉県\S+市|千葉県\S+市|大阪[府市]\S*区?|京都[府市]\S*区?|兵庫県\S+市|愛知県\S+市|福岡[県市]\S*区?|宮城県\S+市|北海道\S+市|沖縄県\S+市|広島[県市]\S*区?|岡山[県市]\S*区?|石川県\S+市|新潟[県市]\S*区?|静岡[県市]\S*区?|熊本[県市]\S*区?|鹿児島[県市]\S*区?|香川県\S+市|長野[県市]\S*区?|茨城県\S+市)', addr)
            if rm:
                region = rm.group(1)
                break

    # 料金テーブルデータ抽出（テーブル下のコメント生成用）
    prices = re.findall(r'<td className="px-4 py-3">(.+?)</td>', content)

    first_address = addresses[0] if addresses else ''

    return {
        'slug': slug,
        'area_name': area_name,
        'station_name': station_name,
        'line_name': line_name,
        'accesses': accesses,
        'addresses': addresses,
        'first_address': first_address,
        'region': region,
        'studio_count': studio_count,
        'prices': prices,
        'content': content,
        'area_type': classify_area(slug, area_name, first_address, accesses),
    }


# ============================================================
# コンテンツ生成
# ============================================================

def gen_price_comment(info):
    """料金相場セクションのテーブル下コメントを生成"""
    area = info['area_name']
    area_type = info['area_type']
    neighbors = NEIGHBOR_MAP.get(info['slug'], [])
    neighbor_names = [n[1] for n in neighbors[:2]]

    if area_type == 'busy':
        reason = f'{area}は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。'
    elif area_type == 'office':
        reason = f'{area}はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。'
    elif area_type == 'upscale':
        reason = f'{area}は落ち着いた住環境が魅力のエリアで、プライベートレッスンやセミパーソナルなど少人数制を重視したスタジオが多い傾向です。1回あたりの単価はやや高めですが、その分インストラクターの質や設備にこだわったスタジオが揃っています。'
    elif area_type == 'suburban':
        reason = f'{area}エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランのコスパが特に良いエリアなので、週2回以上通える方は月額制プランが断然おすすめです。'
    elif area_type == 'shitamachi':
        reason = f'{area}は下町の雰囲気が残る親しみやすいエリアで、個人経営の丁寧な指導が受けられるスタジオと大手チェーンが共存しています。都心の繁華街と比べて料金は控えめな傾向があり、初めてピラティスを始める方にも入りやすい価格帯です。'
    elif area_type == 'residential':
        reason = f'{area}は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。'
    elif area_type == 'cold':
        reason = f'{area}エリアでは全国チェーンのスタジオに加え、地元密着型のスタジオも選べます。冬場は通いづらくなりがちなため、駅直結や駅近のスタジオを選ぶと継続率がアップします。月額制なら冬場の運動不足解消にも効果的です。'
    elif area_type == 'coastal':
        reason = f'{area}は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なので要チェックです。'
    elif area_type == 'kyoto':
        reason = f'{area}は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど{area}ならではの趣ある空間でピラティスを楽しめるのが魅力。料金は大阪と同程度か、やや抑えめの傾向です。'
    elif area_type == 'regional':
        reason = f'{area}エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。'
    else:
        reason = f'{area}エリアの料金は、グループレッスンとパーソナルレッスンで大きく異なります。グループは月額1万円前後から、パーソナルは1回1万円以上が目安です。まずは体験レッスンで実際のレッスン内容と料金のバランスを確認するのがおすすめです。'

    # 近隣比較
    if neighbor_names:
        compare = f'近隣の{neighbor_names[0]}エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。'
    else:
        compare = '複数スタジオの体験レッスンを受け比べて、料金と指導内容のバランスで判断するのがおすすめです。'

    return f'{reason}{compare}'


def gen_cautions(info):
    """注意点セクションの4項目を生成"""
    area = info['area_name']
    station = info['station_name']
    line = info['line_name']
    area_type = info['area_type']
    neighbors = NEIGHBOR_MAP.get(info['slug'], [])
    accesses = info['accesses']

    # --- 項目1: アクセスの注意 ---
    if station and line:
        c1_title = f'{line}「{station}」からのアクセスを事前確認'
        c1_body = f'{area}エリアのスタジオは{station}周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。{station}は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。'
    elif station:
        c1_title = f'{station}からのルートは事前に確認を'
        c1_body = f'{area}エリアのスタジオは{station}周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。'
    else:
        # accessから情報を組み立て
        if accesses:
            c1_title = f'{area}エリアのスタジオへのアクセスを事前確認'
            c1_body = f'{area}エリアのスタジオは{accesses[0]}が最寄りです。初めて通う際は地図アプリで経路と所要時間を確認し、レッスン開始10分前には到着できるよう計画しましょう。'
        else:
            c1_title = f'{area}エリアのスタジオまでの行き方を事前確認'
            c1_body = f'{area}のスタジオは最寄り駅から徒歩圏内に位置していることが多いですが、出口や方面によって所要時間が変わります。初回は余裕を持って到着できるよう、事前にルートを調べておきましょう。'

    # --- 項目2: エリア特性に合わせた予約の注意 ---
    if area_type == 'busy':
        c2_title = f'繁華街ならではの予約混雑に注意'
        c2_body = f'{area}は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。'
    elif area_type == 'office':
        c2_title = f'ビジネス街特有の予約傾向を把握'
        c2_body = f'{area}はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。'
    elif area_type == 'suburban':
        c2_title = f'スタジオ数が限られるため早めの予約を'
        c2_body = f'{area}エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無も確認しておきましょう。'
    elif area_type == 'upscale':
        c2_title = f'少人数制スタジオは早めの予約がカギ'
        c2_body = f'{area}は少人数制やプライベートレッスンを重視するスタジオが多く、1クラスの定員が少ないため予約が早く埋まりがちです。特にマシンピラティスは定員4〜8名のスタジオが主流なので、希望の時間帯があれば早めに予約を。キャンセル待ち制度のあるスタジオを選ぶと安心です。'
    elif area_type == 'shitamachi':
        c2_title = f'地元密着型スタジオの予約方法を確認'
        c2_body = f'{area}エリアには大手チェーンだけでなく、個人経営のアットホームなスタジオもあります。個人スタジオはWeb予約に対応していない場合もあるため、予約方法（電話・LINE・専用アプリ等）を入会前に確認しておきましょう。常連さんで枠が埋まりやすい人気スタジオもあるので早めの予約がおすすめです。'
    elif area_type == 'coastal':
        c2_title = f'観光シーズンの混雑に備えた予約を'
        c2_body = f'{area}は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。'
    elif area_type == 'cold':
        c2_title = f'冬場の通いやすさも考慮したスタジオ選びを'
        c2_body = f'{area}は冬の寒さが厳しいエリアのため、駅からの距離は特に重要なポイントです。駅直結や地下街直結のスタジオなら悪天候でも通いやすく、継続率がぐんと上がります。冬場は体が冷えているため、レッスン前のウォームアップを丁寧にしてくれるスタジオだと安心です。'
    elif area_type == 'kyoto':
        c2_title = f'観光客と地元利用者で混雑時間が異なる'
        c2_body = f'{area}は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通いましょう。地元在住なら平日昼間が穴場です。'
    elif area_type == 'residential':
        c2_title = f'住宅地ならではの予約の特徴を把握'
        c2_body = f'{area}は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。'
    else:
        c2_title = f'{area}エリアの人気時間帯を把握して予約を'
        c2_body = f'{area}エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。'

    # --- 項目3: 料金・契約の注意 ---
    if area_type in ('busy', 'office', 'upscale'):
        c3_title = f'入会キャンペーンの条件と最低契約期間を確認'
        c3_body = f'{area}エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。'
    elif area_type == 'suburban':
        c3_title = f'通い放題プランと回数制プランを比較検討'
        c3_body = f'{area}エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通えるなら通い放題が断然お得ですが、月1〜2回のペースなら回数券やドロップインの方がコスパが良い場合も。自分の通う頻度を想定してプランを選びましょう。初月は回数制で様子を見るのも賢い方法です。'
    elif area_type == 'coastal':
        c3_title = f'季節による料金プランの違いに注意'
        c3_body = f'{area}エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券を検討しましょう。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。'
    else:
        c3_title = f'料金プランの種類と契約条件をしっかり比較'
        c3_body = f'{area}エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。'

    # --- 項目4: 近隣エリア提案 ---
    if neighbors:
        neighbor_links = []
        for n_slug, n_name in neighbors[:3]:
            if n_slug not in SKIP_AREAS:
                neighbor_links.append(f'<Link href="/area/{n_slug}" className="text-warm-700 underline hover:text-warm-900">{n_name}</Link>')
            else:
                neighbor_links.append(f'<Link href="/area/{n_slug}" className="text-warm-700 underline hover:text-warm-900">{n_name}</Link>')

        links_text = '、'.join(neighbor_links)
        c4_title = f'近隣エリアも比較して選択肢を広げよう'
        c4_body_raw = f'{area}エリアだけでなく、近隣の{links_text}エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。'
        c4_has_links = True
    else:
        c4_title = f'周辺エリアのスタジオも視野に入れよう'
        c4_body_raw = f'{area}エリアのスタジオだけでなく、通勤・通学の途中にあるスタジオや、自宅から通いやすい別エリアのスタジオも合わせて検討してみましょう。全国展開チェーンなら複数店舗を相互利用できるプランもあり、ライフスタイルに合わせた柔軟な通い方が可能です。'
        c4_has_links = False

    return {
        'items': [
            (c1_title, c1_body),
            (c2_title, c2_body),
            (c3_title, c3_body),
            (c4_title, c4_body_raw),
        ],
        'c4_has_links': c4_has_links,
    }


def gen_trial_tip(info):
    """持ち物ガイドのエリア固有豆知識を生成"""
    area = info['area_name']
    area_type = info['area_type']

    if area_type == 'cold':
        return f'{area}は冬場の気温が低いため、スタジオまでの移動中に体が冷えないよう防寒着を用意しましょう。レッスン後は汗をかいた状態で外に出ると体が冷えやすいので、着替え用のインナーを1枚多めに持参するのがおすすめです。'
    elif area_type == 'busy':
        return f'{area}は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。'
    elif area_type == 'office':
        return f'{area}はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。'
    elif area_type == 'suburban':
        return f'{area}エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前に確認しておきましょう。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。'
    elif area_type == 'coastal':
        return f'{area}は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずに。'
    elif area_type == 'upscale':
        return f'{area}は美意識の高い方が多いエリアで、レッスン後にそのままカフェやショッピングに行く方もいます。着替えやメイク直しのセットを持参しておくと、レッスン後の時間も有効活用できます。おしゃれなウェアで通う方も多いのが{area}の特徴です。'
    elif area_type == 'shitamachi':
        return f'{area}はアットホームな雰囲気のスタジオが多く、気負わずに通えるのが魅力です。初回はシンプルなTシャツとレギンスで十分。常連さんとも自然に仲良くなれる距離感が{area}ならではです。'
    elif area_type == 'residential':
        return f'{area}は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが{area}の良さです。'
    elif area_type == 'kyoto':
        return f'{area}は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発しましょう。町家スタジオなど{area}ならではの空間でピラティスを楽しめるのも魅力のひとつです。'
    elif area_type == 'regional':
        return f'{area}は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。'
    else:
        return f'{area}エリアのスタジオにはウェアやタオルのレンタルサービスを提供しているところもあります。手ぶらで通いたい方は、体験予約時にレンタルの有無と料金を確認しておくと安心です。'


# ============================================================
# セクションの置換
# ============================================================

def build_price_section(info):
    """料金相場セクション全体を再構築（テーブルは既存を維持、コメントのみ変更）"""
    content = info['content']

    # price-market セクションの<p>タグを置換
    # 既存パターン: <p className="text-warm-600 mt-4 text-sm leading-relaxed">...</p>
    pattern = r'(id="price-market".*?</table>\s*</div>\s*)<p className="text-warm-600 mt-4 text-sm leading-relaxed">\s*.*?\s*</p>'
    new_comment = gen_price_comment(info)
    replacement = r'\1<p className="text-warm-600 mt-4 text-sm leading-relaxed">\n              ' + new_comment + '\n            </p>'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    return new_content


def build_cautions_section(info, content):
    """注意点セクション全体を再構築"""
    area = info['area_name']
    cautions = gen_cautions(info)
    items = cautions['items']

    # Build the 4 caution items
    caution_blocks = []
    for i, (title, body) in enumerate(items):
        if i == 3 and cautions['c4_has_links']:
            # Item 4 with Link components - body contains JSX
            block = f'''              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">{title}</h3>
                <p className="text-warm-600 leading-relaxed">
                  {body}
                </p>
              </div>'''
        else:
            block = f'''              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">{title}</h3>
                <p className="text-warm-600 leading-relaxed">
                  {body}
                </p>
              </div>'''
        caution_blocks.append(block)

    cautions_html = '\n'.join(caution_blocks)

    new_section = f'''        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area}でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
{cautions_html}
            </div>
          </div>
        </section>'''

    # Replace existing cautions section (preserve leading whitespace)
    pattern = r'(\s*)<section className="py-16 bg-warm-50" id="cautions">.*?</section>'
    # Use a function to handle the replacement properly
    def replace_cautions(m):
        return '\n' + new_section
    new_content = re.sub(pattern, replace_cautions, content, flags=re.DOTALL)
    return new_content


def build_trial_section(info, content):
    """持ち物ガイドセクションの豆知識部分を置換"""
    area = info['area_name']
    tip = gen_trial_tip(info)

    # Replace the tip paragraph
    pattern = r'(<strong>)' + re.escape(area) + r'エリアの豆知識：</strong>.*?(?=\s*</p>)'
    replacement = f'\\1{area}エリアの豆知識：</strong>{tip}'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    # If the pattern didn't match (different format), try a more general approach
    if new_content == content:
        # Try matching any tip text
        pattern2 = r'(<strong>[^<]*エリアの豆知識：</strong>).*?(?=\s*</p>)'
        replacement2 = f'<strong>{area}エリアの豆知識：</strong>{tip}'
        new_content = re.sub(pattern2, replacement2, content, flags=re.DOTALL)

    return new_content


def process_area(slug):
    """1つのエリアを処理"""
    info = extract_area_info(slug)
    if not info:
        return False, f'{slug}: page.tsx not found'

    content = info['content']

    # 1. 料金相場コメント置換
    new_content = build_price_section(info)

    # Check if price section was modified
    price_changed = new_content != content

    # 2. 注意点セクション置換
    info_with_new = dict(info)
    new_content = build_cautions_section(info, new_content)

    # 3. 持ち物豆知識置換
    info_with_new['content'] = new_content
    new_content = build_trial_section(info, new_content)

    if new_content == content:
        return False, f'{slug}: no changes made'

    # Write back
    path = os.path.join(AREA_DIR, slug, 'page.tsx')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, f'{slug}: updated ({info["area_name"]}, type={info["area_type"]})'


def main():
    areas = sorted([
        d for d in os.listdir(AREA_DIR)
        if os.path.isdir(os.path.join(AREA_DIR, d)) and d not in SKIP_AREAS
    ])

    print(f'Processing {len(areas)} areas...\n')

    success_count = 0
    fail_count = 0
    results = []

    for slug in areas:
        ok, msg = process_area(slug)
        if ok:
            success_count += 1
        else:
            fail_count += 1
        results.append(msg)
        print(msg)

    print(f'\n=== Summary ===')
    print(f'Success: {success_count}')
    print(f'Failed/Skipped: {fail_count}')
    print(f'Total: {len(areas)}')


if __name__ == '__main__':
    main()
