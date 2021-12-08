new p5((p) => {
  
  var x = y = 600;
  var xc = yc = x/2;
  var nsqs = 20;
  var sqsize = x/nsqs;
  
  p.setup = function () {
    p.createCanvas(x, y);
  };

  p.draw = function () {
    p.background(255);
    p.fill(0);
    p.stroke(150);
    p.noFill();
    p.strokeWeight(2);

    for (var i=sqsize/2; i<x; i+=sqsize){
      p.line(i,0,i,y);
    }

    for (var j=sqsize/2; j<y; j+=sqsize){
      p.line(0,j,x,j);
    }

    tpts = [[Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize],
            [Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize],
            [Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize]];

    p.stroke(0);
    p.strokeWeight(3);
    p.line(tpts[0][0],tpts[0][1],tpts[1][0],tpts[1][1]);
    p.line(tpts[0][0],tpts[0][1],tpts[2][0],tpts[2][1]);
    p.line(tpts[2][0],tpts[2][1],tpts[1][0],tpts[1][1]);

    noLoop();
  };
}, "triangle-rasterization")
