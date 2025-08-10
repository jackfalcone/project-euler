import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_01 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
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
    }, [maxNum])

    return (
        <>
            <UserInput label="Max Number" inputType="number" value={maxNum} onChange={(e) => setMaxNum((parseInt(e.target.value) <= 1000000) ? parseInt(e.target.value) : '')} min={1} />    
            <Solution solutionValue={sum} />
        </>
    )
}

export default Problem_01;