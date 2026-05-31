function setup() {
	
  createCanvas(600, 400);
  background(230);
  
  noStroke();
  fill(242, 215, 188);
  quad(0, 0, 480, 0, 50, 400, 0, 400);
  fill(140, 110, 80);
  quad(480, 0, 50, 400, 600, 400, 600, 0);
  //뒷배경  
  strokeWeight(5);
  stroke(5);

  line(480, 0, 50, 400);
  console.log('격자');
  
  strokeWeight(1);
  fill(255, 255, 255);
  triangle(50, 225, 250, 225, 150, 55);
  //하얀삼각형
  noStroke();
  fill(0,0,255);
  triangle(100, 250, 300, 250, 200, 80);
  //파란삼각형
  fill(0, 0, 0);
  triangle(115, 225, 250, 225, 183, 108);
  //내부 검정 삼각형
  console.log('triangle')
  
  fill(10, 80, 10);
  circle(480, 180, 200);
  // moon
  fill(140, 110, 80);
  circle(450, 150, 160);
  //초승달 만들기위한 내부 원
  fill(50, 50, 130);
  circle(450, 150, 100);
  //초승달 안쪽 원
  fill(250, 250, 250);
  arc(450, 150, 100, 100, radians(130), radians(310));
  fill(130, 130, 130);
  arc(450, 150, 100, 100, radians(130), radians(260));
  console.log('moon')
  
  rectMode(RADIUS);
  fill(80, 50, 35);
  rect(300, 380, 105, 50);
  fill(130, 20, 50);
  arc(195, 330, 140, 140, HALF_PI, 0);
  fill(230, 40, 100);
  arc(195, 330, 100, 100, HALF_PI, 0);
  fill(250, 80, 200);
  arc(195, 330, 70, 70, HALF_PI, 0);
  //red circles

  noFill();
  strokeWeight(1);
  stroke(3);
  circle(68, 120, 75);
  circle(68, 120, 55);
  ellipse(68, 120, 55, 10);
  ellipse(68, 120, 10, 55);
  ellipse(68, 120, 10, 10);
  //삼각형 옆 이상한 원
  console.log('circles');
  
  fill(140, 110, 80);
  square(230, 365, 25);
  square(300, 365, 25);
  square(370, 365, 25);
  
  noFill();
  stroke(65, 65, 130);
  circle(580, 390, 8);
  circle(560, 300, 8);
  circle(560, 370, 12);
  circle(570, 340, 16);
  circle(581, 305, 24);
  //bubble
  
  fill(200, 200, 10);
  noStroke();
  ellipse(560, 50, 35, 7);
  ellipse(560, 50, 7, 35);
  ellipse(560, 50, 10, 10);
  ellipse(510, 30, 25, 4);
  ellipse(510, 30, 4, 25);
  ellipse(510, 30, 10, 10);
  ellipse(400, 290, 25, 4);
  ellipse(400, 290, 4, 25);
  ellipse(400, 290, 10, 10);
  //star
  
  noFill();
  stroke(1);
  arc(300, -20, 250, 130, 0, PI)
  fill(230, 230, 250)
  circle(370, 35, 25)
}