import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_14 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
    const [solutionValue, setSolutionValue] = useState(0);

    const isEven = n => n % 2 === 0;

    const seqEven = n => n / 2;
    const seqOdd = n => 3 * n + 1;

    const getLongestChain = maxNum => {
        const cache = new Uint32Array(maxNum + 1);
        cache[1] = 1;

        let longestNumber = 1;
        let longestLength = 1;

        for (let start = 2; start <= maxNum; start++) {
            let n = start;
            const sequence = [];

            // Traverse chain until known number is reached
            while (n > maxNum || cache[n] === 0) {
                sequence.push(n);
                n = isEven(n) ? seqEven(n) : seqOdd(n);
            }

            let length = n <= maxNum ? cache[n] : 0;

            for (let i = sequence.length - 1; i >= 0; i--) {
                length++;
                if (sequence[i] <= maxNum) {
                    cache[sequence[i]] = length;
                }
            }

            if (cache[start] > longestLength) {
                longestLength = cache[start];
                longestNumber = start;
            }
        }

        return { number: longestNumber, nSeq: longestLength };
    }

    useEffect(() => {
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;
    
        setSolutionValue(getLongestChain(maxNum).number);
    }, [maxNum])

    return (
        <>
            <UserInput label="Max Number" inputType="number" value={maxNum} onChange={(e) => setMaxNum(parseInt(e.target.value) <= 1000000 ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={solutionValue} />
        </>
    )
}

export default Problem_14;