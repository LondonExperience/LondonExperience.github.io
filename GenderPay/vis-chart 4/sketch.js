
let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('P5.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1600, 800); //+800, 0 i.e. 400px on each side
}

function draw() {
  background(220);
  noStroke();
  
  //Headline
  push();
  fill(51);
  textStyle(BOLD);
  textFont('Helvetica', 24);
  text('Mean Gender Pay Gap Improvement per Sector in the UK', 440, 50);
  pop();
  
   // Description
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 12);
  text('This chart shows the mean hourly GPG improvement from 2017 to 2018', 440, 110);
  text('per sector across the UK. However, only sectors with data from more than ', 440, 125);
  text('100 companies are included. ', 440, 140);
  textStyle(ITALIC);
  text('Click on the bars for further information about each sector. ', 440, 155);
  // text('Click on the bars for further information about each sector.  ', 40, 170);
	pop();
  
  // Legend
  push();
  //2017
  fill(255, 180, 52) // orange
  rect(440, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('2017', 460, 82);
  //Positive Improvement
  fill(67, 208, 170) // green
  rect(510, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);   
  text('Positive Improvement', 530, 82);
  //Negative 'Improvement'
  fill(245, 100, 77) // red
  rect(680, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('Negative Improvement', 700, 82);
  pop();
  
  // 2017 line
  fill(255, 180, 52); // orange
  rect(745, 255, 10, 340); //50,50
  
  //measure 'stick' / x-axis
  fill(67, 208, 170); // green
  rect(750, 640, 250, 5);
  rect(995, 635, 5, 16);
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('+5%', 990, 665);
  fill(245, 100, 77); // red
  rect(500, 640, 250, 5);
  rect(500, 635, 5, 16);
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('-5%', 495, 665);
  text('0%', 745, 665);
  
  // Draw chart (index, startH, startV)
  chart(0, 750, 270);
  chart(1, 750, 310);
  chart(2, 750, 350);
  chart(3, 750, 390);
  chart(4, 750, 430);
  chart(5, 750, 470);
  chart(6, 750, 510);
  chart(7, 750, 550);
  chart(8, 750, 590);

}

function chart(index, startH, startV){ 
  //startH and startV=starting corner position
  // index: sector
  // colours - pos vs neg improvement
  // let pos = color(67, 208, 170); //RGB green
  // let neg = color(245, 100, 77);
  let barLength = (table.get(index, 'Mean Improvement')) * 50; // calculates length of bars/rect relative to the mean improvement for the sector
  
  // fill colour based on pos/neg improvement
  let i = table.get(index, 'Mean Improvement');
  let barColor = 0;
  
  if (i > 0) { // if mean improvement is positive colour green
    barColor = color(67, 208, 170); // green
  }
  if (i < 0) { // if mean improvement is negative colour red
    barColor = color(245, 100, 77); // red
  }
  
  fill(barColor) //need to define whether it is pos or neg
  rect(startH, startV, barLength, 30)
  return;
}


// event (executes happens once at the moment of event
// only happens when mouse is pressed
//bar 1
function mousePressed() {
  // sector 1: Mining
  if ((mouseX > 750) && (mouseX < 1063) && (mouseY > 270) && (mouseY < 300)){ // if mouse is clicked inside bar, then....
  // add a line and move box, so they all fit on screen at the same time??
  push();
  stroke(50)
  line(mouseX, mouseY, 1050, 150)
  pop();
  fill(251, 247, 255)
  rect(850, 140, 205, 80)
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(0, 'Sector Name')), 855, 155); //sector name
  text('Mean Improvement: '+(table.get(0, 'Mean Improvement'))+'%', 855, 175); //pop1
  text('Mean GPG 2017/18: '+(table.get(0, 'Mean GPG 2017'))+'%/'+(table.get(0, 'Mean GPG 2018'))+'%', 855, 195); 
  text('Sector Size: '+(table.get(0, 'Sector Size')), 855, 215); //pop3
  }
  //sector 2: Manufacturing 
  if ((mouseX > 750) && (mouseX < 767) && (mouseY > 305) && (mouseY < 340)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 1050, 280)
  pop();
  fill(251, 247, 255)
  rect(950, 250, 205, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(1, 'Sector Name')), 955, 265); //sector name
  text('Mean Improvement: '+(table.get(1, 'Mean Improvement'))+'%', 955, 285); //pop1
  text('Mean GPG 2017/18: '+(table.get(1, 'Mean GPG 2017'))+'%/'+(table.get(1, 'Mean GPG 2018'))+'%', 955, 305); 
  text('Sector Size: '+(table.get(1, 'Sector Size')), 955, 325); //pop3
  }
  //sector: Transportation, communications, Electric...
  if ((mouseX > 741) && (mouseX < 750) && (mouseY > 350) && (mouseY < 385)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 680, 260)
  pop();
  fill(251, 247, 255)
  rect(440, 250, 255, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text(('Sector: '+table.get(2, 'Sector Name')), 445, 265); //sector name
  text('Mean Improvement: '+(table.get(2, 'Mean Improvement'))+'%', 445, 285); //pop1
  text('Mean GPG 2017/18: '+(table.get(2, 'Mean GPG 2017'))+'%/'+(table.get(2, 'Mean GPG 2018'))+'%', 445, 305); 
  text('Sector Size: '+(table.get(2, 'Sector Size')), 445, 325); //pop3
  }
  //sector: Retail Trade
  if ((mouseX > 750) && (mouseX < 785) && (mouseY > 390) && (mouseY < 425)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 850, 390)
  pop();
  fill(251, 247, 255)
  rect(850, 350, 205, 80) // - 100, +100
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(3, 'Sector Name')), 855, 365); //sector name
  text('Mean Improvement: '+(table.get(3, 'Mean Improvement'))+'%', 855, 385); //pop1
  text('Mean GPG 2017/18: '+(table.get(3, 'Mean GPG 2017'))+'%/'+(table.get(3, 'Mean GPG 2018'))+'%', 855, 405); 
  text('Sector Size: '+(table.get(3, 'Sector Size')), 855, 425); //pop3
  }
    //sector: Finance insurance and real estate
  if ((mouseX > 750) && (mouseX < 764) && (mouseY > 425) && (mouseY < 460)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 680, 390)
  pop();
  fill(251, 247, 255)
  rect(440, 350, 255, 80) //
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(4, 'Sector Name')), 445, 365); //sector name
  text('Mean Improvement: '+(table.get(4, 'Mean Improvement'))+'%', 445, 385); //pop1
  text('Mean GPG 2017/18: '+(table.get(4, 'Mean GPG 2017'))+'%/'+(table.get(4, 'Mean GPG 2018'))+'%', 445, 405); 
  text('Sector Size: '+(table.get(4, 'Sector Size')), 445, 425); //pop3
  }
  //sector: index 5 Services
  if ((mouseX > 750) && (mouseX < 763) && (mouseY > 470) && (mouseY < 505)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 850, 490)
  pop();
  fill(251, 247, 255)
  rect(850, 450, 205, 80) // 0, +100
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(5, 'Sector Name')), 855, 465); //sector name
  text('Mean Improvement: '+(table.get(5, 'Mean Improvement'))+'%', 855, 485); //pop1
  text('Mean GPG 2017/18: '+(table.get(5, 'Mean GPG 2017'))+'%/'+(table.get(5, 'Mean GPG 2018'))+'%', 855, 505); 
  text('Sector Size: '+(table.get(5, 'Sector Size')), 855, 525); //pop3
  }
  // index 6
  if ((mouseX > 722) && (mouseX < 750) && (mouseY > 510) && (mouseY < 545)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 640, 490)
  pop();
  fill(251, 247, 255)
  rect(440, 450, 215, 80) // 0, +100,
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(6, 'Sector Name')), 445, 465); //sector name
  text('Mean Improvement: '+(table.get(6, 'Mean Improvement'))+'%', 445, 485); //pop1
  text('Mean GPG 2017/18: '+(table.get(6, 'Mean GPG 2017'))+'%/'+(table.get(6, 'Mean GPG 2018'))+'%', 445, 505); 
  text('Sector Size: '+(table.get(6, 'Sector Size')), 445, 525); //pop3
  }
  //sector: Nonclassifiable
  if ((mouseX > 750) && (mouseX < 763) && (mouseY > 545) && (mouseY < 575)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 850, 580)
  pop();
  fill(251, 247, 255)
  rect(850, 550, 205, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(7, 'Sector Name')), 855, 565); //sector name
  text('Mean Improvement: '+(table.get(7, 'Mean Improvement'))+'%', 855, 585); //pop1
  text('Mean GPG 2017/18: '+(table.get(7, 'Mean GPG 2017'))+'%/'+(table.get(7, 'Mean GPG 2018'))+'%', 855, 605); 
  text('Sector Size: '+(table.get(7, 'Sector Size')), 855, 625); //pop3
  }
}