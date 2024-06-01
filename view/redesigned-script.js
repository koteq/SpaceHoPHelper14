import Cleave from 'cleave.js';

const timeInput = document.getElementById("time-input");
const timerOutput = document.getElementById("timer-output");
const startButton = document.getElementById("start-timer");

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const secondsText = (seconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${secondsText}`;
}

function convertInputToSeconds(input) {
  const timePattern = /^(\d{2}):(\d{2}):(\d{2})$/;
  const [, hours, minutes, seconds] = input.match(timePattern) || [];

  if (!hours || !minutes || !seconds) {
    showToast('toastFailTimer');
    return 0;
  }

  showToast('toastStartTimer');

  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}

let countdownInterval;
function startTimer() {
  clearInterval(countdownInterval);

  const inputValue = timeInput.value ? timeInput.value : '00:00:00';
  const initialSeconds = convertInputToSeconds(inputValue);
  const startTime = Date.now() / 1000;

  countdownInterval = setInterval(() => {
    const currentTime = Date.now() / 1000;
    const elapsedSeconds = Math.floor(currentTime - startTime);
    const time = formatTime(initialSeconds + elapsedSeconds);

    timerOutput.value = time;
  }, 1000);
}

startButton.addEventListener("click", startTimer);

timeInput.addEventListener("keydown", (event) => {
  if (event.isComposing || event.key === "Enter") {
    startTimer();
  }
});

const timeInputCleave = new Cleave('#time-input', {
  time: true,
  timePattern: ['h', 'm', 's']
});

// Scroll to top button functionality
const scrollToTopButton = document.getElementById('myBtnUP');

function showScrollButton() {
  const shouldShowButton = window.scrollY > 20;
  scrollToTopButton.style.display = shouldShowButton ? 'block' : 'none';
}

function scrollToTop() {
  document.scrollingElement.scrollTop = 0;
}

window.addEventListener('scroll', showScrollButton);
scrollToTopButton.addEventListener('click', scrollToTop);

/// Theme
const themeToggleBtn = document.getElementById('darkModeToggleBtn');
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    themeToggleBtn.textContent = `Space HoP Helper 14 ${isDark ? '🌚' : '🌞'}`;
}
function setTheme() {
    toggleDarkMode();
    localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
}
themeToggleBtn.addEventListener('click', setTheme);
const savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
    localStorage.setItem('theme', 'light');
} else if (savedTheme === 'dark') {
    toggleDarkMode();
}

/// Toast
function showToast(toastId) {
  var toast = new bootstrap.Toast(document.getElementById(toastId)).show();
}

/// Copy content to clipboard
/// TODO: add handler for buttons
function copyCardContent(event) {
  const card = event.currentTarget.closest('.card');
  const content = card.querySelector('.editable-content').textContent.trim();

  navigator.clipboard.writeText(content)
    .then(() => showToast('toastCopy'))
    .catch(error => console.error('Error copying:', error));
}

/// Save content to file
function saveContentToFile(content, fileName) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  link.remove();
  showToast('toastSave');
}

/// TODO: add handler for buttons
function saveCardContent(event) {
  const cardContent = event.currentTarget.closest('.card').querySelector('.editable-content');
  const cardTitle = event.currentTarget.closest('.card').querySelector('.card-title').innerText.trim();
  saveContentToFile(cardContent.innerText.trim(), `${cardTitle}.txt`);
}

// Format station field on Enter key press
document.getElementById('station-number').addEventListener('keydown', handleStationFormat);

/// TODO: refactor regex
function handleStationFormat(event) {
  if (event.key !== 'Enter') {
    return;
  }

  const inputValue = event.target.value;
  const stationPattern = /(Atlas|TestTeg|Fland|Maus|Delta|Avrite|Paper|Silly|Meta|Packed|Gate|Gelta|Cluster|Omega|Astra|Bagel|Origin|CentComm|Outpost|Ishimura|NukieOutpost|Box|Europa|Spectrum|Saltern|Core|Marathon|MeteorArena|Atlas|Reach|Train|Oasis|Pillar|Aspid|Barratry|Gemini|Lighthouse|Moose|Split)/i;
  const stationMatch = inputValue.match(stationPattern);
  const stationName = stationMatch ? stationMatch[0].charAt(0).toUpperCase() + stationMatch[0].slice(1).toLowerCase() : 'Station';

  const stationNumberPattern = /\s[A-Za-z]{2}-\d{3}/i;
  const stationNumberMatch = inputValue.match(stationNumberPattern);
  const stationNumber = stationNumberMatch ? stationNumberMatch[0].toUpperCase() : ' XX-000';

  event.target.value = stationName + stationNumber;
}