// LocalStorage Initializer & Global State Manager
(function initCodeLearnState() {
  if (!localStorage.getItem('user_status')) {
    localStorage.setItem('user_status', 'free'); // Options: free, student, pro
  }
  if (!localStorage.getItem('user_profile')) {
    localStorage.setItem('user_profile', JSON.stringify({
      name: 'Siswa SMK',
      email: 'siswa@smk.belajar.id',
      level: 'Pemula'
    }));
  }
  if (!localStorage.getItem('user_progress')) {
    localStorage.setItem('user_progress', JSON.stringify({
      html: 80,
      css: 40,
      js: 10,
      html_css: 0,
      fullstack: 0
    }));
  }
})();

// UI Navigation & Sidebar Handler
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');

  if (hamburgerBtn && sidebar && sidebarOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
    });

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    };

    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  updateNavbarAuth();
});

function updateNavbarAuth() {
  const authNav = document.getElementById('authNavContainer');
  if (!authNav) return;

  const isLoggedIn = localStorage.getItem('is_logged_in') === 'true';
  const profile = JSON.parse(localStorage.getItem('user_profile') || '{}');

  if (isLoggedIn) {
    authNav.innerHTML = `
      <a href="profile.html" style="display:flex; align-items:center; gap:0.5rem;">
        <div style="width:32px; height:32px; border-radius:50%; background:var(--primary); display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:0.85rem;">
          ${(profile.name || 'U').charAt(0).toUpperCase()}
        </div>
        <span>Profil</span>
      </a>
    `;
  } else {
    authNav.innerHTML = `
      <a href="login.html" class="btn-outline" style="padding: 0.35rem 0.9rem; font-size: 0.85rem;">Login</a>
      <a href="register.html" class="btn-primary" style="padding: 0.35rem 0.9rem; font-size: 0.85rem;">Daftar</a>
    `;
  }
      }
