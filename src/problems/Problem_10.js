import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import { getPrimesUpTo } from "../helper/primeSieve";
import UserInput from "../components/UserInput";

const Problem_10 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;
        
        const primes = getPrimesUpTo(maxNum);
        const sum = primes.reduce((acc, cur) => acc + cur, 0);

        setSum(sum);
    }, [maxNum])

    return (
        <>
            <UserInput label="Max number" inputType="number" value={maxNum} onChange={(e) => setMaxNum((parseInt(e.target.value) <= 1000000000) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={sum} />
        </>
    )
}

export default Problem_10;