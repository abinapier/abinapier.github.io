let weatherValues = document.getElementsByClassName("right");
let wind = weatherValues[5].textContent;
let temp = weatherValues[1].textContent;
windNum = wind.match(/(\d*)?(\d\.)?\d+/)[0];
tempNum = temp.match(/(\d*)?(\d\.)?\d+/)[0];
if(windNum > 3 && tempNum <= 50){
	let windChill = 35.74 + 0.6215*tempNum - 35.75*(Math.pow(windNum, 0.16))+ 0.4275*tempNum*Math.pow(windNum, 0.16);
	windChill = windChill.toFixed(2)+" &deg;F";
	weatherValues[3].innerHTML = windChill;
}else{
	weatherValues[3].innerHTML = "N/A"
}