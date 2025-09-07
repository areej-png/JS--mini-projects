function changeColor(color) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#title").innerText = "Background: " + color;
}

document.querySelector("#btn1").addEventListener("click", function () {
  changeColor("red");
});
document.querySelector("#btn2").addEventListener("click", function () {
  changeColor("green");
});
document.querySelector("#btn3").addEventListener("click", function () {
  changeColor("blue");
});

