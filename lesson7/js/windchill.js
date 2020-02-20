let weatherValues = document.querySelectorAll(".right");
let wind = weatherValues[4].innerHTML;
let temp = weatherValues[1].innerHTML;
wind = wind.match(/(\d+)/)[0];
temp = temp.match(/(\d+)/)[0];
if(wind > 3 && temp <= 50){
	let windChill = 35.74 + 0.6215*temp - 35.75*(Math.pow(wind, 0.16))+ 0.4275*temp*Math.pow(wind, 0.16);
	windChill = windChill.toFixed(2)+" &deg;F";
	weatherValues[2].innerHTML = windChill;
}else{
	weatherValues[2].innerHTML = "N/A"
}