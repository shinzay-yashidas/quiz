/**
 * 保健・体育 クイズアプリ データ・ロジック (T1-T7 構成版)
 */

const curriculumData = {
    "health": {
        "T1": {
            title: "T1: 現代の健康課題と生活習慣",
            icon: "🧬",
            questions: [
                { question: "日本の平均寿命が世界最高水準になった要因として、最も適切なのは？", options: ["衛生環境の改善", "医療体制の充実", "栄養状態の向上", "生活水準の向上", "これらすべての要因"], answer: 4, explanation: "乳児死亡率の低下、公衆衛生の向上、医療技術の進歩などが総合的に寄与しています。" },
                { question: "健康寿命とはどのような期間のこと？", options: ["寝たきりで過ごす期間", "日常生活を制限なく自立して送れる期間", "定年退職してから死ぬまでの期間", "病院に通い始めてからの期間", "毎日運動を続けている期間"], answer: 1, explanation: "健康上の問題で日常生活が制限されることなく、自立して生活できる期間を指します。" },
                { question: "感染症の予防において、手を洗ったり換気をしたりすることは何対策？", options: ["感染源対策", "感染経路対策", "感受性宿主対策", "経済対策", "精神対策"], answer: 1, explanation: "病原体が体に入ってくる「経路」を遮断する対策です。" },
                { question: "生活習慣病を予防するための「3要素」に含まれないものはどれ？", options: ["適切な食事", "適度な運動", "十分な休養・睡眠", "毎日の貯金", "節酒・禁煙"], answer: 3, explanation: "食事、運動、休養のバランスが健康づくりの基本です。" },
                { question: "喫煙が体に与える影響のうち、血管を収縮させ心臓に負担をかける物質は？", options: ["タール", "一酸化炭素", "ニコチン", "ビタミン", "カルシウム"], answer: 2, explanation: "ニコチンは強い依存性を持ち、血管を収縮させる作用があります。" },
                { question: "薬物乱用が「一度だけでもダメ」と言われる最大の理由は？", options: ["お金がかかるから", "法律で決まっているから", "強い依存性があり、脳や体を破壊するから", "親に叱られるから", "友達が減るから"], answer: 2, explanation: "依存性により自分の意志でやめられなくなり、心身に深刻なダメージを与えます。" },
                { question: "心の不調を感じた時の「コーピング」とはどのようなこと？", options: ["無理をして我慢すること", "他人の真似をすること", "自分なりのストレス対処法を実行すること", "コピー機を直すこと", "一切の連絡を絶つこと"], answer: 2, explanation: "ストレスの原因に対処したり、気分をリラックスさせたりする具体的な行動を指します。" },
                { question: "WHO（世界保健機関）による健康の定義に含まれる側面はどれ？", options: ["身体的・精神的・社会的", "身体的・個人的・経済的", "学力的・体力目的・社会的", "遺伝的・環境的・精神的", "政治的・宗教的・肉体的"], answer: 0, explanation: "身体、精神、社会の3つの側面ですべてが満たされた状態を健康としています。" },
                { question: "うつ病の特徴的なサインとして適切なのはどれ？", options: ["常にハイテンションである", "2週間以上、強い気分の落ち込みや意欲の低下が続く", "計算が急に得意になる", "お腹が空きすぎる", "足の回転が速くなる"], answer: 1, explanation: "日常生活に支障が出るほどの沈んだ気分が続く場合は、専門家への相談が奨励されます。" },
                { question: "メタボリックシンドロームの判定で重視されるものはどれ？", options: ["視力", "握力", "内臓脂肪の蓄積（腹囲）", "髪の毛の太さ", "歯の数"], answer: 2, explanation: "内臓脂肪型肥満がベースとなり、高血圧や高血糖などが重なる状態を指します。" },
                { question: "がんの早期発見のために最も有効なことはどれ？", options: ["毎日サプリメントを飲む", "定期的ながん検診を受診する", "鏡で自分を毎日見る", "インターネットで病気を調べる", "病院を何度も変える"], answer: 1, explanation: "自覚症状がない段階で検診を受けることで、完治の可能性が高まります。" },
                { question: "薬剤耐性菌が現れる主な原因は何？", options: ["運動のしすぎ", "抗生物質の不適切な使用や飲み残し", "野菜不足", "睡眠の取りすぎ", "お風呂に入らないこと"], answer: 1, explanation: "抗菌薬を使いすぎたり、途中でやめたりすることで菌が耐性を持ってしまいます。" },
                { question: "心身相関の例として適切なものはどれ？", options: ["喉が渇いて水を飲む", "緊張して手が震えたりお腹が痛くなったりする", "指を切って血が出る", "眠くなってあびが出る", "暗いところで本を読んで目が悪くなる"], answer: 1, explanation: "心の状態（緊張）が体の状態（震えや痛み）に影響を与える現象です。" },
                { question: "リラクゼーション法としての腹式呼吸の効果は？", options: ["筋肉をムキムキにする", "副交感神経を優位にし、心身をリラックスさせる", "肺を大きくする", "声を大きくする", "体温を急激に上げる"], answer: 1, explanation: "深い呼吸は自律神経を整え、心を落ち着かせる効果があります。" },
                { question: "セルフエスティーム（自己肯定感）を高めるために大切なことは？", options: ["他人を批判する", "自分の良いところも悪いところも認める", "完璧主義を貫く", "他人の顔色を常に伺う", "高価なものを買う"], answer: 1, explanation: "ありのままの自分を大切にすることが心の健康の基盤となります。" },
                { question: "感染症の「3大対策」とは、感染源対策、感染経路対策とあと一つは？", options: ["国家対策", "感受性宿主対策", "経済対策", "気候対策", "IT対策"], answer: 1, explanation: "病原体（源）、運び役（経路）、受け手（宿主）の3つへのアプローチが必要です。" },
                { question: "性感染症の予防に最も有効なのはどれ？", options: ["石鹸で洗う", "コンドームの適切な使用", "ビタミンCの摂取", "日光浴", "激しい運動"], answer: 1, explanation: "粘膜の直接接触を防ぐことが最も確実な予防法の一つです。" },
                { question: "アルコールが脳に与える影響は何？", options: ["覚醒作用", "麻痺作用（抑制作用）", "視力向上", "筋肉増強", "計算速度アップ"], answer: 1, explanation: "アルコールは脳の機能を抑制し、判断力や運動能力を低下させます。" },
                { question: "生活習慣病を英語で何と言う？", options: ["Sports disease", "Lifestyle-related disease", "Genetic disease", "Old age disease", "Infection"], answer: 1, explanation: "日々の生活習慣（食事・運動・喫煙等）が発症に関わる疾患の総称です。" },
                { question: "ヘルスプロモーションの考え方として適切なのは？", options: ["医師が命令すること", "人々が自ら健康をコントロールし改善できるようにするプロセス", "サプリメントを配ること", "病人を隔離すること", "病院を豪華にすること"], answer: 1, explanation: "個人と社会の両面から健康を向上させる環境づくりを目指す考え方です。" }
            ]
        },
        "T2": {
            title: "T2: 安全な社会生活と応急手当",
            icon: "🚨",
            questions: [
                { question: "交通事故の3要因とは「人的要因」「環境要因」とあと一つは何？", options: ["車両要因", "経済要因", "言語要因", "政治要因", "心理要因"], answer: 0, explanation: "運転者の不注意、道路状況、車の整備状態が事故に関わります。" },
                { question: "倒れている人を見つけた時、最初に行うべきことは？", options: ["すぐに人工呼吸をする", "周囲の安全を確認する", "その場から逃げる", "体を揺り動かす", "119番通報だけする"], answer: 1, explanation: "自分自身の安全を確保してから救助に当たることが原則です。" },
                { question: "胸骨圧迫（心臓マッサージ）を行う際のリズムは？", options: ["1分間に20回", "1分間に60回", "1分間に100〜120回", "1分間に200回以上", "ゆっくり一定"], answer: 2, explanation: "絶え間なく、テンポよく圧迫を続けることが重要です。" },
                { question: "AED（自動体外式除細動器）の役割は？", options: ["心臓を止める", "心臓に電気ショックを与え、正常なリズムを取り戻す", "人工呼吸を代行する", "骨折を診断する", "出血を止める"], answer: 1, explanation: "心室細動などの不整脈をリセットし、心臓の動きを再開させる装置です。" },
                { question: "胸骨圧迫で胸を沈める深さの目安は？（成人）", options: ["1cm", "3cm", "約5cm", "10cm以上", "適当に"], answer: 2, explanation: "胸が約5cm沈むまで、強く圧迫する必要があります。" },
                { question: "自転車で車道を走る際、原則としてどちら側を通行する？", options: ["右側", "左側", "中央", "歩道", "どちらでも良い"], answer: 1, explanation: "自転車は軽車両であり、車道の左側を通行するのが原則です。" },
                { question: "応急手当における「バイスタンダー」とは誰のこと？", options: ["医師", "看護師", "その場に居合わせた人", "警察官", "消防士"], answer: 2, explanation: "救急車が来るまでの数分間に応急手当を行う周囲の人々が命を救います。" },
                { question: "止血の基本である「直接圧迫止血法」とはどのような方法？", options: ["傷口を洗い流す", "傷口を清潔な布などで強く押さえる", "心臓より下にする", "紐で縛る", "何もしない"], answer: 1, explanation: "出血部位を直接圧迫して血を止める、最も安全で効果的な方法です。" },
                { question: "熱中症が疑われる際、最初にすべき処置は？", options: ["熱いお茶を飲ませる", "涼しい場所に移動させ、体を冷やす", "走らせる", "厚着をさせる", "何も飲ませない"], answer: 1, explanation: "体温を下げることが最優先です。意識があれば水分補給も行います。" },
                { question: "アクティブセーフティ（予防安全）の例として正しいのは？", options: ["エアバッグ", "シートベルト", "自動ブレーキ（衝突被害軽減ブレーキ）", "ヘルメット", "窓ガラスの飛散防止"], answer: 2, explanation: "事故そのものを未然に防ぐための技術や対策を指します。" },
                { question: "パッシブセーフティ（衝突安全）の例として正しいのは？", options: ["ABS", "シートベルト", "信号機", "道路の舗装", "歩行者検知センサー"], answer: 1, explanation: "事故が起きてしまった時に、被害を最小限に抑えるための装備です。" },
                { question: "心肺蘇生の手順で「反応の確認」の次は？", options: ["人工呼吸", "呼吸の確認", "助けを呼ぶ（119番とAEDの依頼）", "胸骨圧迫", "立ち去る"], answer: 2, explanation: "反応がなければ、まず大声で助けを呼び、協力者を確保します。" },
                { question: "救急車が到着するまでの平均時間は全国で約何分？（近年）", options: ["1分", "3分", "約9〜10分", "30分", "1時間"], answer: 2, explanation: "通報から到着までには時間がかかるため、その間の応急手当が重要です。" },
                { question: "AEDが「必要ありません」とアナウンスした場合、どうするべき？", options: ["電源を切って片付ける", "すぐに胸骨圧迫を再開する", "救急車が来るまで横で見守る", "体を揺らす", "もう一度電気ショックを試みる"], answer: 1, explanation: "電気ショックが不要でも、心臓が正常に動いているとは限りません。絶え間ない蘇生が必要です。" },
                { question: "窒息（異物除去）の際に、背中を叩く方法を何と言う？", options: ["腹部突き上げ法", "背部叩打法", "心臓マッサージ", "人工呼吸", "ハイムリック法"], answer: 1, explanation: "手の付け根で左右の肩甲骨の間を力強く数回叩く方法です。" },
                { question: "RICE処置（現在はPEACE&LOVEなどもありますが、基本）の「I」は？", options: ["Ice (冷却)", "Injection (注射)", "Inspection (検査)", "Inhale (吸入)", "Increase (増加)"], answer: 0, explanation: "Rest(安静)、Ice(冷却)、Compression(圧迫)、Elevation(挙上)の頭文字です。" },
                { question: "交通事故の被害者のうち、最も多い状態はどれ？（日本）", options: ["車に乗っている時", "歩行中", "自転車に乗っている時", "電車に乗っている時", "飛行機に乗っている時"], answer: 1, explanation: "日本では歩行中の事故死亡率が他国と比較しても高い傾向にあります。" },
                { question: "飲酒運転に対する法律の考え方は？", options: ["バレなければ良い", "少しなら良い", "酒気帯び運転も酒酔い運転も厳しく禁止されている", "自転車なら良い", "私道なら良い"], answer: 2, explanation: "「飲んだら乗るな、乗るなら飲むな」は絶対の原則です。" },
                { question: "「ロードレージ」とはどのような行為？", options: ["車の点検", "道路の掃除", "運転中のあおり運転や激しい怒りの表出", "ドライブの楽しみ", "ガソリンの節約"], answer: 2, explanation: "運転中に他者に対して攻撃的な態度をとる危険な行為です。" },
                { question: "救命の連鎖とは、どのような概念？", options: ["鎖で車を繋ぐこと", "通報から病院での治療まで一連の動作が繋がることで救命率が上がること", "運動会での競技名", "山登りの道具", "工場のライン作業"], answer: 1, explanation: "早い通報、早い応急手当、早い専門的治療の連携が命を救います。" }
            ]
        },
        "T3": {
            title: "T3: 生涯の各段階における健康",
            icon: "👶",
            questions: [
                { question: "思春期に体格が急激に変化することを何と言う？", options: ["二次成長", "二次性徴", "進化", "変身", "老化"], answer: 1, explanation: "生殖器の成長や体型の変化など、自立した大人へと向かう過程です。" },
                { question: "新しい生命の誕生において、受精が行われる場所は？", options: ["子宮", "卵管", "膣", "卵巣", "胃"], answer: 1, explanation: "卵管で受精し、その後子宮へと移動して着床します。" },
                { question: "母子健康手帳の主な役割は？", options: ["日記帳", "妊娠から出産、育児までの健康記録を管理すること", "パスポートの代わり", "家計簿", "身分証明書"], answer: 1, explanation: "継続的な健康状態の把握と支援のための重要なツールです。" },
                { question: "生涯を通じた健康管理において、高齢期に特に重要なのは？", options: ["筋肉をムキムキにすること", "フレイル（虚弱）の予防と介護予防", "受験勉強", "乳歯のケア", "就職活動"], answer: 1, explanation: "心身の衰えを抑え、自立した生活を長く続けることが目標となります。" },
                { question: "労働者の健康を守るために、事業主に義務付けられているのはどれ？", options: ["ボーナスを全員に配ること", "定期健康診断の実施", "毎日お菓子を配ること", "全社員の引越し代を出すこと", "テレビを設置すること"], answer: 1, explanation: "労働安全衛生法に基づき、社員の健康管理が義務付けられています。" },
                { question: "ワーク・ライフ・バランスとはどのようなこと？", options: ["仕事ばかりすること", "仕事と私生活の調和を図ること", "ずっと休むこと", "運動だけすること", "お金を使うこと"], answer: 1, explanation: "充実した生活と、責任ある仕事の両立を目指す考え方です。" },
                { question: "家族計画（ファミリープランニング）で重視されるのはどれ？", options: ["親の勝手な思い込み", "子供の人数や出産の時期を自分たちで計画的に決めること", "親戚の意見", "近所の噂", "お金の有無だけ"], answer: 1, explanation: "母子の健康や家庭の状況を考え、主体的に選択することが大切です。" },
                { question: "産業保健師や産業医が活動する場所はどこ？", options: ["学校", "職場（企業）", "公園", "映画館", "駅前"], answer: 1, explanation: "職場で働く人々の健康相談や環境改善のアドバイスを行います。" },
                { question: "不妊治療における「特定不妊治療」とは主に何を指す？", options: ["風邪の治療", "体外受精や顕微授精", "骨折の治療", "マッサージ", "サプリメントの処方"], answer: 1, explanation: "高度な医療技術を用いて妊娠をサポートする治療法です。" },
                { question: "加齢に伴い骨密度が低下し、骨がもろくなる症状は？", options: ["糖尿病", "骨粗鬆症", "白内障", "高血圧", "緑内障"], answer: 1, explanation: "特に高齢の女性に多く、転倒による骨折のリスクが高まります。" },
                { question: "リプロダクティブ・ヘルス／ライツとはどのような概念？", options: ["音楽を作る権利", "性と生殖に関する健康と権利", "スポーツをする権利", "家を建てる権利", "選挙に行く権利"], answer: 1, explanation: "産む・産まないを自分で決め、安全に健康でいられる権利のことです。" },
                { question: "更年期障害の主な原因とされるのはどれ？", options: ["食べ過ぎ", "ホルモンバランスの急激な変化", "運動不足", "視力の低下", "睡眠不足"], answer: 1, explanation: "中高年期にホルモン分泌が減少することで、心身に様々な不調が現ります。" },
                { question: "労働災害（労災）を未然に防ぐために行われる活動は？", options: ["ヒヤリ・ハット事例の収集と対策", "社員旅行", "全員で歌を歌う", "掃除をしないこと", "窓を閉め切ること"], answer: 0, explanation: "重大な事故に繋がる一歩手前の出来事を共有し、改善に活かします。" },
                { question: "過労死（脳・心臓疾患）の原因として最も問題視されているのは？", options: ["短時間の運動", "長時間の過重労働とストレス", "野菜中心の食事", "十分な睡眠", "趣味への没頭"], answer: 1, explanation: "働きすぎによる過度な負荷が、血管や心臓に致命的なダメージを与えます。" },
                { question: "「働き方改革」で導入された制度の一つはどれ？", options: ["残業代の全廃", "時間外労働（残業）の上限規制", "週休0日制", "副業の全面禁止", "定年の廃止"], answer: 1, explanation: "過重労働を防ぎ、多様な働き方を認めるための法整備が進んでいます。" },
                { question: "メタボ健診（特定健診）の対象年齢は？", options: ["0〜10歳", "15〜30歳", "40〜74歳", "80歳以上", "全年齢"], answer: 2, explanation: "生活習慣病のリスクが高まる世代を重点的にチェックします。" },
                { question: "思春期に感じる心理的な自立要求のことを何と言う？", options: ["第一反抗期", "第二反抗期", "適応", "同調", "退行"], answer: 1, explanation: "親や大人から離れ、自分一人の人間として自立したいと感じる時期です。" },
                { question: "結婚生活を健康に送るために必要な準備はどれ？", options: ["豪華な結婚式", "パートナーとの価値観の共有と健康状態の確認", "高い宝飾品", "最新の車", "大きな家"], answer: 1, explanation: "互いの健康を尊重し、助け合える基盤を作ることが大切です。" },
                { question: "メンタルヘルス・マネジメント（職場）の3つのセルフケア、ラインケア、あと一つは？", options: ["家族ケア", "事業場外資源によるケア（専門家）", "ペットケア", "放置", "自分勝手"], answer: 1, explanation: "自分、上司、そして外部の専門機関が連携して心の健康を守ります。" },
                { question: "エイジング（加齢）を肯定的に捉え、活動的に過ごすことを何と言う？", options: ["アンチエイジング", "アクティブ・エイジング", "ストップ・エイジング", "エンド・エイジング", "ニュー・エイジング"], answer: 1, explanation: "年齢を重ねることを楽しみ、社会参加を続ける前向きな姿勢です。" }
            ]
        },
        "T4": {
            title: "T4: 健康を支える環境と社会",
            icon: "🌍",
            questions: [
                { question: "食品の安全を守るための国際的な衛生管理手法は？", options: ["HACCP", "PKO", "TPP", "NASA", "UNESCO"], answer: 0, explanation: "原料から出荷まで、各工程で危険を管理するシステムです。" },
                { question: "大気汚染の原因となる「PM2.5」とは何を指す？", options: ["大きな石", "微小粒子状物質", "酸性雨", "二酸化炭素", "酸素の塊"], answer: 1, explanation: "粒径が非常に小さい粒子で、肺の奥まで入り込みやすいため注意が必要です。" },
                { question: "リサイクルの3Rのうち、ゴミそのものを減らすのはどれ？", options: ["リデュース (Reduce)", "リユース (Reuse)", "リサイクル (Recycle)", "リペア (Repair)", "リメイク (Remake)"], answer: 0, explanation: "無駄なものを買わない、断るなど、発生自体を抑えることです。" },
                { question: "食品の期限表示のうち、「安全に食べられる期限」はどれ？", options: ["賞味期限", "消費期限", "製造年月日", "出荷予定日", "販売終了日"], answer: 1, explanation: "消費期限はお弁当など、長く保存できないものに表示されます。" },
                { question: "日本の公的な医療保険制度の特徴はどれ？", options: ["自由診療のみ", "国民皆保険（全国民が保険に加入）", "お金持ちだけが加入できる", "全額国費負担", "保険料は一律"], answer: 1, explanation: "誰もが必要な医療を平等に受けられるようにする、日本の優れた制度です。"},
                { question: "保健所の主な役割はどれ？", options: ["ゴミ拾い", "地域の感染症対策や環境衛生の監視・指導", "映画の上映", "郵便の発信", "火事の消火"], answer: 1, explanation: "広域的・専門的な立場で地域の健康課題に取り組む公的機関です。" },
                { question: "温室効果ガスが増えることで起きる地球全体の現象は？", options: ["地球冷却化", "地球温暖化", "氷河期の到来", "大洪水", "地殻変動"], answer: 1, explanation: "二酸化炭素などの排出により、地球の平均気温が上昇し、気候変動を招いています。" },
                { question: "騒音や振動、悪臭などをまとめて何と呼ぶ？", options: ["生活の音", "公害", "趣味", "音楽", "天災"], answer: 1, explanation: "人々の健康や生活環境に被害を及ぼす環境問題です。" },
                { question: "医療機関のうち、入院ベッドが20床以上の施設を何と言う？", options: ["診療所", "病院", "薬局", "保健所", "介護施設"], answer: 1, explanation: "20床未満は診療所（クリニック）と呼ばれます。" },
                { question: "ジェネリック医薬品（後発医薬品）の特徴はどれ？", options: ["新薬と同じ有効成分で、開発費が抑えられているため安価", "効果が半分", "色が全部同じ", "毒性が強い", "名前を隠して販売"], answer: 0, explanation: "特許が切れた後に発売される、同等の効果を持つ安価な薬です。" },
                { question: "医薬品の「主作用」以外の望ましくない反応を何と言う？", options: ["大作用", "副作用", "逆作用", "無作用", "毒作用"], answer: 1, explanation: "全ての薬には副作用のリスクがあるため、正しい服用が欠かせません。" },
                { question: "地域の保健センターが担当する主な業務はど？", options: ["パスポート発行", "乳幼児健診や健康相談などの身近な保健サービス", "道路工事の計画", "外交交渉", "銀行業務"], answer: 1, explanation: "市町村が設置し、住民に最も近い場所で健康を支えます。" },
                { question: "ダイオキシン類が主に発生する原因はどれ？", options: ["海で泳ぐこと", "プラスチックなどの不適切な焼却", "野菜を食べること", "運動会の応援", "ピアノの演奏"], answer: 1, explanation: "ゴミを低温で燃やすと発生しやすい、極めて毒性の強い物質です。" },
                { question: "水質汚濁を防ぐための「下水道」の役割は？", options: ["飲み水を作ること", "汚れた水をきれいに処理して川や海に戻すこと", "雨水を貯めるだけ", "魚を飼うこと", "電線を隠すこと"], answer: 1, explanation: "都市の衛生管理と、公共用水域の保全に不可欠なインフラです。" },
                { question: "「医食同源」の言葉の意味に近いのはどれ？", options: ["薬ばかり飲むこと", "日頃の食事が健康の源であるということ", "食事と薬を混ぜること", "食事をしないこと", "料理人になること"], answer: 1, explanation: "正しい食生活が病気の予防に繋がるという東洋の考え方です。" },
                { question: "食品添加物の許可や規制を行っている法律は？", options: ["刑法", "食品衛生法", "民法", "道路交通法", "著作権法"], answer: 1, explanation: "食品の安全を確保し、消費者の健康を守るための法律です。" },
                { question: "インフォームド・コンセントの前提となるのはどれ？", options: ["医師の独断", "患者へのわかりやすく十分な説明と理解", "高い治療費", "最新のロボット", "秘密主義"], answer: 1, explanation: "納得した上で治療を選択するために不可欠なプロセスです。" },
                { question: "臓器提供の意思表示ができる書類はどれ？", options: ["履歴書", "臓器提供意思表示カード（または免許証・保険証の裏面）", "図書館の貸出カード", "ポイントカード", "通帳"], answer: 1, explanation: "自分の死後、臓器を提供するかどうかを自らの意志で示しておくものです。" },
                { question: "食生活指針に含まれない内容はどれ？", options: ["主食、主菜、副菜を組み合わせる", "食塩は控えめにする", "とにかく早くたくさん食べる", "おいしく楽しく食べる", "地産地消を心がける"], answer: 2, explanation: "よく噛んで、バランスよく食べることが健康の基本です。" },
                { question: "ユニバーサルデザインとはどのようなデザイン？", options: ["宇宙人のためのデザイン", "特定の技術者専用", "誰にとっても使いやすく、わかりやすく設計されたデザイン", "赤色だけのデザイン", "非常に高い製品"], answer: 2, explanation: "障害、年齢、国籍を問わず、誰もが利用しやすい製品や環境のことです。" }
            ]
        }
    },
    "pe": {
        "T5": {
            title: "T5: スポーツの価値と歴史",
            icon: "🏅",
            questions: [
                { question: "近代オリンピックの提唱者は誰？", options: ["アリストテレス", "クーベルタン", "ソくらテス", "ナポレオン", "アインシュタイン"], answer: 1, explanation: "「スポーツを通じた教育」と「平和の推進」を掲げて1896年に復活させました。" },
                { question: "スポーツの語源となった「deportare」の本来の意味は？", options: ["義務から離れ、気晴らしをする", "必死に戦う", "ひたすら走る", "相手を倒す", "順位を競う"], answer: 0, explanation: "元々は遊びや休養といった、日常からの解放を意味していました。" },
                { question: "オリンピック憲章に示された「オリンピズム」の根本原則は？", options: ["最強の国を決めること", "スポーツを文化、教育と融合させ、生き方の哲学とすること", "プロ選手を増やすこと", "最新技術を競うこと", "とにかく記録を更新すること"], answer: 1, explanation: "競技だけでなく、相互理解と友情による平和な社会を目指しています。" },
                { question: "パラリンピックの意義として最もふさわしいのはどれ？", options: ["特定の病気を治すこと", "障害のあるなしにかかわらず、誰もが自分らしく輝ける共生社会の象徴", "プロチームを作ること", "最新の義足を売ること", "お金を儲けること"], answer: 1, explanation: "人間の可能性の広がりを示し、社会のバリアを取り除くきっかけとなります。" },
                { question: "ドーピングが固く禁じられている理由は？", options: ["薬が高すぎて不平等だから", "健康を害し、スポーツの公平性・誠実さを損なうから", "誰もが勝ってしまうから", "法律で買えないから", "効果がないから"], answer: 1, explanation: "フェアプレーの精神に反し、アスリートの身体を危険にさらす行為です。" },
                { question: "スポーツが経済に与えるプラスの影響はどれ？", options: ["借金が増えること", "雇用創出、観光振興、関連商品の消費拡大", "物価が急激に上がること", "税金がなくなること", "全員がプロになること"], answer: 1, explanation: "大会運営や観客の移動、メディア露出などは大きな経済効果を生みます。" },
                { question: "アダプテッド・スポーツとはどのようなスポーツ？", options: ["動物用のスポーツ", "ルールや用具を工夫して、誰もが楽しめるように調整されたスポーツ", "非常に危険な極限スポーツ", "宇宙で行うスポーツ", "一人だけで行うスポーツ"], answer: 1, explanation: "年齢、性別、障害の有無によらず、誰でも参加できるように工夫されたスポーツです。" },
                { question: "「支える」スポーツの関わり方の例はどれ？", options: ["試合をテレビで見る", "審判、指導、ボランティア活動、応援など", "自分で100m走る", "スポーツニュースを読む", "高いチケットを買うだけ"], answer: 1, explanation: "「する」「みる」以外に、運営やサポートで支えることもスポーツの重要な一部です。" },
                { question: "グッドルーザーという言葉が意味するのは？", options: ["わざと負ける人", "負けた時でも潔く、相手を称えられる素晴らしい敗者", "負けて不貞腐れる人", "ずっと負け続けている人", "練習をしない人"], answer: 1, explanation: "結果を真摯に受け止め、相手をリスペクトする姿勢こそが真のアスリートです。" },
                { question: "1964年の東京オリンピックが日本にもたらしたものは？", options: ["インフラ整備（新幹線など）と国際社会への完全復帰", "主食の変更", "日本語の廃止", "全人口の移住", "テレビ放送の中止"], answer: 0, explanation: "戦後復興の姿を世界に見せ、日本の高度経済成長を加速させました。" },
                { question: "イギリスのパブリックスクールで近代スポーツが発展した主な理由は？", options: ["勉強をする時間がなかったから", "スポーツを通じて紳士的な態度やリーダーシップを養うため", "賭け事をするため", "王様に褒められるため", "全員を兵士にするため"], answer: 1, explanation: "ルールの整備を通じて、人格形成（教育）の手段として活用されました。" },
                { question: "五輪マークの「5つの輪」が表しているものは？", options: ["5つの種目", "世界5大陸の団結", "5人の創設者", "週5日の練習", "5つのスポーツメーカー"], answer: 1, explanation: "青・黄・黒・緑・赤の輪は世界が一つに繋がることを象徴しています。" },
                { question: "スポーツの「文化としての価値」に含まれるものはどれ？", options: ["筋肉を太くすること", "ルールを共有し、楽しみを分かち合い、感動を創造すること", "計算速度を上げること", "お腹を凹ませること", "高い靴を買うこと"], answer: 1, explanation: "国や言葉の違いを超えて、人類が共通して楽しめる文化遺産です。" },
                { question: "eスポーツ（電子競技）が普及している背景にある要素は？", options: ["電気がキラキラしているから", "高い集中力、戦略性、反射神経が競技として認められたから", "長時間座っていられるから", "ゲーム機が高いから", "目が疲れるから"], answer: 1, explanation: "身体運動の要素は少ないものの、競技性の高さから世界中で支持されています。" },
                { question: "日本の伝統的なスポーツ（武道）において特に重視されるのは？", options: ["とにかく勝つこと", "相手に対する礼節と、精神の修養", "派手なパフォーマンス", "派手な胴着を着ること", "審判を騙すこと"], answer: 1, explanation: "「礼に始まり礼に終わる」という言葉通り、他者への敬意を大切にします。" },
                { question: "セカイキャリア支援とは何を助けること？", options: ["2足目の靴を買うこと", "選手の引退後の仕事や人生をサポートすること", "2回戦への進出を助けること", "2人目の子供を育てること", "サブリーダーを育成すること"], answer: 1, explanation: "競技人生を終えた後も、社会で活躍できるように支援する取り組みです。" },
                { question: "スポーツボランティアに参加する個人のメリットは？", options: ["お金がたくさんもらえる", "達成感、社会貢献の喜び、新たな交流が生まれること", "仕事をしなくてよくなる", "全試合を無料で一番前で見られる", "食べ物が無限にもらえる"], answer: 1, explanation: "報酬ではなく、活動自体の充実感や繋がりが大きな魅力となります。" },
                { question: "「する・みる・ささえる・しる」の中で、ルールの歴史を学ぶのはどれ？", options: ["する", "みる", "ささえる", "しる", "どれでもない"], answer: 3, explanation: "スポーツの背景や意義、歴史を「知る」ことも、スポーツライフの一部です。" },
                { question: "プロスポーツの最大の存在意義は何？", options: ["税金を払うこと", "最高のパフォーマンスを見せ、人々に夢と感動を与えること", "とにかく高い給料をもらうこと", "一日中練習すること", "派手な広告を出すこと"], answer: 1, explanation: "圧倒的な技術とドラマで、多くの人々に影響を与えるエンターテインメントの頂点です。" },
                { question: "ドーピング検査で行われる主な採取サンプルは？", options: ["涙", "尿と血液", "汗", "髪の毛", "爪"], answer: 1, explanation: "禁止物質の成分やその代謝物が含まれていないかを厳格に検査します。" }
            ]
        },
        "T6": {
            title: "T6: 運動技能と体力",
            icon: "🏃",
            questions: [
                { question: "運動技能の上達において、考えなくても動けるようになる段階を？", options: ["試行錯誤段階", "集中段階", "自動化段階", "忘却段階", "混乱段階"], answer: 2, explanation: "意識的な集中がなくても、スムーズで正確な動作が行える完成された状態です。" },
                { question: "有酸素運動の主なエネルギー源は？", options: ["酸素を使わずに蓄えた成分", "酸素を使った糖質や脂質の燃焼", "水分のみ", "サプリメント", "気力"], answer: 1, explanation: "比較的弱い負荷で長時間続ける運動に適したエネルギー供給方法です。" },
                { question: "ストレッチングを運動前に行う適切な理由は？", options: ["背を伸ばすため", "関節の可動域を広げ、怪我の予防と動作のスムーズ化を図るため", "痩せるため", "汗をかかないようにするため", "疲れるため"], answer: 1, explanation: "筋肉をほぐし、運動に向けたコンディションを整える準備体操です。" },
                { question: "トレーニングの原則のうち、自分に合った強度、内容で行うのは？", options: ["全面性の原則", "個別性の原則", "漸進性の原則", "意識性の原則", "継続性の原則"], answer: 1, explanation: "年齢や体力、目的に合わせてメニューを調整することが効率的です。" },
                { question: "筋線維（筋肉の細胞）のうち、瞬発力に優れるが疲れやすいのは？", options: ["遅筋線維", "速筋線維", "神経線維", "心筋線維", "平滑筋線維"], answer: 1, explanation: "短時間に大きな力を出すのが得意な筋肉です。" },
                { question: "体力の要素のうち、体の各部位を思い通りに操作する能力は？", options: ["持久力", "筋力", "巧緻性（調整力）", "柔軟性", "平衡性"], answer: 2, explanation: "バランスをとったり、複雑な動きをスムーズに行ったりする能力です。" },
                { question: "全身持久力を測る指標として一般的なものはどれ？", options: ["握力", "50m走", "20mシャトルラン（または持久走）", "立ち三段跳び", "上体起こし"], answer: 2, explanation: "心臓や肺、血管の強さを測る、長く動き続ける能力のテストです。" },
                { question: "運動強度の単位「メッツ (METs)」で、安静時は何メッツ？", options: ["0", "1", "3", "5", "10"], answer: 1, explanation: "静かに座っている状態を1として、その何倍のエネルギーを消費するかを表します。" },
                { question: "プラトー（高原現象）とはどのような時のこと？", options: ["一気に上達した時", "一時的に上達が停滞し、伸び悩む時期", "試合で負けた時", "怪我をした時", "新しい道具を買った時"], answer: 1, explanation: "練習を続けていても結果が出にくい時期ですが、乗り越えるとさらに上達します。" },
                { question: "オーバートレーニング症候群の典型的な症状でないのはどれ？", options: ["慢性的な疲労感", "食欲不振", "睡眠不足（不眠）", "驚異的な身体能力の向上", "安静時の心拍数の上昇"], answer: 3, explanation: "無理な練習により、むしろパフォーマンスが低下し、健康を害する状態です。" },
                { question: "逆境において、それを乗り越えて回復する心の弾力性を何と言う？", options: ["レジスタンス", "レジリエンス", "レボリューション", "レガシー", "レセプション"], answer: 1, explanation: "困難な状況でも折れずに立ち直る、「精神的な回復力」を指します。" },
                { question: "運動スキルを「クローズド・スキル」と「オープン・スキル」に分ける時、テニスはどちら？", options: ["クローズド・スキル", "オープン・スキル", "どちらでもない", "中間", "無関係"], answer: 1, explanation: "相手の動きやボールに合わせて、予測と対応が必要なスキルをオープン・スキルと言います。" },
                { question: "アイソメトリック（等尺性）トレーニングの具体例はどれ？", options: ["全力ダッシュ", "動かない壁を全力で押す（筋肉の長さが変わらない）", "バーベルを何度も持ち上げる", "ゆっくりジョギング", "水泳"], answer: 1, explanation: "関節を動かさずに筋肉に力を入れ続けるトレーニングです。" },
                { question: "敏捷性（アジリティ）を高めるのに最も有効な種目はどれ？", options: ["ゆっくりジョギング", "反復横とび", "ベンチプレス", "前屈", "深呼吸"], answer: 1, explanation: "素早く正確に体の方向や位置を変える能力を鍛えます。" },
                { question: "運動後の「クールダウン（整理運動）」の目的は？", options: ["わざと筋肉痛にするため", "疲労物質の除去を早め、急激な心拍数低下による貧血を防ぐため", "記録を測るため", "お腹を凹ませるため", "大きな声を出すため"], answer: 1, explanation: "体を徐々に安静時の状態に戻し、回復を促すために重要です。" },
                { question: "体幹（コア）トレーニングで主に鍛えられる部位は？", options: ["指先", "胴体（腹部や背中の奥の筋肉）", "膝から下", "顔の筋肉", "耳"], answer: 1, explanation: "体の中心部を安定させることで、あらゆる動作の土台を作ります。" },
                { question: "最大酸素摂取量が高い人が得意とするスポーツは？", options: ["砲丸投げ", "マラソン（長距離走）", "握力測定", "ボウリング", "チェス"], answer: 1, explanation: "酸素を効率よく体に取り込めるため、持久的な運動に適しています。" },
                { question: "運動技能の習得における「フィードバック」の役割は？", options: ["過去を忘れること", "自分の動きの結果を把握し、次の動作を修正するための情報を得ること", "他人を批判すること", "とにかく叫ぶこと", "鏡を割ること"], answer: 1, explanation: "感覚や映像、指導者のアドバイスから「誤差」を学び、精度を高めます。" },
                { question: "筋力トレーニングの際、「超回復」を促すための休息時間は一般的にどれくらい？", options: ["10秒", "1時間", "48〜72時間", "1週間", "1ヶ月"], answer: 2, explanation: "破壊された筋肉が修復され、以前より強くなるためには2〜3日の休息が効果的です。" },
                { question: "体力の要素のうち、長い距離を走り続けられる力は？", options: ["瞬発力", "全身持久力", "筋力", "柔軟性", "平衡性"], answer: 1, explanation: "心肺機能の強さと関連しており、健康維持にも重要な能力です。" }
            ]
        },
        "T7": {
            title: "T7: スポーツライフの設計",
            icon: "🗓️",
            questions: [
                { question: "ライフステージに応じたスポーツの楽しみ方のうち、乳幼児期に重要なことは？", options: ["厳しいトレーニング", "遊びを通じて様々な動きを経験し、楽しむこと", "プロの技術を覚えること", "筋力増強", "サプリメント摂取"], answer: 1, explanation: "体を動かすことが大好きになる、土台作りの時期です。" },
                { question: "スポーツを「みる」楽しみ方の広がりとして、正しいものはどれ？", options: ["会場に行くことしか認められない", "テレビ、ネット配信、パブリックビューイングなど多様化している", "一人でしか見られない", "ルールを知らなくても良いが、声は出す", "全くない"], answer: 1, explanation: "場所や時間、メディアを選ばずに楽しめるようになっています。" },
                { question: "スポーツ庁が推進する「歩く」ことの奨励キャンペーン名はどれ？", options: ["WALK MORE", "FUN+WALK PROJECT", "WALK FAST", "STOP AND WALK", "WALK OR DIE"], answer: 1, explanation: "歩くことに楽しさをプラスし、健康な社会を目指すプロジェクトです。" },
                { question: "スポーツボランティアの種類のうち、大会の受付や案内をするのは？", options: ["競技運営ボランティア", "サービス（接遇）ボランティア", "医療ボランティア", "通訳ボランティア", "清掃ボランティア"], answer: 1, explanation: "参加者や観客を気持ちよく迎え、サポートする役割です。" },
                { question: "「生涯スポーツ」という言葉が目指す姿は？", options: ["子供の時だけ頑張ること", "一生を通じて、いつでも、どこでも、誰もがスポーツに親しむこと", "ずっとプロでいること", "一日中スポーツをすること", "全員をアスリートにすること"], answer: 1, explanation: "健康のため、楽しみのため、自発的に一生続けるライフスタイルを指します。" },
                { question: "地域スポーツクラブ（総合型地域スポーツクラブなど）のメリットは？", options: ["お金がすごくかかる", "多世代・多種目・多志向の人々が身近な場所で交流できること", "若い人しかいない", "一人のコーチしかいない", "場所が遠い"], answer: 1, explanation: "地域住民が自分のレベルや興味に合わせて主体的に活動できる拠点です。" },
                { question: "スポーツの「負の側面」に対する対策としてふさわしくないのは？", options: ["アンチ・ドーピング教育", "暴力的な指導の容認", "ガバナンス（組織統治）の強化", "公平なルールの遵守", "安全な環境の整備"], answer: 1, explanation: "暴力やハラスメントはスポーツの価値を根本から否定する行為であり、撲滅されるべきです。" },
                { question: "スポーツを通じて国際協力をすることを何と言う？", options: ["スポーツ・フォー・マネー", "スポーツ・フォー・トゥモロー", "スポーツ・フォー・ユー", "スポーツ・フォー・ミー", "スポーツ・フォー・ウィン"], answer: 1, explanation: "日本が主導して、開発途上国などへスポーツの価値を広める国際貢献策です。" },
                { question: "自分のレベルや健康状態に合わせて運動を計画することを何と言う？", options: ["自己決定", "スポーツライフの設計（セルフ・プロデュース）", "他己紹介", "運任せ", "義務"], answer: 1, explanation: "無理なく、楽しく続けるために、自分に合ったスタイルを作ることが大切です。" },
                { question: "スポーツによる「共生社会」の実現とはどのようなこと？", options: ["全員が同じ点数を取ること", "障害のある人もない人も、共にスポーツを楽しみ、理解し合う社会", "全員が同じスポーツをすること", "プロとアマを分けること", "自分たちだけで楽しむこと"], answer: 1, explanation: "スポーツが壁を越え、互いを尊重し合うきっかけとなることです。" },
                { question: "健康のために毎日行う最も身近なスポーツは？", options: ["エベレスト登山", "ウォーキング（散歩）", "スカイダイビング", "F1レース", "深海潜水"], answer: 1, explanation: "いつでも、誰でも始められる歩くことが、最も多くの人に親しまれています。" },
                { question: "スポーツ振興くじ（toto）の収益の主な使い道は？", options: ["政府の借金返済", "スポーツ施設の整備や、ジュニア選手の育成などの支援", "道路工事", "映画製作", "宇宙開発"], answer: 1, explanation: "私たちの購入したチケットが、未来のアスリートや地域のスポーツ環境を支えています。" },
                { question: "スポーツ観戦（「みる」スポーツ）が心に与える良い影響はどれ？", options: ["嫉妬が深まる", "ストレス解消や感動、連帯感の獲得", "視力の劇的な向上", "お腹が空くこと", "記憶がなくなること"], answer: 1, explanation: "応援を通じて熱狂し、心が豊かになる体験を提供します。" },
                { question: "ICT技術（ウェアラブルデバイス等）をスポーツに活用するメリットは？", options: ["重たくなるだけ", "自分の心拍数や活動量を正確に「しる（知る）」ことができる", "他人のパスワードがわかる", "テレビが綺麗に見える", "空を飛べるようになる"], answer: 1, explanation: "データに基づいて効率よく、安全に運動を行うためのサポートとなります。" },
                { question: "アダプテッド・スポーツの大会として最も有名なのは？", options: ["WBC", "パラリンピック", "ワールドカップ", "箱根駅伝", "甲子園"], answer: 1, explanation: "障害者のスポーツの最高峰であり、多くの感動と気づきを与えます。" },
                { question: "プロスポーツ選手の社会貢献活動（チャリティ等）を何と呼ぶ？", options: ["利益追求", "CSRやアスリートの社会貢献活動", "ただの宣伝", "暇つぶし", "ボランティアごっこ"], answer: 1, explanation: "社会から得た応援を、別の形で還元しようとする尊い活動です。" },
                { question: "「する」スポーツにおけるスマートな取り組みはどれ？", options: ["怪我をしているのに走る", "体調に合わせて強度を調節し、水分補給を怠らない", "何も飲まずに長時間続ける", "人のアドバイスを聞かない", "高い靴を飾っておくだけ"], answer: 1, explanation: "賢く（スマートに）取り組むことが、長く健康を保つコツです。" },
                { question: "スポーツの権利（スポーツ権）の考え方の基本は？", options: ["勝った人だけが偉い", "すべての人にスポーツを楽しむ権利がある（ユネスコ等）", "プロ選手が一番偉い", "休むのは甘え", "道具さえ良ければ良い"], answer: 1, explanation: "性別や能力に関わらず、全ての人間が等しく享受すべき権利の一つです。" },
                { question: "スポーツを通じた「まちづくり」の例として正しいのは？", options: ["マラソン大会を開催し、地域を活性化させる", "公園を全部取り壊す", "スポーツ用品を全部禁止する", "道路を狭くする", "図書館をなくす"], answer: 0, explanation: "スポーツイベントは地域への愛着や観光客の増加、経済活動の活発化に寄与します。" },
                { question: "自分自身が「生涯スポーツ」を続けるために最も大切な心構えは？", options: ["他人と比べて勝つことに固執する", "「楽しい」「心地よい」と感じる自分なりの目的を持つこと", "毎日30時間練習する", "サポーターに全て任せる", "何もしないこと"], answer: 1, explanation: "主体的に楽しみを見つけることが、一生の宝物としてのスポーツライフに繋がります。" }
            ]
        }
    }
};

