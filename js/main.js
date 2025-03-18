import { group, groupEnd, info, trace, showToast } from './utils.js';
import { initSettings } from './settings.js';

await group('Initializing JavaScript modules...');

await initSettings();

await groupEnd('All JavaScript modules initialized');

const timeInput = document.getElementById('time-input');
const timerOutput = document.getElementById('timer-output');
const startButton = document.getElementById('start-timer');

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const secondsText = (seconds % 60).toString().padStart(2, '0');

  return `${hours}:${minutes}:${secondsText}`;
}

function convertInputToSeconds(input) {
  const timePattern = /^(\d{2}):(\d{2}):(\d{2})$/;
  const [, hours, minutes, seconds] = input.match(timePattern) || [];

  if (!hours || !minutes || !seconds) {
    trace(`Invalid time format: ${input}. Expected 'HH:MM:SS'. Returning 0.`);
    showToast('toastFailTimer');
    return 0;
  }

  showToast('toastStartTimer');

  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}

let countdownInterval;

function startTimer() {
  if (countdownInterval !== undefined) {
    trace('Stopping timer...');
    clearInterval(countdownInterval);
  }

  trace('Starting new timer...');

  const inputValue = timeInput.value ? timeInput.value : '00:00:00';
  const initialSeconds = convertInputToSeconds(inputValue);
  const startTime = Date.now() / 1000;

  countdownInterval = setInterval(() => {
    const currentTime = Date.now() / 1000;
    const elapsedSeconds = Math.floor(currentTime - startTime);
    timerOutput.value = formatTime(initialSeconds + elapsedSeconds);
  }, 1000);
}

startButton.addEventListener('click', startTimer);

timeInput.addEventListener('keydown', (event) => {
  if (event.isComposing || event.key === 'Enter') {
    trace('Input time: ' + timeInput.value);
    startTimer();
  }
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
  info(`${isDark ? 'Dark' : 'Light'} mode enabled`);
}

function setTheme() {
  trace(
    `Setting theme to ${document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'}`
  );
  toggleDarkMode();
  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'
  );
}

themeToggleBtn.addEventListener('click', setTheme);
const savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
  trace('No theme saved. Setting default to light mode.');
  localStorage.setItem('theme', 'light');
} else if (savedTheme === 'dark') {
  trace(`Saved theme: ${savedTheme}`);
  toggleDarkMode();
}

// Format station field on Enter key press
document
  .getElementById('station-number')
  .addEventListener('keydown', handleStationFormat);

/// TODO: refactor regex
function handleStationFormat(event) {
  if (event.key !== 'Enter') {
    return;
  }

  trace(
    'Input station name: ' + document.getElementById('station-number').value
  );

  const inputValue = event.target.value;
  const stationPattern =
    /(Atlas|TestTeg|Fland|Maus|Delta|Avrite|Paper|Silly|Meta|Packed|Gate|Gelta|Cluster|Omega|Astra|Bagel|Origin|CentComm|Outpost|Ishimura|NukieOutpost|Box|Europa|Spectrum|Saltern|Core|Marathon|MeteorArena|Reach|Train|Oasis|Pillar|Aspid|Barratry|Gemini|Lighthouse|Moose|Split)/i;
  const stationMatch = inputValue.match(stationPattern);
  const stationName = stationMatch
    ? stationMatch[0].charAt(0).toUpperCase() +
      stationMatch[0].slice(1).toLowerCase()
    : 'Station';

  const stationNumberPattern = /\s[A-Za-z]{2}-\d{3}/i;
  const stationNumberMatch = inputValue.match(stationNumberPattern);
  const stationNumber = stationNumberMatch
    ? stationNumberMatch[0].toUpperCase()
    : ' XX-000';

  event.target.value = stationName + stationNumber;

  trace('Formatted station name: ' + event.target.value);
}
