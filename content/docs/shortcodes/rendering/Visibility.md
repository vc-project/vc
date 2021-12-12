# Visibility Alghoritms

## Ray tracing
The videogames world has undergone a huge evolution in the last years. It has been posible
by the GPU, the central component on which have been built.
In the present, Ray tracing was here, but this technology is very demanding.The graphic boards like RTX 3090 and RX 6900 cant give the correct shape in the geometry level with the ray tracing method.

### Definition
Ray tracing is a rendering method that allows create, with real form, the ligth behavior in the object interaction.
In this method, rays of light are projected, calculating the properties of the reflected and refracted light. In real world, every light source like the sun or a lightbulb, emits photons in all directions, the vast majority can see our eyes. Ray tracing runs the other way, emits ray from the camera. Every ray travel any distance before reflect many times for recalculate the pixel value.

### Why Ray tracing?
The standar rendering method uses light maps precalculated and the light of all scene. ANy games use the volumetric lighting for adding light sources in movement and allow dynamic shades. But, this moderation method requires intensive use of GPU.
Ray tracing allows reflects and shades projecting with accuracy in th erendering procces. In the traditional rendering methods, both effects are optional and can cause meaningfulimpacts in performance.  


### References
1. https://www.muycomputer.com/2021/02/02/ray-tracing-trazado-de-rayos-claves/.
2. https://cedominombre.com/que-es-el-trazado-de-rayos/.