function toggleMenu(){
	document.getElementsByTagName('ul')[0].classList.toggle("hide");
	document.getElementsByTagName('h1')[0].classList.toggle("hide");
}

function goto(page){
	window.location.href = page;
}