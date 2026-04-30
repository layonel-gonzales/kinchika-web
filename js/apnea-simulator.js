/* ==========================================================
   SIMULADOR DE TABLAS DE APNEA — Lógica interactiva con Modal
   ========================================================== */

class ApneaTableSimulator {
  constructor(containerId, modalOverlayId, closeButtonId) {
    this.container = document.getElementById(containerId);
    this.modalOverlay = document.getElementById(modalOverlayId);
    this.closeButton = document.getElementById(closeButtonId);

    if (!this.container || !this.modalOverlay) return;

    /* Estado del simulador */
    this.isRunning = false;
    this.isPaused = false;
    this.currentRound = 0;
    this.totalRounds = 4;
    this.currentPhase = 'apnea'; // 'apnea' o 'rest'
    this.timeRemaining = 0;
    this.timeElapsed = 0;
    this.currentTable = 'co2';
    this.currentLevel = 'beginner';

    /* Tablas predefinidas */
    this.tables = {
      co2: {
        beginner: {
          name: 'CO₂ Principiante',
          description: 'Construcción básica de tolerancia a CO₂',
          rounds: [
            { apnea: 30, rest: 90 },
            { apnea: 30, rest: 60 },
            { apnea: 30, rest: 45 },
            { apnea: 30, rest: 30 }
          ]
        },
        intermediate: {
          name: 'CO₂ Intermedio',
          description: 'Entrenamiento moderado',
          rounds: [
            { apnea: 45, rest: 90 },
            { apnea: 45, rest: 60 },
            { apnea: 45, rest: 45 },
            { apnea: 45, rest: 30 },
            { apnea: 45, rest: 20 }
          ]
        },
        advanced: {
          name: 'CO₂ Avanzado',
          description: 'Entrenamiento intenso',
          rounds: [
            { apnea: 60, rest: 90 },
            { apnea: 60, rest: 60 },
            { apnea: 60, rest: 45 },
            { apnea: 60, rest: 30 },
            { apnea: 60, rest: 20 },
            { apnea: 60, rest: 15 }
          ]
        }
      },
      o2: {
        beginner: {
          name: 'O₂ Principiante',
          description: 'Construcción básica de capacidad pulmonar',
          rounds: [
            { apnea: 30, rest: 90 },
            { apnea: 45, rest: 90 },
            { apnea: 60, rest: 90 },
            { apnea: 75, rest: 90 }
          ]
        },
        intermediate: {
          name: 'O₂ Intermedio',
          description: 'Construcción gradual de duración',
          rounds: [
            { apnea: 45, rest: 90 },
            { apnea: 60, rest: 90 },
            { apnea: 75, rest: 90 },
            { apnea: 90, rest: 90 },
            { apnea: 105, rest: 90 }
          ]
        },
        advanced: {
          name: 'O₂ Avanzado',
          description: 'Construcción avanzada',
          rounds: [
            { apnea: 60, rest: 90 },
            { apnea: 80, rest: 90 },
            { apnea: 100, rest: 90 },
            { apnea: 120, rest: 90 },
            { apnea: 140, rest: 90 },
            { apnea: 160, rest: 90 }
          ]
        }
      }
    };

    this.init();
  }

  init() {
    this.createUI();
    this.attachEventListeners();
  }

