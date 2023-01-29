const SUN = 600; // canvas size as base for the other elements
// const SUN = document.getElementById('canvas').width;
const EARTH = 24 / 300 * SUN; 
const EARTH_ORBIT = 105 / 300 * SUN; 
const SHADOW_X = 40 / 300 * SUN;
const SHADOW_Y = 36 / 300 * SUN;
const MOON = 7 / 300 * SUN; 
const MOON_ORBIT = 28.5 / 300 * SUN; 

const sun = new Image();
const moon = new Image();
const earth = new Image();


function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}


function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, SUN, SUN); // clear canvas

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
  ctx.save();
  ctx.translate(SUN / 2, SUN / 2);

  // Earth
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(EARTH_ORBIT, 0);
  ctx.fillRect(0, - SHADOW_Y / 3 , SHADOW_X, SHADOW_Y * 2 / 3); // Shadow
  ctx.drawImage(earth, - EARTH / 2, - EARTH / 2, EARTH, EARTH);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  ctx.translate(0, MOON_ORBIT);
  ctx.drawImage(moon, - MOON / 2, - MOON / 2, MOON, MOON);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(SUN / 2, SUN / 2, EARTH_ORBIT, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  // Sub and background
  ctx.drawImage(sun, 0, 0, SUN, SUN);

  window.requestAnimationFrame(draw);
}


init();
