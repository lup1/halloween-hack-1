document.getElementById("run").onclick = run_away();
document.getElementById("hide").onclick = hide();

function run_away() {
  document.getElementById("the-words").innerHTML = "you run further into the woods";
}

function hide() {
  document.getElementById("the-words").innerHTML = "you quickly hide yourself, closing your eyes against the horrors that lurk beyond";
}