  createUI() {
    this.container.innerHTML = `
      <div class="apnea-simulator">
        <div class="simulator-header">
          <h3>Simulador de Tablas de Apnea</h3>
        </div>

        <div class="simulator-controls">
          <div class="control-group">
            <label for="table-select">Tipo de tabla</label>
            <select id="table-select">
              <option value="co2">Tabla CO₂ (Hipercapnia)</option>
              <option value="o2">Tabla O₂ (Hipoxia)</option>
            </select>
          </div>

          <div class="control-group">
            <label for="level-select">Nivel</label>
            <select id="level-select">
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Avanzado</option>
            </select>
          </div>
        </div>

        <div class="status-message" id="status-message"></div>

        <div class="simulator-display">
          <div class="table-type-badge" id="table-badge">CO₂</div>
          <div class="timer-display" id="timer-display">00:00</div>

          <div class="phase-info">
            <div class="phase-item">
              <div class="phase-label">FASE</div>
              <div class="phase-value" id="current-phase">Apnea</div>
            </div>
            <div class="phase-item">
              <div class="phase-label">SIGUIENTE</div>
              <div class="phase-value" id="next-phase">Descanso</div>
            </div>
          </div>

          <div class="progress-section">
            <div class="progress-label">
              <span>Progreso</span>
              <span id="progress-text">0%</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" id="progress-bar"></div>
            </div>
          </div>

          <div class="round-indicator">
            <div class="round-number" id="round-number">Ronda 1 de 4</div>
            <div class="round-dots" id="round-dots"></div>
          </div>

          <div class="simulator-buttons">
            <button class="btn-simulator btn-start" id="btn-start">Iniciar</button>
            <button class="btn-simulator btn-pause" id="btn-pause" disabled>Pausar</button>
            <button class="btn-simulator btn-reset" id="btn-reset">Reiniciar</button>
          </div>
        </div>

        <div class="safety-note">
          <strong>⚠️ Seguridad</strong>
          <p>Nunca practiques ejercicios de apnea solo. Siempre requiere supervisión de un compañero completamente consciente.</p>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const tableSelect = document.getElementById('table-select');
    const levelSelect = document.getElementById('level-select');
    const btnStart = document.getElementById('btn-start');
    const btnPause = document.getElementById('btn-pause');
    const btnReset = document.getElementById('btn-reset');

    tableSelect.addEventListener('change', (e) => {
      this.currentTable = e.target.value;
      this.reset();
    });

    levelSelect.addEventListener('change', (e) => {
      this.currentLevel = e.target.value;
      this.reset();
    });

    btnStart.addEventListener('click', () => this.start());
    btnPause.addEventListener('click', () => this.togglePause());
    btnReset.addEventListener('click', () => this.reset());

    /* Modal controls */
    this.closeButton.addEventListener('click', () => this.closeModal());
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.closeModal();
    });
  }

  openModal(tableType = 'co2') {
    this.currentTable = tableType;
    this.reset();

    /* Actualizar selects */
    const tableSelect = document.getElementById('table-select');
    if (tableSelect) tableSelect.value = tableType;

    this.modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    this.updateUI();
  }

  closeModal() {
    this.isRunning = false;
    this.isPaused = false;
    this.modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  getCurrentTable() {
    return this.tables[this.currentTable][this.currentLevel];
  }

  updateUI() {
    const currentRound = this.getCurrentTable().rounds[this.currentRound];
    const totalRounds = this.getCurrentTable().rounds.length;

    /* Actualizar badge */
    const badge = document.getElementById('table-badge');
    badge.textContent = this.currentTable === 'co2' ? 'CO₂' : 'O₂';

    /* Actualizar timer */
    const timerDisplay = document.getElementById('timer-display');
    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    /* Actualizar fase */
    const phaseLabel = this.currentPhase === 'apnea' ? 'Apnea' : 'Descanso';
    const nextPhaseLabel = this.currentPhase === 'apnea' ? 'Descanso' : 'Apnea';
    document.getElementById('current-phase').textContent = phaseLabel;
    document.getElementById('next-phase').textContent = nextPhaseLabel;

    /* Actualizar progreso general */
    const totalTime = this.getCurrentTable().rounds.reduce((acc, r) => acc + r.apnea + r.rest, 0);
    const elapsedTime = this.timeElapsed;
    const progressPercent = Math.min(100, Math.round((elapsedTime / totalTime) * 100));
    document.getElementById('progress-bar').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = progressPercent + '%';

    /* Actualizar indicador de ronda */
    document.getElementById('round-number').textContent = `Ronda ${this.currentRound + 1} de ${totalRounds}`;
    this.updateRoundDots(totalRounds);

    /* Actualizar controles */
    document.getElementById('btn-start').disabled = this.isRunning;
    document.getElementById('btn-pause').disabled = !this.isRunning;
  }

  updateRoundDots(total) {
    const dotsContainer = document.getElementById('round-dots');
    let dotsHTML = '';
    for (let i = 0; i < total; i++) {
      let dotClass = 'round-dot';
      if (i === this.currentRound) {
        dotClass += ' active';
      } else if (i < this.currentRound) {
        dotClass += ' completed';
      }
      dotsHTML += `<div class="${dotClass}"></div>`;
    }
    dotsContainer.innerHTML = dotsHTML;
  }

  start() {
    if (this.isRunning) return;

    const table = this.getCurrentTable();
    if (this.currentRound >= table.rounds.length) {
      this.showMessage('✓ Tabla completada. Reinicia para volver a empezar.', false);
      return;
    }

    this.isRunning = true;
    this.isPaused = false;

    const currentRound = table.rounds[this.currentRound];
    this.currentPhase = 'apnea';
    this.timeRemaining = currentRound.apnea;

    this.showMessage(`Ronda ${this.currentRound + 1} iniciada`, false);
    this.updateUI();
    this.tick();
  }

  togglePause() {
    if (!this.isRunning) return;

    this.isPaused = !this.isPaused;
    const btnPause = document.getElementById('btn-pause');
    btnPause.textContent = this.isPaused ? 'Reanudar' : 'Pausar';

    if (!this.isPaused) {
      this.tick();
    } else {
      const phaseText = this.currentPhase === 'apnea' ? 'apnea' : 'descanso';
      this.showMessage(`Pausa en ${phaseText}`, false);
    }
  }

  tick() {
    if (!this.isRunning || this.isPaused) return;

    const table = this.getCurrentTable();
    const currentRound = table.rounds[this.currentRound];

    /* Decrementar tiempo */
    this.timeRemaining--;
    this.timeElapsed++;

    this.updateUI();

    if (this.timeRemaining <= 0) {
      /* Cambiar fase o pasar a siguiente ronda */
      if (this.currentPhase === 'apnea') {
        /* Pasar a descanso */
        this.currentPhase = 'rest';
        this.timeRemaining = currentRound.rest;

        const soundEffect = this.getPhaseSound();
        this.playTone(soundEffect.freq, soundEffect.duration);
      } else {
        /* Pasar a siguiente ronda */
        this.currentRound++;

        if (this.currentRound >= table.rounds.length) {
          /* Tabla completada */
          this.isRunning = false;
          this.updateUI();
          this.showMessage('✓ ¡Tabla completada!', false);
          this.playCompletionTone();
          return;
        } else {
          /* Siguiente ronda */
          this.currentPhase = 'apnea';
          const nextRound = table.rounds[this.currentRound];
          this.timeRemaining = nextRound.apnea;
          const soundEffect = this.getPhaseSound();
          this.playTone(soundEffect.freq, soundEffect.duration);
        }
      }
    }

    /* Continuar ticking */
    setTimeout(() => this.tick(), 1000);
  }

  reset() {
    this.isRunning = false;
    this.isPaused = false;
    this.currentRound = 0;
    this.timeRemaining = 0;
    this.timeElapsed = 0;
    this.currentPhase = 'apnea';

    const table = this.getCurrentTable();
    this.totalRounds = table.rounds.length;

    const btnPause = document.getElementById('btn-pause');
    if (btnPause) btnPause.textContent = 'Pausar';

    this.updateUI();
    this.showMessage('', false);
  }

  showMessage(text, isWarning = false) {
    const msgEl = document.getElementById('status-message');
    if (!msgEl) return;

    if (text) {
      msgEl.textContent = text;
      msgEl.classList.add('show');
      if (isWarning) {
        msgEl.classList.add('warning');
      } else {
        msgEl.classList.remove('warning');
      }
    } else {
      msgEl.classList.remove('show');
      msgEl.classList.remove('warning');
    }
  }

  getPhaseSound() {
    if (this.currentPhase === 'apnea') {
      return { freq: 440, duration: 200 }; // La (A4)
    } else {
      return { freq: 660, duration: 150 }; // Mi (E5)
    }
  }

  playTone(freq, duration) {
    if (typeof AudioContext === 'undefined' && typeof webkitAudioContext === 'undefined') {
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration / 1000);
    } catch (e) {
      // Silently fail
    }
  }

  playCompletionTone() {
    if (typeof AudioContext === 'undefined' && typeof webkitAudioContext === 'undefined') {
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const freqs = [523, 659, 784]; // Do, Mi, Sol

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.value = freq;
        const startTime = ctx.currentTime + idx * 0.1;
        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch (e) {
      // Silently fail
    }
  }
}

/* Inicializar */
let simulator = null;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    simulator = new ApneaTableSimulator('apnea-simulator-container', 'apnea-modal-overlay', 'apnea-modal-close');

    /* Agregar click listeners a las tarjetas */
    const tablaCards = document.querySelectorAll('.tabla-card-interactive');
    tablaCards.forEach(card => {
      card.addEventListener('click', () => {
        const tableType = card.dataset.table;
        simulator.openModal(tableType);
      });
    });
  });
} else {
  simulator = new ApneaTableSimulator('apnea-simulator-container', 'apnea-modal-overlay', 'apnea-modal-close');

  const tablaCards = document.querySelectorAll('.tabla-card-interactive');
  tablaCards.forEach(card => {
    card.addEventListener('click', () => {
      const tableType = card.dataset.table;
      simulator.openModal(tableType);
    });
  });
}
