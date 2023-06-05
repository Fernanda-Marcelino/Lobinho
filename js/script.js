var canvas = document.getElementById ('canvas2');
const ctx = canvas.getContext ('2d'); 

//nariz
ctx.fillStyle = "black";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.lineTo(450,500);
    ctx.moveTo(500,500);
    ctx.lineTo(525,530);
    ctx.lineTo(498,580);
    ctx.lineTo(450,580);
    ctx.lineTo(425,550);
    ctx.lineTo(450,500);
    ctx.fill();
    ctx.stroke();

//focinho lado direito
ctx.fillStyle = "white";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(500,500);
    ctx.lineTo(560,400);
    ctx.moveTo(560,355);
    ctx.lineTo(560,400); 
    ctx.moveTo(558,355);
    ctx.lineTo(610,325);
    ctx.moveTo(610,325);
    ctx.lineTo(790,340);
    ctx.moveTo(790,340);
    ctx.lineTo(525,530);
    ctx.moveTo(525,530);
    ctx.lineTo(500,500);
    ctx.fill();
    ctx.stroke();

//focinho lado esquerdo 
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(450,500);
    ctx.lineTo(500,400);
    ctx.moveTo(500,400);
    ctx.lineTo(500,350);
    ctx.moveTo(500,350);
    ctx.lineTo(450,335);
    ctx.moveTo(450,335);
    ctx.lineTo(420,335);
    ctx.moveTo(420,335);
    ctx.lineTo(420,450);
    ctx.moveTo(420,450);
    ctx.lineTo(450,500);
    ctx.fill();
    ctx.stroke();

//testa
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
   ctx.moveTo(420,335);
    ctx.lineTo(445,300);
    ctx.moveTo(445,300);
    ctx.lineTo(520,250);
    ctx.moveTo(520,250);
    ctx.lineTo(540,218);
    ctx.moveTo(540,218);
    ctx.lineTo(617,210);
    ctx.moveTo(617,210);
    ctx.lineTo(615,235);
    ctx.moveTo(690,290);
    ctx.lineTo(615,235);
    ctx.moveTo(690,290);
    ctx.lineTo(790,340);
    ctx.fill();
    ctx.stroke();


    
    

