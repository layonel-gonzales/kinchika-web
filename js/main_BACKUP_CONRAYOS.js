/* =========================================================================
   DATOS HARDCODEADOS
   ========================================================================= */
const eventos = [
  {
    id: 1,
    nombre: "Limpieza de Playa — Las Cruces",
    fecha: "2026-05-17",
    disciplinas: ["LIMP", "MED"],
    grupo: "ECO",
    ubicacion: "Playa Las Cruces, Región de Valparaíso",
    nivel: "Principiante",
    estado: "ABIERTO",
    imagen: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=70",
    descripcion: "Jornada de limpieza submarina y de costa con apoyo de Asosub Santiago. Salida desde Lo Prado a las 7:00 hrs. Incluye desayuno comunitario, snorkel/apnea recreativa por la tarde y registro de residuos extraídos. Actividad familiar.",
    cupos: 40, cuposDisponibles: 18
  },
  {
    id: 2,
    nombre: "Clínica de Apnea Estática — Piscina Lo Prado",
    fecha: "2026-06-12",
    disciplinas: ["STA"],
    grupo: "STA",
    ubicacion: "Piscina Municipal de Lo Prado",
    nivel: "Principiante",
    estado: "ABIERTO",
    imagen: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=70",
    descripcion: "Introducción a la apnea estática a cargo del profesor Valentino Molina. Respiración diafragmática, relajación, manejo de contracciones, seguridad de pareja y primeros tiempos cronometrados. Incluye material teórico y se realiza dentro del horario regular del jueves.",
    cupos: 20, cuposDisponibles: 14
  },
  {
    id: 3,
    nombre: "Salida Grupal — Boya del Club, Pichilemu",
    fecha: "2026-07-19",
    disciplinas: ["CWT", "FIM"],
    grupo: "DEPTH",
    ubicacion: "Pichilemu, Región del Libertador",
    nivel: "Intermedio",
    estado: "PRÓXIMO",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70",
    descripcion: "Fin de semana en mar abierto utilizando la boya grupal del club Kinchika. Práctica supervisada de descensos progresivos con cuerda guía. Camping y fogón. Solo para socios con experiencia previa de piscina.",
    cupos: 15, cuposDisponibles: 11
  },
  {
    id: 4,
    nombre: "Encuentro Interclubes — Nado con Aletas",
    fecha: "2026-08-23",
    disciplinas: ["DYN", "DNF"],
    grupo: "DYN",
    ubicacion: "Piscina Municipal de Lo Prado",
    nivel: "Competitivo",
    estado: "PRÓXIMO",
    imagen: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=70",
    descripcion: "Encuentro amistoso convocado por Kinchika con clubes invitados de la RM. Categorías por edad y experiencia. Premiación simbólica y once compartida. Una jornada para tejer comunidad acuática.",
    cupos: 32, cuposDisponibles: 22
  },
  {
    id: 5,
    nombre: "Charla: Historia del Buceo en Apnea",
    fecha: "2026-09-12",
    disciplinas: ["EDU"],
    grupo: "EDU",
    ubicacion: "Centro Cívico Lo Prado",
    nivel: "Principiante",
    estado: "PRÓXIMO",
    imagen: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=70",
    descripcion: "Charla abierta a la comunidad: desde los Ama y las Haenyeo hasta Pelizzari y Molchanova. Cómo el cuerpo humano aprendió a habitar la profundidad. Actividad gratuita, gestionada con el municipio.",
    cupos: 80, cuposDisponibles: 80
  }
];

