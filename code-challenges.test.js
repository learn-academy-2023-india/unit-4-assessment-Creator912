// UNIT 4: JavaScript Coding Practical Questions with Jest

const { describe } = require("node:test");

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.
const fibonacciArr = (length) => {
const fibonacci = [0, 1];
    for (let i = 2; i < length; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
    return fibonacci;
  }
const length = 8;
const fibonacciSequenceFrom3 = fibonacciArr(length);

// Comment- Didn't realize until aftewards I probably needed to create a test to do this question the way you guys wanted it done. I used the resources I had to come up with this method. Not really sure how fibonacci is truly suppose to work.

// a) Create a test with expect statements for each of the variables provided. 

describe("fibonaccilength", () => {
  it("returns the number it multiplied by the number after", () => {
    expect(fibonacci()).toEqual("")
  })
})
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
