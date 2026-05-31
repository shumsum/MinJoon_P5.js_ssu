function setup() {
  createCanvas(400, 600);
  background(230);
  noStroke();
  //head
  fill('#f1ded7'); //neck
  quad(130, 310, 270, 310, 285, 560, 115, 560);
  fill('#ebd1c5');  //ears
  ellipse(90, 220, 50, 100); //ear_left
  ellipse(310, 220, 50, 100); //ear_right
  fill('#d0b09f'); //shadow
  arc(200, 320, 150, 150, 0, PI);
  fill('#f3dfd8'); //head
  ellipse(200, 210, 240, 330);
  fill('#382d32'); //left_front_hair
  arc(200, 190, 260, 320, PI, PI + HALF_PI); 
  fill('#f3dfd8'); //for_face_color
  arc(200, 190, 130, 160, PI, PI + HALF_PI);
  stroke('#382d32'); // front_left_hair
  noFill();
  strokeWeight(10);
  arc(200, 190, 120, 170, PI, PI + HALF_PI);
  arc(200, 190, 80, 170, PI, PI + HALF_PI);
  strokeWeight(5);
  arc(200, 190, 60, 170, PI, PI + HALF_PI);
  bezier(210, 100, 180, 100, 200, 210, 160, 180);
  noStroke(); //right_front_hair
  fill('#382d32'); 
  arc(200, 190, 260, 320, PI + HALF_PI, 0); 
  fill('#f3dfd8'); //for_face_color
  arc(200, 190, 130, 160, PI + HALF_PI, 0);
  fill('#382d32');
  rect(210, 60, 80, 130, 60)
  fill('#382d32'); //hair_side
  triangle(70, 190, 90, 190, 85, 250); //left
  triangle(330, 190, 310, 190, 315, 250); //right  
  //base_body
  fill('#585858');
  ellipse(200, 550, 600, 230);
  stroke(255);
  strokeWeight(10);
  fill('#f1ded7') //neck
  arc(200, 424, 220, 180, radians(10), radians(170));
  point(200, 540);//(necklace_bond)
  
  //face
  stroke(1); //eyes
  strokeWeight(2);
  noStroke();   //eye_left
  fill('#cca08b');
  ellipse(143, 210, 51, 26)
  fill(255); //eye_left_in
  ellipse(150, 210, 50, 27)
  fill('#3e2824'); //eye_left_pupil
  circle(153, 210, 25);
  fill(1);
  circle(153, 210, 15);
  noFill() //eye_left_line
  stroke(1);
  bezier(175, 210, 150, 180, 110, 210, 115, 210); 
  noStroke();  //eye_right
  fill('#cca08b');
  ellipse(257, 210, 51, 26)
  fill(255); //eye_right_in
  ellipse(250, 210, 50, 27)
  fill('#3e2824'); //eye_right_pupil
  circle(247, 210, 25);
  fill(1);
  circle(247, 210, 15);
  noFill() //eye_right_line
  stroke(1);
  bezier(225, 210, 250, 180, 290, 210, 285, 210);
  fill('#d7b8a8'); //nose
  noStroke();
  triangle(200, 210, 200, 280, 185, 280);
  fill('#cfb1a2');
  triangle(200, 210, 200, 280, 215, 280);
  fill('#e7bac6'); //mouth
  arc(200, 320, 64, 18, 0, PI);
  arc(195, 320, 55, 18, PI, 0);
  arc(205, 320, 55, 18, PI, 0);
  stroke('#c58086');
  strokeWeight(0.5);
  line(170, 320, 230, 320);
  //plus_elements
  noFill(); //glasses
  stroke(1);
  circle(138, 210, 90);
  circle(262, 210, 90);
  line(183, 210, 217, 210);
  noFill(); //glass_tube_necklace
  rect(195, 530, 10, 60, 0, 0, 50, 50); 
  arc(200, 435, 160, 210, 0, PI);
  fill('#cd3a5e'); 
  rect(195, 550, 10, 40, 0, 0, 50, 50);
  noFill(); //glass_tube_earring
  rect(317, 260, 8, 60, 0, 0, 50, 50); 
  fill('#e0ec5d'); 
  rect(317, 280, 8, 40, 0, 0, 50, 50);  }