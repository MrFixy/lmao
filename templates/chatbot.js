// Predefined responses from the chatbot
const responses = {
    "The webpage isn't loading. What should I do?": "I'm sorry to hear that you're experiencing trouble with our webpage. Please try the following steps:\n1. Clear your browser cache and cookies.\n2. Restart your browser and try again.\n3. If the issue persists, please let us know the specific error message or where the problem occurs, and we'll investigate further.",
};


// Function to generate a response from the chatbot
function generateResponse(message) {
    const lowercaseMessage = message.toLowerCase();
    for (const key in responses) {
        if (lowercaseMessage.includes(key)) {
            return responses[key];
        }
    }
    return "Please contact me on";
}

// Function to append a message to the chat
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'mb-2';
    const isAI = sender === 'Raghav (AI)';
    const avatarSrc = isAI ? 'Raghav.png' : 'User.png';

    const avatarElement = document.createElement('img');
    avatarElement.src = avatarSrc;
    avatarElement.alt = 'Avatar';
    avatarElement.className = 'inline-block w-6 h-6 mr-2';

    messageElement.appendChild(avatarElement);

    messageElement.innerHTML += `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Open chat window
const openChatButton = document.getElementById('openChat');
const closeChatButton = document.getElementById('closeChat');
const chatWindow = document.getElementById('chatWindow');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageButton = document.getElementById('sendMessage');

openChatButton.addEventListener('click', () => {
    chatWindow.style.display = 'block';
    openChatButton.style.display = 'none'; // Hide the chat button
});

closeChatButton.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    openChatButton.style.display = 'block'; // Show the chat button
});

sendMessageButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage !== '') {
        appendMessage('You', userMessage);

        const aiResponse = generateResponse(userMessage);
        appendMessage('Raghav (AI)', aiResponse);

        chatInput.value = '';
    }
});
