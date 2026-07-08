gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    k:'ERA 01',
    title:'8-BIT',
    text:'El inicio de mundos inolvidables construidos con píxeles, música chiptune y creatividad sin límites.',
    tech:'Sprites 2D',
    panel:'Los 8-bit demostraron que una gran experiencia no dependía del realismo, sino del diseño y la imaginación.',
    highlight:'Con muy poca memoria, los desarrolladores crearon mundos completos usando sprites, tiles y paletas de color limitadas.',
    bullets:['Los escenarios se construían con bloques repetidos llamados tiles.','La música chiptune usaba pocos canales de audio, pero creó melodías inolvidables.','La dificultad era parte del diseño: aprender patrones era clave para avanzar.'],
    advance:'Sprites 2D, scroll simple y diseño basado en píxeles.',
    bridge:'Los píxeles ya no eran suficientes: la industria quería más color, velocidad y expresión.',
    consolas:[
      {nombre:'Nintendo Entertainment System (NES)', imagen:'assets/consolas/nes.png', desc:'La consola que revivió la industria y popularizó los juegos en 8-bit.'},
      {nombre:'Sega Master System', imagen:'assets/consolas/master-system.png', desc:'El rival de NES con gráficos más coloridos y sonido mejorado.'}
    ],
    juegos:[
      {nombre:'Super Mario Bros.', imagen:'assets/juegos/mario.png', desc:'El juego de plataformas que definió el género y el icono de Nintendo.'},
      {nombre:'The Legend of Zelda', imagen:'assets/juegos/zelda.jpg', desc:'Aventura y exploración en un mundo abierto con un héroe llamado Link.'}
    ]
  },
  {
    k:'ERA 02',
    title:'16-BIT',
    text:'Más color, más velocidad y animaciones más expresivas. El videojuego empieza a sentirse más vivo.',
    tech:'Scroll lateral',
    panel:'Los 16-bit aumentaron detalle, paletas de color y fluidez, llevando el arcade a casa con mayor personalidad.',
    highlight:'Esta generación permitió personajes más grandes, fondos con varias capas y una sensación de movimiento mucho más dinámica.',
    bullets:['El parallax scrolling creó profundidad moviendo capas a distintas velocidades.','Los juegos de pelea y plataformas ganaron animaciones más detalladas.','El color se volvió protagonista y ayudó a definir identidades visuales más fuertes.'],
    advance:'Parallax, más colores en pantalla y animaciones más suaves.',
    bridge:'Cuando el 2D alcanzó mayor detalle, el siguiente salto fue construir mundos con profundidad real.',
    consolas:[
      {nombre:'Super Nintendo (SNES)', imagen:'assets/consolas/snes.png', desc:'La consola que perfeccionó el 2D con gráficos vibrantes y sonido envolvente.'},
      {nombre:'Sega Genesis (Mega Drive)', imagen:'assets/consolas/genesis.png', desc:'La apuesta de Sega por la velocidad y los juegos de acción.'}
    ],
    juegos:[
      {nombre:'Sonic the Hedgehog', imagen:'assets/juegos/sonic.jpg', desc:'Velocidad y actitud en un erizo azul que compitió con Mario.'},
      {nombre:'Street Fighter II', imagen:'assets/juegos/sf2.png', desc:'El juego de lucha que definió el género y llenó los arcades.'}
    ]
  },
  {
    k:'ERA 03',
    title:'32/64 BITS',
    text:'La cámara entra al mundo 3D: polígonos, exploración libre y nuevas formas de jugar.',
    tech:'Low poly 3D',
    panel:'La llegada del 3D cambió el diseño: cámaras, profundidad, exploración y mundos navegables.',
    highlight:'El reto ya no era solo dibujar mejores gráficos, sino controlar cámaras, perspectiva y movimiento dentro de espacios tridimensionales.',
    bullets:['Los modelos low poly usaban pocos polígonos para mantener rendimiento.','La cámara se convirtió en una herramienta esencial de diseño.','Los controles tuvieron que adaptarse a explorar escenarios en 360 grados.'],
    advance:'Modelos poligonales, cámaras 3D y exploración espacial.',
    bridge:'El 3D cambió las reglas, pero pronto los jugadores pedirían mundos más detallados y cinematográficos.',
    consolas:[
      {nombre:'PlayStation', imagen:'assets/consolas/ps1.png', desc:'La consola que llevó el 3D a los hogares con CD-ROM y juegos inolvidables.'},
      {nombre:'Nintendo 64', imagen:'assets/consolas/n64.png', desc:'El salto al 3D con controles analógicos y juegos como Super Mario 64.'}
    ],
    juegos:[
      {nombre:'Super Mario 64', imagen:'assets/juegos/mario64.jpg', desc:'El primer gran juego 3D de plataformas que cambió la forma de jugar.'},
      {nombre:'Final Fantasy VII', imagen:'assets/juegos/ff7.jpg', desc:'RPG épico con cinemáticas y una historia que marcó a toda una generación.'}
    ]
  },
  {
    k:'ERA 04',
    title:'HD',
    text:'La imagen se vuelve cinematográfica. La narrativa, la luz y la escala hacen que el juego parezca una película.',
    tech:'Alta definición',
    panel:'La era HD acercó el videojuego al cine: iluminación dramática, actuación digital y escenarios más detallados.',
    highlight:'El aumento de resolución permitió mostrar expresiones, texturas, paisajes amplios y escenas con lenguaje visual más cinematográfico.',
    bullets:['Las texturas ganaron resolución y los escenarios se volvieron más creíbles.','La iluminación empezó a dirigir emociones como en una película.','La narrativa visual tomó más fuerza con cámaras, actuación y ambientación.'],
    advance:'Texturas HD, bloom, sombras dinámicas y profundidad de campo.',
    bridge:'El realismo se convirtió en meta, pero faltaba algo: que la luz reaccionara como en el mundo real.',
    consolas:[
      {nombre:'Xbox 360', imagen:'assets/consolas/xbox360.png', desc:'La consola que popularizó el gaming en alta definición y el multijugador online.'},
      {nombre:'PlayStation 3', imagen:'assets/consolas/ps3.png', desc:'Potencia y Blu-ray para experiencias cinematográficas y juegos exclusivos.'}
    ],
    juegos:[
      {nombre:'The Last of Us', imagen:'assets/juegos/tlou.jpg', desc:'Narrativa profunda, actuación y un mundo postapocalíptico visualmente impresionante.'},
      {nombre:'Uncharted 2', imagen:'assets/juegos/uncharted2.png', desc:'Acción cinematográfica con paisajes y secuencias que parecían de película.'}
    ]
  },
  {
    k:'ERA 05',
    title:'RAYTRACING',
    text:'Reflejos, neones y luz física en tiempo real. El juego se convierte en una simulación visual avanzada.',
    tech:'Luz en tiempo real',
    panel:'El raytracing permite reflejos y sombras más naturales, creando escenas con profundidad y realismo visual.',
    highlight:'La luz deja de ser solo una ilusión preparada y empieza a calcularse de forma más física dentro del entorno.',
    bullets:['Los reflejos pueden responder a objetos, luces y superficies del escenario.','La iluminación global mejora la forma en que la luz rebota en los espacios.','Los neones, sombras y materiales metálicos ganan un acabado más realista.'],
    advance:'Reflejos dinámicos, iluminación global y sombras más naturales.',
    bridge:'La evolución continúa: cada generación redefine lo que entendemos por realismo digital.',
    consolas:[
      {nombre:'Xbox Series X', imagen:'assets/consolas/xboxsx.png', desc:'Potencia bruta con raytracing en tiempo real y velocidades de carga ultrarrápidas.'},
      {nombre:'PlayStation 5', imagen:'assets/consolas/ps5.png', desc:'Raytracing, SSD ultrarrápido y una nueva generación de experiencias inmersivas.'}
    ],
    juegos:[
      {nombre:'Cyberpunk 2077 (con RTX)', imagen:'assets/juegos/cp2077.png', desc:'Mundo abierto con iluminación realista, reflejos y neones que cobran vida.'},
      {nombre:'Spider-Man: Miles Morales', imagen:'assets/juegos/spiderman.jpg', desc:'Raytracing y acción trepidante en Nueva York, con reflejos en tiempo real.'}
    ]
  }
];