const resultados = [
  {
    eventoId: "torneo-2025-final",
    nombre: "Final Nacional Apnea Chile 2025",
    fecha: "2025-11-22",
    sede: "Bahía de Tongoy, Coquimbo",
    disciplinas: {
      CWT: [
        { pos: 1, nombre: "Valentina Muñoz", club: "Kinchika", resultado: "62m", record: "club" },
        { pos: 2, nombre: "Felipe Orellana", club: "Asosub Santiago", resultado: "58m", record: null },
        { pos: 3, nombre: "Camila Reyes", club: "Kinchika", resultado: "54m", record: null },
        { pos: 4, nombre: "Tomás Aravena", club: "FEDESUB", resultado: "51m", record: null }
      ],
      STA: [
        { pos: 1, nombre: "Diego Vásquez", club: "FEDESUB", resultado: "5:42", record: "nacional" },
        { pos: 2, nombre: "Andrea Pinto", club: "Kinchika", resultado: "5:15", record: null },
        { pos: 3, nombre: "Rocío Bustos", club: "Asosub Santiago", resultado: "4:58", record: null }
      ],
      FIM: [
        { pos: 1, nombre: "Felipe Orellana", club: "Asosub Santiago", resultado: "55m", record: null },
        { pos: 2, nombre: "Valentina Muñoz", club: "Kinchika", resultado: "52m", record: null },
        { pos: 3, nombre: "Pablo Herrera", club: "FEDESUB", resultado: "48m", record: null }
      ]
    }
  },
  {
    eventoId: "torneo-2025-apertura",
    nombre: "Torneo Apertura Apnea Chile 2025",
    fecha: "2025-05-18",
    sede: "Caleta Portales, Valparaíso",
    disciplinas: {
      CWT: [
        { pos: 1, nombre: "Felipe Orellana", club: "Asosub Santiago", resultado: "55m", record: null },
        { pos: 2, nombre: "Valentina Muñoz", club: "Kinchika", resultado: "53m", record: null },
        { pos: 3, nombre: "Diego Vásquez", club: "FEDESUB", resultado: "50m", record: null }
      ],
      DYN: [
        { pos: 1, nombre: "Andrea Pinto", club: "Kinchika", resultado: "165m", record: "club" },
        { pos: 2, nombre: "Camila Reyes", club: "Kinchika", resultado: "152m", record: null },
        { pos: 3, nombre: "Tomás Aravena", club: "FEDESUB", resultado: "148m", record: null }
      ]
    }
  },
  {
    eventoId: "copa-dinamica-2024",
    nombre: "Copa Dinámica Sur 2024",
    fecha: "2024-08-25",
    sede: "Piscina Municipal Concepción",
    disciplinas: {
      DYN: [
        { pos: 1, nombre: "Andrea Pinto", club: "Kinchika", resultado: "158m", record: null },
        { pos: 2, nombre: "Rocío Bustos", club: "Asosub Santiago", resultado: "144m", record: null },
        { pos: 3, nombre: "Camila Reyes", club: "Kinchika", resultado: "139m", record: null }
      ],
      DNF: [
        { pos: 1, nombre: "Diego Vásquez", club: "FEDESUB", resultado: "120m", record: "club" },
        { pos: 2, nombre: "Pablo Herrera", club: "FEDESUB", resultado: "112m", record: null }
      ]
    }
  }
];

const directivas = {
  "2026": {
    periodo: "2026 - 2027",
    aprobadoEn: "Asamblea Ordinaria · Marzo 2026",
    miembros: [
      { cargo: "Presidente", nivel: 1, nombre: "Francisco Reyes", foto: "https://i.pravatar.cc/150?u=francisco2026", email: "+56 9 6750 8503" },
      { cargo: "Vicepresidente", nivel: 2, nombre: "Marcela Torres", foto: "https://i.pravatar.cc/150?u=marcela2026", email: "" },
      { cargo: "Secretario General", nivel: 2, nombre: "Andrés Molina", foto: "https://i.pravatar.cc/150?u=andres2026", email: "" },
      { cargo: "Tesorero", nivel: 3, nombre: "Carla Ibáñez", foto: "https://i.pravatar.cc/150?u=carla2026", email: "" },
      { cargo: "Director Deportivo", nivel: 3, nombre: "Valentino Molina", foto: "https://i.pravatar.cc/150?u=valentino2026", email: "" },
      { cargo: "Directora de Nado", nivel: 3, nombre: "Neymar Colmenares", foto: "https://i.pravatar.cc/150?u=neymar2026", email: "" },
      { cargo: "Director de Comunicaciones", nivel: 3, nombre: "Fernanda Opazo", foto: "https://i.pravatar.cc/150?u=fernanda2026", email: "" },
      { cargo: "Vocal", nivel: 4, nombre: "Luis Contreras", foto: "https://i.pravatar.cc/150?u=luis2026", email: "" },
      { cargo: "Vocal", nivel: 4, nombre: "Pilar Núñez", foto: "https://i.pravatar.cc/150?u=pilar2026", email: "" }
    ]
  },
  "2025": {
    periodo: "2025 - 2026",
    aprobadoEn: "Asamblea Ordinaria · Marzo 2025",
    miembros: [
      { cargo: "Presidente", nivel: 1, nombre: "Francisco Reyes", foto: "https://i.pravatar.cc/150?u=francisco2025", email: "" },
      { cargo: "Vicepresidente", nivel: 2, nombre: "Daniela Soto", foto: "https://i.pravatar.cc/150?u=daniela2025", email: "" },
      { cargo: "Secretario General", nivel: 2, nombre: "Tomás Espinoza", foto: "https://i.pravatar.cc/150?u=tomas2025", email: "" },
      { cargo: "Tesorero", nivel: 3, nombre: "Verónica Leal", foto: "https://i.pravatar.cc/150?u=veronica2025", email: "" },
      { cargo: "Director Deportivo", nivel: 3, nombre: "Valentino Molina", foto: "https://i.pravatar.cc/150?u=valentino2025", email: "" },
      { cargo: "Directora de Nado", nivel: 3, nombre: "Neymar Colmenares", foto: "https://i.pravatar.cc/150?u=neymar2025", email: "" },
      { cargo: "Vocal", nivel: 4, nombre: "Natalia Vargas", foto: "https://i.pravatar.cc/150?u=natalia2025", email: "" }
    ]
  },
  "2024": {
    periodo: "2024 - 2025",
    aprobadoEn: "Asamblea Constituyente · Marzo 2024",
    miembros: [
      { cargo: "Presidente Fundador", nivel: 1, nombre: "Francisco Reyes", foto: "https://i.pravatar.cc/150?u=francisco2024", email: "" },
      { cargo: "Vicepresidente", nivel: 2, nombre: "Marcela Torres", foto: "https://i.pravatar.cc/150?u=marcela2024", email: "" },
      { cargo: "Secretario General", nivel: 2, nombre: "Andrés Molina", foto: "https://i.pravatar.cc/150?u=andres2024", email: "" },
      { cargo: "Tesorero", nivel: 3, nombre: "Carla Ibáñez", foto: "https://i.pravatar.cc/150?u=carla2024", email: "" },
      { cargo: "Director Deportivo", nivel: 3, nombre: "Rodrigo Castro", foto: "https://i.pravatar.cc/150?u=rodrigo2024", email: "" }
    ]
  }
};

