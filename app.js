let cards = "A2345678910JQK";
let suits = "♠♣♥♦";
const domPinta = document.getElementById("suit");
const domNum = document.getElementById("num");
const card = document.getElementById("card");

let cardfunction = () => {
  const ranNum = ~~(Math.random() * suits.length);
  console.log(ranNum);
  let pinta = suits[ranNum];
  let num = cards[~~(Math.random() * cards.length)];
  if (num == 0 || num == 1) {
    num = "10";
  }
  if (ranNum <= 1) {
    domNum.innerHTML = num;
    domNum.style.color = "black";
    domPinta.innerHTML = pinta;
    domPinta.style.color = "black";
  } else {
    domNum.innerHTML = num;
    domNum.style.color = "red";
    domPinta.innerHTML = pinta;
    domPinta.style.color = "red";
  }
};
cardfunction();
