const player = document.getElementById("player");
player.style = "display: none";

function playSong(id, currentButton) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  const allButton = document.querySelectorAll(".songs button");
  for (let i = 0; i < allButton.length; i++) {
    allButton[i].style.background = "#BDD59B";
  }
  currentButton.style.background = "lightblue";
}
