// JavaScript Document
function show(shown, hidden) {
	alert("cambio");
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      CargaObjetos(this);
    }
  };
  xmlhttp.open("GET", "data.xml", true);
  xmlhttp.send();
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
				y[ii].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue +
				"</td><td>" +
				y[ii].getElementsByTagName("Precio")[0].childNodes[0].nodeValue +
				"</td></tr>";
		}
	}
  }
  document.getElementById("demo").innerHTML = table;
}
