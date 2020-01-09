function updateDates(){
	document.getElementById("currentYear").innerHTML = new Date().getFullYear();
	let lastModif = new Date(document.lastModified);
	let shortDate = lastModif.toLocaleString();
	
	document.getElementById("lastModified").innerHTML = shortDate;
}

 