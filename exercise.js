document.addEventListener("DOMContentLoaded", function() {
    const videoLinks = document.querySelectorAll(".video-link");
    const videoModal = document.querySelector(".video-modal");
    const videoModalIframe = videoModal.querySelector("iframe");
  
    videoLinks.forEach(function(videoLink) {
      videoLink.addEventListener("click", function(event) {
        event.preventDefault();
        const videoId = this.getAttribute("data-video-id");
        const videoUrl = "https://www.youtube.com/embed/" + videoId;
  
        videoModalIframe.src = videoUrl;
        videoModal.classList.add("show");
      });
    });
  
    videoModal.addEventListener("click", function() {
      this.classList.remove("show");
      videoModalIframe.src = "";
    });
  });
  const likes = document.getElementsByClassName("heart_butt");

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];

  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}



function showTool() {
  var tool = document.getElementById("exercise-tool");
  tool.style.display = "block";
}

function hideTool() {
  var tool = document.getElementById("exercise-tool");
  tool.style.display = "none";
}