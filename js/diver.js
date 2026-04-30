/* ==========================================================
   MÓDULO BUCEADOR APNEÍSTA — Animación con GSAP
   ========================================================== */

/* Variables de control del buceador */
let _lastScrollY = window.scrollY;
let _targetBodyRot = 0;     // 0 = cabeza arriba · 180 = cabeza abajo
let _currentBodyRot = 0;
let _scrollIdleTimer = null;
let globalProgress = 0;     // Progreso del scroll (0 a 1)

/* Constantes de animación */
const ARM_OVER_HEAD = 180;

/* Timeline de GSAP para las aletas */
let finsTimeline = null;

/**
 * Inicializa la animación de las aletas con GSAP
 * Movimiento ondulatorio realista de apneísta bajo el agua
 */
function initFinsAnimation() {
  if (typeof gsap === 'undefined') return;

  finsTimeline = gsap.timeline({ repeat: -1 });

  // Movimiento en ONDA sincronizado de las aletas
  // Las piernas trabajan JUNTAS como una unidad (aleta única)
  finsTimeline
    // Fase 1: Piernas hacia ARRIBA (recuperación)
    .to('#leg-left', {
      rotation: -12,
      duration: 0.35,
      ease: 'sine.inOut'
    }, 0)
    .to('#leg-right', {
      rotation: -12,
      duration: 0.35,
      ease: 'sine.inOut'
    }, 0)

    // Fase 2: Piernas hacia ABAJO (impulso - más rápido y fuerte)
    .to('#leg-left', {
      rotation: 18,
      duration: 0.25,
      ease: 'sine.inOut'
    })
    .to('#leg-right', {
      rotation: 18,
      duration: 0.25,
      ease: 'sine.inOut'
    }, '<')

    // Fase 3: Regreso suave
    .to('#leg-left', {
      rotation: 0,
      duration: 0.3,
      ease: 'sine.inOut'
    })
    .to('#leg-right', {
      rotation: 0,
      duration: 0.3,
      ease: 'sine.inOut'
    }, '<');
}

/**
 * Aplica la posición y pose del buceador según el progreso del scroll
 * @param {number} p - Progress de scroll (0 a 1)
 */
function applyDiverPose(p) {
  // Interpolación angular por camino más corto
  let diff = _targetBodyRot - _currentBodyRot;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  _currentBodyRot += diff * 0.28;

  // Movimiento suave vertical
  const t = Date.now();
  const yOffset = Math.sin(t / 1300) * 2;

  // Escala: desaparece gradualmente hacia el fondo
  let diverScale = 1.0;
  if (p > 0.7) {
    diverScale = Math.max(0, 1.0 - ((p - 0.7) / 0.15));
  }

  // Opacidad: desvanecimiento suave
  let diverOpacity = 1.0;
  if (p > 0.65) {
    diverOpacity = Math.max(0, 1.0 - ((p - 0.65) / 0.2));
  }

  // Aplicar estilos al contenedor
  const stage = document.getElementById('diver-stage');
  if (stage) {
    stage.style.opacity = diverOpacity;
    stage.style.transform = 'translateY(-50%) scale(' + diverScale + ')';
  }

  // Aplicar rotación al cuerpo principal
  const root = document.getElementById('diver-root');
  if (root) {
    root.setAttribute('transform', 'translate(0, ' + yOffset + ') rotate(' + _currentBodyRot + ' 100 170)');
  }

  // Movimiento suave de brazos
  const armSubtle = Math.sin(t / 900) * 2;
  const armL = document.getElementById('arm-left');
  const armR = document.getElementById('arm-right');

  if (armL) armL.setAttribute('transform', 'translate(70,110) rotate(' + (ARM_OVER_HEAD - armSubtle) + ' 0 0)');
  if (armR) armR.setAttribute('transform', 'translate(130,110) rotate(' + (ARM_OVER_HEAD + armSubtle) + ' 0 0)');
}

/* Escuchar cambios de dirección de scroll */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const dy = y - _lastScrollY;

  // Calcular progreso de scroll (0 a 1)
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  globalProgress = docHeight > 0 ? Math.min(1, y / docHeight) : 0;

  if (dy > 0.5) {
    _targetBodyRot = 180;  // scroll hacia abajo → cabeza abajo
    if (typeof triggerBreathDirection === 'function') triggerBreathDirection('down');
  } else if (dy < -0.5) {
    _targetBodyRot = 0;    // scroll hacia arriba → cabeza arriba
    if (typeof triggerBreathDirection === 'function') triggerBreathDirection('up');
  }
  _lastScrollY = y;
});

/**
 * Loop de animación del buceador
 */
function tickDiverIdle() {
  applyDiverPose(globalProgress);
  requestAnimationFrame(tickDiverIdle);
}

/* Inicializar animación al cargar */
if (typeof requestAnimationFrame !== 'undefined') {
  requestAnimationFrame(tickDiverIdle);
}

/* Iniciar animación de aletas cuando se carga GSAP */
if (typeof gsap !== 'undefined') {
  initFinsAnimation();
} else {
  // Fallback si GSAP no está disponible
  console.warn('GSAP no disponible - animación de aletas deshabilitada');
}

/* Esconder/mostrar buceador en secciones específicas */
if (typeof ScrollTrigger !== 'undefined') {
  window.addEventListener('load', () => {
    ScrollTrigger.create({
      trigger: '#editorial-divider',
      start: 'top 80%',
      onEnter: () => {
        if (typeof gsap !== 'undefined') {
          gsap.to('#diver-stage', { opacity: 0, duration: 0.6 });
        }
      },
      onLeaveBack: () => {
        if (typeof gsap !== 'undefined') {
          gsap.to('#diver-stage', { opacity: 1, duration: 0.6 });
        }
      }
    });
  });
}
