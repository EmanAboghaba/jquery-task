imgs = [
  "imgs/about.jpg",
  "imgs/home-1.jpg",
  "imgs/home-2.jpg",
  "imgs/home-3.jpg",
  "imgs/project-1.jpg",
  "imgs/project-2.jpg",
  "imgs/project-3.jpg",
];
$(document).ready(function () {
  $("#nextBtn").on("click", next);
  $("#prevBtn").on("click", previous);
  $("#closeBtn").on("click", function () {
    $(".container").hide();
  });
});
