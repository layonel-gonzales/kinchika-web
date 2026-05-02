# Prompt para Claude Design — Kinchika Web Redesign

---

## CONTEXTO DEL PROYECTO

Diseña una réplica mejorada del sitio web del **Club de Buceo Kinchika**, un club deportivo sin fines de lucro ubicado en Lo Prado, Santiago, Chile. El club practica apnea (freediving), buceo, nado con aletas, rugby subacuático, rescatismo y educación ambiental marina.

El concepto central del diseño es una **experiencia de inmersión submarina**: el usuario "desciende" mientras hace scroll, pasando de la superficie hacia el abismo oceánico. Todo el sistema visual (colores, animaciones, tipografía, sonido) refuerza esta metáfora. El sitio no es solo un portal informativo — es una **experiencia narrativa interactiva**.

---

## IDENTIDAD VISUAL ACTUAL

### Paleta de Colores
```
Dorado de marca:     #C9A84C  → acentos, CTA, jerarquía
Azul marino base:    #001F3F  → fondos oscuros, contraste
Fondo superficie:    #000d1a  → inicio del gradiente de profundidad
Fondo abismo:        #000000  → final del gradiente
Cyan tecnológico:    #00ffaa  → HUD, datos, vida
Rojo alerta:         #ff5252  → advertencias SpO₂
Naranja fauna:       #FF8C42  → vida marina
Blanco texto:        #ffffff  → lectura principal
```

### Tipografía
- **Fraunces** (serif) → títulos, headings, peso poético
- **Plus Jakarta Sans** (sans-serif, weight 300) → cuerpo de texto
- **Share Tech Mono** (monospace) → HUD, datos técnicos, timers

### Estilo Visual
- Glassmorphism con `backdrop-filter: blur`
- Cards con bordes translúcidos `rgba(255,255,255,0.08–0.25)`
- Gradientes lineales en lugar de colores planos
- Drop shadows sutiles con tono azul marino
- Sin imágenes de fondo estáticas — todo es dinámico

---

## SECCIONES ACTUALES Y SU PROPÓSITO

| Sección | Función |
|---------|---------|
| **Audio Overlay** | Modal inicial que invita a activar sonido inmersivo |
| **Hero** | Primera impresión: "Inhala. Suéltalo todo." — Llamada emocional |
| **Misión** | Valores del club, disciplinas que practican |
| **Historia** | Narrativa de origen + cards de instructores con foto |
| **Historia del Apnea** | Timeline horizontal interactivo (hover = imagen contextual) |
| **Horarios** | Sesiones semanales + tablas de entrenamiento CO₂/O₂ |
| **Simulador de Apnea** | Modal con timer interactivo de tablas hipóxicas/hipercápnicas |
| **Eventos** | Grid filtrable por disciplina, nivel y disponibilidad |
| **Resultados** | Actas de competencias con rankings y récords |
| **Directiva** | Organigrama anual interactivo por tabs (2024/2025/2026) |
| **Lugar** | Mapa + dirección de la piscina municipal |
| **Contacto** | WhatsApp, Instagram, aliados institucionales |

---

## FUNCIONALIDADES INTERACTIVAS EXISTENTES

1. **Scroll-depth system** — El fondo cambia de azul oscuro a negro absoluto según el scroll, simulando un descenso a 100m de profundidad con interpolación RGB continua.

2. **HUD de buceo** (esquina inferior izquierda) — Muestra DEPTH (0–100m), TIME, TEMP (18°C→8°C), SpO₂ (98%→82%) actualizados en tiempo real al hacer scroll.

3. **Canvas de burbujas (Three.js)** — 180 partículas esféricas flotando hacia arriba con shader personalizado, opacidad y movimiento sinusoidal.

4. **Fauna marina SVG** — Peces, estrellas, corales y erizos que flotan y escapan del cursor a menos de 150px.

5. **Audio ambiental** — Archivo MP3 de profundidad + sonido de respiración sintético generado con Web Audio API.

6. **Simulador de tablas de apnea** — Timer con rondas, transiciones de descanso/apnea, niveles Principiante/Intermedio/Avanzado.

7. **Timeline horizontal con imagen** — Al hacer hover sobre una card histórica, aparece una imagen contextual debajo con fade + slide.

8. **Filtros de eventos** — Por disciplina (ECO, STA, DYN, DEPTH, EDU) y nivel, con re-render animado.

9. **Organigrama dinámico** — Cards de directiva con foto, cargo y email, organizados por niveles jerárquicos y años.

10. **Scroll progress bar** — Barra superior que va de dorado a cyan según avance en la página.

11. **Smooth scroll (Lenis)** — Desplazamiento fluido con curva de easing personalizada.

12. **GSAP ScrollTrigger** — Todos los elementos hacen fade-up al entrar al viewport con stagger escalonado.

---

## LO QUE PEDIMOS A CLAUDE DESIGN

