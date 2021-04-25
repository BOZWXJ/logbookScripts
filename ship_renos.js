load("script/utils.js");
ShipParameters = Java.type("logbook.dto.ShipParameters");

function header() {
	return ["改修"];
}

function begin(specdiff) { }

function body(ship) {
	var param = new ShipParameters();
	// 成長の余地 = (装備なしのMAX) + (装備による上昇分) - (装備込の現在値)
	param.add(ship.max);
	param.add(ship.slotParam);
	param.subtract(ship.param);
	var s = param.karyoku + param.raisou + param.taiku + param.soukou;
	if ( s <= 0 )  {
		s = 0;
	}
	return toComparable([ s ]);
}

function end() { }
