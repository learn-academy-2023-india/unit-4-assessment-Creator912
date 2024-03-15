// UNIT 4: JavaScript Coding Practical Questions with Jest


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

// // Comment- Didn't realize until aftewards I probably needed to create a test to do this question the way you guys wanted it done. I used the resources I had to come up with this method. Not really sure how fibonacci is truly suppose to work.

// // a) Create a test with expect statements for each of the variables provided. 

describe("fibonaccilength", () => {
  it("returns an array of the next numbers in fibonacci order ", () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

  })
  })
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
      
const createFibonnaci = (number) => {
    const MyArray = [0,1]
    let a,b;
    
for (let i = 2; i < number; i++) {
    a = MyArray[i-1]
    b = MyArray[i-2]
    MyArray.push(a + b)
}
    return MyArray
}
// console.log(createFibonnaci(6));
// console.log(createFibonnaci(10));



// Pseudo code: 
// I created a function named fibonnaci that can take a number
// I make an array containing the first 2 digits in fibonnaci 
// I make a variable let that will allow my variable to be reasssigned
// I then make a for loop that iterates through my function
// I then use a .push method to call the argument through my for loop that will return my array updated array


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

function Election(votes) {
  const tally = votes.up - votes.down;
  return tally;
}

const newvotes = { up: n1, down: n2 };
const newtally = Election(votes);


// a) Create a test with expect statements for each of the variables provided.

describe("electiontally", () => {
  it("returns the difference of up votes to down votes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(election1).toEqual([11])
    expect(election2).toEqual([-31])



  })
  })

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

function electionCount(votes) {
  const tally = votes.up - votes.down;
  return tally;
}

  const votes = { up: 13, down: 2 };
  const tally = calculateelection(votes);

  


// Pseudo code: 
// I created an object that can take any vote
// I then make a variable that can tally up votes and down votes difference
// I return the end tally
