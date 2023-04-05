const pictureCards = document.getElementsByClassName("picture-card");

for (let i = 0; i < pictureCards.length; i++) {
  const upvoteBtn = pictureCards[i].getElementsByClassName("upvote-btn")[0];
  const downvoteBtn = pictureCards[i].getElementsByClassName("downvote-btn")[0];
  const voteCount = pictureCards[i].getElementsByClassName("vote-count")[0];

  upvoteBtn.addEventListener("click", () => {
    let count = parseInt(voteCount.textContent);
    count++;
    voteCount.textContent = count;
  });

  downvoteBtn.addEventListener("click", () => {
    let count = parseInt(voteCount.textContent);
    count--;
    voteCount.textContent = count;
  });
}