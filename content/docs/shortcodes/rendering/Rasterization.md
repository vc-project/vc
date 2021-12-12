# Rasterization
It is a process to make a correct vector to raster conversion in an image form sense. Vectorial images consist of several lines, paths and shapes in a 2D or 3D environment that are defined mathematically to describe objects and scenes. A raster image uses a bitmap or set of pixels in the form of a grid or matrix to represent an image. Rasterization is important because pixel format is the format used in digital output image devices.

{{< p5-div sketch="/vc/sketches/triangle-rasterization.js" >}}

## Antialiasing

### Definition
Antialiasing is a technique whose objective is to reduce the distortions and graphical defects that appear in high-resolution images when these are presented at lower resolutions and vice versa. This helps getting and adequate display resolution of textures and the improved resolution of the different specific scenes.

### Description
This method is used to address the effect of aliasing, a frequent problem obtained when an image is presented in a different resolution from its original size. The effect consists of the appearance of jagged edges in a rasterized image (an image composed by a set of pixels intended for digital displaying).  The effect causes a processed image to become an alias (a false version) of the original sample and hence the name aliasing.  

When an image is downscaled  there is a loss of information due to the merging of several pixels of the image, which can cause deformations. The information loss has a clear origin: The undersampling. This happens because smooth objects are difficult to show as a set of matrix organized pixels and if our processed image sample does not comprises a correct sample frequency some important details will be lost. Anti-aliasing is used to smooth the transformation and eliminate the side effects that may arise from these transformations, either by image size, perspective or any other adaptation. Antialiasing can be implemented in different ways:

* Oversampling or post-filtering: Objects are sampled at a higher resolution and then they are displayed at a lower resolution so that they do not appear pixelated. To obtain the final image we must therefore rasterize the original source using a very precise matrix or grid and then create subpixels which display the average intensity of the smaller oversampled pixels.

* Pixel weight masks: Subpixels near the center of a pixel area are assigned weights. The mask oriented algorithms can be used to identify which objects, edges or curves are being represented by specific pixels and use the hardware display capacity in a context decision global approach.

* Area sampling or prefiltering: The intensity of each pixel is determined by calculating the overlap in each of the pixels that make up a graphic object. This computation is done prior to the rasterization and we condider objects not finer pixels to calculate the final image pixel by pixel.

* Pixel phasing: It works by micro-placement. The position at which pixels are displayed is changed. The idea is to follow the geometry of the objects and display an image doing the necessary fixes to achieve the correct representation of this feature.

### Applications
This method is implemented in all modern GPU's and graphics engines, there are several types of antialiasing and the different methods of implementation of this phenomenon can be combined. In most cases of GPU usage, this method is reflected in the world of video games in order to adapt them to the user's screen and resolution.


### Referencias
1. https://www.geeknetic.es/Antialiasing/que-es-y-para-que-sirve.
2. https://www.guiahardware.es/que-es-anti-aliasing-todo-necesitas-saber/.
3. https://www.geeksforgeeks.org/computer-graphics-antialiasing/
4. https://blogs.nvidia.com/blog/2018/03/19/whats-difference-between-ray-tracing-rasterization/
5. 
