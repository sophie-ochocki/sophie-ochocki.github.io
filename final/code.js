var painter = document.getElementById("c").getContext("2d");
var platforms = [ [160, 360, 70, 20], [80, 320, 40, 20], [170, 280, 20, 20], 
[220, 280, 20, 20],[270, 280, 20, 20], [330, 240, 70, 20], [230, 190, 50, 20], 
[190, 160, 20, 20], [150, 130, 20, 20], [110, 100, 20, 20], [0, 70, 70, 20],
[120, 25, 200, 20], [320, 100, 80, 20]];
var x = 190;
var y = 360;
var lasty = y;
var dx = 2;
var g = 0.5;
var dy = 10;
var jump = -8;
var timer;

var isLeft = false;
var isRight = false;
var isUp = false;
var allowJump = false;

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

drawBackground();
drawSquare(x, y);

function onKeyUp(e){
    if (e.key === 'ArrowLeft'){
       isLeft = false;
    } else if (e.key === 'ArrowRight'){
        isRight = false;
    } else if (e.key === 'ArrowUp'){
        isUp = false;
    }
}

function onKeyDown(e){
    if (e.key === 'ArrowLeft'){
       isLeft = true;
    } else if (e.key === 'ArrowRight'){
        isRight = true;
    } else if (e.key === 'ArrowUp'){
        isUp = true;
    } else if (e.key === 'Enter'){
        onClick();
    }
}

function onClick(){
    timer = setInterval(drawFrame, 20);
}

function drawFrame(){
    if(isUp && allowJump){
        dy += jump;
        allowJump = false;
    }

    
    lasty = y;
    dy += g;
    y += dy;

    if (isOver()) {
        // show game is over, clear the timer
        drawGameOver();
        clearInterval(timer);
        return;
    }

    if (youWin()) {
        drawWin();
        clearInterval(timer);
        return;
    }
    //update the square
    if(isLeft){
        x -= dx;
    }
    if(isRight){
        x += dx;
    }

    if (y > 360 - 20 && x > 140 && x < 210){ //BOUNDARIES FOR PLATFORMS
        y = 360 - 20;
        dy = 0;
        allowJump = true;
    }


    
    drawBackground();
    drawSquare(x, y);
    drawLava();
    drawDoor();
    drawPlatforms();
    updatePlatforms();

}

function drawBackground(){
    painter.fillStyle = "#AAAAAA";
    painter.fillRect(0, 0, 400, 400);
}

function drawSquare(x, y){
    painter.fillStyle = "#FF0000";
    if (x < 0 && x > -20){
        painter.fillRect(0, y, 20+x, 20);//left
        painter.fillRect(400+x, y, -x, 20);//right
    }
    if (x > 400-20 && x < 400){
        painter.fillRect(x ,y, 400-x, 20);//right
        painter.fillRect(0, y, 20+x-400, 20);//left
    }

    painter.fillRect(x, y, 20, 20);
}

function drawPlatforms(){
    painter.fillStyle = "#17202A";
    for (var i = 0; i < platforms.length; ++i){
        var platform = platforms[i];
        //drawing platforms
        painter.fillRect (platform[0], platform[1], platform[2], platform[3]);
    }
}

function drawDoor(){
    painter.fillStyle = "#EB49D0"
    painter.fillRect(320, 60, 20, 40);
}


function drawLava(){
    painter.fillStyle = "#F39C12";
    painter.fillRect(0, 380, 400, 20);
}

function updatePlatforms(){
    
    for (var i = 0; i < platforms.length; ++i){
        var platform = platforms[i];
    if (y + 20 >= platform[1] && lasty + 20 <= platform[1] &&
        x >= platform[0]-platform[2]/2 && x <= platform[0]+platform[2]){ //BOUNDARIES FOR PLATFORMS
        y = platform[1] - platform[3];
        dy = 0;
        allowJump = true;
    }
}
}

function isOver(){
    if (y >= 390 && x>=0 && x<=400){
        return true;
    }
    return false;

}

function youWin(){
    if(y<=100 && y>=60 && x<=340 && x>=320){
        return true;
    }
    return false;
}

 
function drawGameOver () {
    painter.font = "50px Arial";
    painter.fillStyle = "#FFFFFF";
    painter.textBaseLine = "top";
    painter.textAlign = "center";
    painter.fillText('GAME OVER!', 200, 200);
}

function drawWin(){
    painter.font = "50px Arial";
    painter.fillStyle = "#FFFFFF";
    painter.textBaseLine = "top";
    painter.textAlign = "center";
    painter.fillText('YOU WIN!', 200, 200);
}












