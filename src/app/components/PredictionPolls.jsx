"use client";
import { useState } from "react";

export default function PredictionPolls({ poll }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState(poll.options.map(() => 0));
  const [voted, setVoted] = useState(false);

  const totalVotes = votes.reduce((acc, curr) => acc + curr, 0);

  const handleVote = () => {
    if (selectedOption !== null && !voted) {
      const updatedVotes = [...votes];
      updatedVotes[selectedOption]++;
      setVotes(updatedVotes);
      setVoted(true);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-white mb-4">{poll.question}</h2>

      <ul className="space-y-3">
        {poll.options.map((option, idx) => (
          <li
            key={idx}
            className={`p-3 rounded cursor-pointer ${
              selectedOption === idx ? "bg-blue-500" : "bg-gray-700 text-white"
            }`}
            onClick={() => !voted && setSelectedOption(idx)}
          >
            {option}
          </li>
        ))}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        onClick={handleVote}
        disabled={selectedOption === null || voted}
      >
        {voted ? "Thanks for voting!" : "Submit Vote"}
      </button>

      {voted && (
        <div className="mt-6 space-y-2">
          <h3 className="text-xl text-white font-semibold">Results:</h3>
          {poll.options.map((option, idx) => (
            <div key={idx} className="text-white">
              {option}: {((votes[idx] / totalVotes) * 100).toFixed(1) || 0}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
