const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#nickname");
const nicknameForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open",() => {
    console.log("Connected to Server!");
});

socket.addEventListener("message",async (message) => {
    const li = document.createElement("li");
    console.log(message);
    text = await message.data.text();
    li.innerText = text
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Connected from Server!");
});

const makeMessage = (type,payload) => {
    const msg = {type,payload};
    return JSON.stringify(msg);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    alert(`New chat: ${input.value}`);
    socket.send(makeMessage("message",input.value));
    input.value = "";
}

const handleNickNameSubmit = (event) => {
    event.preventDefault();
    const input = nicknameForm.querySelector("input");
    socket.send(makeMessage("nickname",input.value));
}

messageForm.addEventListener("submit", handleSubmit);
nicknameForm.addEventListener("submit", handleNickNameSubmit);