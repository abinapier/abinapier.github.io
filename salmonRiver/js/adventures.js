function showInfo(e){
	const triggerDiv = e.currentTarget;
	const infoDiv = triggerDiv.nextElementSibling;
	infoDiv.classList.toggle("hide");
}