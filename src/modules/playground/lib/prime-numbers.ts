type TGetLCM = (n1: number, n2: number) => number

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

export const getLCM: TGetLCM = (num1: number, num2: number) => {
  const nextPrime = getNextPrime()
  const factors = []

  let quotient1 = num1
  let quotient2 = num2

  while (quotient1 !== 1 || quotient2 !== 1) {
    const factorCandidate = nextPrime.next().value

    while (
      quotient1 % factorCandidate === 0 ||
      quotient2 % factorCandidate === 0
    ) {
      factors.push(factorCandidate)

      if (quotient1 % factorCandidate === 0) {
        quotient1 /= factorCandidate
      }

      if (quotient2 % factorCandidate === 0) {
        quotient2 /= factorCandidate
      }
    }
  }

  return factors.reduce<number>((pv, cv) => pv * cv, 1)
}
