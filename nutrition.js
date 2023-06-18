const likes = document.getElementsByClassName("heart_butt");

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];

  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "white";
    } else {
      like.style.color = "red";
    }
  });
}