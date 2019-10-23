//import 'vector.js';

/*
    Import javascript files
*/
// Graphics
import Vector from '/graphics/vector'
// File class
import { File } from './file.js'
// config
import { Canvas2D } from './Canvas.js'
// UI
import { Color } from './UI/Color.js'
import { Label } from './UI/Label.js'
import { Button } from './UI/Button.js'
import { Menu } from './UI/Menu.js'
// ScreenLoader
import { sceneLoader } from './sceneLoader.js'
// objects
import { Ball } from './objects/ball.js'
import { Stick } from './objects/stick.js'
import { game } from './Game.js'

const Canvas = new Canvas2D();
const Colors = new Color();
const whiteball = new Ball(Canvas.BALL_ORIGIN);
const stick = new Stick(Canvas.STICK_ORIGIN);
const SceneLoader = new sceneLoader();
const Game = new game();

var sprites = {};
let sounds = {};
var balls = [];
balls.push(whiteball);

function preload() {
  //Game.loadAssets();
  console.log(assets);
}

function setup(){
   console.log("yyyyy");
	 createCanvas(Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);
	 //angleMode(DEGREES);
	 /* Draw Balls
	  	 _______
		 |    *    |
		 |	 * *   |
		 |	* * *  |
		 | * * * * |
		 |* * * * *|
		 |_________|
	*/
	 setupBalls();
	 /*
	 	Play background Music
	 */
	// sounds.BackgroundMusic.play();
}

let x = 1;
function draw() {
	//SceneLoader.loadScene("Menu");
  console.log("yyyyy");
	background(dark);
			image(sprites.bc,0,0);

			// Draw Balls
			for(let i = 0; i < balls.length; i++){
				balls[i].draw();
				balls[i].update();
				checkForCollitions(i);
			}

			if(stick.visible){
				stick.update();
				stick.draw();
			}
}

function setupBalls(){
	let xpos = Canvas.BALLS_ORIGIN.x;
	let b;
	for(let i = 1;i <=5;i++)   {

	 	let ypos = Canvas.BALLS_ORIGIN.y + (5 - i) * Canvas.BALL_WIDTH / 2 - 2.5 * BALL_WIDTH;

	 	for(let j = 1; j <= i;j++){
	 		if(j == 2 && i == 3)
	 			b = new Ball({x:xpos,y :ypos},"black");
	 		else if(j % 2 == 0)
	 			b = new Ball({x:xpos,y :ypos},"red");//image(sprites.rball, xpos, ypos);
	 		else
	 			b = new Ball({x:xpos,y :ypos},"yellow");
	 		//console.log("row : " + i + " ,col : " + j + " x : " + xpos  + ", y : " +  ypos );
	 		balls.push(b);
	 		ypos += Canvas.BALL_WIDTH;
	 	}

	 	xpos += Canvas.BALL_WIDTH;

	}
}

function checkForCollitions(i = 0){
	for(let j = i + 1; j < balls.length;j++)
		if(balls[i].collides(balls[j]))
      balls[i].reflect(balls[j]);
}

/*loadAssets(sounds,sprites){
 	for(let sound of this.sounds)
		sounds[sound.name] = loadSound(`${this.soundsPath}${sound.path}.${sound.extension}`);

	for(let sprite of this.sprites)
		sprites[sprite.name] = loadImage(`${this.spritesPath}${sprite.path}.${sprite.extension}`);
}*/
