var snake
var apple;
var bStart;
var bMute;
var bRestart;
var eatingsound;
var mute = false;

function preload() {
 eatingsound = loadSound('assets/eatsound.mp3');
}

function setup() {
  createCanvas(600,600);
  eatingsound.setVolume(0.1);
  snake = new Snake();
  apple = new Apple();
  apple.picklocation();
  muteButton();
  startButton();
  frameRate(6);
}

function restart(){
  createCanvas(600,600);
  muteButton();
  snake = new Snake();
  apple = new Apple();
  apple.picklocation();
  frameRate(6);
  snake.velocity = 20;
}

function draw() {
	background(0, 128, 128);
	snake.update();
	snake.check();
	snake.eat(apple);
	snake.show();
	apple.show();
	textSize(20);
	fill('white');
	text('Score:', 450, 30);
	fill('red');
	text((snake.score-1)*20, 515, 30);
	snake.last = snake.direction; // This fixes a bug where if you spamed the keys the snake could turn to the oposite direction and as a result you lose

}

function keyPressed(){
	if ( keyCode === RIGHT_ARROW && snake.direction != 1 && snake.last != 1) {
		snake.direction = 0;
	}
	else if ( keyCode === LEFT_ARROW && snake.direction != 0 && snake.last != 0) {
		snake.direction = 1;
	}
	else if ( keyCode === DOWN_ARROW && snake.direction != 3 && snake.last != 3) {
		snake.direction = 2;
	}
	else if ( keyCode === UP_ARROW && snake.direction != 2 && snake.last != 2) {
		snake.direction = 3;
	}
}

function muteButton() {
	bMute = createButton('MUTE');
	bMute.position(0, 0);
	bMute.size(50,20);
	bMute.mousePressed(function() {
	    mute = !mute;
	    if (mute){
	    	eatingsound.setVolume(0);
	    }
	    else{
	    	eatingsound.setVolume(0.3);
	    }
	});
}

function startButton() {
	bStart = createButton('Click here to START!');
	bStart.position(150, 300);
	bStart.size(250,50);
	bStart.mousePressed(function() {
	    snake.velocity = 20;
	    bStart.hide();
	});
}