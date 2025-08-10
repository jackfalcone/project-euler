import { useState } from "react";
import Problem from "./components/Problem";
import problems from "./problems/problems";

function App() {
  const [newestFirst, setNewestFirst] = useState(true);

  const sortedProblems = [...problems].sort((a, b) => newestFirst ? b.number - a.number : a.number - b.number);
  
  return (
    <div className="App pb-32 w-screen min-h-screen bg-black mx-auto">
      <div className="pt-4 mx-auto max-w-[95%] sm:max-w-lg flex flex-col">
        <h1 className="mt-3 mb-4 text-5xl text-green-500 text-center font-Audiowide drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]">
          Project Euler
        </h1>

        <div className="mt-12 mx-auto flex items-center gap-4 text-white font-Audiowide">
          <span className={newestFirst ? "opacity-50" : "font-bold text-green-400"}>
            Oldest First
          </span>
          <button
            onClick={() => setNewestFirst(!newestFirst)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 ${
              newestFirst ? "bg-green-500" : "bg-gray-600"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                newestFirst ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={newestFirst ? "font-bold text-green-400" : "opacity-50"}>
            Newest First
          </span>
        </div>

        {sortedProblems.map((problem) => (
          <div key={problem.number}>
            <Problem
              number={problem.number}
              title={problem.title}
              description={problem.description}
            />
            {problem.component ? <problem.component {...problem.props} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
