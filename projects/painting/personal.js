
//When the DOM content has been loaded the start
//function will run

document.addEventListener('DOMContentLoaded', start)

//The start function will run a function called
//addEventListener

function start() {
    addEventListener()
 }
 
//The function addEventListener will then run
//to add a click event to the buttons

 function addEventListener () {

    var val = document.getElementsByTagName("p");

        for (var i = 0; i < val.length; i++) {
            val[i].addEventListener("click", checkClass)
        }
    }

function checkClass () {

    if (this.className === 'blue') {
        document.getElementById("easel").style.backgroundColor = "blue";

    }  else if (this.className === 'green') {
        document.getElementById("easel").style.backgroundColor = "rgb(21, 231, 21)";

    }  else if (this.className === 'red') {
        document.getElementById("easel").style.backgroundColor = "rgb(231, 46, 21)";

    }  else if (this.className === 'purple') {
        document.getElementById("easel").style.backgroundColor = "rgb(172, 18, 233)";

    }  else if (this.className === 'pink') {
        document.getElementById("easel").style.backgroundColor = "rgb(231, 21, 186)";

    }  else if (this.className === 'yellow') {
        document.getElementById("easel").style.backgroundColor = "yellow";
    }

}