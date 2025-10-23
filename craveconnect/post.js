// -----------------------------
// Add Post Modal Logic
// -----------------------------
const addPostBtn = document.getElementById('addPostBtn');
const uploadSection = document.getElementById('uploadSection');

addPostBtn.addEventListener('click', () => {
  uploadSection.style.display = 'flex';
});

// Close modal when clicking outside the form
uploadSection.addEventListener('click', (e) => {
  if (e.target === uploadSection) {
    uploadSection.style.display = 'none';
  }
});

// -----------------------------
// Open Challenge Page Logic
// -----------------------------
function openChallenge(btn) {
  const title = encodeURIComponent(btn.closest('.challenge-card').getAttribute('data-title'));
  const desc = encodeURIComponent(btn.closest('.challenge-card').getAttribute('data-desc'));
  window.location.href = `challenge.html?title=${title}&desc=${desc}`;
}

// Apply to all Join buttons
const joinButtons = document.querySelectorAll('.join-btn');
joinButtons.forEach(btn => btn.addEventListener('click', () => openChallenge(btn)));
