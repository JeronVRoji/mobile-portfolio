function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  const text = userText.toLowerCase();
  let reply = "I'm not sure about that. Try asking about skills, projects, or me.";

  if (text.includes("skill")) {
    reply =
      "Jeron V Roji has skills in HTML, CSS, JavaScript, Python basics, C/C++ basics, application testing, GitHub, AI chatbot development, and a strong interest in computer hardware.";
  } 
  else if (text.includes("project")) {
    reply =
      "His projects include a professional portfolio website, a JavaScript-based AI chatbot, and hands-on application testing practice.";
  } 
  else if (text.includes("you") || text.includes("about")) {
    reply =
      "I am Jeron V Roji's virtual assistant, created to explain his skills, projects, and technical interests.";
  } 
  else if (text.includes("ai") || text.includes("chatbot")) {
    reply =
      "This chatbot is built using JavaScript with rule-based logic and DOM manipulation to generate dynamic responses.";
  }

  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
