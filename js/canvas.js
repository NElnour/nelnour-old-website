var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

/**
 * Responsive canvas
 */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/**
 * Draw blob
 */


/**
 * Animate blob
 */

var x = 0.5 * canvas.width;
var y = 0.5 * canvas.height;
var radius = 0.25 * canvas.height;

blobContWidth = Math.floor(x + radius);
blobContHeight = Math.floor(y + radius);


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var dx = Math.ceil(Math.random() * 3);
    var dy = Math.ceil(Math.random() * 3);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(20, 100, x, 40, x, 50);
    ctx.bezierCurveTo(1000, 100, x, 40, x, 130);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // if (x + radius > blobContWidth || x - radius < 0) {
    //     dx = -dx;
    // }

    // if (y + radius > blobContHeight || y - radius < 0) {
    //     dy = -dy;
    // }

    // x += dx;
    // y += dy;


}

animate();
/**
 * Animate in response to mouse hover
 */

/**
 * Navigate upon click
 */

   // Blob leak effect

   //