/* =========================================================================
   MOTION PREFERENCE
   ========================================================================= */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================================
   GSAP + ScrollTrigger
   ========================================================================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================================================================
   LENIS smooth scroll
   ========================================================================= */
let lenis;
function initLenis() {
  if (reduceMotion) return;
  lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* =========================================================================
   GLOBAL SCROLL PROGRESS
   ========================================================================= */
function updateProgress() {
  // Calcular altura total scrolleable (desde top hasta el final del documento)
  const docHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const maxScroll = docHeight - viewportHeight;

  // Usar window.scrollY (Lenis actualiza esto internamente)
  const scrollPos = window.scrollY;

  // globalProgress de 0 (top) a 1 (bottom/footer)
  globalProgress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollPos / maxScroll)) : 0;

  document.getElementById('progress-bar').style.width = (globalProgress * 100) + '%';
  applyDepthBg(globalProgress);
  applyHud(globalProgress);
  applyAudioLayers(globalProgress);
  applyDiverPose(globalProgress);
  applyEffectsLayers(globalProgress);
}

// Event listeners para actualizar al hacer scroll o cambiar tamaño
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

// Actualizar continuamente para que funcione con Lenis smooth scroll
let rafId;
function continuousUpdate() {
  updateProgress();
  rafId = requestAnimationFrame(continuousUpdate);
}

// Ejecutar updateProgress inmediatamente cuando el DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateProgress);
} else {
  // Si el DOM ya está cargado, ejecutar inmediatamente
  updateProgress();
}

/* =========================================================================
   FONDO POR PROFUNDIDAD
   ========================================================================= */
function lerpColor(a, b, t) {
  const ah = a.match(/\w\w/g).map(x => parseInt(x, 16));
  const bh = b.match(/\w\w/g).map(x => parseInt(x, 16));
  const r = Math.round(ah[0] + (bh[0] - ah[0]) * t);
  const g = Math.round(ah[1] + (bh[1] - ah[1]) * t);
  const bl = Math.round(ah[2] + (bh[2] - ah[2]) * t);
  return `rgb(${r},${g},${bl})`;
}
// Asegúrate de que todos los códigos tengan el "#"
const depthStops = [
  { p: 0.00, top: '#000d1a', bot: '#001a33' }, // INICIO: Azul marino muy oscuro
  { p: 0.15, top: '#001a33', bot: '#000810' }, // Bajando: Azul medianoche
  { p: 0.35, top: '#000810', bot: '#00050a' }, // Zona oscura
  { p: 0.60, top: '#00050a', bot: '#000205' }, // Penumbra total
  { p: 0.85, top: '#000205', bot: '#000000' }, // Abismo
  { p: 1.00, top: '#000000', bot: '#000000' }  // FONDO: Negro absoluto
];
function applyDepthBg(p) {
  let i = 0;
  for (; i < depthStops.length - 1; i++) if (p < depthStops[i + 1].p) break;
  const a = depthStops[Math.max(0, i)], b = depthStops[Math.min(depthStops.length - 1, i + 1)];
  const t = (p - a.p) / Math.max(0.0001, (b.p - a.p));
  const top = lerpColor(a.top, b.top, t);
  const bot = lerpColor(a.bot, b.bot, t);
  document.getElementById('deep-bg').style.background = `linear-gradient(180deg, ${top} 0%, ${bot} 100%)`;
}

/* =========================================================================
   EFECTOS POR ZONA (rays, caustics, bubbles, vignette)
   ========================================================================= */
