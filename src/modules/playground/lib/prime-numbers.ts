export function* getNextPrime(): IterableIterator<number> {
  const primeNumbers = []
  let candidate = 2

  while (true) {
    if (candidate <= 3) {
      primeNumbers.push(candidate)
      yield candidate
    }

    let isPrime = true
    for (let i = 0; i < primeNumbers.length; i++) {
      const divisor = primeNumbers[i]
      if (candidate % divisor === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      primeNumbers.push(candidate)
      yield candidate
    }

    candidate += 1
  }
}
