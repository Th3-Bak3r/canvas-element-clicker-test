var canvas = document.querySelector('canvas');

// Change the numbers to your desired coordinates

var x = 954;

var y = 444;

var clickEvent = new MouseEvent('click', {

clientX: x,

clientY: y,

});

canvas.dispatchEvent(clickEvent);
