function Snake() {
	this.x = width/2;
	this.y = height/2;
	this.velocity = 0;
	this.direction = 0;
	this.last = 0;
	this.score = 1;
	this.tail = [];
	this.paused = false;
	this.bRestarthidden = false;

	this.show = function() {
		fill('white');
		rect(this.x, this.y, 20, 20);
		for ( var i = 0; i < this.score-1; i++ ){
			rect(this.tail[i].x, this.tail[i].y, 20, 20);
		}
	}

	this.update = function() {
		if (!this.paused){
			if (this.score > 0){
				this.tail[this.score-1] = createVector(this.x, this.y);

				for ( var i = 0; i < this.score -1; i++ ){
					this.tail[i] = this.tail[i+1];
				}
			}

			if ( this.direction == 0 ) { //RIGHT
				this.x += this.velocity;
			}

			else if ( this.direction == 1 ){ //LEFT
				this.x += -this.velocity;
			}

			else if ( this.direction == 2 ){ //DOWN
				this.y += this.velocity;
			}
			else if ( this.direction == 3 ){ //UP
				this.y += -this.velocity;
			}
		}
	}

	this.check = function() {
			 if ( this.y >= height - 20 || this.y <= 0 || this.x >= width - 20 || this.x <= 0 ) {
			 	this.lost();
			 }

			 for ( var i = 0; i < this.score-1; i++ ){
				var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
				if ( d < 1 ){
					this.lost();
				}
		}
	}

	this.eat = function(apple) {
		if (!this.paused){
			var d = dist(this.x, this.y, apple.x, apple.y);

			if ( d < 1 ){
				this.score++;
				eatingsound.play();
				apple.picklocation();
			}
		}
	}

	this.lost = function() {
		this.paused = true;
		textSize(50);
		fill('yellow');
		text('YOU LOST!', 150, 280);
		bRestart = createButton('Click here to RESTART the game!');
		bRestart.position(150, 300);
	  	bRestart.size(250,50);
	  	bRestart.mousePressed(function() {
	  		if (this.bRestarthidden){
	  			bRestart.show();
	  		}
	  		else {
	  			bRestart.hide();
	  		}
	  		this.bRestarthidden = !this.bRestarthidden;
	    	restart();
	  	});
	}

}