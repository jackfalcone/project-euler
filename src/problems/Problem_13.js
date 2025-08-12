import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_13 = ({ initialDigits, numbersStrArr }) => {
    const [digits, setDigits] = useState(initialDigits);
    const [sum, setSum] = useState(0);

    // We only calculate the necessary digits to be more efficient
    const getSafeKeepDigits = (digits, nNumbers) => digits + Math.ceil(Math.log10(nNumbers));

    useEffect(() => {
        if (digits <= 0 || !Number.isInteger(digits)) return;

        let sum = 0n;
        const keepLimit = getSafeKeepDigits(digits, numbersStrArr.length);

        /* global BigInt */
        for (const num of numbersStrArr) {
            const keepDigits = num.slice(0, keepLimit);
            sum += BigInt(keepDigits);
        }

        setSum(sum.toString().slice(0, digits));
    }, [digits, numbersStrArr])

    return (
        <>
            <UserInput label="Digits" inputType="number" value={digits} onChange={(e) => setDigits(parseInt(e.target.value) <= 50 ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={sum} />
        </>
    )
}

export default Problem_13;