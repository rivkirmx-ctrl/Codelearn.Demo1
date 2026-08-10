let currentQuestionIndex = 0;
let userScore = 0;
let answered = false;

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion();
});

function renderQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  const container = document.getElementById('quizBox');
  if (!container) return;

  answered = false;

  // Render Kategori Badge, Soal, dan Pilihan Jawaban
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <span class="badge badge-free">${q.category}</span>
      <span style="font-size:0.8rem; color:var(--text-muted);">Soal ${currentQuestionIndex + 1} dari ${quizQuestions.length}</span>
    </div>

    <h3 style="font-size:1.1rem; margin-bottom:1.25rem;">${q.question}</h3>

    <div id="optionsContainer">
      ${q.options.map((opt, idx) => `
        <button class="opt-btn" onclick="submitAnswer(${idx})">
          <strong style="margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</strong> ${escapeHTML(opt)}
        </button>
      `).join('')}
    </div>

    <div id="feedbackBox" style="margin-top:1.25rem; display:none; padding:1rem; border-radius:6px; font-size:0.9rem;"></div>

    <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:0.85rem; color:var(--text-muted);">Skor: <strong id="scoreCount">${userScore}</strong></span>
      <button id="nextBtn" onclick="nextQuestion()" class="btn-primary" style="display:none;">Soal Berikutnya →</button>
    </div>
  `;
}

function submitAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestionIndex];
  const feedbackBox = document.getElementById('feedbackBox');
  const nextBtn = document.getElementById('nextBtn');
  const optionButtons = document.querySelectorAll('.opt-btn');

  // Nonaktifkan semua tombol setelah menjawab
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.style.cursor = 'default';
    if (idx === q.answer) {
      btn.style.borderColor = 'var(--success)';
      btn.style.background = 'rgba(16, 185, 129, 0.1)';
    } else if (idx === selectedIndex) {
      btn.style.borderColor = '#ef4444';
      btn.style.background = 'rgba(239, 68, 68, 0.1)';
    }
  });

  if (selectedIndex === q.answer) {
    userScore += 5; // Total 20 soal x 5 = Max Skor 100
    document.getElementById('scoreCount').innerText = userScore;
    feedbackBox.style.display = 'block';
    feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
    feedbackBox.style.color = '#10B981';
    feedbackBox.innerHTML = `<strong>✓ Jawaban Benar!</strong><br>${q.explanation}`;
  } else {
    feedbackBox.style.display = 'block';
    feedbackBox.style.background = 'rgba(239, 68, 68, 0.15)';
    feedbackBox.style.color = '#ef4444';
    feedbackBox.innerHTML = `<strong>✕ Jawaban Salah.</strong> Jawaban yang benar adalah <strong>${String.fromCharCode(65 + q.answer)}</strong>.<br>${q.explanation}`;
  }

  nextBtn.style.display = 'inline-flex';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  // Simpan hasil quiz ke LocalStorage
  const profileProgress = JSON.parse(localStorage.getItem('user_progress') || '{}');
  profileProgress.quiz_score = userScore;
  localStorage.setItem('user_progress', JSON.stringify(profileProgress));

  const container = document.getElementById('quizBox');
  container.innerHTML = `
    <div style="text-align:center; padding:1.5rem 0;">
      <div style="font-size:3rem; margin-bottom:0.5rem;">🎉</div>
      <h2>Quiz Selesai!</h2>
      <p style="color:var(--text-muted); margin:0.5rem 0 1.5rem 0;">Anda telah menyelesaikan seluruh 20 soal latihan.</p>

      <div style="background:#0d0d0d; border:1px solid var(--border-color); padding:1.5rem; border-radius:8px; max-width:280px; margin:0 auto 1.5rem auto;">
        <span style="font-size:0.85rem; color:var(--text-muted);">Skor Akhir Anda</span>
        <div style="font-size:2.5rem; font-weight:bold; color:var(--primary-hover);">${userScore} / 100</div>
      </div>

      <div style="display:flex; gap:1rem; justify-content:center;">
        <button onclick="restartQuiz()" class="btn-outline">Ulangi Quiz</button>
        <a href="profile.html" class="btn-primary">Lihat Profil & Progress</a>
      </div>
    </div>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  renderQuestion();
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}