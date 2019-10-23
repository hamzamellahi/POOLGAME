export class Label {
	constructor(text, position, color, size, align, font = MAIN_FONT){
		this.text = text;
		this.position = position;
		this.color = color;
		this.size = size;
		this.align = align;
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
