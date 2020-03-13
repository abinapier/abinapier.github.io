function showBanner(){
	let date = new Date();
	let day = date.getDay();
	if(day==5){
		document.getElementById("banner").style.display="block";
	}
}

function showArticle(){
	let paragraphs = document.getElementsByClassName("full");
	for(var i =0; i<paragraphs.length; i++){
		paragraphs[i].style.display = "block";
	}
	document.getElementsByClassName("preview")[0].style.display="none";
}

showBanner();