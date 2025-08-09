import { useState, useEffect } from "react";
import Solution from "../components/Solution";

const Problem_08 = ({ digits, numStr }) => {
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

        setMaxProduct(currentMaxProduct);
    }, [number, digits])

    return (
        <>
            <Solution solutionValue={maxProduct} />
        </>
    )
}

export default Problem_08;