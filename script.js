var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorand = document.querySelector(".random");
var body = document.getElementById("gradient");

function updateBackgroundGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value + ","+color2.value+")";
	css.textContent = body.style.background + ";"
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomBackground(){
	color1.value=getRandomColor();
	color2.value=getRandomColor();
	updateBackgroundGradient();
}

color1.addEventListener("input",updateBackgroundGradient);
color2.addEventListener("input", updateBackgroundGradient);
colorand.addEventListener("click",randomBackground);