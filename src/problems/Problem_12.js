import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_12 = ({ initialDivisors }) => {
    const [divisors, setDivisors] = useState(initialDivisors);
    const [solutionValue, setSolutionValue] = useState(0);

    const getNthTriangularNumber = n => n * (n + 1) / 2;

    const getDivisors = n => {
        let divisors = 0;
        const limit = Math.floor(Math.sqrt(n));

        for (let i = 1; i <= limit; i++) {
            if (n % i === 0) {
                divisors += 2;
            }
        }

        if (limit * limit === n) {
            divisors--;
        }

        return divisors;
    }
   
    useEffect(() => {
        if (divisors) {
            let currentDivisors = 0;
            let nth = 1;
            let currentTriangleNumber = 0;

            while (currentDivisors <= divisors) {
                if (nth % 2 === 0) {
                    currentDivisors = getDivisors(nth / 2) * getDivisors(nth + 1);
                } else {
                    currentDivisors = getDivisors(nth) * getDivisors((nth + 1) / 2);
                }

                currentTriangleNumber = getNthTriangularNumber(nth);
                
                nth++;
            }

            setSolutionValue(currentTriangleNumber);
        }
    }, [divisors])

    return (
        <>
            <UserInput label="Divisors" inputType="number" value={divisors} onChange={(e) => setDivisors(parseInt(e.target.value) <= 999 ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={solutionValue} />
        </>
    )
}

export default Problem_12;