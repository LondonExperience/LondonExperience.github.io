//look up resetfunction for p5
let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('P5.csv', 'csv', 'header');
}

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
  text('Mean Gender Pay Gap Improvement per Sector in the UK', 40, 50);
  pop();
  
   // Description
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 12);
  text('This chart shows the mean hourly GPG improvement from 2017 to 2018', 40, 110);
  text('per sector across the UK. However, only sectors with data from more than ', 40, 125);
  text('100 companies are included. ', 40, 140);
  text('Click on the bars for further information about each sector. ', 40, 155);
  // text('Click on the bars for further information about each sector.  ', 40, 170);
	pop();
  
  // Legend
  push();
  //2017
  fill(255, 180, 52) // orange
  rect(40, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('2017', 60, 82);
  //Positive Improvement
  fill(67, 208, 170) // green
  rect(110, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);   
  text('Positive Improvement', 130, 82);
  //Negative 'Improvement'
  fill(245, 100, 77) // red
  rect(280, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('Negative Improvement', 300, 82);
  pop();
  
  // 2017 line
  fill(255, 180, 52); // orange
  rect(345, 255, 10, 340); //50,50
  
  //measure 'stick' / x-axis
  fill(67, 208, 170); // green
  rect(350, 640, 250, 5);
  rect(595, 635, 5, 16);
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('+5%', 590, 665);
  fill(245, 100, 77); // red
  rect(100, 640, 250, 5);
  rect(100, 635, 5, 16);
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('-5%', 95, 665);
  text('0%', 345, 665);
  
  // Draw chart (index, startH, startV)
  chart(0, 350, 270);
  chart(1, 350, 310);
  chart(2, 350, 350);
  chart(3, 350, 390);
  chart(4, 350, 430);
  chart(5, 350, 470);
  chart(6, 350, 510);
  chart(7, 350, 550);
  chart(8, 350, 590);

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
  if ((mouseX > 350) && (mouseX < 663) && (mouseY > 270) && (mouseY < 300)){ // if mouse is clicked inside bar, then....
  // add a line and move box, so they all fit on screen at the same time??
  push();
  stroke(50)
  line(mouseX, mouseY, 650, 150)
  pop();
  fill(251, 247, 255)
  rect(450, 140, 205, 80)
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(0, 'Sector Name')), 455, 155); //sector name
  text('Mean Improvement: '+(table.get(0, 'Mean Improvement'))+'%', 455, 175); //pop1
  text('Mean GPG 2017/18: '+(table.get(0, 'Mean GPG 2017'))+'%/'+(table.get(0, 'Mean GPG 2018'))+'%', 455, 195); 
  text('Sector Size: '+(table.get(0, 'Sector Size')), 455, 215); //pop3
  }
  //sector 2: Manufacturing 
  if ((mouseX > 350) && (mouseX < 367) && (mouseY > 305) && (mouseY < 340)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 650, 280)
  pop();
  fill(251, 247, 255)
  rect(550, 250, 205, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(1, 'Sector Name')), 555, 265); //sector name
  text('Mean Improvement: '+(table.get(1, 'Mean Improvement'))+'%', 555, 285); //pop1
  text('Mean GPG 2017/18: '+(table.get(1, 'Mean GPG 2017'))+'%/'+(table.get(1, 'Mean GPG 2018'))+'%', 555, 305); 
  text('Sector Size: '+(table.get(1, 'Sector Size')), 555, 325); //pop3
  }
  //sector: Transportation, communications, Electric...
  if ((mouseX > 341) && (mouseX < 350) && (mouseY > 350) && (mouseY < 385)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 280, 260)
  pop();
  fill(251, 247, 255)
  rect(40, 250, 255, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text(('Sector: '+table.get(2, 'Sector Name')), 45, 265); //sector name
  text('Mean Improvement: '+(table.get(2, 'Mean Improvement'))+'%', 45, 285); //pop1
  text('Mean GPG 2017/18: '+(table.get(2, 'Mean GPG 2017'))+'%/'+(table.get(2, 'Mean GPG 2018'))+'%', 45, 305); 
  text('Sector Size: '+(table.get(2, 'Sector Size')), 45, 325); //pop3
  }
  //sector: Retail Trade
  if ((mouseX > 350) && (mouseX < 385) && (mouseY > 390) && (mouseY < 425)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 450, 390)
  pop();
  fill(251, 247, 255)
  rect(450, 350, 205, 80) // - 100, +100
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(3, 'Sector Name')), 455, 365); //sector name
  text('Mean Improvement: '+(table.get(3, 'Mean Improvement'))+'%', 455, 385); //pop1
  text('Mean GPG 2017/18: '+(table.get(3, 'Mean GPG 2017'))+'%/'+(table.get(3, 'Mean GPG 2018'))+'%', 455, 405); 
  text('Sector Size: '+(table.get(3, 'Sector Size')), 455, 425); //pop3
  }
    //sector: Finance insurance and real estate
  if ((mouseX > 350) && (mouseX < 364) && (mouseY > 425) && (mouseY < 460)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 280, 390)
  pop();
  fill(251, 247, 255)
  rect(40, 350, 255, 80) //
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(4, 'Sector Name')), 45, 365); //sector name
  text('Mean Improvement: '+(table.get(4, 'Mean Improvement'))+'%', 45, 385); //pop1
  text('Mean GPG 2017/18: '+(table.get(4, 'Mean GPG 2017'))+'%/'+(table.get(4, 'Mean GPG 2018'))+'%', 45, 405); 
  text('Sector Size: '+(table.get(4, 'Sector Size')), 45, 425); //pop3
  }
  //sector: index 5 Services
  if ((mouseX > 350) && (mouseX < 363) && (mouseY > 470) && (mouseY < 505)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 450, 490)
  pop();
  fill(251, 247, 255)
  rect(450, 450, 205, 80) // 0, +100
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(5, 'Sector Name')), 455, 465); //sector name
  text('Mean Improvement: '+(table.get(5, 'Mean Improvement'))+'%', 455, 485); //pop1
  text('Mean GPG 2017/18: '+(table.get(5, 'Mean GPG 2017'))+'%/'+(table.get(5, 'Mean GPG 2018'))+'%', 455, 505); 
  text('Sector Size: '+(table.get(5, 'Sector Size')), 455, 525); //pop3
  }
  // index 6
  if ((mouseX > 322) && (mouseX < 350) && (mouseY > 510) && (mouseY < 545)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 240, 490)
  pop();
  fill(251, 247, 255)
  rect(40, 450, 215, 80) // 0, +100,
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(6, 'Sector Name')), 45, 465); //sector name
  text('Mean Improvement: '+(table.get(6, 'Mean Improvement'))+'%', 45, 485); //pop1
  text('Mean GPG 2017/18: '+(table.get(6, 'Mean GPG 2017'))+'%/'+(table.get(6, 'Mean GPG 2018'))+'%', 45, 505); 
  text('Sector Size: '+(table.get(6, 'Sector Size')), 45, 525); //pop3
  }
  //sector: Nonclassifiable
  if ((mouseX > 350) && (mouseX < 363) && (mouseY > 545) && (mouseY < 575)){ 
  push();
  stroke(50)
  line(mouseX, mouseY, 450, 580)
  pop();
  fill(251, 247, 255)
  rect(450, 550, 205, 80) 
  fill(51);
  textFont('Helvetica', 12);
  text('Sector: '+(table.get(7, 'Sector Name')), 455, 565); //sector name
  text('Mean Improvement: '+(table.get(7, 'Mean Improvement'))+'%', 455, 585); //pop1
  text('Mean GPG 2017/18: '+(table.get(7, 'Mean GPG 2017'))+'%/'+(table.get(7, 'Mean GPG 2018'))+'%', 455, 605); 
  text('Sector Size: '+(table.get(7, 'Sector Size')), 455, 625); //pop3
  }
}