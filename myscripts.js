// JavaScript Document
function show(shown, hidden) {
	alert("cambio");
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	loadXML(this);
	return false;
}

function loadXML() { 
	var lista = new XMLHttpRequest();
	lista.open("GET", "data.xml", true);
	lista.setRequestHeader("Content-Type", "text/xml");
	lista.send(null);
	CargaObjetos(this);
}

function CargaObjetos() {
	alert("abro");
	var i;
	var ii;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Nombre</th><th>Precio</th></tr>";
	var x = xmlDoc.getElementsByTagName("Listado");
	for (i = 0; i <x.length; i++) { 
		var y = xmlDoc.getElementsByTagName("Pieza");
		for (ii = 0; ii <x.length; ii++){
			table += "<tr><td>" +
				y[ii].getElementsByTagName("Nombre")[0].textContent.toString() +
				"</td><td>" +
				y[ii].getElementsByTagName("Precio")[0].textContent.toString() +
				"</td></tr>";
		}
	}
  }
  document.getElementById("demo").innerHTML = table;
}
