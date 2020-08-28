let cards = "A234567890JQK";
let suits = "♠♣♥♦";
const domPinta = document.getElementById("suit");
const domNum = document.getElementById("num");
const card = document.getElementById("card");
const inCard = document.getElementById("container");
let watch = false;

let cardfunction = () => {
  const ranNum = ~~(Math.random() * suits.length);
  console.log(ranNum);
  let pinta = suits[ranNum];
  let num = cards[~~(Math.random() * cards.length)];
  if (num == 0) {
    num = "10";
    domNum.style.marginLeft = "2.3vh";
  } else if (num == "J") {
    domNum.style.marginLeft = "9.5vh";
  } else {
    domNum.style.marginLeft = "6.5vh";
  }
  if (ranNum <= 1) {
    domNum.innerHTML = num;
    domNum.style.color = "#3c3c3c";
    domPinta.innerHTML = pinta;
    domPinta.style.color = "#3c3c3c";
  } else {
    domNum.innerHTML = num;
    domNum.style.color = "#f0401d";
    domPinta.innerHTML = pinta;
    domPinta.style.color = "#f0401d";
  }
};
let flip = () => {
  console.log("flip");
  if (watch === false) {
    card.style.backgroundImage = "none";
    cardfunction();
    inCard.style.display = "block";
    watch = true;
  } else if (watch) {
    inCard.style.display = "none";
    watch = false;
    card.style.backgroundImage = "url('img/Geometric+pattern+squares+003.jpg')";
  }
};
cardfunction();
card.addEventListener("click", flip);
