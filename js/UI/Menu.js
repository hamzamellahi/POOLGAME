export class Menu {
	constructor(background, buttons, labels){
		this.background = background;
		this.buttons = buttons;
		this.labels = labels;
		this.draw();
	}

	draw(){
		// draw background
		image(this.background,0,0);
		// draw buttons
		for(let button of this.buttons)
			button.draw();
		// label buttons
		for(let label of this.labels)
			label.draw();
	}
}
