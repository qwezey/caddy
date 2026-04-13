// 79Prayers client
const STORAGE_NOTIFY = "79prayers:notify";
function getApiUrlForDate(date = new Date()) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `https://islamicservicesportal.org/api/namaztimes/getprayertimes?zipcode=08502&year=${y}&month=${m}&day=${d}`;
}

const staticTimes = {
  fajr: "05:45",
  zuhr: "16:00",
  asr: "18:00",
  isha: "21:30",
};

let scheduleHandles = [];
let intervalHandles = [];
let times = [];

const timesGrid = document.getElementById("timesGrid");
const notifySwitch = document.getElementById("notifySwitch");
const notifyHint = document.getElementById("notifyHint");
const todayEl = document.getElementById("todayDate");
const heroType = document.getElementById("heroType");
const heroTitle = document.getElementById("heroTitle");
const heroTime = document.getElementById("heroTime");
const heroCountdown = document.getElementById("heroCountdown");

// Audio
let audioCtx;
function ensureAudio() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
function playAzanTone() {
  try {
    ensureAudio();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    o.frequency.value = 440;
    o.connect(g);
    g.connect(audioCtx.destination);
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.02);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.1);
    o.stop(audioCtx.currentTime + 2.11);
  } catch (e) {
    console.warn("audio error", e);
  }
}

function formatTime(d) {
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function dateAtToday(h, m) {
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

function parseApiTime(key, s) {
  if (!s) return null;
  const parts = String(s).split(":");
  let h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) || 0;
  const amKeys = ["fajr", "sunrise"];
  const isPM = !amKeys.includes(key);
  if (isPM && h < 12) h += 12;
  if (!isPM && h === 12) h = 0;
  return dateAtToday(h, m);
}

function toFuture(d) {
  if (!d) return d;
  const now = new Date();
  if (d.getTime() <= now.getTime()) {
    return new Date(d.getTime() + 24 * 60 * 60 * 1000);
  }
  return d;
}

function clearSchedules() {
  scheduleHandles.forEach((id) => clearTimeout(id));
  scheduleHandles = [];
}

function clearIntervals() {
  intervalHandles.forEach((id) => clearInterval(id));
  intervalHandles = [];
}

function notify(title, body) {
  if (
    Notification.permission === "granted" &&
    localStorage.getItem(STORAGE_NOTIFY) === "true"
  ) {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        try {
          registration.showNotification(title, {
            body: body,
            icon: "icon.svg",
          });
        } catch (e) {
          console.warn("Service worker notification failed", e);
          try {
            new Notification(title, { body, icon: "icon.svg" });
          } catch (err) {
            console.warn(err);
          }
        }
      });
    } else {
      try {
        new Notification(title, { body, icon: "icon.svg" });
      } catch (e) {
        console.warn(e);
      }
    }
    playAzanTone();
  }
}

function scheduleAll() {
  clearSchedules();
  if (
    !(
      Notification.permission === "granted" &&
      localStorage.getItem(STORAGE_NOTIFY) === "true"
    )
  )
    return;

  const now = new Date();
  times.forEach((item) => {
    if (item.azan) {
      const msAzan = toFuture(item.azan).getTime() - now.getTime();
      if (msAzan > 0) {
        scheduleHandles.push(
          setTimeout(() => {
            const body =
              item.key === "maghrib"
                ? `Azan for ${item.label} at ${formatTime(item.azan)}`
                : `Azan for ${item.label} in 10 minutes at ${formatTime(item.prayer)}`;
            notify(`Azan — ${item.label}`, body);
          }, msAzan),
        );
      }
    }
    if (item.prayer) {
      const msPrayer = toFuture(item.prayer).getTime() - now.getTime();
      if (msPrayer > 0) {
        scheduleHandles.push(
          setTimeout(() => {
            notify(
              `Prayer — ${item.label}`,
              `It's time for ${item.label} (${formatTime(item.prayer)})`,
            );
          }, msPrayer),
        );
      }
    }
  });
}

function computeNextEvent() {
  const now = new Date();
  const events = [];
  times.forEach((item) => {
    if (item.azan)
      events.push({
        when: toFuture(item.azan),
        type: "Azan",
        prayer: item.label,
      });
    if (item.prayer)
      events.push({
        when: toFuture(item.prayer),
        type: "Prayer",
        prayer: item.label,
      });
  });
  const future = events.filter(
    (e) => e.when && e.when.getTime() > now.getTime(),
  );
  if (!future.length) return null;
  future.sort((a, b) => a.when.getTime() - b.when.getTime());
  return future[0];
}

