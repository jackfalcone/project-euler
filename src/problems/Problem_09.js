import { useState, useEffect } from "react";
import Solution from "../components/Solution";
import UserInput from "../components/UserInput";

const Problem_09 = ({ initialSum }) => {
    const [sum, setSum] = useState(initialSum);
    const [triplet, setTriplet] = useState({});
    const [solutionValue, setSolutionValue] = useState('');

    // 2m(m+n)=sum
    const findPythagoreanTriplet = S => {
        const target = S / 2;

        for (let m = 1; m <= target; m++) {
            if (target % m === 0) { // m is a factor of target
                const mn = target / m;
                const n = mn - m;

                if (n > 0 && m > n) {
                    // Calculate triplet
                    const a = m * m - n * n;
                    const b = 2 * m * n;
                    const c = m * m + n * n;

                    if (a + b + c === S) {
                        const sorted = [a, b, c].sort((x, y) => x - y);
                        return {a: sorted[0], b: sorted[1], c: sorted[2]};
                    }
                }
            }
        }
    }

    useEffect(() => {
        // Check if prop is Int and positive
        if (sum <= 0 || !Number.isInteger(sum)) return;

        const triplet = findPythagoreanTriplet(sum);
        
        if (triplet) setTriplet(triplet);
        else setSolutionValue(`No Pythagorean triplet found for sum = ${sum}.`);
    }, [sum])

    useEffect(() => {
        if (Object.keys(triplet).length > 0) {
            const {a, b, c} = triplet;
            const product = a * b * c;
            const solutionString = `a=${a} < b=${b} < c=${c} | ${Math.pow(a, 2)} + ${Math.pow(b, 2)} = ${Math.pow(c, 2)} | product (abc) is ${product}`;
            setSolutionValue(solutionString);
        }
    }, [triplet])

    return (
        <>
            <UserInput label="Sum (S)" inputType="number" value={sum} onChange={(e) => setSum(parseInt(e.target.value))} min={1} />
            <Solution solutionValue={solutionValue} />
        </>
    )
}

export default Problem_09;