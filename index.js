/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(names, gift) {
    let customCard = [];
    for (let i = 0; i < names.length; i++) {
      customCard.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    }
    return customCard;
  }

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }