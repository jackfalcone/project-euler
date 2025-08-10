import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_07 = ({ initialNth }) => {
    const [nth, setNth] = useState(initialNth);
    const [nthPrime, setNthPrime] = useState(0);

    // Get upper limit for sieve of Eratosthenes
    const getN = n =>  (n < 6) ? 15 : Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)))) + 10;

    // To interpret sieve index, use (2 * index) + 1
    const getSieve = N => new Uint8Array(Math.floor((N - 1) / 2)).fill(1);

    // Sieve of Eratosthenes
    const sievePrimes = (N, sieve) => {
        const limit = Math.floor((Math.sqrt(N) - 3) / 2);

        for (let i = 0; i <= limit; i++) {
            if (sieve[i]) {
                let p = 2 * i + 3;
                for (let multiple = (p * p -3) >> 1; multiple < sieve.length; multiple += p) {
                    sieve[multiple] = false;
                }
            }
        }

        return sieve;
    }

    const findNthPrim = (sieve, n) => {
        // Count primes
        let count = 1; //
        for (let i = 0; i < sieve.length; i++) {
            if (sieve[i]) {
                count++;
                if (count === n) return 2 * i + 3;
            }
        }
    }

    useEffect(() => {
        // Check if prop is Int and positive
        if (nth <= 0 || !Number.isInteger(nth)) return;

        const N = getN(nth);
        const sieve = getSieve(N);
        const primes = sievePrimes(N, sieve);
        
        setNthPrime(findNthPrim(primes, nth));
    }, [nth])

    return (
        <>
            <UserInput label="Nth prime" inputType="number" value={nth} onChange={(e) => setNth(parseInt(e.target.value))} min={1} />
            <Solution solutionValue={nthPrime} />
        </>
    )
}

export default Problem_07;