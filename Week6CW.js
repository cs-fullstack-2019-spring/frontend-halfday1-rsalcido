var btn1=document.getElementById("btn1");

var button = document.getElementById("Player1Counter");
var count = 0;

button.addEventListener("click", buttonClickFunction);

function buttonClickFunction() {
    console.log("Clicked button");
    count += 1;
    btn1.innerText = "" + count;
};

var btn2=document.getElementById("btn2");

var button2 = document.getElementById("Player2Counter");
var count2 = 0;
button2.addEventListener("click", buttonClickFunction2);

function buttonClickFunction2() {
    console.log("Clicked button");
    count += 1;
    btn2.innerText = "" + count;
};

$("#btn5").onclick(background, red);