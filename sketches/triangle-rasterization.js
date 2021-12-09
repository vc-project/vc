class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function orient2D(a , b, c) {
  return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
}

new p5((p) => {
  
  var x = y = 600;
  var xc = yc = x/2;
  var nsqs = 30; //numero de cuadrados en el grid
  var sqsize = x/nsqs;
  
  p.setup = function () {
    p.createCanvas(x, y);
  };

  p.draw = function () {
    p.background(255);
    p.fill(0);
    p.stroke(150);
    p.noFill();
    p.strokeWeight(1.5);

    //Grid
    for (var i=sqsize/2; i<x; i+=sqsize){
      p.line(i,0,i,y);
    }
    for (var j=sqsize/2; j<y; j+=sqsize){
      p.line(0,j,x,j);
    }

    //Triangle points
    tpts = [new Point(Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize),
            new Point(Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize),
            new Point(Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize)];

    //Triangle drawing
    p.stroke(255,0,0);
    p.strokeWeight(3);
    p.line(tpts[0].x,tpts[0].y,tpts[1].x,tpts[1].y);
    p.stroke(0,255,0);
    p.line(tpts[0].x,tpts[0].y,tpts[2].x,tpts[2].y);
    p.stroke(0,0,255);
    p.line(tpts[2].x,tpts[2].y,tpts[1].x,tpts[1].y);
    p.stroke(0);

    orsign = orient2D(tpts[0], tpts[1], tpts[2]) >= 0;

    for (var i=sqsize; i<x; i+=sqsize){
      w = [orient2D(tpts[0], tpts[1], new Point(i,sqsize)),
           orient2D(tpts[1], tpts[2], new Point(i,sqsize)),
           orient2D(tpts[2], tpts[0], new Point(i,sqsize))];

      for(var j=sqsize; j<y; j+=sqsize){
        console.log(i/sqsize, j/sqsize, w);

        if(w[0]>=0 === orsign && w[1]>=0 === orsign && w[2]>=0 === orsign) {
          p.circle(i,j,sqsize);
          console.log("pp");
        }

        w[0] = w[0] + (tpts[1].x-tpts[0].x)*sqsize;
        w[1] = w[1] + (tpts[2].x-tpts[1].x)*sqsize;
        w[2] = w[2] + (tpts[0].x-tpts[2].x)*sqsize;
      }
    }

    p.noLoop();
  };
}, "triangle-rasterization")
