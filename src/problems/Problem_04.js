import { useState, useEffect } from "react";
import Solution from "../components/Solution"

const isPalindrome = (num) => {
  const str = num.toString();
  return str === str.split('').reverse().join('');
};

const Problem_04 = ({ digits }) => {
    const [largestPalindrome, setLargestPalindrome] = useState(0);

    useEffect(() => {
        // Check if prop is Int and positive
        if (digits <= 0 || !Number.isInteger(digits)) return;

        const min = 10 ** (digits - 1);
        const max = 10 ** digits - 1;

        let maxPalindrome = 0;

        for (let i = max; i >= min; i--) {
            for (let j = i; j >= min; j--) {
                const product = i * j;
                if (product <= maxPalindrome) break; // No need to check smaller products
                if (isPalindrome(product)) {
                maxPalindrome = product;
                }
            }
        }

        setLargestPalindrome(maxPalindrome);
    }, [digits])

    return (
        <>
            <Solution solutionValue={largestPalindrome} />
        </>
    )
}

export default Problem_04;