import { Vector } from '../graphics/vector.js'
import { Canvas2D } from '../Canvas.js'

let my = new Canvas2D();
export class Stick {
	constructor(position){
		this.position = new Vector(- my.BALL_WIDTH * 0.5 - my.STICK_WIDTH, - my.BALL_WIDTH * 0.25 );
		this.angle = 0;
		this.visible = true;
		this.power = 0;
		this.shoting = false;
		//this.origin = whiteball.add(BALL_WIDTH * 0.5);
		this.shootOrigin = this.position.copy();
		this.velocity = new Vector();
	}
	update(){
		this.updateRotation();
		//this.updatePosition();
		this.handleInput();
	}

	draw(){
		let {x, y} = this.position;
		rotate(this.angle);
		image(sprites.stick, x, y);
	}

	updateRotation(){
		this.origin = whiteball.position.add(my.ßBALL_WIDTH * 0.5);
		translate(this.origin.x, this.origin.y);
		let {x, y} = this.position;
		let adjacent = mouseX - this.origin.x;
		let opposite = mouseY - y  - this.origin.y;
		this.angle 	 = atan2(opposite, adjacent);
	}

	updatePosition(){
		if(this.position.x < this.origin.x) {
			this.position.addTo(this.velocity.mult(2));
			this.velocity.multWidth(0.91);
		}
	}

	decreasePower(){
		if(this.power >= 0){
			this.position.x += 5;
			this.power-= 10;
		}
	}

	increasePower(){
		if(this.power <= my.MAX_POWER){
			this.position.x -= 5;
			this.power+= 10;
		}
	}

	onshoot(){
		this.position = this.shootOrigin;
		this.shoting = true;
		whiteball.shoot(this.power, this.angle);
		//console.log("%c B =>>> " + this.velocity);
		//this.velocity.addTo(new Vector(this.power / 10 * 5));
		//console.log("%c A =>>> " + this.velocity);
		this.power = 0;
		this.visible = false;
	}

	handleInput(){
		if (this.power && mouseIsPressed) {
			this.onshoot();
		}

		if (keyIsDown(87))
	   		this.increasePower();

		if (keyIsDown(83))
	   		this.decreasePower();
	}
}
