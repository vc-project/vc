# Rasterization

{{< p5-div sketch="/vc/sketches/triangle-rasterization.js" >}}

## Antialiasing

### Definition
El antialiasing es una técnica que tiene como objetivo reducir las distorsiones y artefactos gráficos que aparecen en una imagn de alta resolución cuando esta se presenta en una menor resolución y viceversa. Esto ayuda a la resolución de texturas y la resolución de una escena específica. 

### Descripción
Este método funciona para combatir el efecto del aliasing, cuando se presenta una imagen en una resolución diferente, causando distrosión en la imagen (de ahí el nombre de aliasing). Cuando se realiza esto, existe una pérdida de información al fusionar varios píxeles de la imagen, lo que puede producir una deformación de la misma. De ahí a que se use para suavizar esa tranformación y eliminar los efectos secundarios que puedan surgir dela tranformación, ya sea por el tamaño de la imagen, por la perspectiva o por cuakquier otra adaptación. El antialiasing se puede implementar de distintas maneras:

* Sobremuestreo o posfiltración: Se muestrean los objetos en una resolución más alta y luego se despliegan a una resolución menor para que no aparezcan tan pixelados.
* Máscaras de peso de píxeles: Se les asigna un peso a los subpíxeles cercanos al centro del área de un píxel.
* Muestreo de área o prefiltración: Se determina la intensidad de cada píxel al calcular el translape en cada uno de los píxeles que componen un objeto gráfico.
* Fases del píxel: mediante microcolocación se cambia la posición en la que se despliegan los píxeles.

### Aplicaciones
Este método está implementado en todos los GPU's y los motores gráficos modernos, existen varios tipos de antialiasing en donde se combinan diferentes métodos de implementación de este fenómeno. En la mayoría de los casos, este método se refleja en el mundo de los videojuegos para poder adaptarlos a la pantalla y resolución de los usuarios.


### Referencias
1. https://www.geeknetic.es/Antialiasing/que-es-y-para-que-sirve.
2. https://www.guiahardware.es/que-es-anti-aliasing-todo-necesitas-saber/.
