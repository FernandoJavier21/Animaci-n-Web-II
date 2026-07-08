====================================================================
   EVOLUCIÓN DE LOS VIDEOJUEGOS – SCROLLYTELLING INTERACTIVO
====================================================================

DESCRIPCIÓN GENERAL
-------------------
Esta página web es una experiencia inmersiva de "scrollytelling"
que narra la evolución visual de los videojuegos a través de 5 eras
históricas: 8-BIT, 16-BIT, 32/64 BITS, HD y RAYTRACING.

Al hacer scroll, el usuario viaja por cada época viendo imágenes
representativas, leyendo datos clave y accediendo a información
detallada sobre consolas y juegos emblemáticos.

====================================================================
CONTENIDO VISUAL Y FUNCIONALIDAD
====================================================================

1.  PRELODER
    - Pantalla de carga inicial con barra de progreso y estilo retro.

2.  CURSOR PERSONALIZADO
    - Un mando de Xbox Series X (cursor-rtx.png) con resplandor neón
      pulsante, fijo para toda la navegación.
    - Se oculta en dispositivos móviles para usar el cursor nativo.

3.  HUD (CABECERA)
    - Marca "PIXEL2RAY" con estilo "Press Start 2P".
    - Navegación rápida por eras (botones 8-BIT, 16-BIT, 3D, HD, RTX).
    - Barra de progreso que se llena al hacer scroll.

4.  SECCIÓN HERO (INICIO)
    - Título y descripción principal.
    - Botón "Iniciar recorrido" que lleva al área de scrollytelling.

5.  SCROLLYTELLING (CINEMA)
    - 5 imágenes de fondo que cambian con el scroll (efecto de transición
      con desenfoque y escala).
    - Capa de viñeta, partículas, orbes neón y efecto glitch.
    - Panel lateral izquierdo con información de la época actual:
        - Kicker (ERA 01, ERA 02, ...)
        - Título (8-BIT, 16-BIT, ...)
        - Descripción breve
        - Botones:
            a) "Explorar era" → abre un panel lateral con datos curiosos.
            b) "Ver evolución gráfica" → muestra la evolución de Sonic
               a través de las eras (ventana emergente).
            c) "Saber más sobre esta época" → abre un overlay amplio
               con tres columnas:
                - Consolas destacadas (lista)
                - Juegos emblemáticos (lista)
                - Previsualización (imagen, título y descripción)
               Las imágenes se precargan y tienen transición suave
               para evitar parpadeos al pasar el ratón.

6.  SECCIÓN FINALE
    - Mensaje de cierre que invita a reflexionar sobre la evolución.
    - Botón "Reiniciar experiencia" para volver al inicio.

====================================================================
ESTRUCTURA DE CARPETAS (para imágenes)
====================================================================

/
├── cursors/
│   └── cursor-rtx.png          # Cursor fijo (mando Xbox Series X)
├── assets/
│   ├── era-8bit.jpg            # Fondo época 8-BIT
│   ├── era-16bit.jpg           # Fondo época 16-BIT
│   ├── era-32-64bit.jpg        # Fondo época 32/64 BITS
│   ├── era-hd.jpg              # Fondo época HD
│   ├── era-raytracing.jpg      # Fondo época RAYTRACING
│   ├── sonic 1.png             # Sonic 8-BIT
│   ├── sonic2.png              # Sonic 16-BIT
│   ├── sonic 3.png             # Sonic 3D
│   ├── sonic 4.png             # Sonic HD
│   ├── sonic 5.png             # Sonic RTX
│   ├── consolas/               # Imágenes de consolas (PNG recomendado)
│   │   ├── nes.png
│   │   ├── master-system.png
│   │   ├── snes.png
│   │   ├── genesis.png
│   │   ├── ps1.png
│   │   ├── n64.png
│   │   ├── xbox360.png
│   │   ├── ps3.png
│   │   ├── xboxsx.png
│   │   └── ps5.png
│   └── juegos/                 # Imágenes de juegos (JPG/PNG)
│       ├── mario.png
│       ├── zelda.jpg
│       ├── sonic.jpg
│       ├── sf2.png
│       ├── mario64.jpg
│       ├── ff7.jpg
│       ├── tlou.jpg
│       ├── uncharted2.png
│       ├── cp2077.png
│       └── spiderman.jpg

====================================================================
TECNOLOGÍAS UTILIZADAS
====================================================================
- HTML5, CSS3, JavaScript (ES6)
- GSAP (GreenSock Animation Platform) para animaciones y scroll.
- ScrollTrigger (plugin GSAP) para controlar la línea de tiempo.
- Fuentes: "Press Start 2P" (retro) e "Inter" (moderna).

====================================================================
NOTAS ADICIONALES
====================================================================
- El proyecto está optimizado para escritorio y adaptable a móviles.
- Las imágenes de consolas y juegos deben tener fondo transparente
  o recortado para una mejor visualización en la previsualización.
- El cursor personalizado solo funciona en pantallas > 760px.