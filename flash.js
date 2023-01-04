let SIZE = 0;               // size of canvas in px, will be set in startup()

const FLASH_TIME = 1000;    // time in ms

const COLOR = "rgba(255, 255, 0, 1)";   
let WIDTH = 0.005;          // line widt in %
let LENGTH = 0.3;           // length in %
const LENGTH_VAR = 0.3;     // length variantion in %

document.addEventListener("DOMContentLoaded", startup);

function startup() {
    const el = document.getElementById('canvas');
    
    /* Use min dimension */
    SIZE = Math.min(el.clientWidth, el.clientHeight);
    console.log(`Size set to ${SIZE}`);
}

function flash() {
    
    const el = document.getElementById('canvas');
    const ctx = el.getContext('2d');
    let color = 0;
    let dir, l ,x , y = 0;

    ctx.save();
    ctx.translate(el.clientWidth / 2, el.clientHeight / 2);     // center = 0,0

    dir = Math.random() * 2 * Math.PI;
    l = LENGTH * SIZE * (1 + (Math.random() - 0.5) * LENGTH_VAR);

    console.log(`Flash! dir = ${dir * 180 / Math.PI}°, l = ${l}, w = ${WIDTH * SIZE}, c = ${COLOR}`);

    for (let i = 0; i < l; i+=1) {
        color = `rgba(${main_playerColorOnly(2)}, ${(1 - (i / l)) })`   // fading out in time NOT WORKING PROPRLY
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = WIDTH * SIZE;
        // ctx.beginPath(0,0);
        ctx.moveTo(0, 0);
        x = Math.sin(dir);
        y = Math.cos(dir);
        ctx.lineTo(x, y);              
        ctx.stroke();

        // console.log(`c = ${color}`);

        ctx.translate(x, y);     // go to new position 
    }

    ctx.restore();

    return;
}