var score = 0;
var myInterval = setInterval(myTimer, 100);

function myTimer() {
    score += 10;
    console.log(score);
    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
