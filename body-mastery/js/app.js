import { levels, workouts } from "./data.js";

const state = {
  day: 1,
  level: "accumulation",
  completed: JSON.parse(localStorage.getItem("bm_completed")) || {},
  history: JSON.parse(localStorage.getItem("bm_history")) || [],
  timer: {
    interval: null,
    seconds: 0,
    active: false,
  },
};

// DOM Elements
const dom = {
  headerTitle: document.querySelector("header h1"),
  levelBadge: document.getElementById("level-badge"),
  daySelector: document.getElementById("day-selector"),
  content: document.getElementById("content"),
  modalOverlay: document.getElementById("modal-overlay"),
  modalContent: document.getElementById("modal-content"),
  timerBar: document.getElementById("timer-bar"),
  timerDisplay: document.getElementById("timer-display"),
  timerToggle: document.getElementById("timer-toggle"),
  timerReset: document.getElementById("timer-reset"),
};

// Icons
const icons = {
  check: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
  chevronDown: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`,
  clock: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
};

// Init
function init() {
  loadState();
  renderHeader();
  renderDaySelector();
  renderWorkout();
  setupEventListeners();
}

function loadState() {
  const savedDay = localStorage.getItem("bm_day");
  const savedLevel = localStorage.getItem("bm_level");
  if (savedDay) state.day = parseInt(savedDay);
  if (savedLevel && levels[savedLevel]) state.level = savedLevel;
}

function saveState() {
  localStorage.setItem("bm_day", state.day);
  localStorage.setItem("bm_level", state.level);
  localStorage.setItem("bm_completed", JSON.stringify(state.completed));
}

// Rendering
function renderHeader() {
  dom.levelBadge.textContent = levels[state.level].label.split("(")[0].trim();
}

function renderDaySelector() {
  const dayButtons = [
    { id: 1, label: "Day 1" },
    { id: 2, label: "Day 2" },
    { id: 3, label: "Day 3" },
    { id: 4, label: "Day 4" },
    { id: 5, label: "Day 5" },
    { id: 6, label: "Days 6-7" }, // Map to rest
  ];

  dom.daySelector.innerHTML = dayButtons
    .map(
      (btn) => `
    <button class="day-btn ${btn.id === state.day ? "active" : ""}" 
            onclick="app.setDay(${btn.id})">
      ${btn.label}
    </button>
  `,
    )
    .join("");

  // Scroll active into view
  setTimeout(() => {
    const active = dom.daySelector.querySelector(".active");
    if (active) active.scrollIntoView({ behavior: "smooth", inline: "center" });
  }, 100);
}

function renderWorkout() {
  const workout = workouts[state.day];

  if (!workout) return;

  let html = `
    <div class="workout-header">
      <h2>${workout.title}</h2>
      <p>${workout.subtitle}</p>
      <div style="margin-top: 1rem; font-size: 0.85rem; background: rgba(255,255,255,0.2); padding: 8px; border-radius: 8px;">
        ${workout.description}
      </div>
    </div>
  `;

  if (workout.isRestDay) {
    html += `
      <div class="exercise-card">
        <div class="exercise-summary" style="cursor: default;">
          <div class="exercise-meta">
            <div class="exercise-name">Rest & Recovery</div>
            <div class="exercise-reps">Level Goal: ${levels[state.level].summary}</div>
            <div class="instructions" style="margin-top: 1rem;">
              <p>Take this time to recover. Prioritize sleep and quality nutrition.</p>
              ${levels[state.level].summary ? `<p style="margin-top:0.5rem; font-weight:500;">Periodization Focus: ${levels[state.level].summary}</p>` : ""}
            </div>
          </div>
        </div>
      </div>
    `;
    dom.content.innerHTML = html;
    return;
  }

  // Activities or Exercises
  const items = workout.exercises || workout.activities;
  const isActivity = !!workout.activities;

  html += `<div class="exercise-list">`;

  if (items) {
    html += items
      .map((item, idx) => {
        const id = `${state.day}-${idx}`;
        const isCompleted = state.completed[id];
        const levelData = item.levels ? item.levels[state.level] : null;

        // Summary string
        let metaString = "";
        if (levelData) {
          if (levelData.sets !== "—") metaString += `${levelData.sets} sets`;
          if (levelData.reps)
            metaString += metaString ? ` • ${levelData.reps}` : levelData.reps;
        } else if (item.notes) {
          metaString = item.notes;
        }

        return `
      <div class="exercise-card" id="card-${idx}">
        <div class="exercise-summary" onclick="app.toggleCard(${idx})">
          <div class="exercise-meta">
            <div class="exercise-name">${item.name}</div>
            <div class="exercise-reps">${metaString}</div>
          </div>
          <button class="check-btn ${isCompleted ? "completed" : ""}" 
                  onclick="app.toggleComplete(event, '${id}')">
            ${icons.check}
          </button>
        </div>
        
        <div class="exercise-details">
          <div class="details-content">
            ${renderLevelInfo(levelData)}
            
            ${renderAlternatives(item.alternatives)}

            <div class="section-title" style="font-size: 0.8rem; margin-top: 1rem; margin-bottom: 0.5rem;">Instructions</div>
            <div class="instructions">${formatDetail(item.detail)}</div>

            ${
              !isActivity
                ? `
              <button class="action-btn" onclick="app.startTimer(90)">
                ${icons.clock} Start Timer
              </button>
            `
                : ""
            }
          </div>
        </div>
      </div>
      `;
      })
      .join("");
  }

  html += `
    <button class="action-btn" style="background: var(--surface); color: var(--text); border: 1px solid var(--border); margin-top: 2rem;" 
            onclick="app.finishWorkout()">
      Finish & Clear Progress
    </button>
  </div>`;

  dom.content.innerHTML = html;
}

function renderLevelInfo(levelData) {
  if (!levelData) return "";

  return `
    <div style="background: var(--surface-2); padding: 1rem; border-radius: 8px; border-left: 3px solid var(--primary);">
      ${levelData.sets !== "—" ? `<div class="detail-row"><span class="detail-label">Sets</span><span>${levelData.sets}</span></div>` : ""}
      ${levelData.reps ? `<div class="detail-row"><span class="detail-label">Reps/Time</span><span>${levelData.reps}</span></div>` : ""}
      ${levelData.rest !== "—" ? `<div class="detail-row"><span class="detail-label">Rest</span><span>${levelData.rest}</span></div>` : ""}
      <div style="margin-top: 0.5rem; font-style: italic; color: var(--text-muted); font-size: 0.9rem;">
        "${levelData.cue}"
      </div>
    </div>
  `;
}

function renderAlternatives(alts) {
  if (!alts) return "";
  // Check if it's the old string format or unknown
  if (typeof alts === "string") {
    return `<div style="margin-top: 1rem; padding: 0.75rem; border-radius: 8px; border: 1px dashed var(--text-muted); font-size: 0.85rem; color: var(--text);"><strong>No equipment?</strong> ${alts}</div>`;
  }

  // Array format
  return `
    <div style="margin-top: 1rem; padding: 0.75rem; border-radius: 8px; border: 1px dashed var(--text-muted); font-size: 0.85rem;">
      <div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--text);">No Equipment? Try this:</div>
      ${alts
        .map(
          (alt) => `
        <div style="margin-top: 0.75rem; border-top: 1px solid var(--border); padding-top: 0.5rem;">
          <div style="font-weight: 600; color: var(--primary);">${alt.name}</div>
          <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); margin: 0.25rem 0;">
             <span>Sets: ${alt.sets}</span>
             <span>Reps: ${alt.reps}</span>
          </div>
          <div style="font-size: 0.85rem; color: var(--text); line-height: 1.4;">${alt.detail}</div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function formatDetail(text) {
  if (!text) return "";

  const lines = text.split("\n");
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    line = line.trim();
    if (!line) return;

    if (line.startsWith("•")) {
      if (!inList) {
        html += '<ul class="detail-list">';
        inList = true;
      }
      html += `<li>${line.substring(1).trim()}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      // Check for header-like text (ending in colon)
      if (line.endsWith(":")) {
        html += `<h4 class="detail-header">${line}</h4>`;
      } else {
        html += `<p class="detail-text">${line}</p>`;
      }
    }
  });

  if (inList) {
    html += "</ul>";
  }

  return html;
}

