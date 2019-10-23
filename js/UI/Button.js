export class Button {
	constructor(text, position, color, background = DARK, size, font = MAIN_FONT){
		this.text = text;
		this.position = position;
		this.color = color;
		this.size = size;
		this.background = background;
		this.font = font;
	}

	draw(){
		let {x, y} = position;
		fill(this.color);
		textAlign(this.align);
		textSize(this.size);
		textFont(this.font);
		text(this.text, x, y);
	}
}
