var canvas = document.getElementById ('canvas2');
const ctx = canvas.getContext ('2d'); 

ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(400,400);
    ctx.quadraticCurveTo(200, 500,200,100);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(400,400);
    ctx.quadraticCurveTo(750, 150,200,100);
    ctx.fill();
    ctx.stroke();

