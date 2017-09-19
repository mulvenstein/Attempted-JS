function setup() {
  createCanvas(1300,500); //temp canvas size. may change later...no idea what im doing
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let hours = hour();
  let minutes = minute();
  let seconds = second();
//hour clock
  push();
  translate(250,200)
	strokeWeight(4);
	stroke(255);
	ellipse(0,0, 300, 300);
  rotate(-90);
  strokeWeight(8);
  stroke(155, 255, 100);
  noFill();
  let hourArc = map(hours % 12, 0 , 12, 0, 360);
  arc(0, 0, 300, 300, 0, hourArc);
  pop();
// min clock
  push();
  translate(650,200)
	strokeWeight(4);
	stroke(255);
	ellipse(0,0, 300, 300);
  rotate(-90);
  strokeWeight(8);
  stroke(255, 50, 200);
  noFill();
  let minArc = map(minutes, 0 , 60 , 0, 360);
  arc(0, 0, 300, 300, 0, minArc);
  pop();
// sec clock
  push();
  translate(1050,200)
	strokeWeight(4);
	stroke(255);
	ellipse(0,0, 300, 300);
  rotate(-90);
  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secArc = map(seconds, 0 , 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc );
  pop();
  
  //lines for hands, will switch with dab LOL
  push();
	translate(1050,200)
	rotate(-90)
	rotate(secArc); //second hand
	strokeWeight(8);
	stroke(50, 70, 150);
	line(0, 0, 125, 0);
	stroke(255)
	point(0,0,15);
  pop();
  //min hand
  push();
	translate(650,200)
	rotate(-90)
	rotate(minArc); //min hand
	strokeWeight(8);
	stroke(50, 70, 150);
	line(0, 0, 125, 0);
	stroke(255)
	point(0,0,15);
  pop();
  //hour hand
  push();
	translate(250,200)
	rotate(-90)
	rotate(hourArc); //hour hand
	strokeWeight(8);
	stroke(50, 70, 150);
	line(0, 0, 125, 0);
	stroke(255)
	point(0,0,15);
  pop();
  
  
  //hours text
	push();
	noStroke();
	textSize(32);
	fill(155, 255, 100);
	text(hours % 12, 240, 400);
		fill(125, 230, 500);
		text(" : ", 425, 400);
	fill(155, 255, 100);
	textSize(26);
	text("Hours", 215, 450);
	pop();
	
	//min text
	push();
	noStroke();
	textSize(32);
	fill(255, 50, 200);
	text(minutes, 630, 400);
		fill(125, 230, 500);
		text(" : ", 825, 400);
	fill(255, 50, 200);
	textSize(26);
	text("Minutes", 600, 450);
	pop();
	
	//sec text
	push();
	noStroke();
	textSize(32);
	fill(255, 100, 150);
	text(seconds, 1030, 400);
	fill(255, 100, 150);
	textSize(26);
	text("Minutes", 1000, 450);
	pop();
}
