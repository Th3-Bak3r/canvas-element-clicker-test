// Get the canvas element

var canvas = document.querySelector('canvas');

// Get the 2D rendering context

var ctx = canvas.getContext('2d');

// Add a click event listener to the canvas

canvas.addEventListener('click', function(event) {

// Get the coordinates relative to the canvas

var rect = canvas.getBoundingClientRect();

var x = event.clientX - rect.left;

var y = event.clientY - rect.top;

// Log the coordinates

console.log('Clicked at (' + x + ', ' + y + ')');

});
