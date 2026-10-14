const dialog = document.createElement("dialog");
dialog.className = "lightbox";
const big = document.createElement("img");
dialog.appendChild(big);
document.body.appendChild(dialog);

document.querySelectorAll("main img").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dialog.showModal();
  });
});

// click anywhere to close (Esc works automatically)
dialog.addEventListener("click", () => dialog.close());