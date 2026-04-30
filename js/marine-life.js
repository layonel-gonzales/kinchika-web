/* ==========================================================
   FAUNA MARINA INTERACTIVA — Movimiento y escape del mouse
   ========================================================== */

class MarineCreature {
  constructor(element, type) {
    this.element = element;
    this.type = type;

    // Posición y velocidad
    this.x = Math.random() * (window.innerWidth - 60);
    this.y = Math.random() * (window.innerHeight - 60);
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 1.5;

    // Estado de escape
    this.isEscaping = false;
    this.escapeSpeed = 3;
    this.normalSpeed = 0.5;

    // Rango de detección del mouse
    this.detectionRange = 150;
    this.mouseX = 0;
    this.mouseY = 0;

    this.updatePosition();
    this.startAnimation();
  }

  setMousePosition(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }

  getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  updatePosition() {
    // Movimiento browniano suave (flotación)
    this.vx += (Math.random() - 0.5) * 0.3;
    this.vy += (Math.random() - 0.5) * 0.2;

    // Limitar velocidad
    const maxSpeed = this.isEscaping ? this.escapeSpeed : this.normalSpeed;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed;
      this.vy = (this.vy / speed) * maxSpeed;
    }

    // Detectar proximidad del mouse
    const distToMouse = this.getDistance(
      this.x + 30,
      this.y + 30,
      this.mouseX,
      this.mouseY
    );

    if (distToMouse < this.detectionRange) {
      this.isEscaping = true;

      // Calcular dirección de escape (opuesta al mouse)
      const angle = Math.atan2(
        (this.y + 30) - this.mouseY,
        (this.x + 30) - this.mouseX
      );

      // Acelerar en dirección de escape
      const escapeForce = (this.detectionRange - distToMouse) / this.detectionRange;
      this.vx = Math.cos(angle) * this.escapeSpeed * escapeForce;
      this.vy = Math.sin(angle) * this.escapeSpeed * escapeForce;
    } else {
      this.isEscaping = false;
    }

    // Aplicar velocidad a la posición
    this.x += this.vx;
    this.y += this.vy;

    // Rebote en bordes de la pantalla
    const margin = 10;
    if (this.x < margin) {
      this.x = margin;
      this.vx = Math.abs(this.vx);
    }
    if (this.x > window.innerWidth - 60 - margin) {
      this.x = window.innerWidth - 60 - margin;
      this.vx = -Math.abs(this.vx);
    }
    if (this.y < margin) {
      this.y = margin;
      this.vy = Math.abs(this.vy);
    }
    if (this.y > window.innerHeight - 60 - margin) {
      this.y = window.innerHeight - 60 - margin;
      this.vy = -Math.abs(this.vy);
    }

    // Actualizar posición en DOM
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';

    // Orientar peces según dirección
    if (this.type === 'fish') {
      const isMovingLeft = this.vx < -0.1;
      const isMovingRight = this.vx > 0.1;

      if (isMovingLeft && !this.element.classList.contains('flipped')) {
        this.element.classList.add('flipped');
      } else if (isMovingRight && this.element.classList.contains('flipped')) {
        this.element.classList.remove('flipped');
      }
    }
  }

  startAnimation() {
    const animate = () => {
      this.updatePosition();
      requestAnimationFrame(animate);
    };
    animate();
  }
}

