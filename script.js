function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  let reply = "I am a simple AI chatbot.";

  const text = userText.toLowerCase();

  if (text.includes("who")) {
    reply = "I am Jeron V Roji's AI chatbot, built using JavaScript on a mobile device.";
  } else if (text.includes("skills")) {
    reply = "Jeron V Roji's skills include HTML, CSS, JavaScript, problem-solving, and mobile-first development.";
  } else if (text.includes("project")) {
    reply = "This portfolio website with a chatbot is Jeron V Roji's main project, built entirely on Android.";
  }

  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
