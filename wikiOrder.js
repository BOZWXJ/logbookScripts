﻿function shipsList() {
	var ships = [
		// 戦艦  
		"金剛", "金剛改", "金剛改二",
		"比叡", "比叡改", "比叡改二",
		"榛名", "榛名改", "榛名改二",
		"霧島", "霧島改", "霧島改二",
		"扶桑",
		"山城",
		"伊勢",
		"日向",
		"長門", "長門改", "長門改二",
		"陸奥", "陸奥改",
		"大和", "大和改",
		"武蔵", "武蔵改", "武蔵改二",
		"Bismarck", "Bismarck改", "Bismarck zwei", "Bismarck drei",
		"Littorio", "Italia",
		"Roma", "Roma改",
		"Iowa", "Iowa改",
		"Warspite", "Warspite改",
		"Гангут", "Октябрьская революция", "Гангут два",
		"Richelieu", "Richelieu改",
		// 航空戦艦  
		"扶桑改", "扶桑改二",
		"山城改", "山城改二",
		"伊勢改",
		"日向改",
		// 正規空母  
		"赤城", "赤城改",
		"加賀", "加賀改",
		"蒼龍", "蒼龍改", "蒼龍改二",
		"飛龍", "飛龍改", "飛龍改二",
		"翔鶴", "翔鶴改", "翔鶴改二",
		"瑞鶴", "瑞鶴改", "瑞鶴改二",
		"雲龍", "雲龍改",
		"天城", "天城改",
		"葛城", "葛城改",
		"Graf Zeppelin", "Graf Zeppelin改",
		"Aquila", "Aquila改",
		"Saratoga", "Saratoga改", "Saratoga Mk.II",
		"Ark Royal", "Ark Royal改",
		"Intrepid", "Intrepid改",
		// 装甲空母  
		"翔鶴改二甲",
		"瑞鶴改二甲",
		"大鳳", "大鳳改",
		"Saratoga Mk.II Mod.2",
		// 軽空母  
		"鳳翔", "鳳翔改",
		"龍驤", "龍驤改", "龍驤改二",
		"龍鳳", "龍鳳改",
		"祥鳳", "祥鳳改",
		"瑞鳳", "瑞鳳改", "瑞鳳改二", "瑞鳳改二乙",
		"飛鷹", "飛鷹改",
		"隼鷹", "隼鷹改", "隼鷹改二",
		"春日丸", "大鷹", "大鷹改", "大鷹改二",
		"千歳航", "千歳航改", "千歳航改二",
		"千代田航", "千代田航改", "千代田航改二",
		"鈴谷航改二",
		"熊野航改二",
		"Gambier Bay", "Gambier Bay改",
		// 水上機母艦  
		"神威改",
		"千歳", "千歳改", "千歳甲",
		"千代田", "千代田改", "千代田甲",
		"瑞穂", "瑞穂改",
		"秋津洲", "秋津洲改",
		"Commandant Teste", "Commandant Teste改",
		// 重巡洋艦  
		"古鷹", "古鷹改", "古鷹改二",
		"加古", "加古改", "加古改二",
		"青葉", "青葉改",
		"衣笠", "衣笠改", "衣笠改二",
		"妙高", "妙高改", "妙高改二",
		"那智", "那智改", "那智改二",
		"足柄", "足柄改", "足柄改二",
		"羽黒", "羽黒改", "羽黒改二",
		"高雄", "高雄改",
		"愛宕", "愛宕改",
		"摩耶", "摩耶改", "摩耶改二",
		"鳥海", "鳥海改", "鳥海改二",
		"最上",
		"三隈",
		"鈴谷",
		"熊野",
		"利根", "利根改",
		"筑摩", "筑摩改",
		"Prinz Eugen", "Prinz Eugen改",
		"Zara", "Zara改", "Zara due",
		"Pola", "Pola改",
		// 航空巡洋艦  
		"最上改",
		"三隈改",
		"鈴谷改", "鈴谷改二",
		"熊野改", "熊野改二",
		"利根改二",
		"筑摩改二",
		// 軽巡洋艦  
		"天龍", "天龍改",
		"龍田", "龍田改", "龍田改二",
		"球磨", "球磨改",
		"多摩", "多摩改", "多摩改二",
		"北上",
		"大井",
		"木曾", "木曾改",
		"長良", "長良改",
		"五十鈴", "五十鈴改", "五十鈴改二",
		"名取", "名取改",
		"由良", "由良改", "由良改二",
		"鬼怒", "鬼怒改", "鬼怒改二",
		"阿武隈", "阿武隈改", "阿武隈改二",
		"夕張", "夕張改",
		"川内", "川内改", "川内改二",
		"神通", "神通改", "神通改二",
		"那珂", "那珂改", "那珂改二",
		"阿賀野", "阿賀野改",
		"能代", "能代改",
		"矢矧", "矢矧改",
		"酒匂", "酒匂改",
		"大淀", "大淀改",
		// 重雷装巡洋艦  
		"北上改", "北上改二",
		"大井改", "大井改二",
		"木曾改二",
		// 練習巡洋艦  
		"香取", "香取改",
		"鹿島", "鹿島改",
		// 駆逐艦  
		// 神風型  
		"神風", "神風改",
		"朝風", "朝風改",
		"春風", "春風改",
		"松風", "松風改",
		"旗風", "旗風改",
		// 睦月型  
		"睦月", "睦月改", "睦月改二",
		"如月", "如月改", "如月改二",
		"弥生", "弥生改",
		"卯月", "卯月改",
		"皐月", "皐月改", "皐月改二",
		"水無月", "水無月改",
		"文月", "文月改", "文月改二",
		"長月", "長月改",
		"菊月", "菊月改",
		"三日月", "三日月改",
		"望月", "望月改",
		// 吹雪型  
		"吹雪", "吹雪改", "吹雪改二",
		"白雪", "白雪改",
		"初雪", "初雪改",
		"深雪", "深雪改",
		"叢雲", "叢雲改", "叢雲改二",
		"磯波", "磯波改",
		"浦波", "浦波改",
		// 綾波型  
		"綾波", "綾波改", "綾波改二",
		"敷波", "敷波改",
		"天霧", "天霧改",
		"狭霧", "狭霧改",
		"朧", "朧改",
		"曙", "曙改",
		"漣", "漣改",
		"潮", "潮改", "潮改二",
		// 暁型  
		"暁", "暁改", "暁改二",
		"響", "響改", "Верный",
		"雷", "雷改",
		"電", "電改",
		// 初春型  
		"初春", "初春改", "初春改二",
		"子日", "子日改",
		"若葉", "若葉改",
		"初霜", "初霜改", "初霜改二",
		// 白露型  
		"白露", "白露改",
		"時雨", "時雨改", "時雨改二",
		"村雨", "村雨改", "村雨改二",
		"夕立", "夕立改", "夕立改二",
		"春雨", "春雨改",
		"五月雨", "五月雨改",
		"海風", "海風改",
		"山風", "山風改",
		"江風", "江風改", "江風改二",
		"涼風", "涼風改",
		// 朝潮型  
		"朝潮", "朝潮改", "朝潮改二", "朝潮改二丁",
		"大潮", "大潮改", "大潮改二",
		"満潮", "満潮改", "満潮改二",
		"荒潮", "荒潮改", "荒潮改二",
		"朝雲", "朝雲改",
		"山雲", "山雲改",
		"霰", "霰改", "霰改二",
		"霞", "霞改", "霞改二", "霞改二乙",
		// 陽炎型  
		"陽炎", "陽炎改", "陽炎改二",
		"不知火", "不知火改",
		"黒潮", "黒潮改",
		"親潮", "親潮改",
		"初風", "初風改",
		"雪風", "雪風改",
		"天津風", "天津風改",
		"時津風", "時津風改",
		"浦風", "浦風改", "浦風丁改",
		"磯風", "磯風改", "磯風乙改",
		"浜風", "浜風改", "浜風乙改",
		"谷風", "谷風改",
		"野分", "野分改",
		"嵐", "嵐改",
		"萩風", "萩風改",
		"舞風", "舞風改",
		"秋雲", "秋雲改",
		// 夕雲型  
		"夕雲", "夕雲改",
		"巻雲", "巻雲改",
		"風雲", "風雲改",
		"長波", "長波改", "長波改二",
		"高波", "高波改",
		"藤波", "藤波改",
		"浜波", "浜波改",
		"沖波", "沖波改",
		"朝霜", "朝霜改",
		"早霜", "早霜改",
		"清霜", "清霜改",
		// 秋月型  
		"秋月", "秋月改",
		"照月", "照月改",
		"涼月", "涼月改",
		"初月", "初月改",
		// 島風型  
		"島風", "島風改",
		// Z1型  
		"Z1", "Z1改", "Z1 zwei",
		"Z3", "Z3改", "Z3 zwei",
		// Maestrale級  
		"Libeccio", "Libeccio改",
		// J級  
		"Jervis", "Jervis改",
		// Ташкент級  
		"Ташкент", "Ташкент改",
		// John C.Butler級  
		"Samuel B.Roberts", "Samuel B.Roberts改",
		// 海防艦  
		// 占守型  
		"占守", "占守改",
		"国後", "国後改",
		// 択捉型  
		"択捉", "択捉改",
		"松輪", "松輪改",
		"佐渡", "佐渡改",
		"対馬", "対馬改",
		// 日振型  
		"日振", "日振改",
		"大東", "大東改",
		// 補給艦  
		"神威", "神威改母",
		"速吸", "速吸改",
		// 潜水艦  
		"伊168", "伊168改",
		"伊8",
		"伊19",
		"伊26",
		"伊58",
		"U-511", "U-511改", "呂500",
		"まるゆ", "まるゆ改",
		"Luigi Torelli", "Luigi Torelli改", "UIT-25", "伊504",
		// 潜水空母  
		"伊8改",
		"伊19改",
		"伊26改",
		"伊58改",
		"伊401", "伊401改",
		"伊13", "伊13改",
		"伊14", "伊14改",
		"伊400", "伊400改",
		// その他（揚陸艦・工作艦・潜水母艦）  
		"あきつ丸", "あきつ丸改",
		"明石", "明石改",
		"大鯨",
	];
	return ships
}
