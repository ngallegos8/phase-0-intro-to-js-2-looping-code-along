// for (let age = 30; age < 40; age++){
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

// functon wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// const person = (["Guadalupe", "Ollie", "Aki"])

// function writeCards (person) {
//   let message = [];
//   for (let i = 0; i < person.length; i++) {
//     writeCards.push(`Thank you, ${person[i]}, for the wonderful surprise gift!`);
//   }
//   return writeCards;
// }

 
function writeCards(people) {
    let thankYouMessages = []; // Create an empty array to store the thank you messages
  
    for (let p = 0; p < people.length; p++) {
      thankYouMessages.push(`Thank you, ${people[p]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages; // Return the array of thank you messages
  }


function countDown(place) {
  while (place >= 0) {
    console.log(place);
    place -= 1;

  }
}




// ORIGINAL WORKING !!!

// function countDown(number) {
//     /*console.log("Number received:", number);*/
//     while (number >= 0) {
//       console.log(number);
//       number -= 1;
//     };
//   }





































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



// ORIGINAL WORKING !!!
// function writeCards(people) {
//     let thankYouMessages = []; // Create an empty array to store the thank you messages
  
//     for (let p = 0; p < people.length; p++) {
//       thankYouMessages.push(`Thank you, ${people[p]}, for the wonderful surprise gift!`);
//     }
//     return thankYouMessages; // Return the array of thank you messages
//   }



  /*
  function countDown(number) {
    console.log("Number received:", number);
    while (number > 0) {
      console.log(number);
      number -= 1;
    }
  }
*/




// ORIGINAL WORKING !!!

// function countDown(number) {
//     /*console.log("Number received:", number);*/
//     while (number >= 0) {
//       console.log(number);
//       number -= 1;
//     };
//   }