import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_05 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
    const [solutionValue, setSolutionValue] = useState(0);

    // Greatest common divisor
    const getGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        } 
        return a;
    }

    // Least common multiple
    const getLCM = (a, b) => (a * b) / getGCD(a, b);

    useEffect(() => {
        // Check if prop is Int and positive
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;

        // Find the least common multiple of all numbers from 1 to maxNum
        let currentLCM = 1;
        for (let i = 1; i <= maxNum; i++) {
            const lcm = getLCM(currentLCM, i);
            currentLCM = lcm;
        }
        
        setSolutionValue(currentLCM);
    }, [maxNum])

    return (
        <>
            <UserInput inputType="number" label="Number" value={maxNum} onChange={(e) => setMaxNum((parseInt(e.target.value) <= 50) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={solutionValue} />
        </>
    )
}

export default Problem_05;