# Shaders
‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵

## Image Processing
Image processing means processing digital images by means of digital computers. There are two important goals in this field: to extract useful information and to enhance or improve value and quality of images. Image digital processing strongly implies using different computational alghoritms based on both mathematical and cognitive research. An image is defined as a two-dimensional function, F(x,y), where x and y are spatial coordinates, and amplitude values of F are finite. Similarly images can be thought of in matrix or set form. A digital image is composed of a finite number of elements that have a particular value in a particular location. These elements are referred to as pixels and can be implemented by several encodings such as RGB or CMYK.

The field of digital image processing encopasses low and mid level tasks such as Noise removal, image sharpening, image segmentation and object recognition. With a broader scope, digital image processing is also related to Computer vision but this area requires further understanding of images and not merely editing or doing basic attributes identifications.

Some brief milestones:

* 1920s: US and UK Newspapers share images by Submarine cable image transmission.
* 1960s: DIP used to enhance Photographs from space.
* 1970s: DIP applied to Healthcare. Tomography creators win Nobel Prize (future Computerised Axial
Tomography).
* 1980s-2022: Extensive use in medical, industrial, scientific, security and artistic fields.

‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵


▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

## Masks or Kernels
A strategy for processing images by taking advantage of local information and that is suitable to address complex and high level problems impossible to solve by using a pixel by pixel approach is to use a convolution matrix. In this strategy we operate a kernel and an image computing a matrix convolution. 

This convolution consists in obtaining the product of values in small areas with a weighting of elements by using a kernel that multiplies the elements inside the patch and then adding the results for the group of values. This strategy can be summarized as a process of several multiplication-summation operations done centering the kernel at each available pixel in the image.

{{< p5-iframe sketch="/vc/sketches/imageProcessing.js" width="525" height="525" >}}

◥ Figure 1. Example of a Mask (imageProcessing.js)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


════════════════════════════════════════════════════════════════
## Spatial Coherence

Spatial coherence is a technique for sampling an image in a low resolution area. The goal is to Separate image into coherent objects. 

This issue can be strongly associated with the Theories of Perceptual organization extensively researched by the psychological School of The Gestalt which states that "persons perceive entire patterns and not only individual components". In this context a Gestalt is a structure so integrated as to constitute a functional unit with its own emerging properties. In this approach, some relevant attributes pruposed for understanding human thinking and perception are in are proximity of objects , closure of gaps, continuation of patterns and similarity of objects.

In a more formal sense, coherence can be related to locally constant attributes which can be identified given the existence of not drastic but smooth continous changes in the world. Spatial coherence therefore addresses spatial homogenities.


### Pixelator
Here we show Hardware and Software implementations of a pixelator. Images are still easy to identify correctly even when information is lost thanks to a proper use of spatial coherence concepts in algorithms.


### Hardware

{{< p5-iframe sketch="/vc/sketches/spatialCoherence.js"  width="625" height="625" >}}

◥ Figure 2. Pixelator by Hardware (spatialCoherence.js)

### Software

{{< p5-iframe sketch="/vc/sketches/spatialCoherenceBySoftware.js"  width="625" height="625" >}}

◥ Figure 3. Pixelator by Software (spatialCoherenceBySoftware.js)

Note on Atribution: 
Adapted from "Creating Pixelated Images using p5.js" (https://www.youtube.com/watch?v=KfLqRuFjK5g)

════════════════════════════════════════════════════════════════

✿✿°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°✿✿

## Photomosaic

A photomosaic is an image composed of many smaller photographs.

### History

The combination of modern computer technology and digital photo manipulation allowed the first creation of photo mosaics in 1990's. Robert Silvers played a very important role in the development of photo mosaics. At an age of 27 years in 1995 while attending MIT he developed an algorithm, which could organize many photo files into a complete image. This technology was patented in several countries. Robert Silvers became a photo mosaic artist. His artworks include portraits of famous people like Marilyn Monroe, but also artistic manipulations of classic paintings.


### Hardware

{{< p5-iframe sketch="/vc/sketches/photomosaic.js"  width="625" height="625" >}}

◥ Figure 4. A Photomosaic by Hardware (photomosaic.js)

### Software

{{< p5-iframe sketch="/vc/sketches/photomosaicBySoftware.js"  width="625" height="625" >}}

◥ Figure 5. A Photomosaic by Software (photomosaicBySoftware.js)


### Hardware vs Software

The photomosaic implemented by software is computationally expensive when compared to the photomosaic implemented by hardware. 

In the software implementation we make leaps in the image of a long equal to the sampling area. At each patch we take the first pixel as a descriptor of the patch. We also get a sort criteria by applying the luma function (but could be other fuction like avg). Using The luma criteria we get an index and select an image from a luma ordered Quadrille set of images. To summarize we pixelate the image and choose an image directly proportional in luma to the color assigned to the patch by a first pixel criterion.

Beacuse js doesn't have representation of vectors like the fragment shader requires and being this a propiety which facilitates these operations, the implementation by hardware is implemented in the GPU by taking advantage of parallel computing and vectorized fast operations execution. In this type of implementations the algorithm processing is heavily optimized and for this reason it is not computionally expensive. The implementation by hardware is made for processing in graphics dedicated units which contain adequate processors for image processing among other tasks not restricted by non vectorized representations and secuential traditional thinking.

✿✿°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°✿✿


◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇

### References

* Digital Image Processing: Introduction Slides. Brian Mac Namee. Scientific Computing and Imaging Institute.
http://www.sci.utah.edu/~gerig/CS6640-F2012/Materials/ImageProcessing1-Introduction-Bryan-Mac-Namee.pdf

* 2D image segmentation based on spatial coherence. Václav Hlaváč. Czech Technical University in Prague.
http://people.ciirc.cvut.cz/~hlavac/TeachPresEn/15ImageAnalysis/32-04SegmentationSpatialCoherence.pdf

* Image Manipulation: Filters and Convolutions. Sarah Abraham. University of Texas at Austin.
https://www.cs.utexas.edu/~theshark/courses/cs324e/lectures/cs324e-6.pdf

* Coherence in Computer Graphics. E. Gröller and W. Purgathofer. Technical University Vienna.
http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.50.9927&rep=rep1&type=pdf

* P5 Working with video: https://creative-coding.decontextualize.com/video/

* Creating Pixelated Images using p5.js: https://www.youtube.com/watch?v=KfLqRuFjK5g


◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◇◆◇◆◇◆◇◆◇