function createStars() {
  const container = document.querySelector("body");

  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div"); // Corrected document.createElement
    star.className = "star";
    star.style.width = "1px"; // Corrected assignment operator and value
    star.style.height = "1px"; // Corrected assignment operator and value

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    container.appendChild(star);
  }
}

createStars();
