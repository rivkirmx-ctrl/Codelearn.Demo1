document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
});

function renderProfile() {
  const container = document.getElementById('profileCard');
  const user = getUserSession();

  if (!user) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem 0;">
        <h2>Anda Belum Masuk</h2>
        <p style="color:var(--text-muted); margin:0.5rem 0 1.5rem 0;">Silakan login atau daftar untuk melihat profil dan progres belajar Anda.</p>
        <button onclick="openAuthModal('login')" class="btn-primary">Masuk / Daftar</button>
      </div>
    `;
    return;
  }

  const completedCount = user.completedTopics ? user.completedTopics.length : 0;
  const totalTopics = 17; // Total materi dari data
  const progressPercent = Math.min(Math.round((completedCount / totalTopics) * 100), 100);

  container.innerHTML = `
    <div style="display:flex; align-items:center; gap:1.5rem; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid #222;">
      <div style="font-size:3.5rem; background:#222; width:80px; height:80px; display:flex; align-items:center; justify-content:center; border-radius:50%;">👤</div>
      <div>
        <h2 style="margin-bottom:0.2rem;">${user.name}</h2>
        <p style="color:var(--text-muted); font-size:0.9rem;">${user.email}</p>
        <div style="margin-top:0.5rem;">
          ${user.isPremium 
            ? `<span style="background:#eab308; color:#000; padding:3px 10px; border-radius:20px; font-size:0.75rem; font-weight:bold;">MEMBER PREMIUM</span>` 
            : `<span style="background:#3b82f6; color:#fff; padding:3px 10px; border-radius:20px; font-size:0.75rem;">AKUN GRATIS</span>`}
        </div>
      </div>
    </div>

    <h3>Progres Belajar</h3>
    <div style="margin:1rem 0 1.5rem 0;">
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.4rem; color:#aaa;">
        <span>Materi Diselesaikan (${completedCount} dari ${totalTopics})</span>
        <span>${progressPercent}%</span>
      </div>
      <div style="background:#222; height:10px; border-radius:5px; overflow:hidden;">
        <div style="background:var(--primary); width:${progressPercent}%; height:100%; transition:width 0.3s;"></div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2rem;">
      <div style="background:#0d0d0d; border:1px solid #222; padding:1rem; border-radius:6px; text-align:center;">
        <span style="font-size:0.8rem; color:#888;">Skor Kuis Terbaik</span>
        <div style="font-size:1.8rem; font-weight:bold; color:#10b981; margin-top:0.2rem;">${user.quizScore || 0} / 100</div>
      </div>
      <div style="background:#0d0d0d; border:1px solid #222; padding:1rem; border-radius:6px; text-align:center;">
        <span style="font-size:0.8rem; color:#888;">Status Kelas</span>
        <div style="font-size:1.1rem; font-weight:bold; color:#fff; margin-top:0.5rem;">${user.isPremium ? 'Semua Unlocked' : 'Dasar Terbuka'}</div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; gap:10px;">
      <a href="belajar.html" class="btn-primary" style="flex:1; text-align:center;">Lanjutkan Belajar</a>
      <button onclick="logoutUser()" class="btn-outline">Keluar Akun</button>
    </div>
  `;
}