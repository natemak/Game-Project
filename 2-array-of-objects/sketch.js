
//create an empty array called balls

let balls = [];


function setup() {
  createCanvas(1000, 800);

}

function draw(){
	background("black");

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();



	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  if (keyCode === UP_ARROW){
  let  b = new Ball(400, 800, "blue", 5);
  balls.push(b);
  console.log(balls);
}

}
//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color,movement){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;
        this.movement = movement;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen

      if (keyIsPressed === LEFT_ARROW){
      	this.x = this.x-this.movement;
    }
      if (keyIsPressed === RIGHT_ARROW){
      this.x = this.x+this.movement;

      }

		this.y = this.y-1;
	}




}
