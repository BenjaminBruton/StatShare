// const teamColors = {
//   "FC Dallas": "bg-red-600",
//   "Austin FC": "bg-green-600",
//   "Houston Dynamo FC": "bg-blue-600",
// };

function getMatchColor(match) {
  const home = match.teams.home.name.toLowerCase();
  const away = match.teams.away.name.toLowerCase();

  const isDallas = home.includes("dallas") || away.includes("dallas");
  const isAustin = home.includes("austin") || away.includes("austin");
  const isHouston = home.includes("houston") || away.includes("houston");

  const texasTeams = [isDallas, isAustin, isHouston].filter(Boolean).length;

  if (texasTeams > 1) return "bg-gray-700 text-white"; // Two Texas teams
  if (isDallas) return "bg-red-700 text-white";
  if (isAustin) return "bg-green-600 text-white";
  if (isHouston) return "bg-orange-500 text-white";

  return "bg-gray-800 text-white"; // Default
}

export default function LiveScores({ matches = [] }) {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-3xl text-white font-bold mb-6">
        MLS Texas Team Scores
      </h2>
      <ul className="space-y-4">
        {matches.slice(0, 50).map((match) => {
          const bgColor = getMatchColor(match); // ✅ use the helper function here

          return (
            <li
              key={match.fixture.id}
              className={`p-4 ${bgColor} rounded-lg shadow`}
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
