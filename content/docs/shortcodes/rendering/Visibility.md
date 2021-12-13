# Visibility Alghoritms

## Ray tracing

## Introduction
The videogames world has undergone a huge evolution in the last years. It has been posibleby the GPUs, the central component on which have been built.
In the present, Ray tracing was here, but this technology is very demanding.The graphic boards like RTX 3090 and RX 6900 cant give the correct shape in the geometry level with the ray tracing method.

![Ray Tracing](/vc/sketches/gameRT.jpg)




### Definition
Ray tracing is a rendering method that allows to create, with real form, the ligth behavior in the object interaction. In the real world light can travel environments in several ways different than a straight line, light can be reflected from one object to another, be blocked by objects causing shadows, or pass through transparent objects causing refractions (a direction change). In this method, rays of light are projected, calculating the properties of the reflected and refracted light.

In real world, every light source like the sun or a lightbulb, emits photons in all directions, the vast majority can be seen by our eyes. Ray tracing runs the other way, it emits rays from the camera. Every ray travels a certain distance before reflecting and refracting many times for recalculating the pixel values. The fact that ray tracing uses the camera as a light source instead of simulating the actual light source effect on the environment is justified by the computational chellenge that lies in calculating the light bheavior and effect in several directions. Tracing light in different directions from the light emissor to some or all of the objects could be extremely complex. The pixel by pixel from viewer perspective approach is indeed an efficient way to get outstandig graphic light imaging.



![Ray Tracing](/vc/sketches/RT.jpg)
Ray Tracing central idea




### Why Ray tracing?
The standard rendering method uses precalculated light maps for the light of all the scene. Some games use volumetric lighting for adding light sources in movement and allowing dynamic shades but this light moderation method requires an intensive use of GPU. Ray tracing allows the obtention of reflections and shades projections with accuracy in the rendering process. In the traditional rendering methods, both effects are optional and can cause meaningful impacts in performance.  


![Living Room](/vc/sketches/LivingRoom.jpg)
A Living Room illuminated using Ray Tracing in Software OctaneRender


![Living Room](/vc/sketches/LivingRoomRT.jpg)
Details


### References
1. https://www.muycomputer.com/2021/02/02/ray-tracing-trazado-de-rayos-claves/.
2. https://cedominombre.com/que-es-el-trazado-de-rayos/.
3. https://blogs.nvidia.com/blog/2018/03/19/whats-difference-between-ray-tracing-rasterization/
4. https://developer.nvidia.com/discover/ray-tracing