const scenes = gsap.utils.toArray('.scene');
const navBtns = gsap.utils.toArray('.era-nav button');
const title = document.querySelector('#eraTitle');
const kicker = document.querySelector('#eraKicker');
const text = document.querySelector('#eraText');
const tech = document.querySelector('#techLabel');
const panel = document.querySelector('#infoPanel');
const panelTitle = document.querySelector('#panelTitle');
const panelText = document.querySelector('#panelText');
const progressBar = document.querySelector('#progressBar');
const glitch = document.querySelector('.glitch-layer');
const particles = document.querySelector('#particles');
const evolutionOverlay = document.querySelector('#evolutionOverlay');
const sonicImage = document.querySelector('#sonicImage');
const sonicTitle = document.querySelector('#sonicTitle');
const sonicText = document.querySelector('#sonicText');
const sonicEvolution = [
  {
    img:'assets/sonic 1.png',
    title:'Sonic en la era 8-BIT',
    text:'Así se veía Sonic cuando los mundos se construían con píxeles, pocos colores y mucha imaginación.'
  },
  {
    img:'assets/sonic2.png',
    title:'Sonic en la era 16-BIT',
    text:'Más color, más detalle y animaciones más fluidas: Sonic entra en la generación del scroll y la velocidad.'
  },
  {
    img:'assets/sonic 3.png',
    title:'Sonic en la era 3D',
    text:'Los píxeles dan paso a los polígonos. Sonic se transforma en un personaje low-poly dentro de mundos tridimensionales.'
  },
  {
    img:'assets/sonic 4.png',
    title:'Sonic en la era HD',
    text:'Texturas, sombras y escenarios cinematográficos hacen que Sonic se vea más expresivo, detallado y moderno.'
  },
  {
    img:'assets/sonic 5.png',
    title:'Sonic en la era Raytracing',
    text:'Luces, reflejos y neones llevan a Sonic a una generación donde la iluminación se siente casi real.'
  }
];
let currentEra = 0;

