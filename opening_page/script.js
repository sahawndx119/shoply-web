// in the name of God

function animateText() {
  let text = document.getElementById("animated-text");
  let textHolder = "Easy Shopping";
  for (let i = 0; i < textHolder.length; i++) {
    setTimeout(() => {
      let holder = document.createElement("span");
      if (textHolder[i] == " ") {
        holder.innerHTML = "&nbsp;";
      } else {
        holder.textContent = textHolder[i];
      }
      text.appendChild(holder);
    }, 300 * i).awat;
  }
}

requestAnimationFrame(animateText);
