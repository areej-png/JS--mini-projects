let para = document.getElementById("text");
let btn = document.getElementById("changeText");
function changeText (){
para.innerText = "you clicked the button!";
}
btn.addEventListener("click", changeText);
