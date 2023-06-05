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
    ctx.lineTo(750,350);
    ctx.moveTo(750,350);
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
    ctx.lineTo(750,350);
    ctx.fill();
    ctx.stroke();

//orelha esquerda
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(445,300);
    ctx.lineTo(420,235);
    ctx.moveTo(420,235);
    ctx.lineTo(425,160);
    ctx.moveTo(425,160);
    ctx.lineTo(450,150);
    ctx.moveTo(450,150);
    ctx.lineTo(540,218);
    ctx.fill();
    ctx.stroke();

//orelha direita 
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(617,210);
    ctx.lineTo(660,140);
    ctx.moveTo(660,140);
    ctx.lineTo(690,130);
    ctx.moveTo(690,130);
    ctx.lineTo(740,190);
    ctx.moveTo(740,190);
    ctx.lineTo(750,350);
    ctx.fill();
    ctx.stroke();

//queixo
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(498,580);
    ctx.lineTo(560,585);
    ctx.moveTo(560,585);
    ctx.lineTo(600,565);
    ctx.moveTo(600,565);
    ctx.lineTo(670,415);
    ctx.moveTo(600,565);
    ctx.lineTo(730,570);
    ctx.moveTo(730,570);
    ctx.lineTo(750,350);
    ctx.moveTo(750,350);
    ctx.lineTo(830,500);
    ctx.moveTo(830,500);
    ctx.lineTo(630,640);
    ctx.moveTo(630,640);
    ctx.lineTo(450,580);
    ctx.moveTo(560,585);
    ctx.lineTo(508,600);
    ctx.fill();
    ctx.stroke();

//pescoço
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(450,580);
    ctx.lineTo(500,720);
    ctx.moveTo(500,720);
    ctx.lineTo(640,820);
    ctx.moveTo(640,820);
    ctx.lineTo(630,640);
    ctx.moveTo(640,820);
    ctx.lineTo(830,500);
    ctx.moveTo(830,500);
    ctx.lineTo(870,370);
    ctx.moveTo(870,370);
    ctx.lineTo(745,290);
    ctx.fill();
    ctx.stroke();

//olho esquerdo
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(500,365);
    ctx.lineTo(470,360);
    ctx.moveTo(470,360);
    ctx.lineTo(500,385);
    ctx.fill();
    ctx.stroke();

//olho direito
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(590,370);
    ctx.lineTo(630,370);
    ctx.moveTo(628,370);
    ctx.lineTo(610,385);
    ctx.moveTo(610,385);
    ctx.lineTo(580,395);
    ctx.moveTo(580,395);
    ctx.lineTo(590,370);
    ctx.fill();
    ctx.stroke();