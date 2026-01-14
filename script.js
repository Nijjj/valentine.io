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

  noButton.addEventListener("mouseenter", handleNoInteraction);
  noButton.addEventListener("click", handleNoInteraction);

  function handleNoInteraction() {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const padding = 20;
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    const currentSize = parseFloat(
      window.getComputedStyle(yesButton).fontSize
    );
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
  }

  window.handleYesClick = function () {
    window.location.href = "yes-page.html";
  };
});
