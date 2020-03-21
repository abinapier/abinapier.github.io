function showArticle(){
	let paragraphs = document.getElementsByClassName("full");
	for(var i =0; i<paragraphs.length; i++){
		paragraphs[i].style.display = "block";
	}
	document.getElementsByClassName("preview")[0].style.display="none";
}
