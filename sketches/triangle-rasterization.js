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
  let nsqs = 40; //numero de cuadrados en el grid
  let nsubsqs = 4; //numero de subpixeles por pixel
  let sqsize = x/nsqs;
  let subsqsize = sqsize/nsubsqs;
  let aaf = 1500; //aaf
  tpts = [new Point(Math.floor(Math.random()*(nsqs/2-1)+1)*sqsize, Math.floor(Math.random()*(nsqs/2-1)+1)*sqsize),
    new Point(Math.floor(nsqs/2+Math.random()*(nsqs/2-1)+1)*sqsize, Math.floor(nsqs/2+Math.random()*(nsqs/2-1)+1)*sqsize),
    new Point(Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize)]


  p.drawTriangle =  function(){
    p.strokeWeight(2);
    p.stroke(255,0,0);
    p.line(tpts[0].x,tpts[0].y,tpts[1].x,tpts[1].y);    p.stroke(0,255,0);
    p.line(tpts[0].x,tpts[0].y,tpts[2].x,tpts[2].y);
    p.stroke(0,0,255);
    p.line(tpts[2].x,tpts[2].y,tpts[1].x,tpts[1].y);
    p.stroke(0);
  }

  p.setup = function () {
    p.createCanvas(x, y + 200);

    nsqsSlider = p.createSlider(40, 200, 10);
    nsubsqsSlider = p.createSlider(2, 16, 2);
    aafSlider = p.createSlider(1000, 2500, 100);

    nsqsSlider.position(0, y + 200);
    nsubsqsSlider.position(0, y + 240);
    aafSlider.position(0, y + 280);

    drawTriangleButton = p.createButton("Draw Triangle");
    drawTriangleButton.position(0, y + 330);
    drawTriangleButton.mousePressed(p.drawTriangle);

    drawTriangleButton = p.createButton("Draw");
    drawTriangleButton.position(0, y + 350);
    drawTriangleButton.mousePressed(p.draw);

    tpts = [new Point(Math.floor(Math.random()*(nsqs/2-1)+1)*sqsize, Math.floor(Math.random()*(nsqs/2-1)+1)*sqsize),
      new Point(Math.floor(nsqs/2+Math.random()*(nsqs/2-1)+1)*sqsize, Math.floor(nsqs/2+Math.random()*(nsqs/2-1)+1)*sqsize),
      new Point(Math.floor(Math.random()*(nsqs-1)+1)*sqsize, Math.floor(Math.random()*(nsqs-1)+1)*sqsize)]
  };

  p.draw = function () {
    p.background(255);
    p.fill(0);
    p.stroke(150);
    p.noFill();
    p.strokeWeight(1.5);

    nsqs = nsqsSlider.value();
    nsubsqs = nsubsqsSlider.value();
    aaf = aafSlider.value();
    console.log(nsqs, nsubsqs, aaf);
    sqsize = x/nsqs;
    subsqsize = sqsize/nsubsqs;

  
  
    //Grid
    /*
    for (var i=sqsize/2; i<x; i+=sqsize){
      p.line(i,0,i,y);
    }
    for (var j=sqsize/2; j<y; j+=sqsize){
      p.line(0,j,x,j);
    }*/

    orsign = orient2D(tpts[0], tpts[1], tpts[2]) > 0;

    p.fill(0,0,0);
    p.noStroke();

    for (var i=sqsize/2; i<x; i+=sqsize){
      var ws = [];

      ws[0] = [orient2D(tpts[0], tpts[1], new Point(i,sqsize/2)),
               orient2D(tpts[1], tpts[2], new Point(i,sqsize/2)),
               orient2D(tpts[2], tpts[0], new Point(i,sqsize/2))];

      ws[1] = [ws[0][0] - (tpts[1].y-tpts[0].y)*sqsize, ws[0][1] - (tpts[2].y-tpts[1].y)*sqsize, ws[0][2] - (tpts[0].y-tpts[2].y)*sqsize];
      ws[2] = [ws[0][0] + (tpts[1].x-tpts[0].x)*sqsize, ws[0][1] + (tpts[2].x-tpts[1].x)*sqsize, ws[0][2] + (tpts[0].x-tpts[2].x)*sqsize];
      ws[3] = [ws[1][0] + (tpts[1].x-tpts[0].x)*sqsize, ws[1][1] + (tpts[2].x-tpts[1].x)*sqsize, ws[1][2] + (tpts[0].x-tpts[2].x)*sqsize];
      
      for(var j=sqsize/2; j<y; j+=sqsize){
        
        bws = [ws[0][0]>0 === orsign && ws[0][1]>0 === orsign && ws[0][2]>0 === orsign,
               ws[1][0]>0 === orsign && ws[1][1]>0 === orsign && ws[1][2]>0 === orsign,
               ws[2][0]>0 === orsign && ws[2][1]>0 === orsign && ws[2][2]>0 === orsign,
               ws[3][0]>0 === orsign && ws[3][1]>0 === orsign && ws[3][2]>0 === orsign]

        var max = 0;

        if(bws[0] && bws[1] && bws[2] && bws[3]) {
          p.fill(0);
          p.square(i, j, sqsize);
        } 
        //division en subpixeles
        else if (bws[0] || bws[1] || bws[2] || bws[3]) {
          for (var ssi=0; ssi<nsubsqs; ssi++){
            wss = [];
            wss[0] = [ws[0][0] + (tpts[1].x-tpts[0].x)*ssi*subsqsize, ws[0][1] + (tpts[2].x-tpts[1].x)*ssi*subsqsize, ws[0][2] + (tpts[0].x-tpts[2].x)*ssi*subsqsize];
            //
            if(wss[0][0]>0 === orsign && wss[0][1]>0 === orsign && wss[0][2]>0 === orsign){
              p.fill(0);
              p.square(i, j+ssi*subsqsize, subsqsize);
            } 
            // antialising
            else {
              wssmin = Math.min(...wss[0]);
              //implementar la division para no usar area sino altura del trapecio.
              p.fill(-255*wssmin/aaf);
              p.square(i, j+ssi*subsqsize, subsqsize);
              if(wssmin<max) max = wssmin;
            }
            for (var ssj=1; ssj<nsubsqs; ssj++){
              wss[ssj] = [wss[0][0] - (tpts[1].y-tpts[0].y)*ssj*subsqsize, wss[0][1] - (tpts[2].y-tpts[1].y)*ssj*subsqsize, wss[0][2] - (tpts[0].y-tpts[2].y)*ssj*subsqsize];
              if(wss[ssj][0]>0 === orsign && wss[ssj][1]>0 === orsign && wss[ssj][2]>0 === orsign){
                p.fill(0);
                p.square(i+ssj*subsqsize, j+ssi*subsqsize, subsqsize);
              } 
              //antialising
              else {
                wssmin = Math.min(...wss[ssj]);
                //implementar la division para no usar area sino altura del trapecio.
                p.fill(-255*wssmin/aaf);
                p.square(i+ssj*subsqsize, j+ssi*subsqsize, subsqsize);
                if(wssmin<max) max = wssmin;
              }
            }
          }
          //visita al vecino de arriba
          for (var ssi=0; ssi<nsubsqs; ssi++){
            wss = [];
            wss[0] = [ws[0][0] - (tpts[1].x-tpts[0].x)*ssi*subsqsize, ws[0][1] - (tpts[2].x-tpts[1].x)*ssi*subsqsize, ws[0][2] - (tpts[0].x-tpts[2].x)*ssi*subsqsize];
            if(wss[0][0]>0 === orsign && wss[0][1]>0 === orsign && wss[0][2]>0 === orsign){
              p.fill(0);
              p.square(i, j-ssi*subsqsize, subsqsize);
            } else {
              wssmin = Math.min(...wss[0]);
              p.fill(-255*wssmin/aaf);
              p.square(i, j-ssi*subsqsize, subsqsize);
              if(wssmin<max) max = wssmin;
            }
            for (var ssj=1; ssj<nsubsqs; ssj++){
              wss[ssj] = [wss[0][0] - (tpts[1].y-tpts[0].y)*ssj*subsqsize, wss[0][1] - (tpts[2].y-tpts[1].y)*ssj*subsqsize, wss[0][2] - (tpts[0].y-tpts[2].y)*ssj*subsqsize];
              if(wss[ssj][0]>0 === orsign && wss[ssj][1]>0 === orsign && wss[ssj][2]>0 === orsign){
                p.fill(0);
                p.square(i+ssj*subsqsize, j-ssi*subsqsize, subsqsize);
              } else {
                wssmin = Math.min(...wss[ssj]);
                p.fill(-255*wssmin/aaf);
                p.square(i+ssj*subsqsize, j-ssi*subsqsize, subsqsize);
                if(wssmin<max) max = wssmin;
              }
            }
          }
          //visita al vecino de la derecha
          for (var ssi=0; ssi<nsubsqs; ssi++){
            wss = [];
            wss[0] = [ws[0][0] - (tpts[1].x-tpts[0].x)*ssi*subsqsize, ws[0][1] - (tpts[2].x-tpts[1].x)*ssi*subsqsize, ws[0][2] - (tpts[0].x-tpts[2].x)*ssi*subsqsize];
            if(wss[0][0]>0 === orsign && wss[0][1]>0 === orsign && wss[0][2]>0 === orsign){
              p.fill(0);
              p.square(i, j-ssi*subsqsize, subsqsize);
            } else {
              wssmin = Math.min(...wss[0]);
              p.fill(-255*wssmin/aaf);
              p.square(i, j-ssi*subsqsize, subsqsize);
              if(wssmin<max) max = wssmin;
            }
            for (var ssj=1; ssj<nsubsqs; ssj++){
              wss[ssj] = [wss[0][0] - (tpts[1].y-tpts[0].y)*(ssj+nsubsqs)*subsqsize, wss[0][1] - (tpts[2].y-tpts[1].y)*(ssj+nsubsqs)*subsqsize, wss[0][2] - (tpts[0].y-tpts[2].y)*(ssj+nsubsqs)*subsqsize];
              if(wss[ssj][0]>0 === orsign && wss[ssj][1]>0 === orsign && wss[ssj][2]>0 === orsign){
                p.fill(0);
                p.square(i+(ssj+nsubsqs)*subsqsize, j-ssi*subsqsize, subsqsize);
              } else {
                wssmin = Math.min(...wss[ssj]);
                p.fill(-255*wssmin/aaf);
                p.square(i+(ssj+nsubsqs)*subsqsize, j-ssi*subsqsize, subsqsize);
                if(wssmin<max) max = wssmin;
              }
            }
          }
        }

        ws[0] = ws[2];
        ws[1] = ws[3];
        ws[2] = [ws[2][0] + (tpts[1].x-tpts[0].x)*sqsize, ws[2][1] + (tpts[2].x-tpts[1].x)*sqsize, ws[2][2] + (tpts[0].x-tpts[2].x)*sqsize];
        ws[3] = [ws[3][0] + (tpts[1].x-tpts[0].x)*sqsize, ws[3][1] + (tpts[2].x-tpts[1].x)*sqsize, ws[3][2] + (tpts[0].x-tpts[2].x)*sqsize];
      
        p.fill(0);
      }
    }

    //Grid drawing

    for (var i=sqsize/2; i<x; i+=sqsize){
      for(var j=sqsize/2; j<y; j+=sqsize){
        p.circle(i, j, 2);
      }
    }
    //p.drawTriangle();
    p.noLoop();
  };
}, "triangle-rasterization")
