"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import Footer from "../components/Footer";

const texasTeams = ["FC Dallas", "Austin", "Houston Dynamo"];

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    fetch("/api/fetch-mls")
      .then((res) => res.json())
      .then((data) => {
        // Initialize all Texas teams with default values
        const teams = {};
        texasTeams.forEach((team) => {
          teams[team] = {
            team: team,
            goalsFor: 0,
            goalsAgainst: 0,
            wins: 0,
            losses: 0,
            matches: 0,
          };
        });

        // Accumulate stats from available matches
        data.response.forEach((match) => {
          const home = match.teams.home.name;
          const away = match.teams.away.name;
          const homeGoals = match.goals.home;
          const awayGoals = match.goals.away;

          // Update home team stats if it's a Texas team
          if (texasTeams.includes(home)) {
            teams[home].goalsFor += homeGoals;
            teams[home].goalsAgainst += awayGoals;
            teams[home].matches += 1;

            if (homeGoals > awayGoals) teams[home].wins += 1;
            else if (homeGoals < awayGoals) teams[home].losses += 1;
          }

          // Update away team stats if it's a Texas team
          if (texasTeams.includes(away)) {
            teams[away].goalsFor += awayGoals;
            teams[away].goalsAgainst += homeGoals;
            teams[away].matches += 1;

            if (awayGoals > homeGoals) teams[away].wins += 1;
            else if (awayGoals < homeGoals) teams[away].losses += 1;
          }
        });

        // Compute average goals per match
        Object.values(teams).forEach((team) => {
          team.avgGoalsPerMatch = team.matches
            ? parseFloat((team.goalsFor / team.matches).toFixed(2))
            : 0;
        });

        setAnalyticsData(Object.values(teams));
      })
      .catch((err) => console.error("Error fetching analytics data:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnalyticsDashboard data={analyticsData} />
      <Footer />
    </div>
  );
}
