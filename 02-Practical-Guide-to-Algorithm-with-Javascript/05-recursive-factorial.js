function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n-1)
}

function memoFactorial() {
  const cache = {}
  function factorial (n) {
    if (n <= 1) return 1
    if (n in cache) {
      console.log(`returning result ${n} from cache`)
      return cache[n]
    }
    const result = n * factorial(n-1)
    console.log(`saving result ${n} to cache`)
    cache[n] = result 
    return result
  }
  return factorial
}

function memoFunction(cb) {
  const cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) {
      console.log(`returning result ${n} from cache`)
      return cache[n]
    } else {
      let result = cb(n)
      console.log(`saving result ${n} to cache`)
      cache[n] = result
      return result
    }
  }
}

const memofactorial = memoFunction(factorial)

console.log(memofactorial(5))
console.log(memofactorial(5))