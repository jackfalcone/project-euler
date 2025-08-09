import { useState, useEffect } from "react";
import Solution from "../components/Solution";

const Problem_08 = ({ digits, numStr }) => {
    const [number, setNumber] = useState(0);

    /* global BigInt */
    useEffect(() => {
        if (numStr) {
            setNumber(BigInt(numStr));
        }
    }, [numStr])

    return (
        <>
            <Solution solutionValue={''} />
        </>
    )
}

export default Problem_08;