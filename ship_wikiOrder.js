load("script/utils.js");
load("script/wikiOrder.js");
Ship = Java.type("logbook.internal.Ship");

function header() {
	return [ "Wiki順" ];
}

function begin(specdiff) {
	var ships = shipsList();
	shipOrder = {};
	for(i = 0; i < ships.length; i++){
		shipOrder[ships[i]] = i + 1;
	}
}

function body(ship) {
	var num = 999;
	var name = ship.name;
	if(shipOrder[name]){
		num = shipOrder[name];
	}
	return toComparable([ num | 0 ]);
}

function end() { }
