import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_03 = ({ initialNum }) => {
    const [num, setNum] = useState(initialNum);
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
            <UserInput label="Number" inputType="number" value={num} onChange={(e) => setNum((parseInt(e.target.value) <= 1000000000) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={largestPrimeFactor} />
        </>
    )
}

export default Problem_03;