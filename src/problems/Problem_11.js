import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_11 = ({ initialDigits, initialGrid }) => {
    const [digits, setDigits] = useState(initialDigits);
    const [grid] = useState(initialGrid);
    const [solutionValue, setSolutionValue] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (digits <= 0 || !Number.isInteger(digits)) return;
        // Check if prop is Array
        if (!Array.isArray(grid)) return;
        // Check if grid is square
        if (grid.length !== grid[0].length) return;
        // Check if grid is all numbers
        if (grid.some(row => row.some(cell => !Number.isInteger(cell)))) return;

        // Find the largest product of 'digits' adjacent numbers in the grid
        let maxProduct = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                // Check right
                if (j + digits <= grid[i].length) {
                    let product = 1;
                    for (let k = 0; k < digits; k++) {
                        product *= grid[i][j + k];
                    }
                    maxProduct = Math.max(maxProduct, product);
                }
                // Check down 
                if (i + digits <= grid.length) {
                    let product = 1;
                    for (let k = 0; k < digits; k++) {
                        product *= grid[i + k][j];
                    }
                    maxProduct = Math.max(maxProduct, product);
                }
                // Check diagonal right
                if (i + digits <= grid.length && j + digits <= grid.length) {
                    let product = 1;
                    for (let k = 0; k < digits; k++) {
                        product *= grid[i + k][j + k];
                    }
                    maxProduct = Math.max(maxProduct, product);
                }
                // Check diagonal left
                if (i + digits <= grid.length && j - digits >= 0) {
                    let product = 1;
                    for (let k = 0; k < digits; k++) {
                        product *= grid[i + k][j - k];
                    }
                    maxProduct = Math.max(maxProduct, product);
                }
            }
        }

        setSolutionValue(maxProduct);
    }, [digits, grid]);

    return (
        <>
            <UserInput label="Digits" inputType="number" value={digits} onChange={(e) => setDigits((parseInt(e.target.value) <= 10) ? parseInt(e.target.value) : '')} min={1} />
            <Solution solutionValue={solutionValue} />
        </>
    )
}

export default Problem_11;