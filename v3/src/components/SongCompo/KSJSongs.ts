const songs = [
    {
        "title": "ビビデバ",
        "title_kana": "ﾋﾞﾋﾞﾃﾞﾊﾞ",
        "artist": "星街すいせい",
        "artist_kana": "ﾎｼﾏﾁｽｲｾｲ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "レディメイド",
        "title_kana": "ﾚﾃﾞｨﾒｲﾄﾞ",
        "artist": "Ado",
        "artist_kana": "ｱﾄﾞ",
        "tags": []
    },
    {
        "title": "からくりピエロ",
        "title_kana": "ｶﾗｸﾘﾋﾟｴﾛ",
        "artist": "40mP",
        "artist_kana": "ﾖﾝｼﾞｭｳﾒｰﾄﾙﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "レクイエム",
        "title_kana": "ﾚｸｲｴﾑ",
        "artist": "Kanaria",
        "artist_kana": "ｶﾅﾘｱ",
        "tags": ["VTuber"]
    },
    {
        "title": "No, Thank you!",
        "title_kana": "ﾉｰｻﾝｷｭｰ",
        "artist": "放課後ティータイム",
        "artist_kana": "ﾎｳｶｺﾞﾃｨｰﾀｲﾑ",
        "tags": []
    },
    {
        "title": "EAT ME",
        "title_kana": "ｲｰﾄﾐｰ",
        "artist": "OSTER project",
        "artist_kana": "ｵｽﾀｰﾌﾟﾛｼﾞｪｸﾄ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "紅一葉",
        "title_kana": "ｱｶﾋﾄﾊ",
        "artist": "黒うさP",
        "artist_kana": "ｸﾛｳｻﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "magnet",
        "title_kana": "ﾏｸﾞﾈｯﾄ",
        "artist": "流星P",
        "artist_kana": "ﾘｭｳｾｲﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "だいしきゅーだいしゅき",
        "title_kana": "ﾀﾞｲｼｷｭｰﾀﾞｲｽｷ",
        "artist": "femme fatale",
        "artist_kana": "ﾌｧﾑﾌｧﾀｰﾙ",
        "tags": []
    },
    {
        "title": "ミラクルペイント",
        "title_kana": "ﾐﾗｸﾙﾍﾟｲﾝﾄ",
        "artist": "OSTER project",
        "artist_kana": "ｵｽﾀｰﾌﾟﾛｼﾞｪｸﾄ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "ワールドイズマイン",
        "title_kana": "ﾜｰﾙﾄﾞｲｽﾞﾏｲﾝ",
        "artist": "Ryo",
        "artist_kana": "ﾘｮｳ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "最後の女王",
        "title_kana": "ｻｲｺﾞﾉｼﾞｮｳｵｳ",
        "artist": "黒うさP",
        "artist_kana": "ｸﾛｳｻﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "ルカルカ★ナイトフィーバー",
        "title_kana": "ﾙｶﾙｶﾅｲﾄﾌｨｰﾊﾞｰ",
        "artist": "samfree",
        "artist_kana": "ｻﾑﾌﾘｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "太陽と月のロンド",
        "title_kana": "ﾀｲﾖｳﾄﾂｷﾉﾛﾝﾄﾞ",
        "artist": "PolyphonicBranch",
        "artist_kana": "ﾎﾟﾘﾌｫﾆｯｸﾌﾞﾗﾝﾁ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "パラジクロロベンゼン",
        "title_kana": "ﾊﾟﾗｼﾞｸﾛﾛﾍﾞﾝｾﾞﾝ",
        "artist": "オワタP",
        "artist_kana": "ｵﾜﾀﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "少女レイ",
        "title_kana": "ｼｮｳｼﾞｮﾚｲ",
        "artist": "みきとP",
        "artist_kana": "ﾐｷﾄﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "アイデンティティ",
        "title_kana": "ｱｲﾃﾞﾝﾃｨﾃｨ",
        "artist": "Kanaria",
        "artist_kana": "ｶﾅﾘｱ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "お勉強しといてよ",
        "title_kana": "ｵﾍﾞﾝｷｮｳｼﾄｲﾃﾖ",
        "artist": "ずっと真夜中でいいのに。",
        "artist_kana": "ｽﾞｯﾄﾏﾖﾅｶﾃﾞｲｲﾉﾆ",
        "tags": []
    },
    {
        "title": "夜に駆ける",
        "title_kana": "ﾖﾙﾆｶｹﾙ",
        "artist": "YOASOBI",
        "artist_kana": "YOASOBI",
        "tags": []
    },
    {
        "title": "怪物",
        "title_kana": "ｶｲﾌﾞﾂ",
        "artist": "YOASOBI",
        "artist_kana": "ﾖｱｿﾋﾞ",
        "tags": []
    },
    {
        "title": "恋愛サーキュレーション",
        "title_kana": "ﾚﾝｱｲｻｰｷｭﾚｰｼｮﾝ",
        "artist": "花澤香菜",
        "artist_kana": "ﾊﾅｻﾞﾜｶﾅ",
        "tags": []
    },
    {
        "title": "オトナブルー",
        "title_kana": "ｵﾄﾅﾌﾞﾙｰ",
        "artist": "新しい学校のリーダーズ",
        "artist_kana": "ｱﾀﾗｼｲｶﾞｯｺｳﾉﾘｰﾀﾞｰｽﾞ",
        "tags": []
    },
    {
        "title": "ロミオとシンデレラ",
        "title_kana": "ﾛﾐｵﾄｼﾝﾃﾞﾚﾗ",
        "artist": "doriko",
        "artist_kana": "ﾄﾞﾘｺ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "ソワレ",
        "title_kana": "ｿﾜﾚ",
        "artist": "星街すいせい",
        "artist_kana": "ﾎｼﾏﾁｽｲｾｲ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "初めての恋が終わる時",
        "title_kana": "ﾊｼﾞﾒﾃﾉｺｲｶﾞｵﾜﾙﾄｷ",
        "artist": "Ryo",
        "artist_kana": "ﾘｮｳ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "悲愴感",
        "title_kana": "ﾋｿｳｶﾝ",
        "artist": "悲愴感",
        "artist_kana": "ﾋｿｳｶﾝ",
        "tags": []
    },
    {
        "title": "ロメオ",
        "title_kana": "ﾛﾒｵ",
        "artist": "LIP×LIP",
        "artist_kana": "ﾘｯﾌﾟﾘｯﾌﾟ",
        "tags": []
    },
    {
        "title": "アイドル",
        "title_kana": "ｱｲﾄﾞﾙ",
        "artist": "YOASOBI",
        "artist_kana": "ﾖｱｿﾋﾞ",
        "tags": []
    },
    {
        "title": "美少女無罪♡パイレーツ",
        "title_kana": "ﾋﾞｼｮｳｼﾞｮﾑｻﾞｲﾊﾟｲﾚｰﾂ",
        "artist": "宝鐘マリン",
        "artist_kana": "ﾎｳｼｮｳﾏﾘﾝ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "I’m Your Treasure Box ＊あなたは マリンせんちょうを たからばこからみつけた。",
        "title_kana": "ｱｲﾑﾕｱｰﾄﾚｼﾞｬｰﾎﾞｯｸｽｱﾅﾀﾊﾏﾘﾝｾﾝﾁｮｳｦﾀｶﾗﾊﾞｺｶﾗﾐﾂｹﾀ",
        "artist": "宝鐘マリン",
        "artist_kana": "ﾎｳｼｮｳﾏﾘﾝ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "粛聖!! ロリ神レクイエム☆",
        "title_kana": "ｼｭｸｾｲﾛﾘｶﾐﾚｸｲｴﾑ",
        "artist": "しぐれうい",
        "artist_kana": "ｼｸﾞﾚｳｲ",
        "tags": ["VTuber"]
    },
    {
        "title": "フォニイ ",
        "title_kana": "ﾌｫﾆｨ",
        "artist": "ツキミ",
        "artist_kana": "ﾂｷﾐ",
        "tags": []
    },
    {
        "title": "ETERNAL BLAZE",
        "title_kana": "ｴﾀｰﾅﾙﾌﾞﾚｲｽﾞ",
        "artist": "水樹奈々",
        "artist_kana": "ﾐｽﾞｷﾅﾅ",
        "tags": []
    },
    {
        "title": "コネクト",
        "title_kana": "ｺﾈｸﾄ",
        "artist": "ClariS",
        "artist_kana": "ｸﾗﾘｽ",
        "tags": []
    },
    {
        "title": "星間飛行",
        "title_kana": "ｾｲｶﾝﾋｺｳ",
        "artist": "中島愛",
        "artist_kana": "ﾅｶｼﾞﾏﾒｸﾞﾐ",
        "tags": []
    },
    {
        "title": "ぼなぺてぃーと♡S",
        "title_kana": "ﾎﾞﾅﾍﾟﾃｨｰﾄｴｽ",
        "artist": "ブレンド・A",
        "artist_kana": "ﾌﾞﾚﾝﾄﾞｴｰ",
        "tags": []
    },
    {
        "title": "きゅうくらりん",
        "title_kana": "ｷｭｳｸﾗﾘﾝ",
        "artist": "いよわ",
        "artist_kana": "ｲﾖﾜ",
        "tags": []
    },
    {
        "title": "ひとりぼっちじゃない",
        "title_kana": "ﾋﾄﾘﾎﾞｯﾁｼﾞｬﾅｲ",
        "artist": "coba 宮沢和史",
        "artist_kana": "ｺﾊﾞ ﾐﾔｻﾞﾜｶｽﾞﾌﾐ",
        "tags": ["ポケモン"]
    },
    {
        "title": "転生林檎",
        "title_kana": "ﾃﾝｾｲﾘﾝｺﾞ",
        "artist": "ピノキオピー",
        "artist_kana": "ﾋﾟﾉｷｵﾋﾟｰ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "鳥の詩",
        "title_kana": "ﾄﾘﾉｳﾀ",
        "artist": "Lia",
        "artist_kana": "ﾘｱ",
        "tags": []
    }
]

export{
    songs
}