
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

    var val = document.getElementsByClassName("colours");

        for (var i = 0; i < val.length; i++) {
            val[i].addEventListener("click", checkId)
        }


    
    }

function checkId () {

    if (this.id === 'blue') {

        document.getElementById("myAnimation").innerHTML = "GOT THE BLUES?";
        document.getElementById("myAnimation").style.color = "blue";
        document.getElementById("easel").style.backgroundColor = 'blue';
        document.getElementById("header").style.backgroundColor = 'blue';


    }  else if (this.id === 'green') {
        
        document.getElementById("myAnimation").innerHTML = "ENVIOUS";
        document.getElementById("myAnimation").style.color = "rgb(21, 231, 21)";
        document.getElementById("easel").style.backgroundColor = "rgb(21, 231, 21)";
        document.getElementById("header").style.backgroundColor = "rgb(21, 231, 21)";

    }  else if (this.id === 'red') {

        document.getElementById("myAnimation").innerHTML = "REDDY?";
        document.getElementById("myAnimation").style.color = "rgb(231, 46, 21)";
        document.getElementById("easel").style.backgroundColor = "rgb(231, 46, 21)";
        document.getElementById("header").style.backgroundColor = "rgb(231, 46, 21)";

    }  else if (this.id === 'purple') {

        document.getElementById("myAnimation").innerHTML = "PURPLE RAIN";
        document.getElementById("myAnimation").style.color = "rgb(172, 18, 233)";
        document.getElementById("easel").style.backgroundColor = "rgb(172, 18, 233)";
        document.getElementById("header").style.backgroundColor = "rgb(172, 18, 233)";

    }  else if (this.id === 'pink') {

        document.getElementById("myAnimation").innerHTML = "PRETTY IN PINK!";
        document.getElementById("myAnimation").style.color = "rgb(231, 21, 186)";
        document.getElementById("easel").style.backgroundColor = "rgb(231, 21, 186)";
        document.getElementById("header").style.backgroundColor = "rgb(231, 21, 186)";

    }  else if (this.id === 'yellow') {

        document.getElementById("myAnimation").innerHTML = "SHINING BRIGHT";
        document.getElementById("myAnimation").style.color = "yellow";
        document.getElementById("easel").style.backgroundColor = "yellow";
        document.getElementById("header").style.backgroundColor = "yellow";

    } else if (this.id === "eraser") {

        document.getElementById("myAnimation").innerHTML = "ALL GONE!";
        document.getElementById("myAnimation").style.color = "white";
        document.getElementById("easel").style.backgroundColor = "white";
        document.getElementById("header").style.backgroundColor = "white";
    }

}


