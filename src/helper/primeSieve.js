const createSieve = max => new Uint8Array(Math.floor((max - 1) / 2)).fill(1);

const runSieve = (sieve, max) => {
    const limit = Math.floor((Math.sqrt(max) - 3) / 2);
    for (let i = 0; i <= limit; i++) {
        if (sieve[i]) {
            const p = 2 * i + 3;
            for (let multiple = (p * p -3) >> 1; multiple < sieve.length; multiple += p) {
                sieve[multiple] = 0;
            }
        }
    }
    
    return sieve;
};

const sieveToPrimes = sieve => {
    const primes = [2];
    for (let i = 0; i < sieve.length; i++) {
        if (sieve[i]) primes.push(2 * i + 3);
    } 
    
    return primes;
}

const getNthPrime = n => {
    const estimate = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10; // Upper limit
    const sieve = createSieve(estimate);
    runSieve(sieve, estimate);
    
    return sieveToPrimes(sieve)[n - 1];
}

const getPrimesUpTo = max => {
    const sieve = createSieve(max);
    runSieve(sieve, max);

    return sieveToPrimes(sieve);
}

export { getNthPrime, getPrimesUpTo };