// ❤️ Like Button
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
  likeBtn.textContent = `❤️ Like (${likes})`;
});

// ⭐ Ratings
const ratingSelect = document.getElementById("ratingSelect");
const ratingMsg = document.getElementById("ratingMsg");

ratingSelect.addEventListener("change", () => {
  const rating = ratingSelect.value;
  if (rating > 0) {
    ratingMsg.textContent = `Thank you for rating ${rating} star${rating > 1 ? "s" : ""}!`;
  } else {
    ratingMsg.textContent = "";
  }
});

// 💬 Comments Section
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("commentName").value.trim();
  const text = document.getElementById("commentText").value.trim();

  if (name && text) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = `<h4>${name}</h4><p>${text}</p>`;
    commentList.appendChild(commentBox);

    // Reset form
    commentForm.reset();
  }
});