function applyEffectsLayers(p) {
  const rays = document.getElementById('god-rays');
  const caust = document.getElementById('caustics-canvas');
  const bub = document.getElementById('bubbles-canvas');
  const vig = document.getElementById('vignette');
  const shimmer = document.getElementById('ascent-shimmer');

  // GOD RAYS: desaparecen en primera mitad (0-50%) y permanecen oscuros después
  let raysOpacity = 0;

  if (p < 0.50) {
    // Fade gradual: 0% (0.8) → 50% (0)
    raysOpacity = (1 - p / 0.50) * 0.8;
  } else {
    // Después de 50%: siempre 0 (sin rayos, oscuridad total)
    raysOpacity = 0;
  }

  // Aplicar la opacidad
  rays.style.opacity = Math.max(0, raysOpacity);

  // CAUSTICS: zona mesofótica al descender + se intensifican durante el ascenso final
  let caustOpacity = 0;
  if (p > 0.30 && p < 0.55) caustOpacity = 0.5;
  else if (p > 0.65) caustOpacity = (p - 0.65) * 1.6;
  caust.style.opacity = Math.min(caustOpacity, 0.85);

  // SHIMMER (destellos de luz tipo "mirar hacia arriba bajo el agua") — solo en ascenso
  if (shimmer) {
    shimmer.style.opacity = p > 0.55 ? Math.min(1, (p - 0.55) * 2.2) : 0;
  }

  // BUBBLES: aparecen al sumergirse, suaves al inicio para acompañar el splash
  let bubOpacity = 0.1;
  if (p > 0.05 && p < 0.12) bubOpacity = (p - 0.05) / 0.07 * 0.9; // fade-in suave
  else if (p >= 0.12 && p < 0.95) bubOpacity = 0.9;
  bub.style.opacity = bubOpacity;

  // VIGNETTE: aumenta con profundidad pero se reduce durante el ascenso (el agua se vuelve a iluminar)
  let vigOpacity;
  if (p < 0.85) vigOpacity = 0.4 + p * 0.6;
  else vigOpacity = Math.max(0.35, 0.94 - (p - 0.85) * 4); // se aclara al subir
  vig.style.opacity = vigOpacity;
}

/* =========================================================================
   HUD
   ========================================================================= */
let diveStartTime = null;
function applyHud(p) {
  const hud = document.getElementById('hud');
  if (p > 0.04) hud.classList.remove('hidden-hud'); else hud.classList.add('hidden-hud');

  if (!diveStartTime && p > 0.04) diveStartTime = Date.now();

  // depth: 0 a 100m
  const depth = Math.round(p * 100);
  document.getElementById('hud-depth').textContent = `−${depth}m`;

  // temp: 18° → 8°
  const temp = Math.round(18 - p * 10);
  document.getElementById('hud-temp').textContent = `${temp}°C`;

  // SpO2: 98 → 82
  const spo2 = Math.round(98 - p * 16);
  const spoEl = document.getElementById('hud-spo2');
  spoEl.textContent = `${spo2}%`;
  const spoRow = document.getElementById('hud-spo2-row');
  if (spo2 < 85) spoRow.classList.add('warn'); else spoRow.classList.remove('warn');

  // time
  if (diveStartTime) {
    const elapsed = Math.floor((Date.now() - diveStartTime) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    document.getElementById('hud-time').textContent = `${m}:${s}`;
  }
}
setInterval(() => { if (diveStartTime) applyHud(globalProgress); }, 1000);

/* =========================================================================
   NOTA: Animación de buceador delegada a diver.js
   ========================================================================= */
// Las variables de animación y scroll listener están en diver.js

/* =========================================================================
   SISTEMA DE AUDIO — solo respiración submarina
   ========================================================================= */
let audioCtx, masterGain;
let audioEnabled = false;
let audioMuted = false;

function initAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.7;
    masterGain.connect(audioCtx.destination);
    audioEnabled = true;
  } catch (e) {
    console.warn('Audio init failed', e);
  }
}

function applyAudioLayers(p) {
  // Solo respiración — no hay capas adicionales que actualizar
}

function setAudioMuted(m) {
  audioMuted = m;
  if (masterGain) masterGain.gain.linearRampToValueAtTime(m ? 0 : 0.6, (audioCtx?.currentTime || 0) + 0.4);
  document.getElementById('audio-toggle').textContent = m ? '🔇' : '🔊';
}

/* =========================================================================
   SISTEMA DE RESPIRACIÓN SUBMARINA — suave, amortiguada por el agua,
   como el sonido de un regulador de buceo.
   ========================================================================= */
function playBreath(type) {
  if (!audioCtx || !audioEnabled || audioMuted) return 0;
  const t = audioCtx.currentTime;

  // Presets afinados para sonar bajo el agua:
  // — frecuencias más bajas (agua absorbe los agudos)
  // — ganancias suaves
  // — inhale: flujo de aire aspirado, suave y continuo
  // — exhale: burbujas lentas saliendo, más grave y expansivo
  const presets = {
    inhale:   { dur: 3.0, fStart:  380, fPeak:  900, fEnd:  500, peakAt: 1.2, gain: 0.32, Q: 1.0 },
    exhale:   { dur: 4.0, fStart:  700, fPeak:  380, fEnd:  180, peakAt: 1.8, gain: 0.28, Q: 0.8 },
    relaxIn:  { dur: 2.2, fStart:  320, fPeak:  700, fEnd:  420, peakAt: 0.9, gain: 0.16, Q: 1.0 },
    relaxOut: { dur: 2.8, fStart:  580, fPeak:  300, fEnd:  160, peakAt: 1.0, gain: 0.14, Q: 0.8 }
  };
  const c = presets[type];
  if (!c) return 0;

  const bufSize = Math.floor(audioCtx.sampleRate * c.dur);
  const buffer = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1);

  const src = audioCtx.createBufferSource();
  src.buffer = buffer;

  // Bandpass — forma el carácter del aliento
  const bp = audioCtx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = c.Q;
  bp.frequency.setValueAtTime(c.fStart, t);
  bp.frequency.linearRampToValueAtTime(c.fPeak, t + c.peakAt);
  bp.frequency.linearRampToValueAtTime(c.fEnd, t + c.dur);

  // Lowpass agresivo — simula la amortiguación del agua sobre el sonido
  const lp = audioCtx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 1100;
  lp.Q.value = 0.5;

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(c.gain * 0.4, t + 0.25);
  gain.gain.linearRampToValueAtTime(c.gain,        t + c.peakAt);
  gain.gain.linearRampToValueAtTime(c.gain * 0.3,  t + c.dur * 0.88);
  gain.gain.linearRampToValueAtTime(0,             t + c.dur);

  src.connect(bp).connect(lp).connect(gain).connect(masterGain);
  src.start(t);
  src.stop(t + c.dur + 0.1);

  return c.dur;
}