/**
 * ユーティリティ
 */

// 配列をシャッフルする（Fisher-Yates shuffle）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * アプリケーション状態
 */
let currentCategory = 'health';
let currentChapterKey = null;
let currentDifficulty = 'basic';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;

// DOM
const menuArea = document.getElementById('menu-area');
const chapterList = document.getElementById('chapter-list');
const difficultyArea = document.getElementById('difficulty-area');
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const categoryTabs = document.querySelectorAll('.tab-btn');

const chapterTitleLabel = document.getElementById('chapter-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const feedbackArea = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');
const nextBtn = document.getElementById('next-btn');

const progressBar = document.getElementById('progress-bar');
const questionNumberDisplay = document.getElementById('question-number');
const scoreDisplay = document.getElementById('score-display');
const finalScoreDisplay = document.getElementById('final-score');
const resultComment = document.getElementById('result-comment');

const diffBackBtn = document.getElementById('difficulty-back-btn');
const backBtn = document.getElementById('back-to-menu-btn');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

function initApp() {
    renderMenu();
    
    // カテゴリ切り替え（保健・体育）
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderMenu();
        });
    });

    // 難易度選択
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentDifficulty = btn.dataset.diff;
            startQuiz();
        });
    });

    showMenu();
}

function renderMenu() {
    chapterList.innerHTML = '';
    const chapters = curriculumData[currentCategory];
    
    for (const key in chapters) {
        const chapter = chapters[key];
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <span class="icon">${chapter.icon}</span>
            <h3>${chapter.title}</h3>
            <p>20問のストックからランダムに出題</p>
        `;
        card.addEventListener('click', () => selectChapter(key));
        chapterList.appendChild(card);
    }
}

function showMenu() {
    menuArea.classList.remove('hidden');
    difficultyArea.classList.add('hidden');
    quizArea.classList.add('hidden');
    resultArea.classList.add('hidden');
    currentChapterKey = null;
}

function selectChapter(chapterKey) {
    currentChapterKey = chapterKey;
    menuArea.classList.add('hidden');
    difficultyArea.classList.remove('hidden');
}

function startQuiz() {
    const chapterData = curriculumData[currentCategory][currentChapterKey];
    
    // 全20問から10問をシャッフルして抽出
    const allQuestions = [...chapterData.questions];
    shuffleArray(allQuestions);
    currentQuestions = allQuestions.slice(0, 10);
    
    currentQuestionIndex = 0;
    score = 0;
    
    chapterTitleLabel.textContent = `${chapterData.title} [${currentDifficulty === 'basic' ? '初級' : '上級'}]`;
    difficultyArea.classList.add('hidden');
    quizArea.classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    canAnswer = true;
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    // 難易度制御
    let displayedOptions = [...currentQuestion.options];
    let correctIdx = currentQuestion.answer;

    if (currentDifficulty === 'basic') {
        // 初級は4択に（正解は残し、間違いを1つ消す）
        if (displayedOptions.length > 4) {
            let optionsWithIndices = displayedOptions.map((opt, idx) => ({text: opt, originalIndex: idx}));
            let wrongOptions = optionsWithIndices.filter(opt => opt.originalIndex !== currentQuestion.answer);
            
            while(optionsWithIndices.length > 4) {
                const removeIdx = Math.floor(Math.random() * wrongOptions.length);
                const toRemove = wrongOptions.splice(removeIdx, 1)[0];
                optionsWithIndices = optionsWithIndices.filter(opt => opt.originalIndex !== toRemove.originalIndex);
            }
            
            displayedOptions = optionsWithIndices.map(opt => opt.text);
            correctIdx = optionsWithIndices.findIndex(opt => opt.originalIndex === currentQuestion.answer);
        }
    }
    
    // 表示用の正解インデックス
    currentQuestion._tempCorrectIdx = correctIdx;

    displayedOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerHTML = `<span class="option-index">${String.fromCharCode(65 + index)}</span> ${option}`;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    feedbackArea.classList.add('hidden');
    updateStats();
}

function selectOption(selectedIndex) {
    if (!canAnswer) return;
    canAnswer = false;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    const correctIdx = currentQuestion._tempCorrectIdx;
    
    if (selectedIndex === correctIdx) {
        score += 10;
        buttons[selectedIndex].classList.add('correct');
        feedbackMessage.innerHTML = `<p class="msg-correct">正解です！</p><div class="explanation-text">${currentQuestion.explanation}</div>`;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIdx].classList.add('correct');
        feedbackMessage.innerHTML = `<p class="msg-wrong">不正解... 正解は ${String.fromCharCode(65 + correctIdx)} です</p><div class="explanation-text">${currentQuestion.explanation}</div>`;
    }
    
    scoreDisplay.textContent = `スコア: ${score}`;
    feedbackArea.classList.remove('hidden');
}

function updateStats() {
    const progress = (currentQuestionIndex / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionNumberDisplay.textContent = `第 ${currentQuestionIndex + 1} 問 / 10`;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    progressBar.style.width = '100%';
    
    finalScoreDisplay.textContent = score;
    
    if (score === 100) {
        resultComment.textContent = "完璧です！この分野のマスターですね！おめでとうございます。";
    } else if (score >= 80) {
        resultComment.textContent = "素晴らしい成績です！ほぼ完全に理解できていますね。";
    } else if (score >= 60) {
        resultComment.textContent = "合格点です。間違えた部分を解説で復習しておきましょう。";
    } else {
        resultComment.textContent = "もう少し復習が必要かもしれません。解説をしっかり読んで再挑戦しましょう！";
    }
}

// 共通ナビゲーション
diffBackBtn.addEventListener('click', showMenu);
backBtn.addEventListener('click', () => {
    difficultyArea.classList.remove('hidden');
    quizArea.classList.add('hidden');
});
retryBtn.addEventListener('click', startQuiz);
homeBtn.addEventListener('click', showMenu);

initApp();
