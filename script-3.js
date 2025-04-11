// var imgs = [];
var i = 0;

function next() {
  i = (i + 1) % imgs.length;
  $("#image").attr("src", imgs[i]);
}

function previous() {
  i = (i - 1 + imgs.length) % imgs.length;
  $("#image").attr("src", imgs[i]);
}

// console.log("Images array:", imgs);
