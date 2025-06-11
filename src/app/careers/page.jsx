"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

const jobs = [
  {
    title: "Data Analyst",
    location: "Remote",
    type: "Full-Time",
    description:
      "Analyze large datasets to support strategic decision-making and reporting.",
  },
  {
    title: "Data Scientist",
    location: "Austin, TX",
    type: "Full-Time",
    description:
      "Develop machine learning models to extract insights from live match data.",
  },
  {
    title: "DevOps Engineer",
    location: "Dallas, TX",
    type: "Full-Time",
    description:
      "Design and maintain deployment pipelines and monitoring systems for our stat platform.",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Contract",
    description:
      "Build scalable features and data-driven UI for sports analytics dashboards.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-blue-900">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Open Positions</h1>

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-sm mb-1">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-sm mb-3">
                <strong>Type:</strong> {job.type}
              </p>
              <p>{job.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
