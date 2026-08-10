const courseData = {
  html: {
    title: "HTML5 Structure",
    isCombo: false,
    topics: [
      {
        title: "Pengenalan & Struktur Dasar HTML",
        duration: "10 Menit",
        content: `
          <p><strong>HTML (HyperText Markup Language)</strong> adalah bahasa standar yang digunakan untuk membuat kerangka dasar sebuah halaman web.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Struktur Utama HTML5</h4>
          <p>Setiap dokumen HTML wajib memiliki struktur dasar berikut:</p>

          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Judul Web Saya&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Selamat Datang!&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf pertama saya.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Penjelasan Fungsi Tag Satu Per Satu:</h4>
          <ul style="padding-left:1.2rem; margin-bottom:1rem; line-height:1.8;">
            <li><code>&lt;!DOCTYPE html&gt;</code> : Deklarasi untuk memberitahu browser bahwa ini adalah dokumen HTML5 versi terbaru.</li>
            <li><code>&lt;html&gt;</code> : Tag induk yang membungkus semua konten pada halaman web.</li>
            <li><code>&lt;head&gt;</code> : Wadah untuk informasi latar belakang (meta data, judul tab, tautan CSS) yang tidak tampil di halaman utama.</li>
            <li><code>&lt;title&gt;</code> : Menentukan nama atau judul halaman yang muncul pada tab browser.</li>
            <li><code>&lt;body&gt;</code> : Tempat menaruh seluruh materi utama yang akan dilihat langsung oleh pengunjung web.</li>
          </ul>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">3. Contoh Hasil Tampilan di Browser:</h4>
          <div style="background:#fff; color:#000; padding:12px; border-radius:6px; font-family:sans-serif;">
            <h1 style="color:#000; margin:0 0 8px 0; font-size:1.3rem;">Selamat Datang!</h1>
            <p style="color:#333; margin:0; font-size:0.9rem;">Ini adalah paragraf pertama saya.</p>
          </div>
        `
      },
      {
        title: "Judul (Heading) dan Paragraf",
        duration: "10 Menit",
        content: `
          <p>Dalam HTML, pembuatan teks terbagi menjadi judul (Heading) dan teks bacaan (Paragraf).</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Tag Heading (&lt;h1&gt; sampai &lt;h6&gt;)</h4>
          <p>Heading digunakan untuk membuat judul atau sub-judul. Ukurannya berurutan dari yang paling besar (<code>&lt;h1&gt;</code>) hingga yang paling kecil (<code>&lt;h6&gt;</code>).</p>

          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;h1&gt;Judul Utama (Ukuran Terbesar)&lt;/h1&gt;
&lt;h2&gt;Sub Judul Level 2&lt;/h2&gt;
&lt;h3&gt;Sub Judul Level 3&lt;/h3&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Tag Paragraf (&lt;p&gt;)</h4>
          <p>Digunakan untuk menulis blok teks atau artikel. Browser secara otomatis menambahkan jarak baris (margin) di atas dan di bawah elemen paragraf.</p>

          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;p&gt;Ini adalah isi artikel bab pertama. Belajar HTML sangat mudah dan menyenangkan!&lt;/p&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">3. Contoh Hasil Tampilan di Browser:</h4>
          <div style="background:#fff; color:#000; padding:12px; border-radius:6px; font-family:sans-serif;">
            <h1 style="color:#000; margin:0; font-size:1.4rem;">Judul Utama (Ukuran Terbesar)</h1>
            <h2 style="color:#222; margin:5px 0; font-size:1.1rem;">Sub Judul Level 2</h2>
            <p style="color:#444; margin-top:8px; font-size:0.85rem;">Ini adalah isi artikel bab pertama. Belajar HTML sangat mudah dan menyenangkan!</p>
          </div>
        `
      },
      {
        title: "Format Teks (Bold, Italic, Underline)",
        duration: "8 Menit",
        content: `
          <p> HTML menyediakan tag khusus untuk mengubah gaya penekanan teks tanpa memerlukan perintah CSS.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">Daftar Tag Penformatan Teks:</h4>
          <ul style="padding-left:1.2rem; margin-bottom:1rem; line-height:1.8;">
            <li><code>&lt;strong&gt;</code> atau <code>&lt;b&gt;</code> : Membuat teks menjadi <strong>Cetak Tebal (Bold)</strong>.</li>
            <li><code>&lt;em&gt;</code> atau <code>&lt;i&gt;</code> : Membuat teks menjadi <em>Cetak Miring (Italic)</em>.</li>
            <li><code>&lt;u&gt;</code> : Membuat teks memiliki <u>Garis Bawah (Underline)</u>.</li>
            <li><code>&lt;mark&gt;</code> : Memberi efek stabilo/sorotan pada teks.</li>
            <li><code>&lt;br&gt;</code> : Pindah baris baru (enter).</li>
          </ul>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">Contoh Kode:</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;p&gt;Teks ini &lt;strong&gt;sangat penting&lt;/strong&gt; dan teks ini &lt;em&gt;miring&lt;/em&gt;.&lt;/p&gt;
&lt;p&gt;Disini ada kata yang &lt;mark&gt;ditandai stabilo&lt;/mark&gt;.&lt;/p&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">Contoh Hasil Tampilan di Browser:</h4>
          <div style="background:#fff; color:#000; padding:12px; border-radius:6px; font-family:sans-serif; font-size:0.9rem;">
            <p style="margin:0 0 5px 0;">Teks ini <strong>sangat penting</strong> dan teks ini <em>miring</em>.</p>
            <p style="margin:0;">Disini ada kata yang <mark style="background:#fef08a;">ditandai stabilo</mark>.</p>
          </div>
        `
      },
      {
        title: "Membuat Link (Tautan) dan Gambar",
        duration: "12 Menit",
        content: `
          <p>Web tidak akan lengkap tanpa adanya tautan antar halaman dan gambar pendukung.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Tag Link (&lt;a&gt;)</h4>
          <p>Tag <code>&lt;a&gt;</code> (Anchor) menggunakan atribut <code>href</code> untuk mengarahkan pengguna ke alamat web lain.</p>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;a href="https://google.com" target="_blank"&gt;Buka Google&lt;/a&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Tag Gambar (&lt;img&gt;)</h4>
          <p>Tag <code>&lt;img&gt;</code> merupakan tag tunggal (tanpa penutup) yang menggunakan atribut <code>src</code> untuk lokasi gambar dan <code>alt</code> untuk deskripsi cadangan.</p>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;img src="foto.jpg" alt="Foto Profil" width="150"&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">3. Contoh Hasil Tampilan di Browser:</h4>
          <div style="background:#fff; color:#000; padding:12px; border-radius:6px; font-family:sans-serif; font-size:0.9rem;">
            <p style="margin-bottom:8px;"><a href="#" style="color:#2563eb; text-decoration:underline;">Buka Google</a></p>
            <div style="width:120px; height:70px; background:#e5e7eb; display:flex; align-items:center; justify-content:center; border:1px solid #ccc; font-size:0.75rem; color:#666;">[Foto Profil]</div>
          </div>
        `
      },
      {
        title: "Membuat List (Daftar Berurutan & Poin)",
        duration: "10 Menit",
        content: `
          <p>List digunakan untuk menyusun daftar informasi secara rapi.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Ordered List (&lt;ol&gt;) - Daftar Angka</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;ol&gt;
  &lt;li&gt;Langkah Pertama&lt;/li&gt;
  &lt;li&gt;Langkah Kedua&lt;/li&gt;
&lt;/ol&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Unordered List (&lt;ul&gt;) - Daftar Bulatan (Bullet)</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>&lt;ul&gt;
  &lt;li&gt;Kopi&lt;/li&gt;
  &lt;li&gt;Gula&lt;/li&gt;
&lt;/ul&gt;</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">3. Contoh Hasil Tampilan di Browser:</h4>
          <div style="background:#fff; color:#000; padding:12px; border-radius:6px; font-family:sans-serif; font-size:0.88rem;">
            <strong>Daftar Angka:</strong>
            <ol style="margin:4px 0 10px 20px;">
              <li>Langkah Pertama</li>
              <li>Langkah Kedua</li>
            </ol>
            <strong>Daftar Bulatan:</strong>
            <ul style="margin:4px 0 0 20px;">
              <li>Kopi</li>
              <li>Gula</li>
            </ul>
          </div>
        `
      }
    ]
  },
  css: {
    title: "CSS3 Style & Layout",
    isCombo: false,
    topics: [
      {
        title: "Pengenalan CSS, Selektor & Box Model",
        duration: "12 Menit",
        content: `
          <p><strong>CSS (Cascading Style Sheets)</strong> digunakan untuk mempercantik tampilan elemen HTML, mengatur warna, font, hingga tata letak halaman.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Cara Penulisan & Selektor CSS</h4>
          <p>CSS ditulis menggunakan selektor (misal: nama tag, kelas <code>.class</code>, atau id <code>#id</code>) diikuti blok deklarasi properti.</p>
          
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>/* Selektor berdasarkan Kelas */
.kotak-kartu {
  background-color: #161622;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #363650;
}</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Konsep Box Model (Content, Padding, Border, Margin)</h4>
          <p>Setiap elemen dalam CSS dianggap sebagai kotak persegi yang memiliki aturan jarak:</p>
          <ul style="padding-left:1.2rem; margin-bottom:1rem; line-height:1.8;">
            <li><strong>Content:</strong> Isi teks atau gambar asli di dalam elemen.</li>
            <li><strong>Padding:</strong> Ruang / jarak kosong di <em>dalam</em> elemen (antara konten dan garis border).</li>
            <li><strong>Border:</strong> Garis pinggir pembatas elemen.</li>
            <li><strong>Margin:</strong> Ruang / jarak kosong di <em>luar</em> elemen (jarak antar elemen lain).</li>
          </ul>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">3. Contoh Simulasi Tampilan Gaya CSS:</h4>
          <div style="background:#161622; color:#fff; padding:15px; border-radius:8px; border:1px solid #363650; font-family:sans-serif;">
            <h3 style="color:#c084fc; margin:0 0 8px 0; font-size:1.1rem;">Judul Kartu</h3>
            <p style="color:#aaa; margin:0; font-size:0.85rem;">Elemen ini memiliki padding di dalam dan background gelap yang elegan.</p>
          </div>
        `
      },
      {
        title: "Modern Layouting: Flexbox",
        duration: "15 Menit",
        content: `
          <p><strong>Flexbox</strong> adalah modul tata letak (layout) CSS satu dimensi yang dirancang khusus untuk menyusun item secara fleksibel (sejajar horizontal atau vertikal).</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">Properti Utama Flexbox:</h4>
          <ul style="padding-left:1.2rem; margin-bottom:1rem; line-height:1.8;">
            <li><code>display: flex;</code> : Mengaktifkan mode flexbox pada wadah (kontainer).</li>
            <li><code>justify-content: space-between;</code> : Mengatur perataan posisi horizontal (kiri-kanan).</li>
            <li><code>align-items: center;</code> : Mengatur posisi vertikal agar berada di tengah secara presisi.</li>
            <li><code>gap: 1rem;</code> : Memberikan jarak otomatis antar elemen di dalam flex container.</li>
          </ul>

          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>.navbar-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #161622;
}</code></pre>
        `
      },
      {
        title: "Responsive Design & Media Query",
        duration: "12 Menit",
        content: `
          <p><strong>Media Query</strong> memungkinkan web mendeteksi ukuran layar perangkat pengunjung (HP, Tablet, Laptop) dan mengubah gaya CSS secara otomatis.</p>

          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>/* Default untuk Laptop / Desktop */
.container {
  grid-template-columns: repeat(3, 1fr);
}

/* Otomatis berubah saat dibuka di HP (lebar max 600px) */
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr; /* Berubah jadi 1 kolom penuh */
  }
}</code></pre>
        `
      }
    ]
  },
  js: {
    title: "JavaScript Logika",
    isCombo: false,
    topics: [
      {
        title: "Pengenalan Variabel, Tipe Data & Operator",
        duration: "10 Menit",
        content: `
          <p><strong>JavaScript</strong> adalah bahasa pemrograman yang membuat halaman web menjadi hidup, interaktif, dan dinamis.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Deklarasi Variabel (<code>const</code> & <code>let</code>)</h4>
          <p>Gunakan <code>const</code> untuk nilai yang tidak akan diubah, dan <code>let</code> untuk variabel yang nilainya bisa diubah.</p>
          
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>const namaPlatform = "CodeLearn";
let poinUser = 100;

poinUser += 50; // Menambah poin (Hasil sekarang: 150)
console.log(namaPlatform + " - Poin: " + poinUser);</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Tipe Data Utama dalam JS:</h4>
          <ul style="padding-left:1.2rem; margin-bottom:1rem; line-height:1.8;">
            <li><strong>String:</strong> Teks berformat tanda kutip (contoh: <code>"Halo Dunia"</code>).</li>
            <li><strong>Number:</strong> Angka bulat atau desimal (contoh: <code>2026</code>, <code>3.14</code>).</li>
            <li><strong>Boolean:</strong> Nilai kebenaran logika <code>true</code> (benar) atau <code>false</code> (salah).</li>
            <li><strong>Array:</strong> Kumpulan data berurutan (contoh: <code>['HTML', 'CSS', 'JS']</code>).</li>
          </ul>
        `
      },
      {
        title: "Kondisi (If-Else) & Fungsi (Function)",
        duration: "15 Menit",
        content: `
          <p>Fungsi dan percabangan logika digunakan untuk mengatur alur kerja program berdasarkan aturan tertentu.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">1. Percabangan If-Else</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>let nilaiUjian = 85;

if (nilaiUjian >= 80) {
  console.log("Selamat, Anda Lulus dengan Nilai A!");
} else {
  console.log("Silakan ikuti remidi.");
}</code></pre>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">2. Membuat Fungsi (Function)</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>function sapaPengguna(nama) {
  return "Halo, " + nama + "! Selamat belajar.";
}

let pesan = sapaPengguna("Budi");
console.log(pesan); // Output: Halo, Budi! Selamat belajar.</code></pre>
        `
      },
      {
        title: "Manipulasi DOM & Event Listener",
        duration: "15 Menit",
        content: `
          <p><strong>DOM (Document Object Model)</strong> adalah jembatan penghubung bagi JavaScript untuk mengontrol elemen HTML secara langsung.</p>

          <h4 style="color:#c084fc; margin-top:1.2rem; margin-bottom:0.5rem;">Contoh Interaksi Klik Tombol:</h4>
          <pre style="background:#0d0d12; border:1px solid #2a2a3c; border-left:3px solid #9333ea; padding:10px; border-radius:6px; overflow-x:auto; font-size:0.8rem; color:#38bdf8;"><code>// 1. Ambil elemen HTML
const tombol = document.getElementById('btnKirim');
const teksOutput = document.getElementById('output');

// 2. Berikan aksi ketika tombol diklik
tombol.addEventListener('click', function() {
  teksOutput.textContent = "Teks berhasil diubah oleh JavaScript!";
  teksOutput.style.color = "#c084fc";
});</code></pre>
        `
      }
    ]
  },
  combo_css: {
    title: "Kombinasi HTML + CSS",
    isCombo: true,
    topics: [
      {
        title: "Proyek Web Landing Page Portofolio",
        duration: "30 Menit",
        content: "<p>Membuat halaman landing page lengkap dengan kombinasi struktur HTML dan desain CSS modern.</p>"
      }
    ]
  },
  combo_full: {
    title: "Fullstack (HTML + CSS + JS)",
    isCombo: true,
    topics: [
      {
        title: "Proyek To-Do List Interaktif",
        duration: "45 Menit",
        content: "<p>Membuat aplikasi catatan tugas harian dengan manipulasi DOM dan penyimpanan lokal (localStorage) JavaScript.</p>"
      }
    ]
  }
};