### Objetivo Principal
Crea una **réplica mejorada** del sitio Kinchika que mantenga el concepto de inmersión submarina pero con un nivel de craft visual, animaciones y UX significativamente superior. Queremos que el diseño sea digno de un estudio de diseño de primer nivel.

---

### MEJORAS ESPECÍFICAS SOLICITADAS

#### 1. HERO SECTION — Impacto máximo
- Reemplaza el fondo sólido con un **video loop o animación generativa** de agua real en la superficie
- Agrega **efecto de refracción de luz** (caustics) animado sobre la tipografía del hero
- El texto "Inhala. Suéltalo todo." debería aparecer con una animación de **morphing de caracteres** o efecto de escritura submarina (como tinta disolviéndose en agua)
- Propón un **scroll indicator** más impactante que el típico ícono de flecha — quizás burbujas que ascienden invitando a bajar
- Explora si el logo del club podría ser **3D interactivo** en WebGL

#### 2. SISTEMA DE PROFUNDIDAD — Más capas
- Actualmente solo cambia el color de fondo. Propón un sistema de **parallax multicapa** (4–6 capas a diferentes velocidades):
  - Capa 0: fondo de profundidad (más lento)
  - Capa 1: rayos de luz que se desvanecen (god rays — actualmente removidos del código)
  - Capa 2: partículas de agua
  - Capa 3: fauna marina
  - Capa 4: contenido UI (más rápido)
- Los **god rays** (rayos de luz filtrados desde la superficie) deben regresar implementados con canvas o WebGL
- Explora **partículas de polvo marino** que flotan lentamente

#### 3. CARDS — Diseño más rico
- Las cards actuales son rectangulares básicas con glassmorphism simple. Propón variantes más expresivas:
  - Cards con **bordes animados** (shimmer perimetral en hover)
  - **Liquid morphing** en el fondo de cada card al hacer hover
  - Separadores con forma de **ola SVG animada** entre secciones
  - Cards de eventos con **contador regresivo** visible
  - Cards de instructores con **flip 3D** al hacer hover (frente = foto, atrás = bio)

#### 4. TIMELINE HISTÓRICO — Experiencia cinematográfica
- El timeline horizontal funciona, pero la transición hacia la imagen debería ser más dramática
- Propón un diseño donde al hacer hover en una card:
  - La **pantalla completa** (o 70% del viewport) se convierte en una "ventana al pasado"
  - La imagen aparece con un **efecto de revelación** (cortina de agua, morphing de ola, o dissolve circular)
  - El texto de la card se expande en el lado izquierdo con tipografía editorial de mayor tamaño
  - Una **línea de tiempo visual** más rica: con iconos, fechas prominentes, y conexiones visuales

#### 5. HUD DE BUCEO — Más inmersivo
- El HUD actual es funcional pero simple. Rediseña con:
  - Estética de **computador de buceo real** (Shearwater, Garmin Descent) — más componentes, más detalles
  - **Animación de pulso cardíaco** sincronizada con la "respiración" del audio
  - Gráfica de **perfil de descenso** en tiempo real (línea que dibuja la trayectoria)
  - Indicador de **gas nitrógeno** o tiempo sin descompresión (NDT)
  - Alertas visuales más dramáticas cuando SpO₂ < 85% (pantalla parpadea sutilmente en rojo)

#### 6. SIMULADOR DE TABLAS — UX deportiva
- Rediseña la interfaz del simulador con estética de **app deportiva de alta gama** (Nike Training, Whoop, Garmin Connect)
- Visualización circular del tiempo restante (como un cronómetro analógico digital)
- **Ondas de respiración** animadas que acompañan cada fase (inhala/exhala)
- Historial de sesiones visualizado
- Posibilidad de **personalizar la tabla** con sliders

#### 7. SECCIÓN EVENTOS — Más atractiva
- El grid actual es funcional. Mejora con:
  - Tarjetas con **imagen de fondo real** (parallax interno al hacer hover)
  - Un **mapa interactivo de Chile** donde se visualizan los eventos geolocalizados
  - **Efecto de agua** en las cards agotadas (cupos llenos = tarjeta "sumergida" / desaturada)
  - Animación de filtros más fluida (las cards no aparecen/desaparecen — flotan y se reorganizan)

#### 8. RESULTADOS Y ACTAS — Visualización de datos
- Las tablas actuales son básicas. Propón:
  - **Gráficas de barras animadas** para comparar resultados por disciplina
  - **Podio 3D** interactivo para el top 3
  - Timeline de records históricos del club
  - Animación de "confetti" o partículas al mostrar récords

#### 9. DIRECTIVA — Organigrama más expresivo
- El organigrama de cajas es funcional pero poco inspirador. Propón:
  - **Árbol orgánico** con ramas que se dibujan progresivamente
  - Cards con efecto **holográfico** (iridiscencia sutil en hover)
  - Foto de cada miembro con **tratamiento de color** (duotono azul/dorado)
  - Animación de entrada escalonada tipo "emerge del agua"

