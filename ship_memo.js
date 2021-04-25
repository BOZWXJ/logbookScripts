load("script/utils.js");
Ship = Java.type("logbook.internal.Ship");

function header()
{
	return ["memo"];
}
function begin(specdiff) { }
function body(ship)
{
	var s = "";
	var origName = null;
	if(ship.charId != 0) {
		var origShip = Ship.get(ship.charId);
		if(origShip != null) {
			origName = origShip.name;
		}
	}
	switch (origName)
	{
		// 戦艦
		case "金剛":
			s = "25 41cm";
			break;
		case "比叡":
			s = "25 41cm";
			break;
		case "榛名":
			s = "25 41cm";
			break;
		case "霧島":
			s = "25 41cm";
			break;
		case "扶桑":
			s = "20 瑞雲";
			break;
		case "山城":
			s = "20 瑞雲";
			break;
		case "伊勢":
			s = "10 瑞雲";
			break;
		case "日向":
			s = "10 瑞雲";
			break;
		case "長門":
			s = "30 41cm";
			break;
		case "陸奥":
			s = "30 41cm";
			break;
		case "大和":
			s = "60 46cm";
			break;
		case "武蔵":
			s = "40 46cm";
			break;
		case "Bismarck":
			s = "";
			break;
		case "Bismarck zwei":
			s = "";
			break;
		case "Bismarck drei":
			s = "";
			break;
		case "Littorio":
			s = "";
			break;
		case "Italia":
			s = "";
			break;
		case "Roma":
			s = "";
			break;
		case "Iowa":
			s = "";
			break;
		case "Warspite":
			s = "";
			break;
		case "Гангут":
			s = "";
			break;
		case "Октябрьская революция":
			s = "";
			break;
		case "Гангут два":
			s = "";
			break;
		case "Richelieu":
			s = "";
			break;
		// 航空戦艦
		// 改装航空戦艦
		// 正規空母
		case "赤城":
			s = "30 零式52";
			break;
		case "加賀":
			s = "30 零式52";
			break;
		case "蒼龍":
			s = "30 零式52";
			break;
		case "飛龍":
			s = "30 零式52";
			break;
		case "翔鶴":
			s = "30 零式52";
			break;
		case "瑞鶴":
			s = "25 零式52";
			break;
		case "雲龍":
			s = "";
			break;
		case "天城":
			s = "";
			break;
		case "葛城":
			s = "";
			break;
		case "Graf Zeppelin":
			s = "";
			break;
		case "Aquila":
			s = "";
			break;
		case "Saratoga":
			s = "";
			break;
		case "Saratoga Mk.II":
			s = "";
			break;
		case "Ark Royal":
			s = "";
			break;
		case "Intrepid":
			s = "";
			break;
		// 装甲空母
		case "大鳳":
			s = "40 烈風";
			break;
		case "Saratoga Mk.II Mod.2":
			s = "";
			break;
		// 軽空母
		case "鳳翔":
			s = "25 零式52";
			break;
		case "龍驤":
			s = "25 零式52";
			break;
		case "祥鳳":
			s = "25 零式52";
			break;
		case "瑞鳳":
			s = "25 零式52";
			break;
		case "飛鷹":
			s = "25 零式52";
			break;
		case "隼鷹":
			s = "25 零式52";
			break;
		case "春日丸":
			s = "";
			break;
		case "Gambier Bay":
			s = "";
			break;
		// 水上機母艦
		case "千歳":
			s = "10 瑞雲";
			break;
		case "千代田":
			s = "10 瑞雲";
			break;
		case "瑞穂":
			s = "40 水観";
			break;
		case "秋津洲":
			s = "35 二式大艇";
			break;
		case "Commandant Teste":
			s = "";
			break;
		// 重巡洋艦
		case "古鷹":
			s = "65 2号連装砲";
			break;
		case "加古":
			s = "65 2号連装砲";
			break;
		case "青葉":
			s = "";
			break;
		case "衣笠":
			s = "55 3号連装砲";
			break;
		case "妙高":
			s = "70 2号連装砲";
			break;
		case "那智":
			s = "65 2号連装砲";
			break;
		case "足柄":
			s = "65 2号連装砲×3";
			break;
		case "羽黒":
			s = "65 2号連装砲";
			break;
		case "高雄":
			s = "";
			break;
		case "愛宕":
			s = "";
			break;
		case "摩耶":
			s = "75 94式高射";
			break;
		case "鳥海":
			s = "65設 22号改四";
			break;
		case "最上":
			s = "10 瑞雲";
			break;
		case "三隈":
			s = "30 3号連装砲";
			break;
		case "鈴谷":
			s = "";
			break;
		case "熊野":
			s = "";
			break;
		case "利根":
			s = "";
			break;
		case "筑摩":
			s = "";
			break;
		case "Prinz Eugen":
			s = "";
			break;
		case "Zara":
			s = "";
			break;
		case "Zara due":
			s = "";
			break;
		case "Pola":
			s = "";
			break;
		// 航空巡洋艦
		// 軽巡洋艦
		case "天龍":
			s = "";
			break;
		case "龍田":
			s = "";
			break;
		case "球磨":
			s = "";
			break;
		case "多摩":
			s = "";
			break;
		case "北上":
			s = "50 五連装";
			break;
		case "大井":
			s = "50 五連装";
			break;
		case "木曾":
			s = "65 五連装";
			break;
		case "長良":
			s = "";
			break;
		case "五十鈴":
			s = "50 22号電探";
			break;
		case "名取":
			s = "";
			break;
		case "由良":
			s = "77設 水偵11乙";
			break;
		case "鬼怒":
			s = "";
			break;
		case "阿武隈":
			s = "";
			break;
		case "夕張":
			s = "";
			break;
		case "川内":
			s = "60 夜偵";
			break;
		case "神通":
			s = "";
			break;
		case "那珂":
			s = "";
			break;
		case "阿賀野":
			s = "35 22号電探";
			break;
		case "能代":
			s = "35 22号電探";
			break;
		case "矢矧":
			s = "";
			break;
		case "酒匂":
			s = "";
			break;
		case "大淀":
			s = "";
			break;
		// 重雷装巡洋艦
		// 練習巡洋艦
		case "香取":
			s = "";
			break;
		case "鹿島":
			s = "";
			break;
		// 駆逐艦
		// 神風型
		case "神風":
			s = "50 22号電探";
			break;
		case "朝風":
			s = "";
			break;
		case "春風":
			s = "";
			break;
		case "松風":
			s = "";
			break;
		case "旗風":
			s = "";
			break;
		// 睦月型
		case "睦月":
			s = "";
			break;
		case "如月":
			s = "";
			break;
		case "弥生":
			s = "";
			break;
		case "卯月":
			s = "";
			break;
		case "皐月":
			s = "";
			break;
		case "水無月":
			s = "";
			break;
		case "文月":
			s = "";
			break;
		case "長月":
			s = "";
			break;
		case "菊月":
			s = "";
			break;
		case "三日月":
			s = "";
			break;
		case "望月":
			s = "";
			break;
		// 吹雪型
		case "吹雪":
			s = "70 94式高射";
			break;
		case "白雪":
			s = "";
			break;
		case "初雪":
			s = "";
			break;
		case "深雪":
			s = "";
			break;
		case "叢雲":
			s = "";
			break;
		case "磯波":
			s = "";
			break;
		case "浦波":
			s = "";
			break;
		// 綾波型
		case "綾波":
			s = "";
			break;
		case "敷波":
			s = "";
			break;
		case "天霧":
			s = "";
			break;
		case "狭霧":
			s = "";
			break;
		case "朧":
			s = "";
			break;
		case "曙":
			s = "";
			break;
		case "漣":
			s = "";
			break;
		case "潮":
			s = "";
			break;
		// 暁型
		case "暁":
			s = "";
			break;
		case "響":
			s = "";
			break;
		case "Верный":
			s = "";
			break;
		case "雷":
			s = "";
			break;
		case "電":
			s = "";
			break;
		// 初春型
		case "初春":
			s = "";
			break;
		case "子日":
			s = "";
			break;
		case "若葉":
			s = "";
			break;
		case "初霜":
			s = "";
			break;
		// 白露型
		case "白露":
			s = "77戦 22号改四";
			break;
		case "時雨":
			s = "";
			break;
		case "村雨":
			s = "";
			break;
		case "夕立":
			s = "";
			break;
		case "春雨":
			s = "30 1.27cmB";
			break;
		case "五月雨":
			s = "";
			break;
		case "海風":
			s = "30 12.7cmB";
			break;
		case "山風":
			s = "";
			break;
		case "江風":
			s = "30 22号電探";
			break;
		case "涼風":
			s = "";
			break;
		// 朝潮型
		case "朝潮":
			s = "20 10cm高角";
			break;
		case "大潮":
			s = "20 10cm高角";
			break;
		case "満潮":
			s = "20 10cm高角";
			break;
		case "荒潮":
			s = "20 10cm高角";
			break;
		case "朝雲":
			s = "";
			break;
		case "山雲":
			s = "";
			break;
		case "霰":
			s = "20 10cm高角";
			break;
		case "霞":
			s = "20 10cm高角";
			break;
		// 陽炎型
		case "陽炎":
			s = "20 10cm高角";
			break;
		case "不知火":
			s = "20 10cm高角";
			break;
		case "黒潮":
			s = "20 10cm高角";
			break;
		case "親潮":
			s = "";
			break;
		case "初風":
			s = "20 10cm高角";
			break;
		case "雪風":
			s = "";
			break;
		case "天津風":
			s = "20 三式探信";
			break;
		case "時津風":
			s = "";
			break;
		case "浦風":
			s = "";
			break;
		case "磯風":
			s = "";
			break;
		case "浜風":
			s = "30 22号電探";
			break;
		case "谷風":
			s = "";
			break;
		case "野分":
			s = "";
			break;
		case "嵐":
			s = "";
			break;
		case "萩風":
			s = "";
			break;
		case "舞風":
			s = "20 10cm高角";
			break;
		case "秋雲":
			s = "";
			break;
		// 夕雲型
		case "夕雲":
			s = "30 22号電探";
			break;
		case "巻雲":
			s = "30 三式探信";
			break;
		case "風雲":
			s = "30 22号電探";
			break;
		case "長波":
			s = "30 三式探信";
			break;
		case "高波":
			s = "30 22号電探";
			break;
		case "藤波":
			s = "30 22号電探";
			break;
		case "浜波":
			s = "30 22号電探";
			break;
		case "沖波":
			s = "30 22号電探";
			break;
		case "朝霜":
			s = "";
			break;
		case "早霜":
			s = "30 22号電探";
			break;
		case "清霜":
			s = "30 22号電探 三式探信";
			break;
		// 秋月型
		case "秋月":
			s = "40 10cm+高射";
			break;
		case "照月":
			s = "40 10cm+高射";
			break;
		case "涼月":
			s = "55 10cm+高射";
			break;
		case "初月":
			s = "40 10cm+高射";
			break;
		// 島風型
		case "島風":
			s = "";
			break;
		// Z1型
		case "Z1":
			s = "";
			break;
		case "Z1 zwei":
			s = "";
			break;
		case "Z3":
			s = "";
			break;
		case "Z3 zwei":
			s = "";
			break;
		// Maestrale級
		case "Libeccio":
			s = "";
			break;
		// J級
		case "Jervis":
			s = "";
			break;
		// Ташкент級
		case "Ташкент":
			s = "";
			break;
		// John C.Butler級
		case "Samuel B.Roberts":
			s = "";
			break;
		// 海防艦
		// 占守型
		case "占守":
			s = "";
			break;
		case "国後":
			s = "";
			break;
		// 択捉型
		case "択捉":
			s = "";
			break;
		case "松輪":
			s = "";
			break;
		case "佐渡":
			s = "";
			break;
		case "対馬":
			s = "";
			break;
		// 日振型
		case "日振":
			s = "";
			break;
		case "大東":
			s = "";
			break;
		// 補給艦
		case "神威":
			s = "";
			break;
		case "速吸":
			s = "";
			break;
		// 潜水艦
		case "伊168":
			s = "";
			break;
		case "伊8":
			s = "";
			break;
		case "伊19":
			s = "";
			break;
		case "伊26":
			s = "";
			break;
		case "伊58":
			s = "";
			break;
		case "U-511":
			s = "";
			break;
		case "呂500":
			s = "";
			break;
		case "まるゆ":
			s = "";
			break;
		case "Luigi Torelli":
			s = "";
			break;
		case "UIT-25":
			s = "";
			break;
		case "伊504":
			s = "";
			break;
		// 潜水空母
		case "伊401":
			s = "";
			break;
		case "伊13":
			s = "";
			break;
		case "伊14":
			s = "";
			break;
		case "伊400":
			s = "";
			break;
		// その他（揚陸艦・工作艦・潜水母艦）
		case "あきつ丸":
			s = "";
			break;
		case "明石":
			s = "";
			break;
		case "大鯨":
			s = "";
			break;
	}
	return toComparable([s]);
}
function end() { }
