function Apple() {
	this.picklocation = function() {
		var x = floor(random(2, floor(width/20) - 2))*20;
		var y = floor(random(2, floor(height/20) - 2))*20;
		for ( var i = 0; i < snake.score-1; i++){
			if ( abs(x - snake.tail[i].x) < 20 && abs(y - snake.tail[i].y) < 20 ){ // Protecting the apple not to spawn on top of the snake
				x = floor(random(2, floor(width/20) - 2))*20;
				y = floor(random(2, floor(height/20) - 2))*20;
			}
		}
		this.x = x;
		this.y = y;
	}

	this.show = function() {
		fill('red');
		rect(this.x, this.y, 20, 20);
	}
}