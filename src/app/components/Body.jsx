import Link from "next/link";

export default function Body() {
  return (
    <main className="container mx-auto py-10 px-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/scores">
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow cursor-pointer hover:bg-blue-600 transition">
            <h2 className="text-2xl font-bold">Live Scores</h2>
            <p className="mt-2">Check real-time MLS game scores and updates.</p>
          </div>
        </Link>

        <Link href="/analytics">
          <div className="p-6 bg-green-500 text-white rounded-lg shadow cursor-pointer hover:bg-green-600 transition">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <p className="mt-2">Explore detailed team and player analytics.</p>
          </div>
        </Link>

        <Link href="/predictions">
          <div className="p-6 bg-purple-500 text-white rounded-lg shadow cursor-pointer hover:bg-purple-600 transition">
            <h2 className="text-2xl font-bold">Fan Predictions</h2>
            <p className="mt-2">Join fan polls and predictions.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
