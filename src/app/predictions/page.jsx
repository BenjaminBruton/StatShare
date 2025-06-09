"use client";

import Header from "../components/Header";
import PredictionPolls from "../components/PredictionPolls";
import Footer from "../components/Footer";

const texasPoll = {
  question: "Which Texas MLS team will perform best this weekend?",
  options: ["FC Dallas", "Austin", "Houston Dynamo"],
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
