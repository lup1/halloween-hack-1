document.getElementById("run").onclick = run_away();
document.getElementById("hide").onclick = hide();
document.getElementById("area").onclick = area();

function run_away() {
  document.getElementById("the-words1").innerHTML = "you run further into the woods";
}

function hide() {
  document.getElementById("the-words1").innerHTML = "you quickly hide yourself, closing your eyes against the horrors that lurk beyond";
  clear();
}

function area() {
  choice = Math.floor(Math.random() * 3);
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

  if (choice == 2) {
    desc = "there is a river in your path. stones jut up out of the water. it is risky but you must continue on.";
    document.getElementById("the-words1").innerHTML = desc;
    if (danger == 1) {
      document.getElementById("the-words2").innerHTML = "the water is dark and fast";
      document.getElementById("the-words3").innerHTML = "";
      document.getElementById("the-words4").innerHTML = "the river is not wide, but it is so, so deep";
      document.getElementById("the-words5").innerHTML = "";
      document.getElementById("the-words6").innerHTML = "something is splashing to your left";
      //options, ignore it or look. otherworldly singing starts when you click?
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
  //delayed gif or picture, plays after 10s
}

function clearingLive() {
  desc = "you don't move. your heart seems to be trying to beat its way out of your chest but you hold still.";
  document.getElementById("the-words2").innerHTML = "you think that what you are looking at are its eyes.";
  document.getElementById("the-words3").innerHTML = "you think that it knows you're afraid";
  document.getElementById("the-words4").innerHTML = "you stand there and hope that it knows that fear will not stop you";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "it steps back into the woods, and you watch until those eyes fade into the dark";
}

function cabinDeath() {
  desc = "you are drawn forward towards the beutiful terrible thing";
  document.getElementById("the-words2").innerHTML = "the castle is grand";
  document.getElementById("the-words3").innerHTML = "the queen has a smile like stained glass";
  document.getElementById("the-words4").innerHTML = "it is so warm";
  document.getElementById("the-words5").innerHTML = "and you are so tired";
  document.getElementById("the-words6").innerHTML = "what can it hurt?";
}

function cabinLife() {
  desc = "how does it know your name? you have taken care not to speak it in these woods.";
  document.getElementById("the-words2").innerHTML = "you call out and ask how it knows you";
  document.getElementById("the-words3").innerHTML = "";
  document.getElementById("the-words4").innerHTML = "the smile drops";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "the door slams closed and the little wooden shack no longer wavers as if seen through the haze of heated air";
}

function riverDeath() {
  desc = "you glance over and are entranced";
  document.getElementById("the-words2").innerHTML = "they are singing to you in a thousand voices, moonlight is reflected their wide pale eyes";
  document.getElementById("the-words3").innerHTML = "your vison is blurring and your ears being to ring";
  document.getElementById("the-words4").innerHTML = "you must keep listing, you cant let the music fade!";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "your foot sinks into the inky darkness";
}

function riverLife() {
  desc = "you step to the next rock. as you hear the first low croon you clap your hands over your ears.";
  document.getElementById("the-words2").innerHTML = "they are loud but not louder the sound of your blood";
  document.getElementById("the-words3").innerHTML = "step by step you make your way across the river";
  document.getElementById("the-words4").innerHTML = "you hum an old lullaby to yourself and it keeps you grounded";
  document.getElementById("the-words5").innerHTML = "";
  document.getElementById("the-words6").innerHTML = "they cannot follow you as you walk from the shore to the trees";
}
