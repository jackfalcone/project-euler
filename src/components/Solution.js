const Solution = ({ solutionValue }) => (
    <div className="flex flex-row items-center justify-center">
        <p className="text-white text-lg font-Audiowide">Solution:</p>
        <span className=" text-white text-lg ml-3 font-Audiowide">
            {solutionValue}
        </span>
    </div>
)

export default Solution;