// Logic
window.app = {
  setDay: (day) => {
    state.day = day;
    saveState();
    renderDaySelector(); // refresh active class
    renderWorkout();
  },

  toggleCard: (idx) => {
    const card = document.getElementById(`card-${idx}`);
    const details = card.querySelector(".exercise-details");
    const isOpen = details.classList.contains("open");

    // Close others
    document
      .querySelectorAll(".exercise-details")
      .forEach((el) => el.classList.remove("open"));

    if (!isOpen) {
      details.classList.add("open");
    }
  },

  toggleComplete: (e, id) => {
    e.stopPropagation(); // prevent card expansion
    state.completed[id] = !state.completed[id];
    saveState();

    const btn = e.currentTarget;
    btn.classList.toggle("completed");
  },

  openLevelModal: () => {
    const html = `
      <h3>Select Level</h3>
      <div class="level-options">
        ${Object.entries(levels)
          .map(
            ([key, val]) => `
          <div class="level-option ${state.level === key ? "selected" : ""}" 
               onclick="app.setLevel('${key}')">
            <div style="font-weight: 600;">${val.label}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${val.summary}</div>
          </div>
        `,
          )
          .join("")}
      </div>
      <button class="action-btn" style="margin-top: 1rem; background: var(--surface-2); color: var(--text);" onclick="app.closeModal()">Close</button>
    `;
    dom.modalContent.innerHTML = html;
    dom.modalOverlay.classList.add("active");
  },

  setLevel: (level) => {
    state.level = level;
    saveState();
    dom.levelBadge.textContent = levels[level].label.split("(")[0].trim();
    app.closeModal();
    renderWorkout();
  },

  closeModal: () => {
    dom.modalOverlay.classList.remove("active");
  },

  finishWorkout: () => {
    if (confirm("Clear all checkmarks for today?")) {
      // clear checkmarks for current day only
      Object.keys(state.completed).forEach((key) => {
        if (key.startsWith(`${state.day}-`)) {
          delete state.completed[key];
        }
      });
      saveState();
      renderWorkout();
    }
  },

  // Timer
  startTimer: (duration = 0) => {
    clearInterval(state.timer.interval);
    state.timer.active = true;
    state.timer.seconds = 0;

    dom.timerBar.classList.add("active");
    app.updateTimerDisplay();

    state.timer.interval = setInterval(() => {
      state.timer.seconds++;
      app.updateTimerDisplay();
    }, 1000);

    dom.timerToggle.textContent = "Pause";
  },

  toggleTimer: () => {
    if (state.timer.active) {
      clearInterval(state.timer.interval);
      state.timer.active = false;
      dom.timerToggle.textContent = "Resume";
    } else {
      state.timer.active = true;
      state.timer.interval = setInterval(() => {
        state.timer.seconds++;
        app.updateTimerDisplay();
      }, 1000);
      dom.timerToggle.textContent = "Pause";
    }
  },

  resetTimer: () => {
    clearInterval(state.timer.interval);
    state.timer.active = false;
    state.timer.seconds = 0;
    dom.timerBar.classList.remove("active");
  },

  updateTimerDisplay: () => {
    const m = Math.floor(state.timer.seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (state.timer.seconds % 60).toString().padStart(2, "0");
    dom.timerDisplay.textContent = `${m}:${s}`;
  },
};

function setupEventListeners() {
  dom.levelBadge.addEventListener("click", app.openLevelModal);

  dom.timerToggle.addEventListener("click", app.toggleTimer);
  dom.timerReset.addEventListener("click", app.resetTimer);
}

// Start
init();
