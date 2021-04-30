function preload () {

}

//create a canvas to display p5js
function setup() {
    createCanvas(1420, 700);
  }
  
  function draw() {
/*  //create string of text
    let s = 'Recipes by Maya Valencia';
    fill(50);
    textSize(40);
    text(s, 480, 300);  */

    //create gradient ellipse that follows x and y coordinates of the mouse
	push()

	let radius = 100;
	let h = 0.000001;
	for (let r = radius; r > 0; --r) {
		let from = color(218, 255, 211);
		let to = color(1, 105, 6);
		noFill()
		stroke(lerpColor(from, to, h));
		ellipse(mouseX, mouseY, r, r);
		h = h + 0.01
	}
  }


  function keyPressed() {
    if (keyCode === 65) {
        text('word', 10, 60);
    } else if (keyCode === 70) {
        text('peepee', 10, 60);
        
    }
    console.log(text);
  }