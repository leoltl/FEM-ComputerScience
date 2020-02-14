// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 

function makeChange(input, coins) {
  let result = []
  coins.sort((a,b) => b - a)
  coins.forEach(coin => {
    let coinCount = 0
    while((input / coin) >= 1) {
      coinCount++
      input = input - coin
    }
    result.push(coinCount)
  })
  return result
}

console.log(makeChange(40, [25, 10, 5]))
console.log(makeChange(40, [25, 5, 10]))
console.log(makeChange(35, [25, 10, 5]))

// however this naive greedy approach break down with following example
console.log(makeChange(12, [1, 6, 10]))