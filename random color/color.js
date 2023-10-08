const color = document.getElementById("color")
const start= document.getElementById("start")
const stop = document.getElementById("stop")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
let inter;
  const stopMe = function(str){
color.style.background=getRandomColor();
  }

  start.addEventListener("click",function(e){
    if(!inter){
          inter = setInterval(stopMe,2000);
    }
  
  })

  stop.addEventListener("click",function(e){
clearInterval(inter);
inter = null;
  })
  