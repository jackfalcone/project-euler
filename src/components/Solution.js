const Solution = ({ solutionValue }) => (
    <div className="flex flex-row items-start justify-center max-w-96 mx-auto">
        <p className="text-white text-lg font-Audiowide">Solution:</p>
        <span className=" text-white text-lg ml-3 font-Audiowide break-words">
            {solutionValue ? solutionValue : "No solution yet"}
        </span>
    </div>
)

export default Solution;