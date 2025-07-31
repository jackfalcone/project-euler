const Problem = ({ number, title, description }) => {
  return (
    <div className="bg-black rounded-lg p-4 shadow-lg">
      <h2 className="mt-8 text-3xl text-blue-400 font-Audiowide drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">{number}. {title}</h2>
      <p className="mt-2 text-base text-justify text-lime-200 font-Audiowide">{description}</p>
    </div>
  );
};

export default Problem;