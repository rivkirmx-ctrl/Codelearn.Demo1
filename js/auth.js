// Cek status pembelian premium dari LocalStorage berdasarkan UID Google user aktif
function getUserPremiumStatus(uid) {
  if (!uid) return false;
  return localStorage.getItem(`codelearn_premium_${uid}`) === 'true';
}

// Fungsi Beli / Upgrade Premium menggunakan akun Google aktif
function processDemoPayment(method) {
  // Mengambil user dari Firebase Auth yang sedang login
  const firebaseUser = window.auth ? window.auth.currentUser : null;
  
  if (!firebaseUser) {
    alert("Silakan 'Masuk' dengan akun Google terlebih dahulu sebelum melakukan upgrade!");
    return;
  }
  
  const confirmPay = confirm(`Konfirmasi Pembayaran:\nAkun: ${firebaseUser.email}\nMetode: ${method}\nTotal: Rp 99.000\n\nKlik OK untuk menyelesaikan simulasi pembayaran.`);
  if (confirmPay) {
    // Simpan status premium berdasarkan UID Google user
    localStorage.setItem(`codelearn_premium_${firebaseUser.uid}`, 'true');
    alert("🎉 Pembayaran Berhasil! Status akun Google kamu sekarang menjadi PREMIUM!");
    location.reload();
  }
}

// Fungsi Logout (Keluar dari Google Auth)
window.logoutGoogleUser = async function() {
  if (confirm("Keluar dari akun Google?")) {
    try {
      const { signOut, getAuth } = await import("https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js");
      await signOut(getAuth());
      alert("Anda telah keluar.");
      location.reload();
    } catch (error) {
      console.error("Gagal Logout:", error);
    }
  }
};

// Update Navigasi Atas berdasarkan State Firebase Auth
function updateAuthUI(user) {
  const container = document.getElementById('authNavContainer');
  if (!container) return;

  if (user) {
    const isPremium = getUserPremiumStatus(user.uid);
    container.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <a href="profile.html" style="color:#fff; text-decoration:none; font-size:0.85rem; display:flex; align-items:center; gap:6px;">
          <img src="${user.photoURL || 'https://www.svgrepo.com/show/475656/google-color.svg'}" style="width:20px;height:20px;border-radius:50%;" alt="Avatar">
          <span>${user.displayName || user.email}</span> 
          ${isPremium ? '<span style="background:#eab308; color:#000; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:0.7rem;">PREMIUM</span>' : '<span style="background:#333; color:#aaa; padding:2px 6px; border-radius:4px; font-size:0.7rem;">GRATIS</span>'}
        </a>
        <button onclick="logoutGoogleUser()" class="btn-outline" style="padding:0.3rem 0.6rem; font-size:0.8rem; background:none; border:1px solid #363650; color:#ef4444; border-radius:5px; cursor:pointer;">Keluar</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="display:flex; gap:8px;">
        <button onclick="loginWithGoogle()" class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem; display:flex; align-items:center; gap:6px; background:#232334; border:1px solid #9333ea; color:#fff; border-radius:6px; cursor:pointer;">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" style="width:14px;height:14px;" alt="Google">
          Masuk Google
        </button>
      </div>
    `;
  }
}