// SVG Creatures (fauna marina chilena)
const creatureSVGs = {
  fish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00D4FF;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0099CC;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Cuerpo -->
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="url(#fishGrad)"/>
    <!-- Cabeza -->
    <circle cx="25" cy="50" r="15" fill="#00B8E6"/>
    <!-- Ojo -->
    <circle cx="18" cy="48" r="3" fill="#fff"/>
    <circle cx="18" cy="48" r="1.5" fill="#000"/>
    <!-- Aleta dorsal -->
    <polygon points="50,25 55,15 60,25" fill="#0099CC"/>
    <!-- Aleta caudal -->
    <polygon points="75,50 95,35 95,65" fill="#00D4FF" opacity="0.8"/>
    <!-- Aleta ventral -->
    <polygon points="50,72 55,82 60,72" fill="#0099CC" opacity="0.6"/>
  </svg>`,

  starfish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DD4B3A;stop-opacity:1" />
      </radialGradient>
    </defs>
    <!-- Cuerpo central -->
    <circle cx="50" cy="50" r="15" fill="url(#starGrad)"/>
    <!-- Brazos -->
    <rect x="42" y="15" width="16" height="35" rx="8" fill="url(#starGrad)"/>
    <rect x="42" y="50" width="16" height="35" rx="8" fill="url(#starGrad)"/>
    <rect x="15" y="42" width="35" height="16" rx="8" fill="url(#starGrad)"/>
    <rect x="50" y="42" width="35" height="16" rx="8" fill="url(#starGrad)"/>
    <rect x="27" y="27" width="25" height="25" rx="12" fill="url(#starGrad)" transform="rotate(45 50 50)"/>
    <!-- Textura -->
    <circle cx="50" cy="50" r="6" fill="rgba(0,0,0,0.1)"/>
  </svg>`,

  coral: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coralGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style="stop-color:#FF8C42;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFB84D;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Tallo -->
    <path d="M 50 100 Q 45 80 48 60 Q 50 50 50 40" stroke="url(#coralGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- Ramificaciones -->
    <path d="M 48 70 Q 35 65 30 55" stroke="url(#coralGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 50 60 Q 65 55 70 45" stroke="url(#coralGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 48 50 Q 40 40 38 25" stroke="url(#coralGrad)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- Pólipos -->
    <circle cx="30" cy="55" r="4" fill="#FFB84D"/>
    <circle cx="70" cy="45" r="4" fill="#FFB84D"/>
    <circle cx="38" cy="25" r="4" fill="#FFB84D"/>
    <circle cx="50" cy="40" r="5" fill="#FFB84D"/>
  </svg>`,

  urchin: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="urchinGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#8B4789;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#5C2E6A;stop-opacity:1" />
      </radialGradient>
    </defs>
    <!-- Cuerpo -->
    <circle cx="50" cy="50" r="20" fill="url(#urchinGrad)"/>
    <!-- Púas -->
    <line x1="50" y1="15" x2="50" y2="5" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="85" x2="50" y2="95" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="15" y1="50" x2="5" y2="50" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="85" y1="50" x2="95" y2="50" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="25" x2="18" y2="18" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="75" y1="75" x2="82" y2="82" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="75" y1="25" x2="82" y2="18" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="75" x2="18" y2="82" stroke="#8B4789" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  algae: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="algaeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style="stop-color:#2D9B5E;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Tallo principal -->
    <path d="M 50 100 Q 48 80 50 60 Q 52 40 48 20" stroke="url(#algaeGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- Hojas onduladas -->
    <path d="M 50 80 Q 65 75 70 85" stroke="url(#algaeGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 50 60 Q 35 55 30 65" stroke="url(#algaeGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 50 40 Q 65 35 68 45" stroke="url(#algaeGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 48 20 Q 32 18 28 28" stroke="url(#algaeGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`
};

// Inicializar fauna marina
function initMarineLife() {
  const container = document.getElementById('marine-life-container');
  if (!container) {
    // Crear contenedor si no existe
    const newContainer = document.createElement('div');
    newContainer.id = 'marine-life-container';
    newContainer.className = 'marine-life-container';
    document.body.insertBefore(newContainer, document.body.firstChild);
  }

  const types = ['fish', 'starfish', 'coral', 'urchin', 'algae'];
  const creatureCount = window.innerWidth > 768 ? 8 : window.innerWidth > 480 ? 5 : 3;

  const creatures = [];

  for (let i = 0; i < creatureCount; i++) {
    const type = types[i % types.length];
    const element = document.createElement('div');
    element.className = `marine-creature creature-${type}`;
    element.innerHTML = creatureSVGs[type];

    const containerEl = document.getElementById('marine-life-container');
    containerEl.appendChild(element);

    const creature = new MarineCreature(element, type);
    creatures.push(creature);
  }

  // Rastrear movimiento del mouse
  document.addEventListener('mousemove', (e) => {
    creatures.forEach(creature => {
      creature.setMousePosition(e.clientX, e.clientY);
    });
  });

  // Rastrear cuando el mouse sale de la ventana
  document.addEventListener('mouseleave', () => {
    creatures.forEach(creature => {
      creature.setMousePosition(-9999, -9999);
      creature.isEscaping = false;
    });
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMarineLife);
} else {
  initMarineLife();
}
