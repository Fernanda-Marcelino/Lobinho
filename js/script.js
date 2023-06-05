var canvas = document.getElementById ('canvas2');
const ctx = canvas.getContext ('2d'); 

//nariz
ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(500,300);
    ctx.lineTo(450,300);
    ctx.moveTo(500,300);
    ctx.lineTo(525,330);
    ctx.lineTo(498,380);
    ctx.lineTo(450,380);
    ctx.lineTo(423,350);
    ctx.lineTo(450,300);
    ctx.fill();
    ctx.stroke();

    //focinho
ctx.fillStyle = "blue";
ctx.lineWidth = 3;
    ctx.moveTo(580,200);
    ctx.lineTo(500,300);
    ctx.moveTo(580,200);
    ctx.lineTo(588,150);
    ctx.moveTo(587,150);
    ctx.lineTo(660,125);
    ctx.moveTo(660,125);
    ctx.lineTo(830,160);
    ctx.moveTo(830,160);
    ctx.lineTo(526,330);
    ctx.moveTo(526,330);
    ctx.lineTo(500,390);
    ctx.fill();
    ctx.stroke();



    
    

