const quizQuestions = [
  // --- HTML (1-7) ---
  {
    id: 1,
    category: "HTML",
    question: "Tag HTML manakah yang digunakan untuk membuat judul tingkat utama?",
    options: ["<p>", "<heading>", "<h1>", "<title>"],
    answer: 2,
    explanation: "Tag <h1> digunakan untuk penulisan judul utama halaman. Tag <title> hanya mengubah judul pada tab browser."
  },
  {
    id: 2,
    category: "HTML",
    question: "Atribut mana yang digunakan untuk menentukan alamat tautan pada tag <a>?",
    options: ["src", "href", "link", "target"],
    answer: 1,
    explanation: "Atribut 'href' (Hypertext Reference) menentukan URL tujuan dari sebuah hyperlink."
  },
  {
    id: 3,
    category: "HTML",
    question: "Tag HTML manakah yang digunakan untuk menampilkan gambar?",
    options: ["<image>", "<img>", "<picture>", "<media>"],
    answer: 1,
    explanation: "Tag <img> adalah tag terpisah (self-closing) yang digunakan untuk menampilkan gambar di halaman web."
  },
  {
    id: 4,
    category: "HTML",
    question: "Atribut apa yang digunakan agar link terbuka di tab browser baru?",
    options: ["target='_blank'", "target='_new'", "open='newtab'", "window='new'"],
    answer: 0,
    explanation: "Atribut target='_blank' memerintahkan browser untuk membuka tautan di tab atau jendela baru."
  },
  {
    id: 5,
    category: "HTML",
    question: "Tag HTML yang digunakan untuk membuat daftar berbutir (unordered list) adalah...",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: 2,
    explanation: "<ul> (Unordered List) menghasilkan daftar berbutir (bullet points), sedangkan <ol> untuk daftar bernomor."
  },
  {
    id: 6,
    category: "HTML",
    question: "Elemen semantik HTML5 manakah yang tepat untuk membungkus navigasi utama website?",
    options: ["<menu>", "<header>", "<nav>", "<section>"],
    answer: 2,
    explanation: "<nav> dirancang khusus untuk membungkus sekumpulan link navigasi utama."
  },
  {
    id: 7,
    category: "HTML",
    question: "Tipe input HTML manakah yang paling cocok digunakan untuk pengisian kata sandi?",
    options: ["type='text'", "type='hidden'", "type='secret'", "type='password'"],
    answer: 3,
    explanation: "type='password' akan menyembunyikan karakter yang diketik pengguna menjadi titik-titik atau bintang."
  },

  // --- CSS (8-14) ---
  {
    id: 8,
    category: "CSS",
    question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
    options: ["text-color", "color", "font-color", "background-color"],
    answer: 1,
    explanation: "Properti 'color' mengatur warna teks elemen. Sintaks 'text-color' tidak ada dalam CSS."
  },
  {
    id: 9,
    category: "CSS",
    question: "Simbol selector CSS manakah yang digunakan untuk memilih elemen berdasarkan ID?",
    options: [". (titik)", "# (tagar)", "* (asterisk)", ": (titik dua)"],
    answer: 1,
    explanation: "Simbol '#' digunakan untuk selector ID (contoh: #header), sedangkan titik (.) untuk selector Class."
  },
  {
    id: 10,
    category: "CSS",
    question: "Properti CSS yang mengatur jarak di DALAM batas (border) elemen dinamakan...",
    options: ["margin", "padding", "border-spacing", "gap"],
    answer: 1,
    explanation: "Padding adalah ruang di antara konten dan border elemen. Margin adalah ruang di LUAR border."
  },
  {
    id: 11,
    category: "CSS",
    question: "Dalam Flexbox, properti apa yang digunakan untuk sejajarkan item secara horizontal di tengah?",
    options: ["align-items: center", "justify-content: center", "text-align: center", "flex-align: center"],
    answer: 1,
    explanation: "justify-content mengatur perataan pada sumbu utama (main axis), yang secara default berjalan horizontal."
  },
  {
    id: 12,
    category: "CSS",
    question: "Perbedaan utama antara `display: none` dan `visibility: hidden` adalah...",
    options: [
      "`display: none` menyembunyikan elemen dan menghilangkan ruangnya di layout",
      "`visibility: hidden` menghilangkan elemen sepenuhnya dari dokumen",
      "Keduanya memiliki fungsi yang identik tanpa perbedaan",
      "`display: none` membuat elemen menjadi transparan"
    ],
    answer: 0,
    explanation: "`display: none` menghapus elemen dari alur layout, sedangkan `visibility: hidden` hanya menyembunyikan tampilan visual tetapi ruangnya tetap dipertahankan."
  },
  {
    id: 13,
    category: "CSS",
    question: "Satuan CSS mana yang bersifat relatif terhadap ukuran font elemen root (<html>)?",
    options: ["px", "em", "rem", "pt"],
    answer: 2,
    explanation: "'rem' singkatan dari Root EM, di mana 1rem nilainya relatif terhadap font-size elemen <html>."
  },
  {
    id: 14,
    category: "CSS",
    question: "Bagaimana cara membuat sudut kotak card menjadi melengkung di CSS?",
    options: ["corner-radius", "border-style", "box-curve", "border-radius"],
    answer: 3,
    explanation: "Properti 'border-radius' digunakan untuk mengatur kelengkungan sudut elemen."
  },

  // --- JAVASCRIPT (15-20) ---
  {
    id: 15,
    category: "JavaScript",
    question: "Keyword JavaScript mana yang digunakan untuk mendeklarasikan variabel yang nilainya tidak dapat diubah (konstan)?",
    options: ["var", "let", "const", "static"],
    answer: 2,
    explanation: "'const' menetapkan variabel yang nilainya tidak bisa dideklarasikan ulang atau di-assign ulang."
  },
  {
    id: 16,
    category: "JavaScript",
    question: "Metode DOM manakah yang digunakan untuk memilih satu elemen berdasarkan atribut ID-nya?",
    options: [
      "document.querySelectorId()",
      "document.getElementByClass()",
      "document.getElementById()",
      "document.findId()"
    ],
    answer: 2,
    explanation: "document.getElementById('namaId') adalah metode standar untuk mengambil elemen spesifik dari DOM."
  },
  {
    id: 17,
    category: "JavaScript",
    question: "Apakah hasil eksekusi dari kode berikut di JavaScript: `console.log('5' + 3);`?",
    options: ["8", "53", "NaN", "TypeError"],
    answer: 1,
    explanation: "Operasi penjumlahan (+) antara string ('5') dan number (3) menyebabkan JavaScript melakukan konversi tipe data otomatis (implicit coercion) menjadi penggabungan string."
  },
  {
    id: 18,
    category: "JavaScript",
    question: "Metode mana yang digunakan untuk mencetak data atau teks ke konsol browser?",
    options: ["print()", "console.log()", "document.write()", "window.alert()"],
    answer: 1,
    explanation: "console.log() adalah perintah standar developer untuk melakukan debugging dan melihat output data di konsol."
  },
  {
    id: 19,
    category: "JavaScript",
    question: "Event listener manakah yang dipanggil saat pengguna mengklik sebuah tombol?",
    options: ["onhover", "onchange", "onclick", "onkeypress"],
    answer: 2,
    explanation: "Event 'click' (atau atribut 'onclick') terpicu ketika elemen diklik oleh kursor atau ditap di layar sentuh."
  },
  {
    id: 20,
    category: "JavaScript",
    question: "Di bawah ini, manakah yang BUKAN merupakan tipe data primitif di JavaScript?",
    options: ["String", "Number", "Boolean", "Array"],
    answer: 3,
    explanation: "Array dan Object merupakan Tipe Data Kompleks (Reference Type), sedangkan String, Number, dan Boolean adalah tipe data primitif."
  }
];