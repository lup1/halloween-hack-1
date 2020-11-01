document.getElementById("run").onclick = run_away();
document.getElementById("hide").onclick = hide();
document.getElementById("area").onclick = area();
indside = false;

function run_away() {
  if (inside == false) {
    document.getElementById("the-words1").innerHTML = "you run further into the woods";
    clear();
  } else {
    document.getElementById("the-words1").innerHTML = "you run down the halls never turning the same direction twice in a row, but somehow everything looks the same";
  }
}

function hide() {
  document.getElementById("the-words1").innerHTML = "you quickly hide yourself, closing your eyes against the horrors that lurk beyond";
  clear();
}

function area() {
  choice = Math.floor(Math.random() * 2);
  danger = Math.floor(Math.random() * 2);

  if (choice == 0) {
    desc = "you are in a glade. the grass beneath your feet is frozen, and every step seems to crack as loud as a gunshot. the trees around you sway in a breez you cannot feel";
    document.getElementById("the-words1").innerHTML = desc;
    if (danger == 1) {
      document.getElementById("the-words2").innerHTML = "in the middle of the clearing you see a crouched figure. they slowly stand, and your breath catches as they";
      document.getElementById("the-words3").innerHTML = "just";
      document.getElementById("the-words4").innerHTML = "keep";
      document.getElementById("the-words5").innerHTML = "getting";
      document.getElementById("the-words6").innerHTML = "taller";
      //make action buttons appear for situation
    } else {
      clear();
    }
  }

  if (choice == 1) {
    desc = "before you stands a cabin. or is it a castle? before your blurry eyes it seems to warp. one moment delapidated, the next resplendent. the smell of blood stays";
    document.getElementById("the-words1").innerHTML = desc;
    if (danger == 1) {
      document.getElementById("the-words2").innerHTML = "the door is open and your hear music";
      document.getElementById("the-words3").innerHTML = "a hag-";
      document.getElementById("the-words4").innerHTML = "a queen-";
      document.getElementById("the-words5").innerHTML = "a thing with many eyes and an impossible smile calls your name";
      document.getElementById("the-words6").innerHTML = "";
      //add something here to go inside
    } else {
      clear();
    }
  }
}

function clear() {
  document.getElementById("the-words2").innerHTML = "";
  document.getElementById("the-words3").innerHTML = "";
  document.getElementById("the-words4").innerHTML = "";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "";
}

function clearingDeath() {
  desc = "you take one step back, and then another. you try and blink away the tears in your eyes and suddenly its"
  document.getElementById("the-words1").innerHTML = desc;
  document.getElementById("the-words2").innerHTML = "right";
  document.getElementById("the-words3").innerHTML = "";
  document.getElementById("the-words4").innerHTML = "infront";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "of you";
}
