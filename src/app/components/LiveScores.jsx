const teamColors = {
  "FC Dallas": "bg-red-600",
  "Austin FC": "bg-green-600",
  "Houston Dynamo FC": "bg-blue-600",
};

export default function LiveScores({ matches = [] }) {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-3xl text-white font-bold mb-6">
        MLS Texas Team Scores
      </h2>
      <ul className="space-y-4">
        {matches.slice(0, 50).map((match, index) => {
          const team =
            ["FC Dallas", "Austin", "Houston Dynamo"].find(
              (t) => t === match.teams.home.name || t === match.teams.away.name
            ) || "default";

          const bgColor = teamColors[team] || "bg-gray-700";

          return (
            <li
              key={match.fixture.id}
              className={`p-4 ${bgColor} text-white rounded-lg shadow`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{match.teams.home.name}</span>
                <span className="text-xl font-bold">
                  {match.goals.home} - {match.goals.away}
                </span>
                <span className="font-semibold">{match.teams.away.name}</span>
              </div>
              <p className="text-sm opacity-80 mt-1">
                {new Date(match.fixture.date).toLocaleString()}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
