const messages = [
  "Are you sure?",
  "Really sure?",
  "Think again 😢",
  "Last chance!",
  "You’ll regret this...",
  "Okay stop 😭"
];

let messageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const nameInput = document.getElementById("nameInput");
  const question = document.getElementById("question");
  const music = document.getElementById("bgMusic");

  nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    question.textContent = name
      ? `Will you be my Valentine, ${name}? 💘`
      : "Will you be my Valentine? 💘";
  });

  document.body.addEventListener(
    "click",
    () => music.play().catch(() => {}),
    { once: true }
  );

  const dodge = () => {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const padding = 24;
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    noButton.style.position = "fixed";
    noButton.style.left = Math.random() * maxX + "px";
    noButton.style.top = Math.random() * maxY + "px";

    const size = parseFloat(getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = size * 1.35 + "px";
    yesButton.style.boxShadow = "0 8px 24px rgba(76,175,80,0.6)";
  };

  noButton.addEventListener("mouseenter", dodge);
  noButton.addEventListener("touchstart", dodge);
  noButton.addEventListener("click", dodge);

  window.handleYesClick = () => {
    localStorage.setItem(
      "valentineName",
      nameInput.value.trim()
    );
    popConfetti();
    setTimeout(() => {
      window.location.href = "yes_page.html";
    }, 900);
  };
});

function popConfetti() {
  const hearts = ["💖", "💘", "💗", "💓"];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
}
