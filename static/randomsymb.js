document.addEventListener("DOMContentLoaded", function () {
  const symbols = ["∫", "π", "E=mc²", "∑", "Δ", "√", "≠", "∞", "ℏ", "∂", "⊕", "⊗", "⇌"];
  const background = document.querySelector(".symbol-background");

  if (!background) return;

  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = (Math.random() * 2 + 2) + "rem";
    span.style.animationDuration = (Math.random() * 20 + 10) + "s";
    span.style.transform = `rotate(${Math.random() * 360}deg)`;
    background.appendChild(span);
  }
});
