const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// *FOURTH ATTEMPT* - PASSING
function titleCased() {
  return tutorials.map((tutorial) => {
    const updatedString = tutorial
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return updatedString;
  });
}

// *THIRD ATTEMPT* - worked for some strings, but not all
// const titleCased = () => {
//   tutorials.map(function (tutorials) {
//     tutorials = tutorials.split(" ");
//     for (let i = 0; i < tutorials.length; i++) {
//       tutorials[i] =
//         tutorials[i].charAt(0).toLocaleUpperCase() + tutorials[i].slice(1);
//     }
//     return tutorials.join(" ");
//   });
//   return tutorials;
// };
// console.log(titleCased(tutorials));

// *SECOND ATTEMPT* - Returns the first letter uppercase with complete string in a new array
// const titleCased = () => {
//   return tutorials
//     .map((word) => word.charAt(tutorials.length[0]).toUpperCase() + word.slice(1).toLowerCase())
//     }

// console.log(titleCased(tutorials));

// *FIRST ATTEMPT* - Returns the first letter uppercase
// const titleCased = () => {
//   return tutorials
//     .map((word) => {
//       return word.charAt(0).toUpperCase();
//     })
// };

// --------------------------------------------------
// *ORIGINAL FUNCTION OUTLINE*
// const titleCased = () => {
//   return tutorials
// }
