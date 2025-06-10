"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function PredictionPolls({ poll }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState(poll.options.map(() => 0));
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    async function fetchVotes() {
      const { data, error } = await supabase
        .from("Predictions")
        .select("team_id");

      if (!error && data) {
        const counts = poll.options.map(
          (opt) => data.filter((vote) => vote.team_id === opt.team_id).length
        );
        setVotes(counts);
      }
    }

    fetchVotes();
  }, []);

  const handleVote = async () => {
    if (selectedOption === null || voted) return;

    const { user } = (await supabase.auth.getUser()).data;
    const selected = poll.options[selectedOption];

    const { error } = await supabase.from("Predictions").insert([
      {
        user_id: user.id,
        match_id: poll.match_id,
        team_id: selected.team_id,
        prediction: selected.name,
      },
    ]);

    if (!error) {
      const updatedVotes = [...votes];
      updatedVotes[selectedOption]++;
      setVotes(updatedVotes);
      setVoted(true);
    } else {
      console.error("Insert error:", error.message);
    }
  };

  const totalVotes = votes.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-white mb-4">{poll.question}</h2>

      <ul className="space-y-3">
        {poll.options.map((opt, idx) => (
          <li
            key={idx}
            className={`p-3 rounded cursor-pointer ${
              selectedOption === idx ? "bg-blue-500" : "bg-gray-700 text-white"
            }`}
            onClick={() => !voted && setSelectedOption(idx)}
          >
            {opt.name}
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
          {poll.options.map((opt, idx) => (
            <div key={idx} className="text-white">
              {opt.name}: {((votes[idx] / totalVotes) * 100).toFixed(1) || 0}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
