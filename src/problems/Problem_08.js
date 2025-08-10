import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_08 = ({ initialDigits, numStr }) => {
    const [digits, setDigits] = useState(initialDigits);
    const [number, setNumber] = useState([]);
    const [maxProduct, setMaxProduct] = useState(0);

    useEffect(() => {
        if (numStr) {
            setNumber(numStr.split('').map(digit => Number(digit)));
        }
    }, [numStr])

    useEffect(() => {
        const numberArr = [...number];
        let currentMaxProduct = 0;
        let lastProduct = 0;
        let jumpZero = true;

        if (numberArr.length > 0) {
            for (let i = 0; i <= numberArr.length - digits; i++) {
                const currentWindow = numberArr.slice(i, i + digits);
                if (!currentWindow.includes(0)) {
                    const product = jumpZero 
                        ? currentWindow.reduce((acc, curr) => acc * curr, 1) 
                        : lastProduct / numberArr[i - 1] * currentWindow[currentWindow.length - 1];

                    lastProduct = product;

                    if (product > currentMaxProduct) {
                        currentMaxProduct = product;
                    }

                    jumpZero = false;
                } else {
                    jumpZero = true;
                }
            }
        }

        setMaxProduct(currentMaxProduct ? currentMaxProduct : 'No solution found');
    }, [number, digits])

    return (
        <>
            <UserInput label="Digits" inputType="number" value={digits} onChange={(e) => setDigits(parseInt(e.target.value))} min={1} />
            <Solution solutionValue={maxProduct} />
        </>
    )
}

export default Problem_08;