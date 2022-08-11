var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent =  body.style.background + ";"
}

// click, mouseenter, keypress
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// add listener to button
var button = document.querySelector(".btn");

function setRandomGradient() {
    //randomly chose two colours
    var colorArray = [color1, color2]
    for(i=0; i < 2; i++) {
        var randomColor = "#"+Math.round((Math.random()) * 0xffffff).toString(16);
        colorArray[i].value = randomColor;
    }

    setGradient();
}

button.addEventListener("click", setRandomGradient);