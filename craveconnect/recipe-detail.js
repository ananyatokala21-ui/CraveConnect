// Likes
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `${likes} Likes`;
});

// Comments
const commentInput = document.getElementById("commentInput");
const commentBtn = document.getElementById("commentBtn");
const commentsList = document.getElementById("commentsList");

commentBtn.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if(commentText !== "") {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentText;
    commentsList.appendChild(commentDiv);
    commentInput.value = "";
  }
});

// Ratings
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");
let rating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    rating = star.dataset.value;
    ratingValue.textContent = `${rating} / 5`;
    stars.forEach(s => s.style.color = s.dataset.value <= rating ? '#ff7043' : '#ccc');
  });
});
