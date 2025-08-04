import { useState, useEffect } from "react";
import Solution from "../components/Solution";

const Problem_01 = ({ maxNum }) => {
    const [sum, setSum] = useState(0);

    const getSum = maxNum => {
        let sum = 0;
        for (let i = 0; i < maxNum; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        setSum(sum);
    };

    useEffect(() => {
        // Check if prop is Int and positive
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;

        getSum(maxNum);
    }, [])

    return (
        <>
            <Solution solutionValue={sum} />
        </>
    )
}

export default Problem_01;