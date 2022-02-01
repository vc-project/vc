let img
let shape 

function preload(){
 img = loadImage('https://picsum.photos/100')
}

function setup() {
 createCanvas(300, 100);
 
 // Create new p5 graphics object
 shape = createGraphics(100, 100);
 
 background(220);

 // Draw the shape
 shape.strokeWeight(5);
 shape.point(84, 91);
 shape.point(68, 19);
 shape.point(21, 17);
 shape.point(32, 91);
 shape.strokeWeight(1);

 shape.fill(0);
 shape.beginShape();
 shape.curveVertex(84, 91);
 shape.curveVertex(84, 91);
 shape.curveVertex(68, 19);
 shape.curveVertex(21, 17);
 shape.curveVertex(32, 91);
 shape.curveVertex(32, 91);
 shape.endShape(CLOSE);
 
 image(img, 0, 0)
 image(shape, 100, 0)
 
 // Use the shape as a mask
 img.mask(shape)
 
 image(img, 200, 0)
}

//<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script>