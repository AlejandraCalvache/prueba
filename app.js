async function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');

    if (input.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);

        const response = await fetch('http://localhost:3000/produce', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input.value })
        });
        const data = await response.json();

        const botMessage = document.createElement('div');
        botMessage.className = 'message';
        botMessage.textContent = data.response;
        messages.appendChild(botMessage);

        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}
