import { useState, useEffect } from "react";
import Solution from "../components/Solution";

const Problem_06 = ({ maxNum }) => {
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

        setDifference(sumSquare - sumSquares);
    }, [maxNum])

    return (
        <>
            <Solution solutionValue={difference} />
        </>
    )
}

export default Problem_06;