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

/*
for ([initialization]; [condition]; [iteration]) {
  [loop body]
}
*/

function writeCards(people) {
    let thankYouMessages = []; // Create an empty array to store the thank you messages
  
    for (let p = 0; p < people.length; p++) {
      thankYouMessages.push(`Thank you, ${people[p]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages; // Return the array of thank you messages
  }

  /*
  function countDown(number) {
    console.log("Number received:", number);
    while (number > 0) {
      console.log(number);
      number -= 1;
    }
  }
*/

function countDown(number) {
    /*console.log("Number received:", number);*/
    while (number >= 0) {
      console.log(number);
      number -= 1;
    };
  }