// --- Elementos del overlay de información ---
const infoOverlay = document.querySelector('#infoOverlay');
const consolasList = document.querySelector('#consolasList');
const juegosList = document.querySelector('#juegosList');
const previewImg = document.querySelector('#previewImg');
const previewTitle = document.querySelector('#previewTitle');
const previewDesc = document.querySelector('#previewDesc');
const moreInfoBtn = document.querySelector('#moreInfoBtn');
const closeInfoBtn = document.querySelector('#closeInfo');

// --- Función para obtener HTML del panel de datos curiosos ---
function getPanelHTML(era){
  return `
    <p>${era.highlight}</p>
    <p><strong>Avance tecnológico:</strong> ${era.advance}</p>
    <ul>
      ${era.bullets.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p class="panel-note">${era.bridge}</p>
  `;
}

// --- Función setEra (actualiza toda la UI, NO el cursor) ---
function setEra(index){
  if(index === currentEra) return;
  currentEra = index;
  const era = eras[index];
  navBtns.forEach((b,i)=>b.classList.toggle('active', i===index));
  glitch.classList.remove('flash'); void glitch.offsetWidth; glitch.classList.add('flash');
  gsap.timeline()
    .to('.era-content', {y:25, opacity:.15, duration:.18})
    .call(()=>{
      kicker.textContent=era.k;
      title.textContent=era.title;
      text.textContent=era.text;
      tech.textContent=era.tech;
      panelTitle.textContent='Dato curioso: ' + era.title;
      panelText.innerHTML=getPanelHTML(era);
    })
    .to('.era-content', {y:0, opacity:1, duration:.45, ease:'power3.out'});
  burstParticles();
  if (infoOverlay.classList.contains('show')) {
    closeInfoOverlay();
  }
}

function burstParticles(){
  for(let i=0;i<26;i++){
    const p=document.createElement('span'); p.className='particle';
    p.style.left=(35+Math.random()*30)+'%'; p.style.top=(45+Math.random()*20)+'%'; particles.appendChild(p);
    gsap.to(p,{x:(Math.random()-.5)*520,y:(Math.random()-.5)*320,opacity:0,scale:Math.random()*2+0.5,duration:1.1,ease:'power2.out',onComplete:()=>p.remove()});
  }
}

// --- Mejora anti-parpadeo: actualizar preview con fade y onload ---
let previewTimeout;

function updatePreview(src, title, desc) {
  if (!previewImg || !previewTitle || !previewDesc) return;
  
  // Actualiza texto inmediatamente
  previewTitle.textContent = title;
  previewDesc.textContent = desc;
  
  // Si la imagen es la misma, no hacer nada
  if (previewImg.src === src) return;
  
  // Oculta la imagen mientras se carga
  previewImg.classList.remove('loaded');
  previewImg.style.opacity = '0';
  previewImg.src = src;
  
  // Cuando cargue, la muestra con fade
  previewImg.onload = function() {
    previewImg.style.opacity = '1';
    previewImg.classList.add('loaded');
  };
  // En caso de error, también la muestra
  previewImg.onerror = function() {
    previewImg.style.opacity = '1';
    previewImg.classList.add('loaded');
  };
}

// --- Funciones para el overlay de información (con precarga y debounce) ---
function fillInfoOverlay(era) {
  consolasList.innerHTML = '';
  juegosList.innerHTML = '';

  // Precargar todas las imágenes para que estén en caché
  const allItems = [...era.consolas, ...era.juegos];
  allItems.forEach(item => {
    const img = new Image();
    img.src = item.imagen;
  });

  era.consolas.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.nombre;
    li.addEventListener('mouseenter', () => {
      clearTimeout(previewTimeout);
      previewTimeout = setTimeout(() => {
        updatePreview(item.imagen, item.nombre, item.desc);
      }, 80);
    });
    consolasList.appendChild(li);
  });

  era.juegos.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.nombre;
    li.addEventListener('mouseenter', () => {
      clearTimeout(previewTimeout);
      previewTimeout = setTimeout(() => {
        updatePreview(item.imagen, item.nombre, item.desc);
      }, 80);
    });
    juegosList.appendChild(li);
  });

  // Mostrar el primer elemento por defecto
  if (era.consolas.length) {
    const first = era.consolas[0];
    updatePreview(first.imagen, first.nombre, first.desc);
  } else if (era.juegos.length) {
    const first = era.juegos[0];
    updatePreview(first.imagen, first.nombre, first.desc);
  } else {
    updatePreview('', 'Sin información', 'Añade datos para esta era.');
  }
}

function openInfoOverlay() {
  const era = eras[currentEra];
  fillInfoOverlay(era);
  infoOverlay.classList.add('show');
  infoOverlay.setAttribute('aria-hidden', 'false');
  burstParticles();
  gsap.fromTo('.info-card', {opacity:0, scale:.94, y:20}, {opacity:1, scale:1, y:0, duration:.45, ease:'power3.out'});
}

function closeInfoOverlay() {
  if (!infoOverlay.classList.contains('show')) return;
  infoOverlay.classList.remove('show');
  infoOverlay.setAttribute('aria-hidden', 'true');
  gsap.set('.info-card', {clearProps:'all'});
}

function closeAllOverlays(){
  if(panel) panel.classList.remove('show');
  if(evolutionOverlay){
    evolutionOverlay.classList.remove('show');
    evolutionOverlay.setAttribute('aria-hidden','true');
    gsap.set('.sonic-card', {clearProps:'all'});
  }
  closeInfoOverlay();
}

// --- Event listeners ---
moreInfoBtn.addEventListener('click', openInfoOverlay);
closeInfoBtn.addEventListener('click', closeInfoOverlay);

let closeOnScrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(closeOnScrollTimeout);
  closeOnScrollTimeout = setTimeout(() => {
    closeAllOverlays();
  }, 80);
});

// --- Scrollytelling y demás ---
window.addEventListener('load', () => {
  setTimeout(() => document.querySelector('#preloader').classList.add('hide'), 700);
});

// Movimiento del cursor (div) con el mouse (solo movimiento)
gsap.to('.cursor', {duration:.15});
window.addEventListener('mousemove', e => gsap.to('.cursor', {x:e.clientX, y:e.clientY, duration:.18, ease:'power2.out'}));

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#cinema', start:'top top', end:'bottom bottom', scrub:1.4,
    onUpdate:self=>{
      progressBar.style.width = (self.progress*100)+'%';
      const idx = Math.min(4, Math.floor(self.progress*5));
      setEra(idx);
    }
  }
});

