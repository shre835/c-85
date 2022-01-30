canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
background_image = "concrete-road.jpg";
car_image = "car2.png";
car_x = 10;
car_y = 10;

background_image = "parkingLot.jpg";



function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
    car_imgTag.src =car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, 800, 600);
}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
	
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
}


function up() {
    if (car_y >= 0) {
        car_y = car_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if (car_y <= 500) {
        car_y = car_y + 10;
        uploadBackground();
		uploadgreencar();
    }
}

function left() {
    if (car_x >= 0) {
        car_x = car_x - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if (car_x <= 700) {
        car_x = car_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}