# Shaders

## Image Processing

Image processing means processing digital image by means of a digital computer. The target of this is extract useful information using computer alghoritms.
An image is defined as two-dimensional function, F(x,y), where x and y are spatial coordinates, and amplitude values of F are finite.
Digital image is composed of a finite number of elements have a particular value in a particular location. These elements are referred like pixels.

{{< p5-iframe sketch="/vc/sketches/imageProcessing.js" width="525" height="525" >}}

## Spatial Coherence

Spatial coherence is a technique for sampling an image in a low resolution area.

### Hardware

{{< p5-iframe sketch="/vc/sketches/spatialCoherence.js"  width="625" height="625" >}}


### Software

{{< p5-iframe sketch="/vc/sketches/spatialCoherenceBySoftware.js"  width="625" height="625" >}}

## Photomosaic

A photomosaic is an image composed of many smaller photographs.

### History

The combination of modern computer technology and digital photo manipulation allowed the first creation of photo mosaics in 90's. Robert Silvers played a very important roll in development of photo mosaics. At 27 years of age in 1995 the MIT student developed an algorithm, which could organize many photo files into a complete image. This technology was patented in many different countries.
Robert Silvers became a photo mosaic artist. His artworks include portraits of famous people like Marilyn Monroe, but also artistic manipulations of classic paintings.


### Hardware

{{< p5-iframe sketch="/vc/sketches/photomosaic.js"  width="625" height="625" >}}


### Software

{{< p5-iframe sketch="/vc/sketches/photomosaicBySoftware.js"  width="625" height="625" >}}



### Hardware vs Software

The photomosaic implemented by software is computationally expensive respect to the photomosaic implemented by hardware. In software implementation, scroll the image by the sampling area applying the luma function (can be other fuction like avg), beacuse js doesn't have representation of vectors like fragment shader, which facilitates these operations. The implementation by hardware is implemented in th GPU, in this type of implementations is more optimized the algorithm processing, for this reason is not computionally expensive. The implementation by hardware is made for processign in graphics dedicated processors, the adequate processors for image processing.