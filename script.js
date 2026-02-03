const buttonsContainer = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const result = document.getElementById("result");

let noCount = 0;

const questions = [
  "¿Estás segura? :c",
  "NAAA, segura?",
  "Última oportunidad... ",
  "Perdon amor, solo tienes una unica opcion"
];

// 🎵 música 8-bit
const music = new Audio("music.mp3");
music.loop = true;

// 💔 NO
noBtn.addEventListener("click", () => {
  // vibración (mobile)
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  // texto de confirmación
  if (noCount < questions.length) {
    question.textContent = questions[noCount];
    noCount++;
  }

  // swap botones
  const first = buttonsContainer.children[0];
  const second = buttonsContainer.children[1];
  buttonsContainer.insertBefore(second, first);
});

// 💖 SÍ
yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  buttonsContainer.classList.add("hidden");

  result.textContent = " SABÍA QUE IBAS A DECIR QUE SÍ MAILOV <3";
  result.classList.remove("hidden");

  music.play();
  launchHearts();

  // 👉 acá después podés enviar el “sí”
  sendYes();
});

// 💘 corazones
function launchHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "🐹";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}
function sendYes() {
  fetch("https://api.telegram.org/7693042754:AAHgLunJHCpg2KhBmN42O1ZGd4XgYRzsPlM/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "8444904297",
      text: "DIJO QUE SI"
    })
  });
}