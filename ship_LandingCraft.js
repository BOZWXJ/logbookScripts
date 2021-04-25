load("script/utils.js");
function header()
{
	return ["大発"];
}
function begin(specdiff) { }
function body(ship)
{
	var s = "××";
	var name = ship.name;
	switch (name)
	{
		// 戦艦
		case "長門改二":
			 s = "◯◯";
			 break;
		case "陸奥改二":
			 s = "×◯";
			 break;
		// 軽巡洋艦 兵装実験軽巡 軽(航空)巡洋艦
		case "龍田改二":
			 s = "◯◯";
			 break;
		case "球磨改二":
			 s = "××";
			 break;
		case "球磨改二丁":
			 s = "◯◯";
			 break;
		case "多摩改二":
			 s = "◯◯";
			 break;
		case "由良改二":
			 s = "◯◯";
			 break;
		case "鬼怒改二":
			 s = "◯◯";
			 break;
		case "阿武隈改二":
			 s = "◯◯";
			 break;
		case "夕張改二特":
			 s = "◯◯";
			 break;
		case "能代改二":
			 s = "×◯";
			 break;
		case "Gotland andra":
			 s = "◯×";
			 break;
		// 駆逐艦
		case "睦月改二":
			 s = "◯×";
			 break;
		case "如月改二":
			 s = "◯×";
			 break;
		case "皐月改二":
			 s = "◯◯";
			 break;
		case "文月改二":
			 s = "◯◯";
			 break;
		case "三日月改":
			 s = "◯×";
			 break;
		case "Верный":
			 s = "◯◯";
			 break;
		case "有明改":
			 s = "◯×";
			 break;
		case "白露改二":
			 s = "×◯";
			 break;
		case "村雨改二":
			 s = "◯×";
			 break;
		case "海風改二":
			 s = "◯◯";
			 break;
		case "江風改二":
			 s = "◯×";
			 break;
		case "朝潮改二":
			 s = "××";
			 break;
		case "朝潮改二丁":
			 s = "◯◯";
			 break;
		case "大潮改二":
			 s = "◯◯";
			 break;
		case "荒潮改二":
			 s = "◯◯";
			 break;
		case "霞改二":
		case "霞改二乙":
			 s = "◯◯";
			 break;
		case "満潮改二":
			 s = "◯◯";
			 break;
		case "霰改二":
			 s = "◯◯";
			 break;
		case "黒潮改二":
			 s = "×◯";
			 break;
		case "雪風改二":
			 s = "×◯";
			 break;
		case "巻雲改二":
			 s = "◯×";
			 break;
		case "風雲改二":
			 s = "×◯";
			 break;
		case "沖波改二":
			 s = "×◯";
			 break;
		case "朝霜改二":
			 s = "×◯";
			 break;
		// 水上機母艦
		case "神威改":
			 s = "◯◯";
			 break;
		case "千歳":
		case "千歳改":
		case "千歳甲":
			 s = "◯◯";
			 break;
		case "千代田":
		case "千代田改":
		case "千代田甲":
			 s = "◯◯";
			 break;
		case "瑞穂":
		case "瑞穂改":
			 s = "◯◯";
			 break;
		case "日進":
			 s = "◯×";
			 break;
		case "日進改":
		case "日進改甲":
			 s = "◯◯";
			 break;
		case "秋津洲":
			 s = "××";
			 break;
		case "秋津洲改":
			 s = "◯◯";
			 break;
		case "Commandant Teste":
			 s = "××";
			 break;
		case "Commandant Teste改":
			 s = "◯◯";
			 break;
		// 補給艦
		case "神威":
			 s = "××";
			 break;
		case "神威改母":
			 s = "◯◯";
			 break;
		case "速吸":
			 s = "××";
			 break;
		case "速吸改":
			 s = "◯◯";
			 break;
		// 揚陸艦
		case "神州丸":
		case "神州丸改":
			 s = "◯◯";
			 break;
		case "あきつ丸":
		case "あきつ丸改":
			 s = "◯◯";
			 break;
	}
	return toComparable([s]);
}
function end() { }
