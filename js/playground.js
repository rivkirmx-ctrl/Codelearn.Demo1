document.addEventListener('DOMContentLoaded', () => {
  const htmlInput = document.getElementById('htmlCode');
  const cssInput = document.getElementById('cssCode');
  const jsInput = document.getElementById('jsCode');
  const runBtn = document.getElementById('runBtn');
  const resetBtn = document.getElementById('resetBtn');
  const iframe = document.getElementById('output');

  const userTier = localStorage.getItem('user_status') || 'free';

  // Lock handler based on Tier
  cssInput.addEventListener('focus', () => {
    if (userTier === 'free') {
      showModal('Fitur editor CSS hanya tersedia pada paket Student dan Pro.');
      cssInput.blur();
    }
  });

  jsInput.addEventListener('focus', () => {
    if (userTier !== 'pro') {
      showModal('Fitur editor JavaScript hanya tersedia pada paket Pro.');
      jsInput.blur();
    }
  });

  function executeCode() {
    const html = htmlInput.value;
    const css = (userTier !== 'free') ? `<style>${cssInput.value}</style>` : '';
    const js = (userTier === 'pro') ? `<script>${jsInput.value}<\/script>` : '';

    const combinedDoc = `
      <!DOCTYPE html>
      <html>
        <head>${css}</head>
        <body>
          ${html}
          ${js}
        </body>
      </html>
    `;

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(combinedDoc);
    doc.close();
  }

  runBtn.addEventListener('click', executeCode);
  resetBtn.addEventListener('click', () => {
    htmlInput.value = '<h1>Hello CodeLearn</h1>\n<p>Saya sedang mencoba playground coding.</p>';
    cssInput.value = 'h1 { color: #7C3AED; font-family: sans-serif; }';
    jsInput.value = '';
    executeCode();
  });

  // Initial Run
  executeCode();
});

function showModal(msg) {
  document.getElementById('modalMsg').innerText = msg;
  document.getElementById('premiumModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('premiumModal').style.display = 'none';
}