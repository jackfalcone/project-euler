import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_12 = ({ initialDivisors }) => {
    const [divisors, setDivisors] = useState(initialDivisors);

    return (
        <>
            <Solution solutionValue={''} />
        </>
    )
}

export default Problem_12;