const UserInput = ({ label, inputType, value, onChange, min }) => (
    <label className="block mb-4 max-w-[85%] sm:max-w-96 mx-auto">
        <span className="block text-sm font-medium text-lime-200 mb-1 font-Audiowide drop-shadow-[0_0_10px_rgba(163,230,53,0.7)]">
            {label}
        </span>
        <input
            type={inputType}
            value={value}
            onChange={onChange}
            min={min}
            className="w-full px-3 py-1.5 border border-blue-400 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lime-200 text-lg font-Audiowide drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
        />
    </label>
);

export default UserInput;