// ---------- Storage helpers (Phase 3 condition: persist progress) ----------
const STORAGE_KEY = 'microCertProgress';
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { lessonsCompleted: 0, certsEarned: 0 };
  } catch {
    return { lessonsCompleted: 0, certsEarned: 0 };
  }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// ---------- UI Elements ----------
const lessonSection = document.getElementById('lesson');
const quizSection   = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const startQuizBtn  = document.getElementById('startQuizBtn');
const quizForm      = document.getElementById('quizForm');
const scoreText     = document.getElementById('score');
const certDiv       = document.getElementById('certificate');
const retryBtn      = document.getElementById('retryBtn');
const backBtn       = document.getElementById('backToLessonBtn');

// ---------- Dashboard ----------
let progress = loadProgress();
updateDashboard();

// ---------- Navigation ----------
startQuizBtn.addEventListener('click', () => {
  lessonSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
});

retryBtn.addEventListener('click', () => {
  quizForm.reset();
  certDiv.classList.add('hidden');
  resultSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  quizForm.reset();
  certDiv.classList.add('hidden');
  resultSection.classList.add('hidden');
  lessonSection.classList.remove('hidden');
});

// ---------- Quiz Submit ----------
quizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const q1 = quizForm.q1.value;
  const q2 = quizForm.q2.value;

  let score = 0;
  if (q1 === 'JavaScript') score++;
  if (q2 === '<script>')   score++;

  scoreText.textContent = `You scored ${score}/2`;
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');

  if (score === 2) {
    certDiv.classList.remove('hidden');
    // Update progress only when full score
    progress.lessonsCompleted += 1;
    progress.certsEarned += 1;
    saveProgress(progress);
    updateDashboard();
  } else {
    certDiv.classList.add('hidden');
  }
});

// ---------- Dashboard render ----------
function updateDashboard() {
  document.getElementById('lessonsCount').textContent = progress.lessonsCompleted;
  document.getElementById('certCount').textContent = progress.certsEarned;
                          }