#### 10. NAVEGACIÓN — Más integrada con el tema
- La nav actual es una barra horizontal estándar. Propón una alternativa que:
  - Simule un **panel de control de buceo** (instrumentos analógicos)
  - O una **interfaz de profundímetro** donde los links son marcadores de profundidad
  - Con un indicador de sección activa más visual

#### 11. FOOTER — Cierre narrativo
- El footer cierra la historia del descenso. Debería sentirse como "tocar fondo":
  - Fondo completamente negro con textura de arena submarina
  - Animación de **sedimento que cae** lentamente
  - La bioluminiscencia aparece en el footer (puntos de luz azul-verde que pulsan)
  - Texto con efecto de **flotación lenta**

---

### NUEVAS SECCIONES SUGERIDAS

1. **"El Equipo" / Team Section** — Galería inmersiva de miembros activos del club con fotos en blanco y negro convertidas a azul/dorado, con nombre y disciplina favorita al hover.

2. **"Descenso Guiado" / Guided Descent** — Una sección scroll-jackada donde el usuario sigue a un buceador en un descenso de 30m con narración textual y cambios de escena.

3. **"Sonidos del Mar" / Soundscape** — Visualización de audio (waveform animado) con sonidos del océano capturados en inmersiones del club.

4. **"Galería Submarina"** — Grid masonry de fotos reales del club con lightbox inmersivo.

5. **"Únete al Club"** — Formulario de registro con diseño de "bienvenida al equipo" con efecto de burbuja que sube al enviar.

---

### PALETA EXTENDIDA SUGERIDA

Mantén la paleta base pero enriquécela con:
```
Bioluminiscencia:    #0AFFD0  → efectos de profundidad extrema
Coral vivo:          #FF6B6B  → llamadas a la acción secundarias
Arena oceánica:      #E8D5A3  → contraste cálido en el footer
Medusa translúcida:  rgba(150, 200, 255, 0.15) → efectos etéreos
```

---

### ANIMACIONES QUE DEBEN DESTACAR

1. **Entrada al sitio** — Transición desde oscuridad total hacia la superficie (como emerger del agua)
2. **Scroll reveal** — No simple fade-up — propón algo más expresivo: emerge desde abajo como burbuja, o aparece de dentro hacia afuera
3. **Micro-interacciones** — Cada botón, cada card, cada link debe tener respuesta táctil satisfactoria
4. **Cursores personalizados** — El cursor debería transformarse según el contexto (aleta de buceo, burbuja, compás)
5. **Transiciones de sección** — Olas que barren la pantalla horizontalmente al pasar de sección

---

### PRINCIPIOS DE DISEÑO A RESPETAR

1. **La profundidad es la metáfora** — Todo debe sentirse como descender al océano
2. **Funcionalidad primero** — Las mejoras no deben sacrificar la claridad de la información
3. **Accesibilidad** — Respeta `prefers-reduced-motion`, contraste de texto AA, ARIA labels
4. **Performance** — Las animaciones más pesadas deben tener fallbacks
5. **Mobile-first** — El 60%+ de los usuarios accederá desde móvil
6. **Identidad chilena** — El club es de Lo Prado, Santiago. El diseño puede tener guiños culturales sutiles

---

### STACK TÉCNICO PERMITIDO

- **HTML5 + CSS3** (variables CSS, animaciones, grid, flexbox)
- **JavaScript ES6+**
- **GSAP 3** (ScrollTrigger, MotionPath, MorphSVG)
- **Three.js o WebGL** (shaders, partículas, 3D)
- **Lenis** (smooth scroll)
- **Canvas API** (efectos de agua, caustics, god rays)
- **Web Animations API** como alternativa a GSAP
- **SVG animado** (SMIL o CSS animations)

---

### LO QUE NO QUEREMOS

- Diseños genéricos de agencia web estándar (headers con slider, sección de servicios en grid)
- Paletas de colores claros o pasteles — este sitio vive en la oscuridad
- Animaciones de "bounce" o elasticity que rompan la solemnidad del tema
- Scroll hijacking agresivo que marée al usuario
- Exceso de texto — la experiencia debe ser mayoritariamente visual
- Elementos UI de redes sociales genéricas

---

### ENTREGABLES ESPERADOS

1. **Mockup visual** de al menos 5 secciones rediseñadas (Hero, Historia del Apnea, Eventos, HUD, Footer)
2. **Propuesta de sistema de animación** con descripción técnica de cada transición
3. **Paleta de colores extendida** con justificación semántica
4. **Código HTML/CSS/JS** de al menos la sección Hero y la sección Historia del Apnea con las animaciones implementadas
5. **Ideas adicionales** que consideres imprescindibles para elevar el diseño a nivel de experiencia premium

---

*El objetivo final: que al visitar Kinchika Web, el usuario sienta que realmente se sumergió al océano durante 5 minutos.*
