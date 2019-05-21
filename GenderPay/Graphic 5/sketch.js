function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noStroke();
  
  // Headline
  push();
  fill(52);
  textStyle(BOLD);
  textFont('Helvetica', 20);
  text('Explanations for Negative or Poor Gender Pay Gap Improvement', 40, 50);
  pop();
  
  // Description/ legend
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 12);
  text('By requiring companies to report GPG data yearly, they are encouraged', 40, 100);
  text('to monitor and evaluate their action plans and set specific time-bound targets.', 40, 115);
  text('However, this has only been a legal requirement since 2017 in the UK.', 40, 130);
  text('Therefore, it is still early days for assessing improvements - and long-term', 40, 145);
  text('improvement is likely to require short-term increased GPG.', 40, 160);
  
  // Example
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 16);
  text('An example of a company taking action to decrease their GPG after', 155, 360); // +30
  text('publishing their numbers is EasyJet. In the first reporting in 2017 their', 155, 390);
  text('hourly median GPG was 45.5%. However, they addressed this imbalance', 155, 420);
  text('by launching an initiative (i.e. the Amy Johnson Initiative) targeting that', 155, 450);
  text('20% of new cadet pilots should be female by 2020. In 2018, 13% of their', 155, 480);
  text('pilots were women. Although, their 2018 median GPG was 47.9%, this is', 155, 510);
  text('due to a large intake of women in the lower quartile pay bracket, who will', 155, 540);
  text('over time rise to higher paying positions. This highlights the importance of', 155, 570);
  text('interpreting results with caution and within context.', 155, 600);
  pop();
  
  // box
  push();
  fill(67, 208, 170); // green
  rect(110, 230, 15, 435); // vertical
  rect(700, 230, 15, 435); // vertical
  rect(110, 230, 590, 15); // horizontal
  rect(110, 650, 590, 15); // horizontal
  pop();
  
  //Subheading: Example
  push();
  fill(245, 100, 77); // red
  textStyle(BOLD);
  textFont('Helvetica', 75);
  text('E.G.', 140, 320); 
  pop();
}