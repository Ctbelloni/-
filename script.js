let cardOpened = false;

function openCard() {
  if (cardOpened) return;
  document.querySelector(".card").classList.add("open");
  cardOpened = true;

  // Gera corações continuamente
  setInterval(generateHeart, 300);
}

function generateHeart() {
  const container = document.getElementById("hearts-container");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 10 + Math.random() * 5 + "s"; // 10–15s
  heart.style.fontSize = (1 + Math.random() * 2) + "em";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}
