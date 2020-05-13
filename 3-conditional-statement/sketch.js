//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('bruh.mp3');
}



function setup() {
  createCanvas(500, 400);
  fill("black");

  //make one avatar called me
  me = new Avatar(width/7, 300, 7,7);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed, xspeed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.xspeed = xspeed;
	}

	drawMe(){  // draw the running person
    		stroke("yellow");
        strokeWeight(3);
    		fill("black");
		    ellipse(this.x,this.y,40,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+90);
        line(this.x, this.y+40, this.x+60, this.y+20);
        line(this.x+60, this.y+20, this.x+50, this.y+5);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+40, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move right by speed
        this.x += this.xspeed+5;
    }
    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move left by speed
        this.x += this.xspeed-20;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("gray");
		  ellipse(this.x,this.y,20,15);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+1;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  bounceBall(){
      if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
          this.speed = -this.speed;
          mySound.setVolume(0.1);
          mySound.play();
      }

  	}

}