function renderNextEvent() {
  if (!heroTitle) return;
  const ev = computeNextEvent();
  if (!ev) {
    heroType.textContent = "";
    heroTitle.textContent = "No upcoming events";
    heroTime.textContent = "--:--";
    heroCountdown.textContent = "--h --m --s";
    return;
  }

  heroType.textContent = ev.type;
  heroTitle.textContent = ev.prayer;
  heroTime.textContent = formatTime(ev.when);

  const now = new Date();
  const diff = ev.when.getTime() - now.getTime();
  if (diff <= 0) {
    heroCountdown.textContent = "Now";
  } else {
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    let cdStr = "";
    if (h > 0) cdStr += `${h}h `;
    cdStr += `${m}m ${s}s`;
    heroCountdown.textContent = cdStr;
  }
}

function renderTimes() {
  clearIntervals();
  timesGrid.innerHTML = "";

  times.forEach((item) => {
    const card = document.createElement("div");
    card.className = "prayer-card";

    // Header
    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = `
      <h3>${item.label}</h3>
      <div class="arrives-time">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Arrives: ${item.official ? formatTime(item.official) : "—"}</span>
      </div>
    `;
    card.appendChild(header);

    // Body
    const body = document.createElement("div");
    body.className = "card-body";

    if (item.azan || item.prayer) {
      if (item.azan) {
        body.innerHTML += `
          <div class="time-block">
            <span class="tb-label">Azan</span>
            <span class="tb-time">${formatTime(item.azan)}</span>
          </div>
        `;
      }
      if (item.prayer) {
        body.innerHTML += `
          <div class="time-block highlight">
            <span class="tb-label">Prayer</span>
            <span class="tb-time">${formatTime(item.prayer)}</span>
          </div>
        `;
      }
    } else {
      // Sunrise
      body.innerHTML += `
        <div class="time-block">
           <span class="tb-label">Time</span>
           <span class="tb-time">${item.official ? formatTime(item.official) : "—"}</span>
        </div>
      `;
    }
    card.appendChild(body);

    // Check if passed
    function updatePassed() {
      // Compare the ultimate event for this card (prayer if exists, else official)
      const lastEvent = item.prayer || item.official;
      if (lastEvent && lastEvent.getTime() <= new Date().getTime()) {
        card.classList.add("passed");
      } else {
        card.classList.remove("passed");
      }
    }

    updatePassed();
    intervalHandles.push(setInterval(updatePassed, 10000));
    timesGrid.appendChild(card);
  });

  // Start Hero Updater
  renderNextEvent();
  intervalHandles.push(setInterval(renderNextEvent, 1000));
}

