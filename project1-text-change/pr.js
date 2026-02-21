const para = document.getElementById("text");
const btn = document.getElementById("changeText");

btn.addEventListener("click", () => {
  para.textContent =
    para.textContent === "Hello world"
      ? "You clicked the button!"
      : "Hello world";
});