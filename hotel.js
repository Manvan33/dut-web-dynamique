var formulaire = document.forms["formulaire"];
var mail = formulaire.elements["mail"];
var cmail = formulaire.elements["confirm_mail"];
var dateA = formulaire.elements["date_arrivee"];
var dateD = formulaire.elements["date_depart"];
var jours = formulaire.elements["nb_nuits"];

function confirmMail() {
	if (mail.value.localeCompare(cmail.value)) {
		cmail.value = "";
		cmail.placeholder = "Adresse mails différentes";
		cmail.style="color:red;"
	}
	else {
		cmail.style="color:black;"
	}
}
function calcDate() {
	date1 = new Date(dateA.value);
	date2 = new Date(dateD.value);
	if (date1<date2) {
		jours.value=((date2 - date1)/(3600*1000*24)).toString();
		jours.style="color:black";
	}
	else {
		dateD.value='';
		jours.value="Arrivée après le départ !";
		jours.style="color:red";
	}
}

function chambres() {
	radioEnable(formulaire.elements["type_chambre"].selectedIndex+1);
}
function radioEnable(n) {
	for (var i = 0; i<4; i++) {
		if (i < n) {
			formulaire.elements["nb_personnes"][i].disabled=false;
		}
		else {
			formulaire.elements["nb_personnes"][i].disabled=true;
			formulaire.elements["nb_personnes"][i].checked=false;
		}
	}
}