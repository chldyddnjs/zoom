const messageList = document.querySelector("ul") as HTMLUListElement | null;
const messageForm = document.querySelector("#message") as HTMLFormElement | null;
const nicknameForm = document.querySelector("#nickname") as HTMLFormElement | null;

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server!");
});

socket.addEventListener("message", async (message: MessageEvent) => {
    if (!messageList) return;
    const li = document.createElement("li");
    console.log(message);
    const text: string = await message.data;
    li.innerText = text;
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server!");
});

const makeMessage = (type: string, payload: string): string => {
    const msg = { type, payload };
    return JSON.stringify(msg);
};

const handleNickNameSubmit = (event: Event) => {
    event.preventDefault();
    if (!nicknameForm) return;
    const input = nicknameForm.querySelector("input") as HTMLInputElement | null;
    if (!input) return;
    
    alert(`NickName: ${input.value}`);
    socket.send(makeMessage("nickname", input.value));
};

const handleMessageSubmit = (event: Event) => {
    event.preventDefault();
    if (!messageForm) return;
    const input = messageForm.querySelector("input") as HTMLInputElement | null;
    if (!input) return;
    
    console.log(input);
    alert(`New chat: ${input.value}`);
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
};

nicknameForm?.addEventListener("submit", handleNickNameSubmit);
messageForm?.addEventListener("submit", handleMessageSubmit);