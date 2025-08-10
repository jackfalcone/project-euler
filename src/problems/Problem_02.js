import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_02 = ({ initialMaxNum }) => {
    const [maxNum, setMaxNum] = useState(initialMaxNum);
    const [fibValues, setFibValues] = useState([]);
    const [evenValues, setEvenValues] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (maxNum <= 0 || !Number.isInteger(maxNum)) return;
        
        const fibArr = [1, 2];
        let nextFib = 0;
        while (nextFib < maxNum) {
            nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
            fibArr.push(nextFib);
        }
        setFibValues(fibArr);
    }, [maxNum])

    useEffect(() => {
        if (fibValues.length > 0) {
            const evenValues = fibValues.filter(value => value % 2 === 0);
            setEvenValues(evenValues.reduce((acc, value) => acc + value, 0));
        }
    }, [fibValues])

    return (
        <>
            <UserInput label="Max Number" inputType="number" value={maxNum} onChange={(e) => setMaxNum((parseInt(e.target.value) <= 1000000000) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={evenValues} />
        </>
    )
}

export default Problem_02;