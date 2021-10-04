var dollar = document.forms["formulaire"].elements["dollar"];
var euro = document.forms["formulaire"].elements["euro"];
var yuan = document.forms["formulaire"].elements["yuan"];
console.log("i'm here");
var selector = "dollar";
var baseValue = 0;
function setEuro() {
	if (euro.value.match("^[0-9]+\.*[0-9]*$")) {
		selector="euro";
		console.log("euro ok");
	}
	else {
		euro.value="";
	}	
}
function setDollar() {
	if (dollar.value.match("^[0-9]+\.*[0-9]*$")) {
		selector="dollar";
		console.log("dollar ok");
	}
	else {
		dollar.value="";
	}	
}
function setYuan() {
	if (yuan.value.match("^[0-9]+\.*[0-9]*$")) {
	selector="yuan";
	console.log("yuan ok");
	}
	else {
		yuan.value="";
	}
}
function convertir() {
	switch (selector) {
		case "euro":
			baseValue = parseFloat(euro.value);
			yuan.value = (baseValue * 7.85138).toFixed(2);
			dollar.value = (baseValue * 1.10525).toFixed(2);
			break;
		case "dollar":
			baseValue = parseFloat(dollar.value);
			yuan.value = (baseValue * 7.10635).toFixed(2);
			euro.value = (baseValue * 0.90503).toFixed(2);
			break;
		case "yuan":
			baseValue = parseFloat(yuan.value);
			euro.value = (baseValue * 0.12735).toFixed(2);
			dollar.value = (baseValue * 0.14072).toFixed(2);
			break;
	}
}