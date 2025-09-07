function sayHello (){
   document.querySelector("#message")
   .innerText = "Hello, friend";
}
function sayBye (){
   document.querySelector("#message")
   .innerText = "Goodbye";
}
function sayLove (){
   document.querySelector("#message")
   .innerText = "Lots of";
}
document.querySelector("#btn1")
.addEventListener("click", sayHello);
document.querySelector("#btn2")
.addEventListener("click", sayBye);
document.querySelector("#btn3")
.addEventListener("click", sayLove);

