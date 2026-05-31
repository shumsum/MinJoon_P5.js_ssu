let blinkTimer = 0; //state
let blinkState = false;
let blushAlpha = 0;
let glassColor = 0;
let shakeX = 0;
let isShaking = false;
let shakeTimer = 0;
let eX = 321; //earring_state
let eY = 280;
let eVX = 0;
let eVY = 0;
let eFlying = false;
let eVisible = true;
let exploding = false; //explosion_state
let explodeTimer = 0;
let scorched = false;
function setup() {
  createCanvas(400, 600);
  noStroke();  }
function draw() {
  background(230);
  blinkTimer++;  //blink
  if (blinkTimer > 180) blinkState = true;
  if (blinkTimer > 190) { blinkState = false; blinkTimer = 0; }
  if (blushAlpha > 0) blushAlpha -= 1;
  if (isShaking) { //shake
    shakeTimer++;
    shakeX = sin(shakeTimer * 0.5) * 8;
    if (shakeTimer > 40) { isShaking = false; shakeTimer = 0; shakeX = 0; } }
  if (eFlying) { //earring_move
    eX += eVX;
    eY += eVY;
    if (dist(eX, eY, 200, 550) < 20) {
      eVisible = false;
      eFlying = false;
      exploding = true;
      explodeTimer = 0; } }
  if (exploding) { //explosion_update
    explodeTimer++;
    if (explodeTimer > 60) { exploding = false; scorched = true; } }
  push(); ////////////////////////////////////////////////////////////////
  translate(shakeX, 0);
  fill('#f1ded7'); //neck
  quad(130, 310, 270, 310, 285, 560, 115, 560);
  fill('#ebd1c5'); //ears
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
  stroke('#382d32'); //front_left_hair
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
  rect(210, 60, 80, 130, 60);
  fill('#382d32'); //hair_side
  triangle(70, 190, 90, 190, 85, 250); //left
  triangle(330, 190, 310, 190, 315, 250); //right
  fill('#585858'); //base_body
  ellipse(200, 550, 600, 230);
  stroke(255);
  strokeWeight(10);
  fill('#f1ded7'); //neck
  arc(200, 424, 220, 180, radians(10), radians(170));
  if (scorched) { //scorch_marks
    noStroke();
    fill(color(40, 30, 20, 160)); //burn_main
    ellipse(200, 360, 90, 50);
    ellipse(185, 340, 40, 30);
    ellipse(215, 345, 35, 25); }
  stroke(1); //eyes
  strokeWeight(2); 
  noStroke(); 
  fill('#cca08b'); //eye_left
  ellipse(143, 210, 51, 26); 
  fill(255); //eye_left_in
  ellipse(150, 210, 50, 27); 
  let mx = constrain(mouseX - shakeX, 0, 400);
  let alL = atan2(mouseY - 210, mx - 153);
  fill('#3e2824'); //eye_left_pupil
  circle(153 + cos(alL) * 5, 210 + sin(alL) * 4, 25); 
  fill(1); 
  circle(153 + cos(alL) * 5, 210 + sin(alL) * 4, 15);
  noFill(); //eye_left_line
  stroke(1); 
  bezier(175, 210, 150, 180, 110, 210, 115, 210); 
  noStroke(); //eye_right
  fill('#cca08b'); 
  ellipse(257, 210, 51, 26); 
  fill(255); //eye_right_in
  ellipse(250, 210, 50, 27); 
  let alR = atan2(mouseY - 210, mx - 247);
  fill('#3e2824'); //eye_right_pupil
  circle(247 + cos(alR) * 5, 210 + sin(alR) * 4, 25); 
  fill(1); 
  circle(247 + cos(alR) * 5, 210 + sin(alR) * 4, 15);
  noFill(); //eye_right_line
  stroke(1); 
  bezier(225, 210, 250, 180, 290, 210, 285, 210); 
  if (blinkState) { //blink_overlay
    noStroke(); 
    fill('#f3dfd8');
    ellipse(150, 210, 55, 20); //blink_left
    ellipse(250, 210, 55, 20); }  //blink_right
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
  noFill(); //glasses
  randomSeed(glassColor); 
  stroke(color(random(255), random(255), random(255)));
  strokeWeight(1.5); 
  circle(138, 210, 90); 
  circle(262, 210, 90); 
  line(183, 210, 217, 210);
  if (!scorched) { //glass_tube_necklace
    noFill(); 
    stroke(1); 
    strokeWeight(1);
    rect(195, 530, 10, 60, 0, 0, 50, 50); 
    arc(200, 435, 160, 210, 0, PI);
    fill('#cd3a5e'); 
    noStroke(); 
    rect(195, 550, 10, 40, 0, 0, 50, 50); }
  if (eVisible) { //glass_tube_earring
    noFill(); 
    stroke(1); 
    strokeWeight(1);
    rect(eX - 4, eY - 30, 8, 60, 0, 0, 50, 50);
    fill('#e0ec5d'); 
    noStroke(); 
    rect(eX - 4, eY - 10, 8, 40, 0, 0, 50, 50); }
  if (exploding) { //explosion_particles
    randomSeed(42); 
    noStroke();
    for (let i = 0; i < 60; i++) {
      let angle = random(TWO_PI);
      let spd = random(2, 9);
      let t = explodeTimer;
      let px = 200 + cos(angle) * spd * t;
      let py = 550 + sin(angle) * spd * t + 0.1 * t * t; //gravity
      let alpha = map(t, 0, 60, 255, 0);
      let col = floor(random(3));
      if (col == 0) fill(color(255, 200, 50, alpha)); //spark_yellow
      if (col == 1) fill(color(255, 100, 0, alpha));  //spark_orange
      if (col == 2) fill(color(200, 50, 0, alpha));   //spark_red
      circle(px, py, random(4, 12)); }
    if (explodeTimer < 8) { //explosion_flash
      fill(color(255, 230, 100, map(explodeTimer, 0, 8, 200, 0)));
      rect(0, 0, 400, 600); } }
  if (blushAlpha > 0) { //blush
    noStroke(); 
    fill(color(255, 100, 120, blushAlpha));
    ellipse(145, 270, 50, 25); 
    ellipse(255, 270, 50, 25); }
  pop(); }
function mousePressed() { ///////////////////////////interaction line
  if (scorched) { //reset_on_scorched
    eX = 321; eY = 280; eVX = 0; eVY = 0;
    eFlying = false; 
    eVisible = true;
    exploding = false; 
    explodeTimer = 0; 
    scorched = false;
    return; }
  if (dist(mouseX - shakeX, mouseY, eX, eY) < 30 && eVisible && !eFlying) { //earring_click
    eFlying = true;
    let angle = atan2(550 - eY, 200 - eX);
    eVX = cos(angle) * 5; 
    eVY = sin(angle) * 5;
  } else { blushAlpha = 180; } } //blush_click
function keyPressed() {
  if (key === ' ') glassColor++; //glasses_color
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    isShaking = true; 
    shakeTimer = 0; 
  saveGif('20261051', 6)} }//shake   