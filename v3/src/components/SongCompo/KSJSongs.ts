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
        "artist_kana": "ﾖｱｿﾋﾞ",
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
    },
    {
        "title": "Real Force",
        "title_kana": "ﾘｱﾙﾌｫｰｽ",
        "artist": "ELISA",
        "artist_kana": "ｴﾘｻ",
        "tags": []
    },
    {
        "title": "いのちの名前",
        "title_kana": "ｲﾉﾁﾉﾅﾏｴ",
        "artist": "木村弓",
        "artist_kana": "ｷﾑﾗﾕﾐ",
        "tags": ["ジブリ"]
    },
    {
        "title": "LEVEL5-judgelight-",
        "title_kana": "ﾚﾍﾞﾙﾌｧｲﾌﾞｼﾞｬｯｼﾞﾒﾝﾄ",
        "artist": "fripSide",
        "artist_kana": "ﾌﾘｯﾌﾟｻｲﾄﾞ",
        "tags": []
    },
    {
        "title": "惑星ループ",
        "title_kana": "ﾜｸｾｲﾙｰﾌﾟ",
        "artist": "ナユタン星人",
        "artist_kana": "ﾅﾕﾀﾝｾｲｼﾞﾝ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "シル・ヴ・プレジデント",
        "title_kana": "ｼﾙｳﾞﾌﾟﾚｼﾞﾃﾞﾝﾄ",
        "artist": "P丸様。",
        "artist_kana": "ﾋﾟｰﾏﾙｻﾏ",
        "tags": ["VTuber"]
    },
    {
        "title": "踊",
        "title_kana": "ｵﾄﾞ",
        "artist": "Ado",
        "artist_kana": "ｱﾄﾞ",
        "tags": []
    },
    {
        "title": "魂のルフラン",
        "title_kana": "ﾀﾏｼｲﾉﾙﾌﾗﾝ",
        "artist": "高橋洋子",
        "artist_kana": "ﾀｶﾊｼﾖｳｺ",
        "tags": []
    },
    {
        "title": "ラビットホール",
        "title_kana": "ﾗﾋﾞｯﾄﾎｰﾙ",
        "artist": "DECO*27",
        "artist_kana": "ﾃﾞｺﾆｰﾅ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "群青",
        "title_kana": "ｸﾞﾝｼﾞｮｳ",
        "artist": "YOASOBI",
        "artist_kana": "ﾖｱｿﾋﾞ",
        "tags": []
    },
    {
        "title": "ダダダダ天使",
        "title_kana": "ﾀﾞﾀﾞﾀﾞﾀﾞﾃﾝｼ",
        "artist": "ナナヲアカリ",
        "artist_kana": "ﾅﾅｦｱｶﾘ",
        "tags": []
    },
    {
        "title": "青春コンプレックス",
        "title_kana": "ｾｲｼｭﾝｺﾝﾌﾟﾚｯｸｽ",
        "artist": "結束バンド",
        "artist_kana": "ｹｯｿｸﾊﾞﾝﾄﾞ",
        "tags": []
    },
    {
        "title": "知っている手紙",
        "title_kana": "ｼｯﾃｲﾙﾃｶﾞﾐ",
        "artist": "ROF-MAO",
        "artist_kana": "ﾛﾌﾏｵ",
        "tags": ["にじさんじ", "VTuber"]
    },
    {
        "title": "YATTA!",
        "title_kana": "ﾔｯﾀ",
        "artist": "はっぱ隊",
        "artist_kana": "ﾊｯﾊﾟﾀｲ",
        "tags": []
    },
    {
        "title": "勇者",
        "title_kana": "ﾕｳｼｬ",
        "artist": "YOASOBI",
        "artist_kana": "ﾖｱｿﾋﾞ",
        "tags": []
    },
    {
        "title": "風になる",
        "title_kana": "ｶｾﾞﾆﾅﾙ",
        "artist": "つじあやの",
        "artist_kana": "ﾂｼﾞｱﾔﾉ",
        "tags": ["ジブリ"]
    },
    {
        "title": "可愛くてごめん",
        "title_kana": "ｶﾜｲｸﾃｺﾞﾒﾝ",
        "artist": "HoneyWorks",
        "artist_kana": "ﾊﾆｰﾜｰｸｽ",
        "tags": []
    },
    {
        "title": "獣ゆく細道",
        "title_kana": "ｹﾓﾉﾕｸﾎｿﾐﾁ",
        "artist": "椎名林檎 宮本浩次",
        "artist_kana": "ｼｲﾅﾘﾝｺﾞ ﾐﾔﾓﾄﾋﾛｼﾞ",
        "tags": []
    },
    {
        "title": "Burning Hearts ～炎のANGEL～",
        "title_kana": "ﾊﾞｰﾆﾝｸﾞﾊｰﾂ ﾎﾉｵﾉｴﾝｼﾞｪﾙ",
        "artist": "光吉猛修",
        "artist_kana": "ﾐﾂﾖｼﾀｹﾉﾌﾞ",
        "tags": []
    },
    {
        "title": "光の果て",
        "title_kana": "ﾋｶﾘﾉﾊﾃ",
        "artist": "クーナ",
        "artist_kana": "ｸｰﾅ",
        "tags": ["PSO2"]
    },
    {
        "title": "コールボーイ",
        "title_kana": "ｺｰﾙﾎﾞｰｲ",
        "artist": "syudou",
        "artist_kana": "ｼｭﾄﾞｳ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "いかないで",
        "title_kana": "ｲｶﾅｲﾃﾞ",
        "artist": "想太",
        "artist_kana": "ｿｳﾀ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "KissHug",
        "title_kana": "ｷｽﾊｸﾞ",
        "artist": "aiko",
        "artist_kana": "ｱｲｺ",
        "tags": []
    },
    {
        "title": "milk",
        "title_kana": "ﾐﾙｸ",
        "artist": "aiko",
        "artist_kana": "ｱｲｺ",
        "tags": []
    },
    {
        "title": "花火",
        "title_kana": "ﾊﾅﾋﾞ",
        "artist": "aiko",
        "artist_kana": "ｱｲｺ",
        "tags": []
    },
    {
        "title": "カブトムシ",
        "title_kana": "ｶﾌﾞﾄﾑｼ",
        "artist": "aiko",
        "artist_kana": "ｱｲｺ",
        "tags": []
    },
    {
        "title": "デスぺレート",
        "title_kana": "ﾃﾞｽﾍﾟﾚｰﾄ",
        "artist": "TeddyLoid&Giga",
        "artist_kana": "ﾃﾃﾞｨﾛｲﾄﾞ ｷﾞｶﾞ",
        "tags": []
    },
    {
        "title": "パボ",
        "title_kana": "ﾊﾟﾎﾞ",
        "artist": "猫又おかゆ",
        "artist_kana": "ﾈｺﾏﾀｵｶﾕ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "NEXT COLOR PLANET",
        "title_kana": "ﾈｸｽﾄｶﾗｰﾌﾟﾗﾈｯﾄ",
        "artist": "星街すいせい",
        "artist_kana": "ﾎｼﾏﾁｽｲｾｲ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "毒杯スワロウ",
        "title_kana": "ﾄﾞｸﾊｲｽﾜﾛｳ",
        "artist": "猫又おかゆ",
        "artist_kana": "ﾈｺﾏﾀｵｶﾕ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "チルノのパーフェクトさんすう教室",
        "title_kana": "ﾁﾙﾉﾉﾊﾟｰﾌｪｸﾄｻﾝｽｳｷｮｳｼﾂ",
        "artist": "IOSYS",
        "artist_kana": "ｲｵｼｽ",
        "tags": ["東方"]
    },
    {
        "title": "Dial Connected",
        "title_kana": "ﾀﾞｲｱﾙｺﾈｸﾃｨｯﾄﾞ",
        "artist": "SOUND HOLIC",
        "artist_kana": "ｻｳﾝﾄﾞﾎﾘｯｸ",
        "tags": ["東方"]
    },
    {
        "title": "Bad Apple!!",
        "title_kana": "ﾊﾞｯﾄﾞｱｯﾌﾟﾙ",
        "artist": "Alstroemeria Records",
        "artist_kana": "ｱﾙｽﾄﾛﾒﾘｱﾚｺｰｽﾞ",
        "tags": ["東方"]
    },
    {
        "title": "吉原ラメント",
        "title_kana": "ﾖｼﾜﾗﾗﾒﾝﾄ",
        "artist": "亜沙",
        "artist_kana": "ｱｻ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "マーシャルマキシマイザー",
        "title_kana": "ﾏｰｼｬﾙﾏｷｼﾏｲｻﾞｰ",
        "artist": "柊マグネタイト",
        "artist_kana": "ﾋｲﾗｷﾞﾏｸﾞﾈﾀｲﾄ",
        "tags": []
    },
    {
        "title": "ヒバリ",
        "title_kana": "ﾋﾊﾞﾘ",
        "artist": "HIMEHINA",
        "artist_kana": "ﾋﾒﾋﾅ",
        "tags": ["VTuber"]
    },
    {
        "title": "別世界",
        "title_kana": "ﾍﾞｯｾｶｲ",
        "artist": "天音かなた",
        "artist_kana": "ｱﾏﾈｶﾅﾀ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "君の最推しにしてよ！",
        "title_kana": "ｷﾐﾉｻｲｵｼﾆｼﾃﾖ",
        "artist": "湊あくあ",
        "artist_kana": "ﾐﾅﾄｱｸｱ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "あいわな",
        "title_kana": "ｱｲﾜﾅ",
        "artist": "湊あくあ",
        "artist_kana": "ﾐﾅﾄｱｸｱ",
        "tags": ["ホロライブ", "VTuber"]
    },
    {
        "title": "アイディスマイル",
        "title_kana": "ｱｲﾃﾞｨｽﾏｲﾙ",
        "artist": "とあ",
        "artist_kana": "ﾄｱ",
        "tags": ["VOCALOID"]
    },
    {
        "title": "Virtual to LIVE",
        "title_kana": "ﾊﾞｰﾁｬﾙﾄｩﾗｲﾌﾞ",
        "artist": "にじさんじ",
        "artist_kana": "ﾆｼﾞｻﾝｼﾞ",
        "tags": ["にじさんじ", "VTuber"]
    },
    {
        "title": "タケシのパラダイス",
        "title_kana": "ﾀｹｼﾉﾊﾟﾗﾀﾞｲｽ",
        "artist": "	タケシ(上田祐司)",
        "artist_kana": "ﾀｹｼ ｳｴﾀﾞﾕｳｼﾞ",
        "tags": ["ポケモン"]
    },
    {
        "title": "ニャースのうた",
        "title_kana": "ﾆｬｰｽﾉｳﾀ",
        "artist": "	ニャース(犬山イヌコ)",
        "artist_kana": "ﾆｬｰｽ ｲﾇﾔﾏｲﾇｺ",
        "tags": ["ポケモン"]
    },
]

export{
    songs
}