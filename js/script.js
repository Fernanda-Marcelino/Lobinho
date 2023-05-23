var canvas = document.getElementById ('canvas2');
const ctx = canvas.getContext ('2d'); 

ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(200,300);
    ctx.quadraticCurveTo(200,200,200,200);
    ctx.fill();
    ctx.stroke();