let breathRelaxedTimer = null;
let breathBlocked = false;
let lastBreathDir = null;

function relaxedBreathCycle() {
  if (breathBlocked || !audioEnabled || audioMuted) return;
  playBreath('relaxIn');
  setTimeout(() => {
    if (breathBlocked || !audioEnabled || audioMuted) return;
    playBreath('relaxOut');
  }, 2100);
}
function startRelaxedBreathing() {
  stopRelaxedBreathing();
  relaxedBreathCycle();
  breathRelaxedTimer = setInterval(relaxedBreathCycle, 5800);
}
function stopRelaxedBreathing() {
  if (breathRelaxedTimer) { clearInterval(breathRelaxedTimer); breathRelaxedTimer = null; }
}
function pauseRelaxedBreathingFor(ms) {
  breathBlocked = true;
  setTimeout(() => { breathBlocked = false; }, ms);
}
function triggerBreathDirection(dir) {
  if (dir === lastBreathDir) return;
  lastBreathDir = dir;
  if (!audioEnabled || audioMuted) return;
  if (dir === 'down') {
    pauseRelaxedBreathingFor(2800);
    playBreath('inhale');
  } else if (dir === 'up') {
    pauseRelaxedBreathingFor(3800);
    playBreath('exhale');
  }
}
function bootBreathing() {
  // Inhalada inicial preparándose para sumergir, luego relajada
  if (!audioEnabled || audioMuted) return;
  lastBreathDir = 'down';
  setTimeout(() => {
    playBreath('inhale');
    setTimeout(startRelaxedBreathing, 2700);
  }, 400);
}


/* =========================================================================
   AUDIO OVERLAY HANDLERS
   ========================================================================= */
document.getElementById('enable-sound').addEventListener('click', () => {
  if (!reduceMotion) initAudio();
  document.getElementById('audio-overlay').classList.add('hidden');
  setAudioMuted(false);
  bootBreathing();
});
document.getElementById('skip-sound').addEventListener('click', () => {
  audioEnabled = false;
  document.getElementById('audio-overlay').classList.add('hidden');
  setAudioMuted(true);
  stopRelaxedBreathing();
});
document.getElementById('audio-toggle').addEventListener('click', () => {
  const wasMuted = audioMuted;
  if (!audioCtx && !reduceMotion) initAudio();
  setAudioMuted(!audioMuted);
  // Si se reactiva el audio, reanudar respiración
  if (wasMuted && !audioMuted) bootBreathing();
  if (!wasMuted && audioMuted) stopRelaxedBreathing();
});

/* =========================================================================
   THREE.JS BUBBLES
   ========================================================================= */
function initBubbles() {
  const canvas = document.getElementById('bubbles-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  const COUNT = reduceMotion ? 30 : 180;
  const positions = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const speeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    sizes[i] = Math.random() * 1.6 + 0.4;
    speeds[i] = Math.random() * 0.08 + 0.02;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  // Shader simple
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    transparent: true,
    depthWrite: false,
    vertexShader: `
      attribute float size;
      varying float vAlpha;
      uniform float uTime;
      void main() {
        vec3 p = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = size * 4.0 * (300.0 / -gl_Position.z);
        vAlpha = 0.6;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        if (d > 0.5) discard;
        float ring = smoothstep(0.5, 0.42, d) - smoothstep(0.42, 0.34, d);
        float fill = smoothstep(0.5, 0.0, d) * 0.18;
        gl_FragColor = vec4(0.7, 0.85, 1.0, (ring * 0.6 + fill) * vAlpha);
      }
    `
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  function animate() {
    const positions = geo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 1] += speeds[i];
      positions[i * 3] += Math.sin((positions[i * 3 + 1] + i) * 0.1) * 0.02;
      if (positions[i * 3 + 1] > 35) {
        positions[i * 3 + 1] = -35;
        positions[i * 3] = (Math.random() - 0.5) * 80;
      }
    }
    geo.attributes.position.needsUpdate = true;
    mat.uniforms.uTime.value += 0.016;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

/* =========================================================================
   CAUSTICS canvas 2D
   ========================================================================= */
function initCaustics() {
  const c = document.getElementById('caustics-canvas');
  const ctx = c.getContext('2d');
  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 30; i++) {
      const x = (Math.sin(t * 0.5 + i) * 0.5 + 0.5) * c.width;
      const y = ((Math.cos(t * 0.3 + i * 1.7) * 0.5 + 0.5) * c.height);
      const r = 60 + Math.sin(t + i) * 30;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, 'rgba(180,220,255,0.18)');
      grad.addColorStop(1, 'rgba(180,220,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    t += 0.012;
    requestAnimationFrame(draw);
  }
  draw();
}

