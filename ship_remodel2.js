load("script/utils.js");

function header() {
	return ["改造可能"];
}

function begin(specdiff) { }

function body(ship) {
	var afterlv = ship.shipInfo.afterlv;
	var s = "";
	if (afterlv > 0) {
		if (ship.lv >= afterlv) {
			s = "可能";
		} else {
			s = String("Lv" + afterlv);
		}
	}
	return toComparable([s]);
}

function end() { }
