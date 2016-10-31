//Declaring images
function draw_initial(){
  var ctx = document.getElementById('background_canvas').getContext('2d');
  var background = new Image();
  background.onload = function(){
    //ctx.fillStyle = 'rgb(0, 0, 0)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0);
  }
  background.src = 'murica.jpg';
}

function draw_trump(){
  var ctx = document.getElementById('canvas').getContext('2d');
  var donald_img = new Image();
  donald_img.onload = function(){
    ctx.drawImage(donald_img, 0, 0);
    }
  donald_img.src = 'thedonald.png';
  var tupee_img = new Image();
  tupee_img.onload = function(){
    ctx.drawImage(tupee_img, 10, 20, tupee_img.width*1.3, tupee_img.height*1.3);
    }
  tupee_img.src = 'trump_tupee.png';
}

draw_initial();
draw_trump();
