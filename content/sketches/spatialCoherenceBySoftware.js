//Atribucion: Adaptado de https://www.youtube.com/watch?v=KfLqRuFjK5g

let img; // creates image variable

let size = 7 // element size

let startx = 0 // starting x coordinate
let starty = 0 // starting y coordinate

const height = 600
const width = 600


function preload() {
  img = loadImage('/vc/sketches/mandrill.png'); 
}

function setup() {
  noStroke();
  createCanvas(height, width); // creates canvas
  img.loadPixels(); // loads image
  textureMode(NORMAL);

  gridSize = createSlider(5,100,25,5);
  gridSize.position(10, 25);
  gridSize.style('width', '580px');
  gridSize.hide();

  enable_shader = createCheckbox('enable shader', false);
  enable_shader.style('color', 'magenta');

  enable_shader.changed(() => {
    if (enable_shader.checked()) {
      gridSize.show();
    } else {
      gridSize.hide(); 
    }
  });
  enable_shader.position(10, 10);

}


function draw() {
clear();

if (enable_shader.checked()) {
 
    resolution = gridSize.value()
  

    let image_size = floor(img.width/resolution) // Tamano parche imagen original
    let batch_size = floor(width/resolution)     // Tamano parche imagen pequena



  for (var starty = 0; starty < img.height; starty+=image_size) { // creates pixel index
    for (var startx = 0; startx < img.width; startx+=image_size) {
      var index = (startx + starty * img.width) * 4; // rgba columna + filas completas 
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];


      noStroke(); // disables element stroke



      fill(r,g,b) // fills element with adjusted grayscale

      rect(startx*width/img.width, starty*height/img.height, batch_size, batch_size)
      
      

    }
    
  }
}else{
    image(img, 0, 0,width,height);
}

}