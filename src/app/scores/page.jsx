"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import LiveScores from "../components/LiveScores";
import Footer from "../components/Footer";

const texasTeams = ["FC Dallas", "Austin", "Houston Dynamo"];

export default function ScoresPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("/api/fetch-mls")
      .then((res) => res.json())
      .then((data) => {
        const filteredMatches = data.response.filter(
          (match) =>
            texasTeams.includes(match.teams.home.name) ||
            texasTeams.includes(match.teams.away.name)
        );
        setMatches(filteredMatches);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LiveScores matches={matches} />
      <Footer />
    </div>
  );
}
