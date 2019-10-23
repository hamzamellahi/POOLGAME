import { Vector } from '../graphics/vector.js'
export class Ball {

	constructor(origin, color = "white"){
		this.position = new Vector(origin.x, origin.y);
		this.isMoving = false;
		this.visible = false;
		this.color = color;
		this.velocity = new Vector();
		this.inFool = false;
	}

	draw(){
		let sprite;
		if(this.color == "yellow")
			sprite = sprites.yball;
		else if(this.color == "red")
			sprite = sprites.rball;
		else if(this.color == "black")
			sprite = sprites.bball;
		else
			sprite = sprites.ball;
		image(sprite, this.position.x, this.position.y);
	}

	update(){
		this.handleCollisions();
		//if(this.color == "white") console.log(this.velocity);
		if(this.velocity.isZero)
			stick.visible = true;
		this.position.addTo(this.velocity.mult(1));
		this.velocity.multWidth(0.94);
		if(this.isMoving && Math.abs(this.velocity.x) < 1 && Math.abs(this.velocity.y) < 1){
        	this.stop();
    }
	}

	shoot(power, rotation){
		this.isMoving = true;
		this.velocity = new Vector( cos(rotation) * power, sin(rotation) * power);
		//sounds.BallsCollide.play();
	}

	collides(other){
		//console.log(other.position.DistanceFrom(this.position));
		//if((other.position.DistanceFrom(this.position)) <= BALL_WIDTH)
		let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y) ;
		//console.log(distance);
		if(distance < BALL_WIDTH)
			return true;
		else
			return false;
	}

	isOut(){
		let { MAX_LEFT, MAX_RIGHT, MAX_TOP, MAX_BOTTOM } = game;
		return !(this.position.x >= MAX_LEFT && this.position.x <= MAX_RIGHT && this.position.y >= MAX_TOP && this.position.y <= MAX_BOTTOM);
	}

	stop(){
		this.isMoving = true;
		this.velocity = new Vector();
		stick.visible = true;
	}

	handleCollisions(){
		/*
			Check if the ball collides the border
		*/
		let { MAX_LEFT, MAX_RIGHT, MAX_TOP, MAX_BOTTOM } = game;
		let {x,y} = this.position;

		if(this.isOut()){
			let { MAX_LEFT, MAX_RIGHT, MAX_TOP, MAX_BOTTOM } = game;
			if(x <= MAX_LEFT + BALL_WIDTH / 2 || x >= MAX_RIGHT + BALL_WIDTH / 2 )
				this.velocity.x *= -1;
			if(y <= MAX_TOP + BALL_WIDTH / 2 || y >= MAX_BOTTOM + BALL_WIDTH / 2)
				this.velocity.y *= -1;
		}
	}

	reflect(other){
		// Get Normal Vector
		let n = this.position.sub(other.position);
		// Get Unit Normal Vector
		let Un = n.normalize();
		// Get Unit Tangenciel Vector
		let Ut = new Vector(-Un.y, Un.x);
		//
		let V1n = Un.dot(this.velocity);
		let V1t = Ut.dot(this.velocity);
		let V2n = Un.dot(other.velocity);
		let V2t = Ut.dot(other.velocity);
		// After Collision
		let Vc1n = V1n;
		let Vc1t = V1t;
		let Vc2n = V2n;
		let Vc2t = V2t;
		//
		Vc1n = Un.mult(Vc1n);
		Vc1t = Ut.mult(Vc1t);
		Vc2n = Un.mult(Vc2n);
		Vc2t = Ut.mult(Vc2t);
		console.log(Vc1n, Vc1t, Vc2n, Vc2t);
		let Vc1 = Vc1n.add(Vc1t);
		let Vc2 = Vc2n.add(Vc2t);
		// Chamge the velocity of both balls
		this.velocity = Vc1;
		other.velocity = Vc2;
	}
}
