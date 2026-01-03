let current = 0;
const screens = document.querySelectorAll(".screen");

function nextScreen() {
  if (current < screens.length - 1) {
    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");

    const typingEl = screens[current].querySelector(".typing");
    if (typingEl) {
      startTyping(typingEl);
    }
  }
}

// Gift logic
function openGift() {
  document.getElementById("giftText").textContent = "🌹 A rose just for you";
  document.getElementById("giftNext").style.display = "inline-block";
}

// Typing effect — SPACE SAFE
function startTyping(element) {
  const text = element.dataset.text;
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

// No button escape
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("click", moveNo);
}

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