async function loadAndCompute() {
  todayEl.textContent = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  try {
    const res = await fetch(getApiUrlForDate());
    const api = await res.json();

    const officialFajr = parseApiTime("fajr", api.fajr);
    const officialSunrise = parseApiTime("sunrise", api.sunrise);
    const officialZuhr = parseApiTime("zuhr", api.zuhr);
    const officialAsr = parseApiTime("asr", api.asr);
    const officialMaghrib = parseApiTime("maghrib", api.maghrib || api.magrib);
    const officialIsha = parseApiTime("isha", api.isha);

    const prayerFajr = parseApiTime("fajr", staticTimes.fajr);
    const prayerZuhr = parseApiTime("zuhr", staticTimes.zuhr);
    const prayerAsr = parseApiTime("asr", staticTimes.asr);
    const prayerIsha = parseApiTime("isha", staticTimes.isha);
    const prayerMaghrib = officialMaghrib
      ? new Date(officialMaghrib.getTime() + 5 * 60 * 1000)
      : null;

    const azanFajr = prayerFajr
      ? new Date(prayerFajr.getTime() - 10 * 60 * 1000)
      : null;
    const azanZuhr = prayerZuhr
      ? new Date(prayerZuhr.getTime() - 10 * 60 * 1000)
      : null;
    const azanAsr = prayerAsr
      ? new Date(prayerAsr.getTime() - 10 * 60 * 1000)
      : null;
    const azanMaghrib = officialMaghrib ? officialMaghrib : null;
    const azanIsha = prayerIsha
      ? new Date(prayerIsha.getTime() - 10 * 60 * 1000)
      : null;

    times = [
      {
        key: "fajr",
        label: "Fajr",
        official: officialFajr,
        azan: azanFajr,
        prayer: prayerFajr,
      },
      {
        key: "sunrise",
        label: "Sunrise",
        official: officialSunrise,
        azan: null,
        prayer: null,
      },
      {
        key: "zuhr",
        label: "Zuhr",
        official: officialZuhr,
        azan: azanZuhr,
        prayer: prayerZuhr,
      },
      {
        key: "asr",
        label: "Asr",
        official: officialAsr,
        azan: azanAsr,
        prayer: prayerAsr,
      },
      {
        key: "maghrib",
        label: "Maghrib",
        official: officialMaghrib,
        azan: azanMaghrib,
        prayer: prayerMaghrib,
      },
      {
        key: "isha",
        label: "Isha",
        official: officialIsha,
        azan: azanIsha,
        prayer: prayerIsha,
      },
    ];
  } catch (e) {
    console.warn("Failed to fetch API", e);
    const prayerFajr = parseApiTime("fajr", staticTimes.fajr);
    const prayerZuhr = parseApiTime("zuhr", staticTimes.zuhr);
    const prayerAsr = parseApiTime("asr", staticTimes.asr);
    const prayerIsha = parseApiTime("isha", staticTimes.isha);

    times = [
      {
        key: "fajr",
        label: "Fajr",
        official: null,
        azan: prayerFajr ? new Date(prayerFajr.getTime() - 10 * 60000) : null,
        prayer: prayerFajr,
      },
      {
        key: "sunrise",
        label: "Sunrise",
        official: null,
        azan: null,
        prayer: null,
      },
      {
        key: "zuhr",
        label: "Zuhr",
        official: null,
        azan: prayerZuhr ? new Date(prayerZuhr.getTime() - 10 * 60000) : null,
        prayer: prayerZuhr,
      },
      {
        key: "asr",
        label: "Asr",
        official: null,
        azan: prayerAsr ? new Date(prayerAsr.getTime() - 10 * 60000) : null,
        prayer: prayerAsr,
      },
      {
        key: "maghrib",
        label: "Maghrib",
        official: null,
        azan: null,
        prayer: null,
      },
      {
        key: "isha",
        label: "Isha",
        official: null,
        azan: prayerIsha ? new Date(prayerIsha.getTime() - 10 * 60000) : null,
        prayer: prayerIsha,
      },
    ];
  }
  renderTimes();
  scheduleAll();
}

function updateNotifyUI() {
  const perm = Notification.permission;
  const enabled = localStorage.getItem(STORAGE_NOTIFY) === "true";
  if (notifySwitch) {
    if (perm !== "granted" && enabled)
      localStorage.setItem(STORAGE_NOTIFY, "false");
    notifySwitch.checked = localStorage.getItem(STORAGE_NOTIFY) === "true";
  }
  if (notifyHint) {
    if (perm === "granted") {
      notifyHint.textContent =
        notifySwitch && notifySwitch.checked ? "On" : "Off";
    } else if (perm === "denied") {
      notifyHint.textContent = "Blocked";
    } else {
      notifyHint.textContent = "Click to allow";
    }
  }
}

if (notifySwitch) {
  notifySwitch.addEventListener("change", async () => {
    if (!notifySwitch.checked) {
      localStorage.setItem(STORAGE_NOTIFY, "false");
      updateNotifyUI();
      clearSchedules();
      return;
    }
    if (Notification.permission !== "granted") {
      const p = await Notification.requestPermission();
      if (p !== "granted") {
        localStorage.setItem(STORAGE_NOTIFY, "false");
        notifySwitch.checked = false;
        updateNotifyUI();
        return;
      }
    }
    localStorage.setItem(STORAGE_NOTIFY, "true");
    updateNotifyUI();
    scheduleAll();
    playAzanTone(); // Feedback that sound works
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}

if (!localStorage.getItem(STORAGE_NOTIFY))
  localStorage.setItem(STORAGE_NOTIFY, "false");
updateNotifyUI();
loadAndCompute();