/* =========================================================================
   SPLITTING + GSAP en hero title
   ========================================================================= */
function initSplitting() {
  if (window.Splitting) {
    document.getElementById('hero-title').setAttribute('data-splitting', '');
    Splitting();
    gsap.fromTo('#hero-title .char',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: 'power3.out', delay: 0.3 }
    );

    // Headings de sección — clip vertical por char
    document.querySelectorAll('.js-heading').forEach(el => {
      el.setAttribute('data-splitting', '');
    });
    Splitting({ target: '.js-heading', by: 'chars' });

    document.querySelectorAll('.js-heading').forEach(el => {
      const chars = el.querySelectorAll('.char');
      gsap.fromTo(chars,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.025,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Eyebrows — letter-spacing expand + fade
    document.querySelectorAll('.js-eyebrow').forEach(el => {
      const finalSpacing = getComputedStyle(el).getPropertyValue('--ls') || '.35em';
      gsap.to(el, {
        opacity: 1,
        letterSpacing: '.35em',
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      });
    });

  } else {
    document.getElementById('hero-title').style.opacity = 1;
    // Sin Splitting: mostrar todo directamente
    document.querySelectorAll('.js-heading').forEach(el => el.style.opacity = 1);
    document.querySelectorAll('.js-eyebrow').forEach(el => {
      el.style.opacity = 1;
      el.style.letterSpacing = '.35em';
    });
  }
}

/* =========================================================================
   GSAP SCROLL ANIMATIONS INMERSIVAS — Sistema con efecto "franja central"
   Entrada: fade-in + slide-up al 80% inferior
   Salida: fade-out al 20% superior
   Reversible: toggleActions para efecto espejo en scroll hacia arriba
   ========================================================================= */
function initScrollAnimations() {
  gsap.set("[data-reveal], .split-text", { visibility: "visible" });

  if (reduceMotion) return;

  const reveals = gsap.utils.toArray('[data-reveal]');

  reveals.forEach((el) => {
    // Forzamos el estado inicial para que GSAP tome el control total
    gsap.set(el, { opacity: 0, y: 30, scale: 0.98 });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // Empieza cuando el tope del elemento toca el fondo
        end: "bottom top",   // Termina cuando el fondo del elemento toca el tope
        scrub: 0.5,          // Sincronización suave con el scroll
        onUpdate: (self) => {
          // self.progress va de 0 (abajo) a 1 (arriba)
          const p = self.progress;
          
          // Lógica de campana: 
          // 0 -> 0 | 0.5 (centro) -> 1 | 1 -> 0
          const alpha = p < 0.5 ? p * 2 : (1 - p) * 2;
          
          // Aplicamos los cambios dinámicamente
          gsap.set(el, { 
            opacity: Math.max(0, Math.min(1, alpha)), 
            y: 30 * (1 - alpha),
            scale: 0.98 + (0.02 * alpha)
          });
        }
      }
    });
  });

  // Animación de burbujas para textos con Splitting
  gsap.utils.toArray('.split-text').forEach((text) => {
    const chars = text.querySelectorAll('.char');
    if (chars.length) {
      gsap.fromTo(chars, 
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0,
          stagger: 0.02,
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  });
}

/* =========================================================================
   SWIPER
   ========================================================================= */
function initSwipers() {
  new Swiper('.fauna-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: { el: '.fauna-swiper .swiper-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
  new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: { el: '.gallery-swiper .swiper-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

/* =========================================================================
   EVENTOS (render + filtros)
   ========================================================================= */
const monthNames = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
let activeDisc = 'ALL';
let activeLevel = 'ALL';
let onlyAvailable = false;

function renderEvents() {
  const grid = document.getElementById('events-grid');
  const filtered = eventos.filter(e => {
    if (activeDisc !== 'ALL' && e.grupo !== activeDisc) return false;
    if (activeLevel !== 'ALL' && e.nivel !== activeLevel) return false;
    if (onlyAvailable && (e.estado === 'AGOTADO' || e.cuposDisponibles === 0)) return false;
    return true;
  });
  grid.innerHTML = filtered.map(e => {
    const date = new Date(e.fecha);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const estadoClass = e.estado.replace('Á','A').replace('É','E').toLowerCase();
    const capacidadPorcentaje = Math.round((e.cuposDisponibles / e.cupos) * 100);
    return `
      <div class="card card--evento" data-id="${e.id}">
        <div class="card__image" style="background-image:url('${e.imagen}')">
          <div class="card__status card__status--${estadoClass}">${e.estado}</div>
          <div class="card__date">
            <div class="card__day">${day}</div>
            <div class="card__monthyear">${month} ${year}</div>
          </div>
        </div>
        <div class="card__content">
          <h3 class="card__title">${e.nombre}</h3>
          <div class="card__organizer">
            <span class="card__org-label">Organizador</span>
            <span class="card__org-name">${e.grupo}</span>
          </div>
          <div class="card__location">
            <span class="card__location-icon">📍</span>
            <span>${e.ubicacion}</span>
          </div>
          <div class="card__level">
            <span class="card__level-icon">⚡</span>
            <span>Nivel ${e.nivel}</span>
          </div>
          <div class="card__capacity">
            <span class="card__cupos">${e.cuposDisponibles}/${e.cupos} cupos</span>
            <button class="btn btn--detail" onclick="window.openEventModal(${e.id})">Ver detalles</button>
          </div>
        </div>
      </div>`;
  }).join('');
  // GSAP stagger
  if (!reduceMotion && typeof gsap !== 'undefined') {
    gsap.fromTo('.card--evento',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' });
  }
}

function bindFilters() {
  document.querySelectorAll('#discipline-tabs button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#discipline-tabs button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      activeDisc = b.dataset.disc;
      renderEvents();
    });
  });
  document.getElementById('level-filter').addEventListener('change', e => {
    activeLevel = e.target.value;
    renderEvents();
  });
  document.getElementById('only-available').addEventListener('change', e => {
    onlyAvailable = e.target.checked;
    renderEvents();
  });
}

window.openEventModal = function(id) {
  const e = eventos.find(x => x.id === id);
  if (!e) return;
  const date = new Date(e.fecha);
  const dateStr = date.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('modal-content').innerHTML = `
    <h3>${e.nombre}</h3>
    <div class="modal-meta">${dateStr} · ${e.ubicacion}</div>
    <p>${e.descripcion}</p>
    <div class="modal-stats">
      <div class="stat"><div class="label">Disciplinas</div><div class="val">${e.disciplinas.join(' · ')}</div></div>
      <div class="stat"><div class="label">Nivel</div><div class="val">${e.nivel}</div></div>
      <div class="stat"><div class="label">Cupos</div><div class="val">${e.cuposDisponibles}/${e.cupos}</div></div>
      <div class="stat"><div class="label">Estado</div><div class="val">${e.estado}</div></div>
    </div>
    <div style="margin-top:30px;text-align:center;">
      <button class="btn-primary" onclick="alert('Inscripción simulada — escríbenos a contacto@clubapnea.cl')">Inscribirse</button>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
};

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-overlay').classList.remove('open');
});
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target.id === 'modal-overlay') e.currentTarget.classList.remove('open');
});

/* =========================================================================
   RESULTADOS
   ========================================================================= */
function renderResultsSelector() {
  const sel = document.getElementById('result-event-select');
  sel.innerHTML = resultados.map((r, i) => {
    const date = new Date(r.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
    return `<option value="${i}">${r.nombre} — ${date}</option>`;
  }).join('');
  sel.addEventListener('change', () => renderResultCard(parseInt(sel.value)));
  renderResultCard(0);
}
function renderResultCard(idx) {
  const r = resultados[idx];
  const dateStr = new Date(r.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
  const html = `
    <div class="result-card">
      <div class="result-head">
        <div>
          <h3>${r.nombre}</h3>
          <div class="meta">${dateStr} · ${r.sede}</div>
        </div>
        <button class="btn-acta" onclick="downloadActa('${r.eventoId}')">Descargar acta oficial</button>
      </div>
      ${Object.entries(r.disciplinas).map(([disc, table]) => `
        <div class="discipline-block">
          <h4>${disc}</h4>
          <div class="table-wrapper">
            <table class="results-table">
              <thead>
                <tr>
                  <th style="width: 50px; text-align: center;">POS</th>
                  <th>ATLETA</th>
                  <th>CLUB</th>
                  <th style="text-align: right;">RESULTADO</th>
                  <th>RÉCORD</th>
                </tr>
              </thead>
              <tbody>
                ${table.map(row => `
                  <tr class="${row.pos === 1 ? 'first-place' : ''}">
                    <td style="text-align: center;">${row.pos}°</td>
                    <td><strong>${row.nombre}</strong></td>
                    <td>${row.club}</td>
                    <td style="text-align: right; font-weight: 600; color: #0096ff;">${row.resultado}</td>
                    <td>${row.record === 'nacional' ? '<span class="record-badge nacional">🏆 NACIONAL</span>' : row.record === 'club' ? '<span class="record-badge club">🌊 CLUB</span>' : '-'}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}
    </div>`;
  const c = document.getElementById('results-container');
  c.innerHTML = html;
  if (!reduceMotion) {
    gsap.fromTo('.result-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }
}
window.downloadActa = function(id) {
  const r = resultados.find(x => x.eventoId === id);
  if (!r) return;
  document.getElementById('modal-content').innerHTML = `
    <h3>Acta Oficial</h3>
    <div class="modal-meta">${r.nombre}</div>
    <p>Acta imprimible — fecha: ${new Date(r.fecha).toLocaleDateString('es-CL')}, sede: ${r.sede}.</p>
    <p>Para guardar como PDF usa la opción de impresión de tu navegador (Cmd/Ctrl+P) sobre esta tabla:</p>
    ${Object.entries(r.disciplinas).map(([disc, t]) => `
      <h4 style="margin-top:18px;color:#C9A84C">${disc}</h4>
      <table class="results-table"><tbody>
        ${t.map(row => `<tr><td>${row.pos}°</td><td>${row.nombre}</td><td>${row.club}</td><td>${row.resultado}</td></tr>`).join('')}
      </tbody></table>
    `).join('')}
  `;
  document.getElementById('modal-overlay').classList.add('open');
};

/* =========================================================================
   ORGANIGRAMA
   ========================================================================= */
let activeYear = '2026';
function renderYearTabs() {
  const tabs = document.getElementById('year-tabs');
  const years = Object.keys(directivas).sort((a, b) => b - a);
  tabs.innerHTML = years.map(y => `<button class="${y === activeYear ? 'active' : ''}" data-year="${y}">${y}</button>`).join('');
  tabs.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      activeYear = b.dataset.year;
      tabs.querySelectorAll('button').forEach(x => x.classList.toggle('active', x.dataset.year === activeYear));
      renderOrgChart();
    });
  });
}
function renderOrgChart() {
  const data = directivas[activeYear];
  document.getElementById('directiva-info').innerHTML = `Período <strong style="color:#fff">${data.periodo}</strong> · ${data.aprobadoEn}`;
  const chart = document.getElementById('org-chart');
  chart.classList.add('fading');
  setTimeout(() => {
    const grouped = {};
    data.miembros.forEach(m => {
      if (!grouped[m.nivel]) grouped[m.nivel] = [];
      grouped[m.nivel].push(m);
    });
    const levels = Object.keys(grouped).sort((a, b) => a - b);
    chart.innerHTML = levels.map(lv => `
      <div class="org__level org__level--${lv}">
        ${grouped[lv].map(m => `
          <div class="card card--directiva card--directiva--nivel${lv}">
            <div class="card__avatar">
              <img src="${m.foto}" alt="${m.nombre}" loading="lazy"/>
            </div>
            <h4 class="card__cargo">${m.cargo}</h4>
            <h3 class="card__nombre">${m.nombre}</h3>
            <p class="card__periodo">${data.periodo}</p>
            ${m.email ? `<div class="card__contact"><span class="card__email">📞 ${m.email}</span></div>` : '<div class="card__contact"></div>'}
          </div>
        `).join('')}
      </div>
    `).join('');
    chart.classList.remove('fading');
    if (!reduceMotion) {
      gsap.fromTo('.card--directiva', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 });
    }
  }, 350);
}

/* =========================================================================
   INIT
   ========================================================================= */
window.addEventListener('DOMContentLoaded', () => {
  // Diagnóstico de elementos inmersivos
  const revealCount = document.querySelectorAll('[data-reveal]').length;
  console.log(`✓ Sistema inmersivo: ${revealCount} elementos [data-reveal] encontrados`);

  initLenis();
  initSplitting();
  initScrollAnimations();
  initSwipers();
  initBubbles();
  initCaustics();
  bindFilters();
  renderEvents();
  renderResultsSelector();
  renderYearTabs();
  renderOrgChart();
  updateProgress();
  // Event listener para contact cards
  document.querySelectorAll('.card--contact').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('a');
      if (link) {
        link.click();
      }
    });
  });

  // AUDIO OVERLAY HANDLERS
  document.getElementById('enable-sound').addEventListener('click', () => {
    if (!reduceMotion) initAudio();
    document.getElementById('audio-overlay').classList.add('hidden');
    setAudioMuted(false);
    bootBreathing();
  });
  document.getElementById('skip-sound').addEventListener('click', () => {
    audioEnabled = false;
    document.getElementById('audio-overlay').classList.add('hidden');
    setAudioMuted(true);
    stopRelaxedBreathing();
  });
  document.getElementById('audio-toggle').addEventListener('click', () => {
    const wasMuted = audioMuted;
    if (!audioCtx && !reduceMotion) initAudio();
    setAudioMuted(!wasMuted);
  });

  // ScrollTrigger refresh
  setTimeout(() => {
    ScrollTrigger.refresh();
    console.log(`✓ ScrollTrigger refrescado`);

    // FALLBACK: Asegurar que elementos en viewport sean visibles
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport && getComputedStyle(el).opacity === '0') {
        gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6 });
      }
    });

    // Iniciar actualización continua de rayos después de todo está listo
    continuousUpdate();
  }, 300);
});

/* =========================================================================
   GSAP timeline para el apneísta a lo ancho del documento
   (anclado al body — extra adornos con ScrollTrigger)
   ========================================================================= */
window.addEventListener('load', () => {
  // Hide diver en secciones del club (no submarinas)
  ScrollTrigger.create({
    trigger: '#editorial-divider',
    start: 'top 80%',
    onEnter: () => gsap.to('#diver-stage', { opacity: 0, duration: 0.6 }),
    onLeaveBack: () => gsap.to('#diver-stage', { opacity: 1, duration: 0.6 })
  });
});
                                                                                                                                                                                                                                                                                   