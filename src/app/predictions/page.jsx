"use client";

import Header from "../components/Header";
import PredictionPolls from "../components/PredictionPolls";
import Footer from "../components/Footer";

// const texasPoll = {
//   question: "Which Texas MLS team will perform best this weekend?",
//   options: ["FC Dallas", "Austin", "Houston Dynamo"],
// };

const texasPoll = {
  id: "texas-poll",
  question: "Which Texas MLS team will perform best this weekend?",
  match_id: 20250608, // example match ID
  options: [
    { name: "FC Dallas", team_id: 1597 },
    { name: "Austin", team_id: 16489 },
    { name: "Houston Dynamo", team_id: 1600 },
  ],
};

export default function PredictionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PredictionPolls poll={texasPoll} />
      <Footer />
    </div>
  );
}
