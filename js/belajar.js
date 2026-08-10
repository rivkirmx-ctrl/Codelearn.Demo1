let currentCourseKey = sessionStorage.getItem('activeCourse') || 'html';
let currentTopicIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseParam = urlParams.get('course');
  
  if (courseParam && typeof courseData !== 'undefined' && courseData[courseParam]) {
    currentCourseKey = courseParam;
    sessionStorage.setItem('activeCourse', courseParam);
  }

  renderApp();
});

function renderApp() {
  const app = document.getElementById('materiApp');
  if (!app) return;

  // Cek ketersediaan data materi
  if (typeof courseData === 'undefined') {
    app.innerHTML = `
      <div style="background:#221010; color:#f87171; padding:1rem; border-radius:8px; border:1px solid #7f1d1d; text-align:center; font-size:0.85rem;">
        ⚠️ <strong>Data tidak ditemukan!</strong> Pastikan file <code>js/materi-data.js</code> dipanggil sebelum <code>js/belajar.js</code> di file HTML.
      </div>`;
    return;
  }

  app.innerHTML = `
    <!-- Navigasi Modul (Latar Gelap & Ungu) -->
    <div style="display:flex; gap:8px; margin-bottom:1.2rem; background:#161622; padding:0.8rem; border-radius:10px; border:1px solid #2a2a3c; overflow-x:auto; -webkit-overflow-scrolling:touch;">
      <button onclick="switchModule('html')" class="btn-mod" style="white-space:nowrap; padding:8px 14px; border-radius:6px; background:${currentCourseKey === 'html' ? '#9333ea' : '#232334'}; color:#fff; border:1px solid ${currentCourseKey === 'html' ? '#a855f7' : '#363650'}; font-weight:bold; font-size:0.85rem; cursor:pointer;">🌐 HTML</button>
      
      <button onclick="switchModule('css')" class="btn-mod" style="white-space:nowrap; padding:8px 14px; border-radius:6px; background:${currentCourseKey === 'css' ? '#9333ea' : '#232334'}; color:#fff; border:1px solid ${currentCourseKey === 'css' ? '#a855f7' : '#363650'}; font-weight:bold; font-size:0.85rem; cursor:pointer;">🎨 CSS</button>
      
      <button onclick="switchModule('js')" class="btn-mod" style="white-space:nowrap; padding:8px 14px; border-radius:6px; background:${currentCourseKey === 'js' ? '#9333ea' : '#232334'}; color:#fff; border:1px solid ${currentCourseKey === 'js' ? '#a855f7' : '#363650'}; font-weight:bold; font-size:0.85rem; cursor:pointer;">⚡ JS</button>
      
      <button onclick="switchModule('combo_css')" class="btn-mod" style="white-space:nowrap; padding:8px 14px; border-radius:6px; background:${currentCourseKey === 'combo_css' ? '#eab308' : '#232334'}; color:${currentCourseKey === 'combo_css' ? '#000' : '#eab308'}; border:1px solid #eab308; font-weight:bold; font-size:0.85rem; cursor:pointer;">🚀 HTML+CSS 🔒</button>
      
      <button onclick="switchModule('combo_full')" class="btn-mod" style="white-space:nowrap; padding:8px 14px; border-radius:6px; background:${currentCourseKey === 'combo_full' ? '#eab308' : '#232334'}; color:${currentCourseKey === 'combo_full' ? '#000' : '#eab308'}; border:1px solid #eab308; font-weight:bold; font-size:0.85rem; cursor:pointer;">🔥 Fullstack 🔒</button>
    </div>

    <!-- Container Isi Materi -->
    <div id="moduleContent"></div>
  `;

  loadModuleView(currentCourseKey);
}

function switchModule(key) {
  if (typeof courseData === 'undefined' || !courseData[key]) return;
  currentCourseKey = key;
  currentTopicIndex = 0;
  sessionStorage.setItem('activeCourse', key);
  renderApp();
}

