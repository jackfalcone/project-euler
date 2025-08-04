import { useState, useEffect } from "react";
import Solution from "../components/Solution";

const Problem_03 = ({ num }) => {
    const [number, setNumber] = useState(0);
    const [primeFactors, setPrimeFactors] = useState([]);
    const [largestPrimeFactor, setLargestPrimeFactor] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (Number.isInteger(num) && num > 0) {
        setNumber(num);
    } else {
        setNumber(0);
    }
    }, [num]);

    useEffect(() => {
        if (number === 0) return;

        let n = number;
        const primeFactorsArr = [];

        // Handle 2 separately
        while (n % 2 === 0) {
            primeFactorsArr.push(2);
            n /= 2;
        }

        // Handle odd numbers
        let f = 3;
        while (f * f <= n) {
            while (n % f === 0) {
                primeFactorsArr.push(f);
                n /= f;
            }
            f += 2;
        }

        // If anything remains, it's a prime
        if (n > 1) {
            primeFactorsArr.push(n)
        }

        setPrimeFactors(primeFactorsArr);
    }, [number])

    useEffect(() => {
        if (primeFactors.length > 0) {
            // Get and set highest prime factor
            setLargestPrimeFactor(Math.max(...primeFactors));
        }
    }, [primeFactors])

    return (
        <>
            <Solution solutionValue={largestPrimeFactor} />
        </>
    )
}

export default Problem_03;