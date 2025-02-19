# Visibility Alghoritms

## Ray tracing

## Introduction
The videogames world has undergone a huge evolution in the last years. It has been posible by the GPUs, the central component on which have been built.
In the present, Ray tracing was here, but this technology is very demanding.The graphic boards like RTX 3090 and RX 6900 cant give the correct shape in the geometry level with the ray tracing method.

![Ray Tracing](/vc/sketches/gameRT.jpg)

 ### History
  *  The oldest account of an optical experiment of casting rays from a viewer`s perspective can be found in the XVI century German artist Albrecht Dürer.
  *  In 1969 Arthur Appel at IBM  describes the Ray Casting Algorithm. It traces the path of a light ray through each pixel and checks for blocking objects. This idea fuels new research during all the XX century. A milestone is the production of Sci-Fi classic TRON using Ray Casting for special effects.
  *  In a 1979 Turner Whitted at NVIDIA Research published work on Ray Tracing adressing how to capture reflection, shadows and refraction for illumination models.
  *  In 1984, Lucasfilm’s researchers studied how ray tracing could incorporate a number of common filmmaking techniques — including motion blur, depth of field and translucency which had no digital techniques but lied on optical camera methods to create.
  *  In 1986 at The California Institute of Technology professor Jim Kajiya’s paper, “The Rendering Equation,” gives a physics understanding of light directions and ammounts beheaviours and becomes aframework used extensively in graphics and visual field research.
  
![Historia](/vc/sketches/HistoriaRT.jpg)


### Definition
Ray tracing is a rendering method that allows to create, with real form, the ligth behavior in the object interaction. In the real world light can travel environments in several ways different than a straight line, light can be reflected from one object to another, be blocked by objects causing shadows, or pass through transparent objects causing refractions (a direction change). In this method, rays of light are projected, calculating the properties of the reflected and refracted light.

In real world, every light source like the sun or a lightbulb, emits photons in all directions, the vast majority can be seen by our eyes. Ray tracing runs the other way, it emits rays from the camera. Every ray travels a certain distance before reflecting and refracting many times for recalculating the pixel values. The fact that ray tracing uses the camera as a light source instead of simulating the actual light source effect on the environment is justified by the computational chellenge that lies in calculating the light bheavior and effect in several directions. Tracing light in different directions from the light emissor to some or all of the objects could be extremely complex. The pixel by pixel from viewer perspective approach is indeed an efficient way to get outstandig graphic light imaging.



![Ray Tracing](/vc/sketches/RT.jpg)
Ray Tracing central idea


### Algorithm
The algorithm is divided into five sections: Camera Ray casting, Ray-object intersection, dealing with
object transformation, lighting calculations, and recursive ray tracing.



### Why Ray tracing?
The standard rendering method uses precalculated light maps for the light of all the scene. Some games use volumetric lighting for adding light sources in movement and allowing dynamic shades but this light moderation method requires an intensive use of GPU. Ray tracing allows the obtention of reflections and shades projections with accuracy in the rendering process. In the traditional rendering methods, both effects are optional and can cause meaningful impacts in performance.  


![Living Room](/vc/sketches/LivingRoom.jpg)
A Living Room illuminated using Ray Tracing in Software OctaneRender


![Living Room](/vc/sketches/LivingRoomRT.jpg)
Details

### Disadvantages
* Significant computational cost and hardware requirements.
* Advanced lighting effects such as caustics (light reflected or refracted by curve surfaces) are difficult to render.
* Other algorithms can produce equal or better quality results, for example photon mapping or path tracing.


![caustics](/vc/sketches/caustics.jpg)

### References
1. https://www.muycomputer.com/2021/02/02/ray-tracing-trazado-de-rayos-claves/.
2. https://cedominombre.com/que-es-el-trazado-de-rayos/.
3. https://blogs.nvidia.com/blog/2018/03/19/whats-difference-between-ray-tracing-rasterization/
4. https://developer.nvidia.com/discover/ray-tracing
5. https://inst.eecs.berkeley.edu/~cs294-13/fa09/lectures/scribe-lecture1.pdf
