function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (userText === "") return;

  // Show user message
  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Show typing indicator
  const typingIndicator = document.createElement("p");
  typingIndicator.innerHTML = "<i>Bot is typing...</i>";
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate thinking delay
  setTimeout(() => {
    typingIndicator.remove();

    const reply = generateSmartReply(userText);

    typeBotReply(reply, chatBox);
  }, 900);
}

function generateSmartReply(text) {
  const msg = text.toLowerCase();

  // Greetings
  if (
    msg.includes("hi") ||
    msg.includes("hello") ||
    msg.includes("hey")
  ) {
    return "Hello! Feel free to ask me about Jeron V Roji’s skills, projects, or technical interests.";
  }

  // Skills
  if (
    msg.includes("skill") ||
    msg.includes("technolog") ||
    msg.includes("language")
  ) {
    return "Jeron V Roji works with HTML, CSS, JavaScript, Python (basics), and C/C++ (basics). He also has experience in application testing, AI chatbot logic, GitHub, and strong interest in computer hardware.";
  }

  // Projects
  if (
    msg.includes("project") ||
    msg.includes("work") ||
    msg.includes("portfolio")
  ) {
    return "His projects include a professionally designed portfolio website, a JavaScript-based AI chatbot with dynamic responses, and hands-on application testing practice.";
  }

  // AI / Chatbot
  if (
    msg.includes("ai") ||
    msg.includes("chatbot")
  ) {
    return "This AI chatbot is rule-based and built using JavaScript. It analyzes user input, detects intent, and responds dynamically using DOM manipulation.";
  }

  // Hardware interest
  if (
    msg.includes("hardware") ||
    msg.includes("computer") ||
    msg.includes("system")
  ) {
    return "Jeron V Roji has a strong enthusiasm for computer hardware, system internals, and understanding how software interacts with physical components.";
  }

  // About
  if (
    msg.includes("who") ||
    msg.includes("about you") ||
    msg.includes("about him")
  ) {
    return "I am a virtual assistant created to present Jeron V Roji’s skills, projects, and technical interests in a clear and professional manner.";
  }

  // Default response
  return "That’s an interesting question. You can ask me about skills, projects, AI, hardware interests, or general background.";
}

function typeBotReply(text, chatBox) {
  const p = document.createElement("p");
  p.innerHTML = "<b>Bot:</b> ";
  chatBox.appendChild(p);

  let index = 0;
  const typingSpeed = 20;

  function typeChar() {
    if (index < text.length) {
      p.innerHTML += text.charAt(index);
      index++;
      chatBox.scrollTop = chatBox.scrollHeight;
      setTimeout(typeChar, typingSpeed);
    }
  }

  typeChar();
}
