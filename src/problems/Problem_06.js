import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_06 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
    const [difference, setDifference] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;

        let sumSquares = 0;
        let sum = 0;
        for (let i = 0; i <= maxNum; i++) {
            sumSquares += Math.pow(i, 2);
            sum += i;
        }

        const sumSquare = Math.pow(sum, 2);

        setDifference((sumSquare - sumSquares) ? sumSquare - sumSquares : "No difference");
    }, [maxNum])

    return (
        <>
            <UserInput label="Number" inputType="number" value={maxNum} onChange={(e) => setMaxNum((parseInt(e.target.value) <= 1000) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={difference} />
        </>
    )
}

export default Problem_06;