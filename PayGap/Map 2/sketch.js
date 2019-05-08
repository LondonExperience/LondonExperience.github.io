function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noStroke();
  
  //Headline
  push();
  fill(51);
  textStyle(BOLD);
  textFont('Helvetica', 20);
  text('Cause and Effect of the Gender Pay Gap', 40, 50);
  pop();
  
  // Description / legend
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 12);
  text('The GPG overwhelmingly favours men across London companies. ', 40, 100);
  text('This graphic highlights some of the main causes behind the GPG', 40, 115);
  text('and the implications arising from a GPG favouring men.', 40, 130);
	pop();
  
  //Subheading: Cause
  push();
  fill(255, 180, 52);
  textStyle(BOLD);
  textFont('Helvetica', 75);
  text('C', 40, 300); //What is Behind the Gender Pay Gap?
  text('A', 40, 370);
  text('U', 40, 440);
  text('S', 40, 510);
  text('E', 40, 580);
  pop();
  
  // Arrow - effect of GPG
  fill(47, 102, 255); //blue
  triangle(700, 150, 700, 780, 790, 445); // x1, y1, x2, y2, x3, y3
  fill(220); // grey
  triangle(705, 185, 705, 740, 785, 445); // x1, y1, x2, y2, x3, y3
  fill(220); // grey
  rect(450, 265, 275, 365);
  fill(47, 102, 255); //blue
  rect(510, 260, 190, 5); // horizontal
  rect(510, 630, 190, 5); // horizontal
  rect(510, 260, 5, 370); // vertical
  
  //Subheading: Effect
  push();
  fill(255, 180, 52); // orange
  textStyle(BOLD);
  textFont('Helvetica', 75);
  text('E', 445, 300); //implications of the Gender Pay Gap? 
  text('F', 445, 370); 
  text('F', 445, 440);
  text('E', 445, 510);
  text('C', 445, 580);
  text('T', 445, 650);
  pop();
  
  // // // info box rect
  // fill(223, 125, 245); // pink
  // rect(30, 70, 390, 2);
  // rect(30, 140, 390, 2);
  // rect(30, 70, 2, 70);
  // rect(418, 71, 2, 70);
  
  // bullets
  //effect
  // fill(47, 102, 255); // blue
  fill(223, 125, 245); // pink
  circle(530, 294, 5); // x, y, d
  circle(530, 445, 5); 
  circle(530, 535, 5);
  //cause
  // fill(223, 125, 245); // pink
  circle(140, 294, 5); 
  circle(140, 324, 5); 
  circle(140, 354, 5); 
  circle(140, 384, 5); 
  circle(140, 414, 5); 
  circle(140, 444, 5); 
  circle(140, 474, 5); 
  circle(140, 534, 5); 
  
  // Implications of the GPG bullets
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 16);
  text("Women's higher likelihood", 545, 300); // +30
  text('of part-time work impacts', 545, 330);
  text('their lifetime economic', 545, 360);
  text('security (e.g. lower pension)', 545, 390);
  text("Women's career progression", 545, 450);
  text('is held back', 545, 480);
  text('Companies miss out on ', 545, 540);
  text('innovation and skilled labour', 545, 570);
  pop();
  
  // tube
  push();
  fill(47, 102, 255); //blue
  ellipse(270, 230, 320, 60); // x, y, w, h
  fill(47, 102, 255); //blue
  rect(110, 230, 5, 473); // vertical
  rect(425, 230, 5, 473); // vertical
  fill(47, 102, 255); //blue
  ellipse(270, 705, 320, 60); // x, y, w, h
  pop();
  
  // 'behind'/causing the GPG bullets
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 16);
  text('Implicit gender bias ', 155, 300); // +30
  text('Lack of representation', 155, 330);
  text('Glass ceiling/cliff', 155, 360);
  text('Lack of women in leadership', 155, 390);
  text('Childbearing penalty', 155, 420);
  text('Gender stereotypes', 155, 450);
  text('Lack of men taking on caring', 155, 480);
  text('responsibilities', 155, 510);
  text('Lack of workplace flexibility to ', 155, 540);
  text('accommodate caring and other ', 155, 570);
  text('responsibilities, especially in in', 155, 600);
  text('senior roles', 155, 630);
  pop();
  
}