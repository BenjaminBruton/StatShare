"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsDashboard({ data }) {
  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-12">
      <h2 className="text-3xl font-bold text-white">MLS Analytics Dashboard</h2>

      {/* Goals For vs Goals Against */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">
          Goals For vs Goals Against
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="team" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" />
            <Tooltip />
            <Legend />
            <Bar dataKey="goalsFor" fill="#3b82f6" name="Goals For" />
            <Bar dataKey="goalsAgainst" fill="#ef4444" name="Goals Against" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Wins vs Losses */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">
          Wins vs Losses
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="team" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" />
            <Tooltip />
            <Legend />
            <Bar dataKey="wins" fill="#22c55e" name="Wins" />
            <Bar dataKey="losses" fill="#f97316" name="Losses" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Average Goals per Match */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">
          Average Goals per Match
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="team" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="avgGoalsPerMatch"
              fill="#8b5cf6"
              name="Avg Goals/Match"
            />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
