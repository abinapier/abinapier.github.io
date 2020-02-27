function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("hide");
	document.getElementById("hamburger").classList.toggle("hide");
	document.getElementById("close").classList.toggle("hide");
}

function adjustSevereLabel(rating) {
    document.getElementById("severeValue").innerHTML = rating;
}

document.querySelector("form").reset();
