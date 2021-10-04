var dateArr = document.forms["formulaire"].elements["dateArr"];
var dateDep = document.forms["formulaire"].elements["dateDep"];
var jours = document.forms["formulaire"].elements["jours"];

function calc() {
	date1 = new Date(dateArr.value);
	date2 = new Date(dateDep.value);
	if (date1<date2) {
		jours.value=((date2 - date1)/(3600*1000*24)).toString();
		jours.style="color:black;";
	}
	else {
		dateDep.value='';
		jours.value="Arrivée après le départ !";
		jours.style="color:red;";
	}
}