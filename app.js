document.addEventListener('DOMContentLoaded', () => {
  const lessonSection = document.getElementById('lesson');
  const quizSection   = document.getElementById('quiz');
  const resultSection = document.getElementById('result');
  const startQuizBtn  = document.getElementById('startQuizBtn');
  const quizForm      = document.getElementById('quizForm');
  const scoreText     = document.getElementById('score');
  const certDiv       = document.getElementById('certificate');
  const retryBtn      = document.getElementById('retryBtn');
  const backBtn       = document.getElementById('backToLessonBtn');

  const TOTAL = 2;

  // Start quiz
  startQuizBtn.addEventListener('click', () => {
    lessonSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
  });

  // Submit quiz
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const q1 = (quizForm.q1.value || '').toLowerCase();
    const q2 = (quizForm.q2.value || '').toLowerCase();

    let score = 0;
    if (q1 === 'javascript') score++;
    if (q2 === 'script') score++;

    const percent = Math.round((score / TOTAL) * 100);
    scoreText.innerHTML = `You scored <b>${score}/${TOTAL}</b> (${percent}%)`;

    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    if (score === TOTAL) {
      certDiv.classList.remove('hidden');
    } else {
      certDiv.classList.add('hidden');
    }
  });

  // Retry quiz
  retryBtn.addEventListener('click', () => {
    quizForm.reset();
    certDiv.classList.add('hidden');
    resultSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
  });

  // Back to lesson
  backBtn.addEventListener('click', () => {
    quizForm.reset();
    certDiv.classList.add('hidden');
    resultSection.classList.add('hidden');
    lessonSection.classList.remove('hidden');
  });
}); 
