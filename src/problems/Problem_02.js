import { useState, useEffect } from "react";
import Solution from "../components/Solution"

const Problem_02 = ({ maxNum }) => {
    const [fibValues, setFibValues] = useState([]);
    const [evenValues, setEvenValues] = useState(0);

    useEffect(() => {
        console.log(maxNum);
        if (maxNum <= 0) return;
        const fibArr = [1, 2];
        let nextFib = 0;
        while (nextFib < maxNum) {
            nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
            fibArr.push(nextFib);
        }
        setFibValues(fibArr);
    }, [])

    useEffect(() => {
        if (fibValues.length > 0) {
            const evenValues = fibValues.filter(value => value % 2 === 0);
            setEvenValues(evenValues.reduce((acc, value) => acc + value, 0));
        }
    }, [fibValues])

    return (
        <>
            <Solution solutionValue={evenValues}/>
        </>
    )
}

export default Problem_02;