function loadModuleView(courseKey) {
  const contentArea = document.getElementById('moduleContent');
  if (!contentArea || typeof courseData === 'undefined') return;

  const course = courseData[courseKey];
  if (!course || !course.topics || course.topics.length === 0) {
    contentArea.innerHTML = `<p style="color:#aaa; text-align:center;">Materi belum tersedia.</p>`;
    return;
  }

  // Mencegah error index melampaui batas bab
  if (currentTopicIndex < 0) currentTopicIndex = 0;
  if (currentTopicIndex >= course.topics.length) currentTopicIndex = course.topics.length - 1;

  const user = typeof getUserSession === 'function' ? getUserSession() : { isPremium: false };
  const isLocked = course.isCombo && !user.isPremium;
  const currentTopic = course.topics[currentTopicIndex];

  contentArea.innerHTML = `
    <!-- List Daftar Bab/Topik -->
    <div style="margin-bottom:1.2rem; background:#161622; border:1px solid #2a2a3c; border-radius:10px; padding:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; border-bottom:1px solid #2a2a3c; padding-bottom:0.5rem;">
        <h3 style="font-size:0.95rem; color:#fff; margin:0;">${course.title}</h3>
        <span style="font-size:0.7rem; padding:2px 8px; border-radius:4px; font-weight:bold; background:${course.isCombo ? '#eab308' : '#9333ea'}; color:${course.isCombo ? '#000' : '#fff'};">
          ${course.isCombo ? 'PROYEK PRO' : 'GRATIS'}
        </span>
      </div>
      
      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        ${course.topics.map((topic, idx) => `
          <div onclick="selectTopic(${idx})" 
               style="padding:0.65rem 0.8rem; border-radius:6px; cursor:pointer; font-size:0.82rem; display:flex; justify-content:space-between; align-items:center;
                      background:${idx === currentTopicIndex ? '#232334' : '#0d0d12'}; 
                      color:${idx === currentTopicIndex ? '#c084fc' : '#aaa'}; 
                      border:1px solid ${idx === currentTopicIndex ? '#9333ea' : '#1f1f2e'}; font-weight:${idx === currentTopicIndex ? 'bold' : 'normal'};">
            <span style="padding-right:8px; word-break:break-word;">${idx + 1}. ${topic.title}</span>
            <span style="font-size:0.7rem; color:#888; white-space:nowrap;">⏱️ ${topic.duration}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Area Baca Isi Materi -->
    <div style="background:#161622; border:1px solid #2a2a3c; border-radius:10px; padding:1.2rem;">
      ${isLocked ? `
        <div style="text-align:center; padding:2rem 0.5rem; background:#11111a; border:1px dashed #eab308; border-radius:8px;">
          <div style="font-size:2.5rem; margin-bottom:0.8rem;">🔒</div>
          <h2 style="color:#eab308; font-size:1.1rem; margin-bottom:0.5rem;">Modul Kombinasi Terkunci!</h2>
          <p style="color:#aaa; font-size:0.82rem; margin-bottom:1.2rem; line-height:1.5;">
            Modul <strong>${course.title}</strong> merupakan materi proyek.
          </p>
          <a href="pricing.html" style="padding:0.6rem 1.2rem; background:#eab308; color:#000; text-decoration:none; font-weight:bold; border-radius:6px; display:inline-block; font-size:0.85rem;">
            Upgrade Ke Premium ⭐
          </a>
        </div>
      ` : `
        <h2 style="font-size:1.15rem; color:#fff; margin-bottom:0.3rem;">${currentTopic.title}</h2>
        <p style="font-size:0.78rem; color:#c084fc; margin-bottom:1rem; font-weight:bold;">Estimasi Belajar: ${currentTopic.duration}</p>
        <hr style="border:0; border-top:1px solid #2a2a3c; margin-bottom:1rem;">

        <!-- Tempat Output Teks & Blok Kode -->
        <div class="materi-body" style="line-height:1.7; font-size:0.88rem; color:#d1d5db; word-wrap:break-word;">
          ${currentTopic.content}
        </div>
      `}

      <!-- Navigasi Sebelum & Sesudah (Warna Ungu) -->
      <div style="display:flex; justify-content:space-between; gap:10px; margin-top:1.8rem; padding-top:1rem; border-top:1px solid #2a2a3c;">
        <button onclick="selectTopic(${currentTopicIndex - 1})" 
                style="padding:0.55rem 1rem; background:#232334; color:#fff; border:1px solid #363650; border-radius:6px; font-size:0.82rem; cursor:pointer; ${currentTopicIndex === 0 ? 'opacity:0.3; cursor:not-allowed;' : ''}"
                ${currentTopicIndex === 0 ? 'disabled' : ''}>
          ← Sebelum
        </button>

        <button onclick="selectTopic(${currentTopicIndex + 1})" 
                style="padding:0.55rem 1rem; background:#9333ea; color:#fff; border:none; font-weight:bold; border-radius:6px; font-size:0.82rem; cursor:pointer; ${currentTopicIndex === course.topics.length - 1 ? 'opacity:0.3; cursor:not-allowed;' : ''}"
                ${currentTopicIndex === course.topics.length - 1 ? 'disabled' : ''}>
          Lanjut →
        </button>
      </div>
    </div>
  `;
}

function selectTopic(index) {
  if (typeof courseData === 'undefined') return;
  const course = courseData[currentCourseKey];
  if (!course || index < 0 || index >= course.topics.length) return;
  
  currentTopicIndex = index;
  loadModuleView(currentCourseKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}