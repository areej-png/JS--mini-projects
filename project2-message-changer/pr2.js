const message = document.querySelector("#message");
const buttonContainer = document.querySelector(".buttons");

// Array of messages 
const messages = [
    { text : "Say Hello", value : "Hello, friends!" },
    { text : "Say Bye", value : "Goodbye!" },
     { text: "Say Love", value: "Lots of love!" },
    { text: "Say Motivation", value: "Keep pushing forward!" }
];

// Create buttons
messages.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.text;
    
    btn.addEventListener("click", () => {
        message.style.opacity = 0;

        setTimeout(() => {
            message.innerText = item.value;
            message.style.opacity = 1;
        }, 300);
    });

    buttonContainer.appendChild(btn);
}); 
