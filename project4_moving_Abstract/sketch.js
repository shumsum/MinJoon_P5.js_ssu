const ARC_CX = 300, ARC_CY = -20, ARC_RX = 125, ARC_RY = 65;
const SPEED = 1.5; // 전체 애니메이션 속도 배율

let bubbleDefs = [
  { x: 580, baseY: 390, topY: 350, r: 4,  phase: 0.0 },
  { x: 560, baseY: 370, topY: 280, r: 6,  phase: 0.4 },
  { x: 570, baseY: 380, topY: 310, r: 8,  phase: 0.8 },
  { x: 560, baseY: 390, topY: 270, r: 10, phase: 1.4 },
  { x: 581, baseY: 385, topY: 260, r: 12, phase: 2.0 },
];

let bubbleStates = [];

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);

  bubbleStates = bubbleDefs.map(b => ({
    y: lerp(b.baseY, b.topY, b.phase / TWO_PI),
    r: b.r,
    progress: b.phase / TWO_PI,
    popping: false,
    popTimer: 0
  }));
}

function draw() {
  let ms = millis() / 1000 * SPEED; // ← SPEED 적용

  // ── 버블 상태 업데이트 ──
  for (let i = 0; i < bubbleDefs.length; i++) {
    let b = bubbleDefs[i];
    let s = bubbleStates[i];

    if (s.popping) {
      s.popTimer += (deltaTime / 1000) * SPEED; // ← SPEED 적용
      if (s.popTimer > 0.25) {
        s.progress = 0;
        s.y = b.baseY;
        s.r = b.r;
        s.popping = false;
        s.popTimer = 0;
      }
    } else {
      s.progress += (deltaTime / 1000) * 0.22 * SPEED; // ← SPEED 적용
      if (s.progress >= 1) {
        s.popping = true;
        s.popTimer = 0;
        s.progress = 1;
      } else {
        let ease = s.progress < 0.5
          ? 2 * s.progress * s.progress
          : 1 - Math.pow(-2 * s.progress + 2, 2) / 2;
        s.y = lerp(b.baseY, b.topY, ease);
        s.r = lerp(b.r, b.r * 2.8, ease);
      }
    }
  }

  // ── 배경 ──
  background(230);

  noStroke();
  fill(242, 215, 188);
  quad(0, 0, 480, 0, 50, 400, 0, 400);
  fill(140, 110, 80);
  quad(480, 0, 50, 400, 600, 400, 600, 0);

  strokeWeight(5);
  stroke(5);
  line(480, 0, 50, 400);

  // ── 삼각형 그룹 (물결 이동) ──
  strokeWeight(1);
  fill(255, 255, 255);
  let tx = sin(ms * 1.2) * 8;
  let ty = cos(ms * 0.9) * 6;
  triangle(50+tx, 225+ty, 250+tx, 225+ty, 150+tx, 55+ty);

  noStroke();
  let bR = map(sin(ms * 0.7), -1, 1, 0, 80);
  let bG = map(cos(ms * 0.5), -1, 1, 0, 100);
  let bB = map(sin(ms * 0.9 + 1), -1, 1, 180, 255);
  fill(bR, bG, bB);
  let ts = 1 + sin(ms * 1.5) * 0.15;
  push();
  translate(200+tx, 165+ty);
  scale(ts);
  triangle(-100, 85, 100, 85, 0, -85);
  pop();

  fill(0);
  let bs = 1 + sin(ms * 2.1) * 0.12;
  push();
  translate(182.5+tx, 166.5+ty);
  scale(bs);
  triangle(-67.5, 58.5, 67.5, 58.5, 0.5, -58.5);
  pop();

  // ── 달 ──
  let mx = 480 + sin(ms * 0.6) * 5;
  let my = 180 + cos(ms * 0.4) * 4;
  let moonSize = 200 + sin(ms * 0.8) * 10;

  fill(map(sin(ms*0.3),-1,1,0,30), map(cos(ms*0.4),-1,1,60,120), 10);
  circle(mx, my, moonSize);
  fill(140, 110, 80);
  circle(mx-30, my-30, 160 + sin(ms*0.8)*10);
  fill(map(sin(ms*0.7),-1,1,30,80), map(cos(ms*0.6),-1,1,30,80), map(sin(ms*0.9),-1,1,100,180));
  circle(mx-30, my-30, 100 + sin(ms*1.2)*8);
  fill(250, 250, 250);
  arc(mx-30, my-30, 100, 100, radians(130), radians(310));
  fill(130, 130, 130);
  arc(mx-30, my-30, 100, 100, radians(130), radians(260));

  // ── 직사각형 배경 ──
  rectMode(RADIUS);
  fill(80, 50, 35);
  rect(300, 380, 105, 50);

  // ── 빨간 반원들 ──
  let as = 1 + sin(ms * 1.8) * 0.12;
  let r1 = map(sin(ms * 0.5), -1, 1, 100, 180);
  let r2 = map(cos(ms * 0.7), -1, 1, 10, 50);
  fill(r1, r2, 50);
  arc(195, 330, 140*as, 140*as, HALF_PI, 0);
  fill(r1+50, r2+20, 100);
  arc(195, 330, 100*as, 100*as, HALF_PI, 0);
  fill(250, 80, 200);
  arc(195, 330, 70*as, 70*as, HALF_PI, 0);

  // ── 회전하는 원 ──
  noFill();
  strokeWeight(1);
  stroke(3);
  push();
  translate(68, 120);
  rotate(ms * 0.8);
  circle(0, 0, 75);
  circle(0, 0, 55);
  ellipse(0, 0, 55, 10);
  ellipse(0, 0, 10, 55);
  ellipse(0, 0, 10, 10);
  pop();

  // ── 사각형 3개 ──
  let sf = sin(ms * 1.3) * 5;
  fill(140, 110, 80);
  noStroke();
  square(230, 365+sf, 25);
  square(300, 365-sf, 25);
  square(370, 365+sf, 25);

  // ── 버블 ──
  noFill();
  for (let i = 0; i < bubbleDefs.length; i++) {
    let b = bubbleDefs[i];
    let s = bubbleStates[i];

    if (s.popping) {
      let popFrac = s.popTimer / 0.25;
      stroke(65, 65, 130, map(popFrac, 0, 1, 200, 0));
      strokeWeight(1.2);
      let lineLen = s.r * 0.8 * popFrac;
      for (let a = 0; a < TWO_PI; a += HALF_PI) {
        line(b.x, s.y, b.x + cos(a) * lineLen, s.y + sin(a) * lineLen);
      }
    } else {
      let alpha = map(s.progress, 0, 1, 255, 80);
      stroke(65, 65, 130, alpha);
      strokeWeight(1);
      circle(b.x, s.y, s.r * 2);
      stroke(180, 180, 220, alpha * 0.6);
      strokeWeight(0.8);
      arc(b.x - s.r*0.25, s.y - s.r*0.25, s.r*0.6, s.r*0.6, radians(200), radians(320));
    }
  }

  // ── 별 반짝임 ──
  fill(200, 200, 10);
  noStroke();
  let s1 = 1 + sin(ms * 3) * 0.3;
  ellipse(560, 50, 35*s1, 7); ellipse(560, 50, 7, 35*s1); ellipse(560, 50, 10*s1, 10*s1);
  let s2 = 1 + sin(ms * 2.7 + 1) * 0.3;
  ellipse(510, 30, 25*s2, 4); ellipse(510, 30, 4, 25*s2); ellipse(510, 30, 10*s2, 10*s2);
  let s3 = 1 + sin(ms * 3.2 + 2) * 0.3;
  ellipse(400, 290, 25*s3, 4); ellipse(400, 290, 4, 25*s3); ellipse(400, 290, 10*s3, 10*s3);

  // ── 상단 타원 호 + 흰 원 ──
  noFill();
  stroke(1);
  strokeWeight(1);
  arc(ARC_CX, ARC_CY, ARC_RX*2, ARC_RY*2, 0, PI);

  let orbitAngle = (ms * 0.5) % PI;
  let orbX = ARC_CX + ARC_RX * cos(orbitAngle);
  let orbY = ARC_CY + ARC_RY * sin(orbitAngle);
  let orbSize = 25 + sin(ms * 1.8) * 3;
  fill(230, 230, 250);
  noStroke();
  circle(orbX, orbY, orbSize);
}
function keyPressed() {
  if (key === 's') {
    saveGif('20261051 과제4', 6); }}