scenes.forEach((scene,i)=>{
  const img = scene.querySelector('img');
  const start = i * 2.25;

  if(i === 0){
    tl.set(scene,{opacity:1,scale:1.04,filter:'blur(0px)'},0)
      .set(img,{scale:1.08,xPercent:0,yPercent:0,filter:'saturate(1.08) contrast(1.02)'},0);
  } else {
    tl.fromTo(scene,
      {opacity:0,scale:1.12,filter:'blur(14px)'},
      {opacity:1,scale:1.04,filter:'blur(0px)',duration:2.05,ease:'sine.inOut'},
      start - 1.35
    )
    .to(scenes[i-1],
      {opacity:0,scale:1.01,filter:'blur(10px)',duration:2.05,ease:'sine.inOut'},
      start - 1.18
    )
    .fromTo(img,
      {scale:1.18,xPercent:(i%2?4:-4),yPercent:(i%2?-3:3),filter:'saturate(.85) contrast(.95)'},
      {scale:1.08,xPercent:0,yPercent:0,filter:'saturate(1.15) contrast(1.05)',duration:2.2,ease:'sine.inOut'},
      start - 1.35
    );
  }

  tl.to(img,
    {scale:1.18,xPercent:(i%2? -3:3),yPercent:(i%2?2:-2),filter:'saturate(1.22) contrast(1.08)',duration:2.25,ease:'none'},
    start
  );
});

gsap.to('.orb-a',{x:'68vw',y:'20vh',scrollTrigger:{trigger:'#cinema',start:'top top',end:'bottom bottom',scrub:1.4}});
gsap.to('.orb-b',{x:'-54vw',y:'-20vh',scrollTrigger:{trigger:'#cinema',start:'top top',end:'bottom bottom',scrub:1.6}});

document.querySelector('#exploreBtn').addEventListener('click',()=>{
  const era = eras[currentEra];
  panelTitle.textContent='Dato curioso: ' + era.title;
  panelText.innerHTML=getPanelHTML(era);
  panel.classList.add('show');
  burstParticles();
  gsap.fromTo(panel,{scale:.9},{scale:1,duration:.35,ease:'back.out(2)'});
});
document.querySelector('#closePanel').addEventListener('click',()=>panel.classList.remove('show'));

function showSonicEvolution(){
  const data = sonicEvolution[currentEra] || sonicEvolution[0];
  sonicImage.src = data.img;
  sonicTitle.textContent = data.title;
  sonicText.textContent = data.text;
  evolutionOverlay.classList.add('show');
  evolutionOverlay.setAttribute('aria-hidden','false');
  glitch.classList.remove('flash'); void glitch.offsetWidth; glitch.classList.add('flash');
  burstParticles();
  gsap.fromTo('.sonic-card',
    {opacity:0, scale:.88, y:30},
    {opacity:1, scale:1, y:0, duration:.55, ease:'power3.out'}
  );
  gsap.fromTo('#sonicImage',
    {opacity:0, scale:1.08, filter:'blur(8px) drop-shadow(0 0 28px rgba(0,204,255,.38))'},
    {opacity:1, scale:1, filter:'blur(0px) drop-shadow(0 0 28px rgba(0,204,255,.38))', duration:.7, ease:'power3.out'}
  );
}
function closeEvolutionOverlay(){
  if(!evolutionOverlay || !evolutionOverlay.classList.contains('show')) return;
  gsap.to('.sonic-card',{opacity:0,y:24,scale:.94,duration:.28,ease:'power2.in',onComplete:()=>{
    evolutionOverlay.classList.remove('show');
    evolutionOverlay.setAttribute('aria-hidden','true');
    gsap.set('.sonic-card',{clearProps:'all'});
  }});
}

document.querySelector('#graphBtn').addEventListener('click', showSonicEvolution);
document.querySelector('#evolutionClose').addEventListener('click', closeEvolutionOverlay);

document.querySelector('.start-btn').addEventListener('click', ()=> document.querySelector('#cinema').scrollIntoView({behavior:'smooth'}));
document.querySelector('.restart-btn').addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

navBtns.forEach((btn,i)=> btn.addEventListener('click', ()=>{
  const cinema = document.querySelector('#cinema');
  const y = cinema.offsetTop + (i/5)*cinema.offsetHeight;
  window.scrollTo({top:y, behavior:'smooth'});
}));

gsap.from('.hero-inner > *',{opacity:0,y:28,stagger:.12,duration:.9,ease:'power3.out'});
gsap.from('.finale-inner > *',{opacity:0,y:28,stagger:.12,duration:.9,scrollTrigger:{trigger:'.finale',start:'top 65%'}});