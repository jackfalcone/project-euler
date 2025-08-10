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

        <a 
          href="https://github.com/jackfalcone/project-euler" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mx-auto mt-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Explore my code
        </a>

        <a 
          href="https://projecteuler.net/archives" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mx-auto mt-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          Project Euler
        </a>
        
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
