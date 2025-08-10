import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";
import { getNthPrime } from "../helper/primeSieve";

const Problem_07 = ({ initialNth }) => {
    const [nth, setNth] = useState(initialNth);
    const [nthPrime, setNthPrime] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (nth <= 0 || !Number.isInteger(nth)) return;
        
        setNthPrime(getNthPrime(nth));
    }, [nth])

    return (
        <>
            <UserInput label="Nth prime" inputType="number" value={nth} onChange={(e) => setNth((parseInt(e.target.value) <= 1000000) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={nthPrime} />
        </>
    )
}

export default Problem_07;