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

    dir0 = Math.random() * 2 * Math.PI;
    l = LENGTH * SIZE * (1 + (Math.random() - 0.5) * LENGTH_VAR);

    console.log(`Flash! dir = ${dir * 180 / Math.PI}°, l = ${l}, w = ${WIDTH * SIZE}, c = ${COLOR}`);
    
    // dir = 0;
    x = 0;
    y = 0;
    let l0 = 20;
    let ll = l0;
    
    dir = dir0;
    // ctx.rotate(dir);

    for (let i = 0; i < l; i += ll) {
        color = `rgba(${main_playerColorOnly(2)}, ${(1 - (i / l)) })`   // fading out in time NOT WORKING PROPRLY
        color = `rgba(${main_playerColorOnly(2)}, ${(1) })`   // fading out in time NOT WORKING PROPRLY
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = WIDTH * SIZE;

        ctx.moveTo(x, y);
        if (Math.random() < 0.1) {
            ll = Math.floor(l0 * Math.random() * 0.3 - 0.15);
            dir = Math.floor(dir0 * Math.random() * 0.1 - 0.05); 
        }


        x += ll * Math.cos(dir);
        y += ll * Math.sin(dir);
        ctx.lineTo(x, y);  
        ctx.stroke();


        // console.log(`c = ${color}`);      
        
    }

    
    ctx.restore();

    return;
}