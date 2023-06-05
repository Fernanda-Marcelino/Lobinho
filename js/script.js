var canvas = document.getElementById ('canvas2');
const ctx = canvas.getContext ('2d'); 

//nariz
ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.lineTo(450,500);
    ctx.moveTo(500,500);
    ctx.lineTo(525,530);
    ctx.lineTo(498,580);
    ctx.lineTo(450,580);
    ctx.lineTo(423,550);
    ctx.lineTo(450,500);
    ctx.fill();
    ctx.stroke();

    //focinho
ctx.fillStyle = "white";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.lineTo(500,500);
    ctx.lineTo(588,350);
    ctx.lineTo(660,325);
    ctx.lineTo(830,360);
    ctx.lineTo(525,530);
    ctx.lineTo(500,500);
    ctx.fill();
    ctx.stroke();



    
    

